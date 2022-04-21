const router = require("express").Router();
const { User } = require("../models/User");
const UserToken = require("../models/UserToken");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const generateTokens =require ("../utils/generateTokens.js");
const {logInBodyValidation,} =require( "../utils/validationSchema.js");
router.post("/", async (req, res) => {
		try {
			const { error } = logInBodyValidation(req.body);
			if (error)
				return res
					.status(400)
					.json({ error: true, message: error.details[0].message });
	
			const user = await User.findOne({ email: req.body.email });
			if (!user)
				return res
					.status(401)
					.json({ error: true, message: "Invalid email or password" });
	
			const verifiedPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (!verifiedPassword)
				return res
					.status(401)
					.json({ error: true, message: "Invalid email or password" });
	
			const { accessToken, refreshToken } = await generateTokens(user);
	
			res.status(200).json({
				error: false,
				accessToken,
				refreshToken,
				message: "Logged in sucessfully",
			});
		} catch (err) {
			console.log(err);
			res.status(500).json({ error: true, message: "Internal Server Error" });
		}
	});
	

		
		



module.exports = router;
