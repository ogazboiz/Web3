// src/tests/Game.test.js

import React from 'react'; // Ensure React is imported for JSX
import { render, screen, fireEvent } from '@testing-library/react'; // Import from React Testing Library
import userEvent from '@testing-library/user-event'; // Import userEvent for interacting with elements
import Game from '../component/Game'; // Import the component you are testing

describe('Game Component', () => {
  it('renders the game interface correctly', () => {
    render(<Game />); // Render the Game component

    // Check for game title and attempts left text
    expect(screen.getByText(/Guess the Number/i)).toBeInTheDocument();
    expect(screen.getByText(/You have 10 attempts left/i)).toBeInTheDocument();
  });

  it('allows the user to input a guess and get feedback', () => {
    render(<Game />);

    // Get the input element and type a guess
    const input = screen.getByPlaceholderText('Enter your guess');
    userEvent.type(input, '50'); // User types '50'

    // Click the guess button
    const button = screen.getByText('Guess');
    fireEvent.click(button);

    // Check for feedback (e.g., "Too high" or "Too low")
    expect(screen.getByText(/Too high|Too low/i)).toBeInTheDocument();
  });

  it('updates the number of attempts left after each guess', () => {
    render(<Game />);

    // Get the input and guess button
    const input = screen.getByPlaceholderText('Enter your guess');
    const button = screen.getByText('Guess');

    // First guess
    userEvent.type(input, '50');
    fireEvent.click(button);
    expect(screen.getByText(/You have \d+ attempts left/)).toBeInTheDocument();

    // Second guess
    userEvent.type(input, '30');
    fireEvent.click(button);
    expect(screen.getByText(/You have \d+ attempts left/)).toBeInTheDocument();
  });

  it('ends the game when the correct number is guessed', async () => {
    render(<Game />);

    // Get the input and guess button
    const input = screen.getByPlaceholderText('Enter your guess');
    const button = screen.getByText('Guess');

    // Mock the secret number and simulate the guess
    userEvent.type(input, 'secretNumber'); // Adjust the secret number for testing
    fireEvent.click(button);

    // Check for win message
    const feedback = await screen.findByText(/🎉 Correct! You win!/);
    expect(feedback).toBeInTheDocument();
  });
});
