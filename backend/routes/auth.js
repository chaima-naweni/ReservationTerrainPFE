const express = require("express")
const authController = require("../controllers/authController")
const auth = require('./../midlleware/auth')
const {check} = require('express-validator')
const router = express.Router()
router.post('/signup', [
  check("name", "Name atleast should be 3 characters").isLength({min: 3}),
  check("email", "Email should be valid").isEmail(),
  check("password", "Password at least should be 8 characters").isLength({min: 8}),
  //check("password","password mis match").custom((password != password2)),
] ,authController.signup)

router.post('/signin', authController.login)
router.get("/signout", authController.signout)
router.get('/allUser', authController.all);
router.get('/getOneUser/:id', authController.get);
router.put('/UpdateUser/:id', authController.update);
router.delete('/deleteUser/:id', authController.delete);
module.exports = router


