import React from 'react';
import SlotMachine from './components/SlotMachine';
import Leaderboard from './components/Leaderboard';

const App = () => {
  return (
    <div>
      <h1>Slot Machine Game</h1>
      <Leaderboard />
      <SlotMachine />
    </div>
  );
};

export default App;
