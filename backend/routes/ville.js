const express = require('express');
const router = express.Router();

const tervController=require('../controllers/terrvController')
router.get('/:ville',tervController.get);
module.exports=router;


