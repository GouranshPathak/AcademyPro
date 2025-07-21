const express = require('express');
const router = express.Router();
const MockTest = require('../models/MockTest'); // Assuming your model is in models/MockTest.js

// POST: Check if username is available
router.post('/check-username', async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username is required.' });
  }

  try {
    const exists = await MockTest.findOne({ username });
    if (exists) {
      return res.status(409).json({ message: 'Username already taken. Please choose another.' });
    }
    res.status(200).json({ message: 'Username available.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
});

// POST: Save user score (enforces unique username)
router.post('/', async (req, res) => {
  const { username, score, subject } = req.body;

  if (!username || typeof score !== 'number' || !subject) {
    return res.status(400).json({ message: 'Username, score, and subject are required.' });
  }

  try {
    const exists = await MockTest.findOne({ username });
    if (exists) {
      return res.status(409).json({ message: 'Username already taken. Please choose another.' });
    }

    const entry = new MockTest({ username, score, subject });
    await entry.save();
    res.status(201).json({ message: 'Score saved successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
});

module.exports = router;
