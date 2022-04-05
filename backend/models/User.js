
const mongoose = require('mongoose');
const crypto = require("crypto");
//const uuidv1 = require("uuid/v1");
const { v1: uuidv1 } = require('uuid');
uuidv1();

//------------ User Schema ------------//
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
 cin:{type: String,
    required: true
  },
  tel:{type: Number,
    required: true
  },
  ville:{type: String,
    required: true
  },
  
  role: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  password2: {
    type: String,
    required: true
  },
  resetLink: {
    type: String,
    default: ''
  },
  salt: String,
}, { timestamps: true }
);
const User = mongoose.model('User', UserSchema);

module.exports = User;