import React, { useState } from 'react';

const Game = () => {
  const [secretNumber, setSecretNumber] = useState(generateNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(10); // Default to "Medium"
  const [maxAttempts, setMaxAttempts] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState('Medium');

  function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    if (!guess || isNaN(guess) || guess < 1 || guess > 100) {
      setFeedback('Please enter a valid number between 1 and 100.');
      return;
    }

    const numericGuess = Number(guess);

    if (numericGuess === secretNumber) {
      setFeedback('🎉 Correct! You win!');
      setGameOver(true);
    } else if (numericGuess > secretNumber) {
      setFeedback('📉 Too high!');
    } else {
      setFeedback('📈 Too low!');
    }

    setAttemptsLeft(attemptsLeft - 1);

    if (attemptsLeft - 1 === 0 && numericGuess !== secretNumber) {
      setFeedback(`💔 You lose! The number was ${secretNumber}.`);
      setGameOver(true);
    }

    setGuess('');
  };

  const resetGame = () => {
    setSecretNumber(generateNumber());
    setGuess('');
    setFeedback('');
    setAttemptsLeft(maxAttempts);
    setGameOver(false);
  };

  const setGameDifficulty = (level) => {
    let attempts;
    switch (level) {
      case 'Easy':
        attempts = 15;
        break;
      case 'Medium':
        attempts = 10;
        break;
      case 'Hard':
        attempts = 5;
        break;
      default:
        attempts = 10;
    }
    setDifficulty(level);
    setMaxAttempts(attempts);
    setAttemptsLeft(attempts);
    resetGame();
  };

  return (
    <div className="mt-8 w-80 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center">Guess the Number</h2>
      <div className="mt-4 flex justify-center space-x-2">
        {['Easy', 'Medium', 'Hard'].map((level) => (
          <button
            key={level}
            onClick={() => setGameDifficulty(level)}
            className={`px-3 py-1 rounded ${
              difficulty === level
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {level}
          </button>
        ))}
      </div>
      {!gameOver ? (
        <>
          <p className="text-gray-600 mt-4">You have {attemptsLeft} attempts left.</p>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="mt-4 w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your guess"
          />
          <button
            onClick={handleGuess}
            className="w-full bg-blue-500 text-white mt-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Guess
          </button>
          <p
            className={`mt-4 text-center text-lg font-medium transition ${
              feedback.includes('🎉') ? 'text-green-500' : 'text-gray-800'
            }`}
          >
            {feedback}
          </p>
        </>
      ) : (
        <button
          onClick={resetGame}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default Game;
