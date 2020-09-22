const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a chat title'],
      unique: [true, 'Please provide an unique chat title'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Cascade delete messages when a chat is deleted
ChatSchema.pre('remove', async function (next) {
  console.log(`Messages being removed from bootcamp ${this._id}`);
  await this.model('Message').deleteMany({ chatId: this._id });
  next();
});

module.exports = mongoose.model('Chat', ChatSchema);
