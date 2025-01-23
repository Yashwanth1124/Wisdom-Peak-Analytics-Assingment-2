const mongoose = require('mongoose');

const InteractionSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  interactionType: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Interaction', InteractionSchema);
