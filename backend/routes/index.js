const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Endpoint to handle a slot machine spin
router.post('/spin', (req, res) => {
  const { userId } = req.body;

  // Logic for simulating a spin
  const spinResult = Math.floor(Math.random() * 100); // random number for simplicity

  // Update user's score (you can expand this logic with actual game rules)
  db.query('INSERT INTO scores (user_id, score) VALUES (?, ?)', [userId, spinResult], (err) => {
    if (err) {
      console.error('Error saving score:', err);
      return res.status(500).send('Error saving score');
    }
    res.status(200).send({ message: 'Spin successful', spinResult });
  });
});

// Endpoint to fetch the leaderboard
router.get('/leaderboard', (req, res) => {
  db.query('SELECT user_id, SUM(score) AS total_score FROM scores GROUP BY user_id ORDER BY total_score DESC LIMIT 10', (err, results) => {
    if (err) {
      console.error('Error fetching leaderboard:', err);
      return res.status(500).send('Error fetching leaderboard');
    }
    res.status(200).json(results);
  });
});

module.exports = router;
