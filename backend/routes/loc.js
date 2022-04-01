const express = require('express');
const router = express.Router();

const LocController=require('../controllers/locController')
router.get('/:localisation',LocController.get);
module.exports=router;


