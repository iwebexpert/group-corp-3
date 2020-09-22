const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add a firtName'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add a lastName'],
    },
    login: {
      type: String,
      required: [true, 'Please add a login'],
      unique: [true, 'Please add an unique login'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false, // Wont show password when we select user shema
    },
    settings: {
      theme: {
        type: String,
        enum: ['light', 'dark'],
        required: [true, 'Please add a theme'],
      },
      language: {
        type: String,
        enum: ['en', 'ru'],
        required: [true, 'Please add a language'],
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Make fullName field
UserSchema.pre('save', async function (next) {
  this.fullName = `${this.firtName} ${this.lastName}`;
});

module.exports = mongoose.model('User', UserSchema);
