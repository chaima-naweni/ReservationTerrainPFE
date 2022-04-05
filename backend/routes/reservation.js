const express = require('express');
const router = express.Router();
const reservationController=require('../controllers/reservationController')
router.get('/', reservationController.all); 
router.get('/:id', reservationController.get);
router.post('/', reservationController.create);
router.put('/:id', reservationController.update);
router.delete('/:id', reservationController.delete);

//router.get('/profile/:nameTerrain',terrainController.profile);
    
module.exports=router;