const express = require('express');
const router = express.Router();
const terrainController=require('../controllers/terrainsController')
router.get('/AllTerrain', terrainController.all); 
router.get('OneTerrain/:id', terrainController.get);
router.post('/new', terrainController.create);
router.put('UpdateTerrain/:id', terrainController.update);
router.delete('DeleteTerrain/:id', terrainController.delete);

//router.get('/profile/:nameTerrain',terrainController.profile);
    
module.exports=router;