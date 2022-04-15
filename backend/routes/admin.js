const express = require('express');
const router = express.Router();
const adminController=require('../controllers/adminController')
router.get('/allAdmin', adminController.all); 
router.get('/:id', adminController.get);
router.post('/newAdmin', adminController.create);
router.put('/:id', adminController.update);
router.delete('/:id', adminController.delete);

//router.get('/profile/:nameTerrain',terrainController.profile);
    
module.exports=router;