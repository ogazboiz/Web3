import React from 'react';
import Header from './component/Header';
import Game from './component/Game';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-between">
      <Header />

     
      <div className="flex-grow w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-10 py-6 bg-white rounded-lg shadow-md mt-4 sm:mt-8">
        <Game />
      </div>
    </div>
  );
};

export default App;
