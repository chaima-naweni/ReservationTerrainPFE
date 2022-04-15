
const mongoose = require('mongoose');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
//const uuidv1 = require("uuid/v1");
const { v1: uuidv1 } = require('uuid');
uuidv1();

//------------ User Schema ------------//
const adminSchema = new mongoose.Schema({
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
  
  password: {
    type: String,
    required: true
  },

  verified:
   { type: Boolean,
     default: false },
  resetLink: {
    type: String,
    default: ''
  },
  salt: String,
}, { timestamps: true }
);
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;