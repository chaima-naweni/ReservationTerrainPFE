const router = require("express").Router();
const { User } = require("../models/User");
const Token = require("../models/token");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
		User.findOne({ email: req.body.email })
			.then(user => {
			  if (!user) {
				return res.status(401).json({ error: 'User not found !' });
			  }
			  bcrypt.compare(req.body.password, user.password)
				.then(valid => {
				  if (!valid) {
					return res.status(401).json({ error: 'Wrong password !' });
				  }
				  res.status(200).json({
					userId: user._id,
					token: jwt.sign(
					  { userId: user._id },
					  'RANDOM_TOKEN_SECRET',
					  { expiresIn: '24h' }
					)
				  });
				})
				.catch(error => res.status(500).json({ error }));
			})
			.catch(error => res.status(500).json({ error }));
	  
				

		
		
	
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
