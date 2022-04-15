const express = require('express');
const router = express.Router();
const UserController=require('./../controllers/userController')
router.get('/AllUser', UserController.all); 
router.get('/OneUser/:id', UserController.get);
router.put('/UpdateUser/:id', UserController.update);
router.delete('/DeleteUser/:id', UserController.delete);
module.exports=router;

