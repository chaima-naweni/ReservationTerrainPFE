const express = require('express');
const router = express.Router();
const terrainController=require('../controllers/terrainsController')
router.get('/', terrainController.all); 
router.get('/:id', terrainController.get);
router.post('/new', terrainController.create);
router.put('/:id', terrainController.update);
router.delete('/:id', terrainController.delete);

//router.get('/profile/:nameTerrain',terrainController.profile);
    
module.exports=router;