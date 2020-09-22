const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please provide message with text'],
    },
    chatId: {
      type: mongoose.Schema.ObjectId, // Type will be an id of an object in schema
      ref: 'Chat', // Reference to model
      required: [true, 'Please provide message with chatId'],
      virtual: false, // Don't include virtual to object
    },
    userId: {
      type: mongoose.Schema.ObjectId, // Type will be an id of an object in schema
      ref: 'User', // Reference to model
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
