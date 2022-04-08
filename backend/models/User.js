
const mongoose = require('mongoose');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
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
    required: false
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
UserSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};


const User = mongoose.model("User", UserSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Name"),
    cin: Joi.string().required().label("Cin"),
    tel: Joi.number().required().label("tel"),
    ville: Joi.string().required().label("Ville"),
   //role: Joi.string().label("Role"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
