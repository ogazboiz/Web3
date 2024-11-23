import React from 'react';  // Ensure React is imported
import { render, screen, fireEvent } from '@testing-library/react';
import Game from '../component/Game';

// Mock the random number generator for predictable tests
jest.mock('../component/Game', () => {
  const originalModule = jest.requireActual('../component/Game');
  return {
    ...originalModule,
    generateNumber: jest.fn(() => 50), // Mocking the secret number to be 50
  };
});

describe('Game Component', () => {
  beforeEach(() => {
    render(<Game />);
  });

  it('renders the game interface correctly', () => {
    expect(screen.getByText(/Guess the Number/i)).toBeInTheDocument();
  });

  it('allows the user to input a guess and get feedback', () => {
    const input = screen.getByPlaceholderText('Enter your guess');
    fireEvent.change(input, { target: { value: '50' } });
    fireEvent.click(screen.getByText('Guess'));
    expect(screen.getByText(/Too high|Too low/i)).toBeInTheDocument();
  });

  it('updates the number of attempts left', () => {
    const input = screen.getByPlaceholderText('Enter your guess');
    fireEvent.change(input, { target: { value: '50' } });
    fireEvent.click(screen.getByText('Guess'));
    expect(screen.getByText(/You have \d+ attempts left/)).toBeInTheDocument();
  });

  it('ends the game when the correct number is guessed', async () => {
    const input = screen.getByPlaceholderText('Enter your guess');
    fireEvent.change(input, { target: { value: '50' } }); // Simulating the correct guess
    fireEvent.click(screen.getByText('Guess'));
    const feedback = await screen.findByText(/🎉 Correct! You win!/);
    expect(feedback).toBeInTheDocument();
  });
});
