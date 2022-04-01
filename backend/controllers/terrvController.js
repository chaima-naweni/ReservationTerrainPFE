const Terrain=require('../models/Terrain')

exports.get=(req,res,next)=>{
    Terrain.find({ville: req.params.ville})
 .then(terrain=>res.status(200).json(terrain))
 .catch(err=>res.status(400).json({error:err.message}));
     
};
