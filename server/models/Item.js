const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bucket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bucket',
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  done: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);