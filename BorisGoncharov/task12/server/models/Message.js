const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please provide message with text'],
    },
    chat: {
      type: mongoose.Schema.ObjectId, // Type will be an id of an object in schema
      ref: 'Chat', // Reference to model
      required: [true, 'Please provide message with chatId'],
      select: false,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Please provide message with userId'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    closable: {
      type: Boolean,
      required: [true, 'Please provide message with closable flag'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model('Message', MessageSchema);
