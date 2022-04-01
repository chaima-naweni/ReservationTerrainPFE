
const Terrain=require('../models/Terrain')

exports.all=('/',(req,res)=>{
    Terrain.find()
 .then(terrain=>res.status(200).json(terrain))
 .catch(err=>res.status(400).json({error:err.message}));
     
});


exports.create = (req, res, next) => {
    const terrain = new Terrain({
      ...req.body
    });
    terrain.save()
      .then(() => res.status(201).json({ message: 'terrain created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  exports.get=('/:id',(req,res,next)=>{
    Terrain.findOne({_id: req.params.id})
 .then(terrain=>res.status(200).json(terrain))
 .catch(err=>res.status(400).json({error:err.message}));
     
});

  
//exports.profile =('/:nameTerrain' ,(req, res, next) => {
   // Terrain.find({ nameTerrain: req.params.id })
      //.then(terrain => res.status(200).json(terrain))
      //.catch(error => res.status(500).json({ error }));
 // });


  exports.update=('/:id',(req,res,next)=>{
   
    Terrain.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
    .then(terrain=>res.status(200).json({message:'terrain updated Seccesfuly'}))
    .catch(err=>res.status(400).json({error:err.message}));
        
   });
   exports.delete=('/:id',(req,res,next)=>{
      
    Terrain.deleteOne({_id: req.params.id})
       .then(terrain=>res.status(200).json({message:'terrain deleted Seccesfuly'}))
       .catch(err=>res.status(400).json({error:err.message}));
           
      });