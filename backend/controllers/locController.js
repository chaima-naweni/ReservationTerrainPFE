const Terrain=require('../models/Terrain')

exports.get=(req,res,next)=>{
    Terrain.find({localisation: req.params.localisation})
 .then(terrain=>res.status(200).json(terrain))
 .catch(err=>res.status(400).json({error:err.message}));
     
};
//get terrain bel localisation