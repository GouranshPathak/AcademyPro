const mongoose = require('mongoose');

const mockTestSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('MockTest', mockTestSchema);
