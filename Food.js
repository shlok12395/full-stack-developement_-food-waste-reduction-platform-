// backend/models/Food.js

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  quantity: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  donor: {
    type: String,
    required: true
  },
  expiry: {
    type: String,
    required: true
  },
  requests: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true      // automatically adds createdAt and updatedAt
});

module.exports = mongoose.model('Food', foodSchema);