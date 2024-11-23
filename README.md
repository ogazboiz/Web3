# Guess the Number Game

Welcome to the **Guess the Number** game! This is a simple yet fun game built with **React** where you try to guess a secret number. The game provides feedback after each guess, and you can see how many attempts you have left. The goal is to guess the correct number before running out of attempts!

## Table of Contents

- [Game Overview](#game-overview)
- [How to Play](#how-to-play)
- [Optional Features](#optional-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Testing](#testing)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Game Overview

In this game, the computer selects a secret number between 1 and 100, and you have to guess it. The game will tell you whether your guess is too high, too low, or correct. You have a limited number of attempts to guess the number, and once you’ve guessed it, the game will congratulate you!

### Key Features

- **Guess the Number**: Try to guess the secret number between 1 and 100.
- **Feedback**: After each guess, you will receive feedback like “Too high” or “Too low”.
- **Attempts Left**: The number of attempts remaining is displayed so you know how many guesses you have left.
- **Game End**: If you guess the correct number, the game ends and you are congratulated.
- **Restart Game**: If you wish to play again, there is a "Restart" button that resets the game.

---

## How to Play

1. **Start the Game**: When the game starts, you’ll be shown a message saying "Guess the Number" and the number of attempts you have left.
   
2. **Input Your Guess**: Type your guess (a number between 1 and 100) into the input field and click the **"Guess"** button.

3. **Receive Feedback**: After each guess, the game will tell you if your guess was "Too high" or "Too low". It will also update the number of attempts left.

4. **Guess Correctly**: When you guess the correct number, the game will display a message saying, “🎉 Correct! You win!” and the game ends.

5. **Restart the Game**: If you want to play again, simply click the **"Restart Game"** button to reset the game.

---

## Optional Features

- **Difficulty Levels**: The game can have different difficulty levels, such as **Easy**, **Medium**, and **Hard**, which may affect the number of attempts or the range of numbers available for guessing.
  

---

## Technologies Used

- **React**: JavaScript library for building user interfaces. React powers the game's interface.
- **Jest**: JavaScript testing framework to run the unit tests.
- **React Testing Library**: Library for testing React components to ensure the game functions as expected.
- **user-event**: Simulates user interactions like typing and clicking to test the app.
- **Babel**: A JavaScript compiler that allows JSX and ES6+ syntax in the app.

---

## Installation

To run the **Guess the Number** game on your local machine, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/ogazboiz/Web3.git


### Folder Structure

/guess-the-number
├── /public
│   └── index.html                # Main HTML file for the app
├── /src
│   ├── /component
│   │   └── Game.js               # Main React component for the game
│   ├── /tests
│   │   └── Game.test.js          # Unit tests for the game
│   ├── App.js                    # Main React component that holds the game
│   ├── index.js                  # Entry point for the React app
│   └── App.css                   # Styles for the app
├── package.json
├── README.md                     # Documentation for the app
└── .gitignore                    # Git ignore file to exclude node_modules and other files
