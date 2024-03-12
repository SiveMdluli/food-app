const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt'); // For password hashing

const userSchema = new Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: () => Date.now(), // Auto-populate registration date
  },
  lastLoginDate: {
    type: Date,
  },
});

// Hash password before saving a new user
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
