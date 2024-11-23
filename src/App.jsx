import React from 'react';
import Header from './component/Header';
import Game from './component/Game';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <Game />
    </div>
  );
};

export default App;
