import React, { useState } from 'react';
import axios from 'axios';

const SlotMachine = () => {
  const [spinResult, setSpinResult] = useState(null);
  const [userId, setUserId] = useState(1);  // Example userId, replace with actual login logic

  const handleSpin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/spin', { userId });
      setSpinResult(response.data.spinResult);
    } catch (error) {
      console.error('Error spinning the slot machine:', error);
    }
  };

  return (
    <div>
      <h2>Slot Machine</h2>
      <button onClick={handleSpin}>Spin</button>
      {spinResult !== null && <p>Spin Result: {spinResult}</p>}
    </div>
  );
};

export default SlotMachine;
