const express = require('express');
const router = express.Router();
const competitionController=require('../controllers/competetionController')
router.get('/', competitionController.all); 
router.get('/:id', competitionController.get);
router.post('/', competitionController.create);
router.put('/:id', competitionController.update);
router.delete('/:id', competitionController.delete);

    
module.exports=router;