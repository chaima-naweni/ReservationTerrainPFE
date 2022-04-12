
const Competition=require('../models/Competition')

exports.all=('/',(req,res)=>{
    Competition.find()
 .then(competition=>res.status(200).json(competition))
 .catch(err=>res.status(400).json({error:err.message}));
     
});


exports.create = (req, res, next) => {
    const competition = new Competition({
      ...req.body
    });
    competition.save()
      .then(() => res.status(201).json({ message: 'Competition created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  exports.get=('/:id',(req,res,next)=>{
    Competition.findOne({_id: req.params.id})
 .then(competition=>res.status(200).json(competition))
 .catch(err=>res.status(400).json({error:err.message}));
     
});


  exports.update=('/:id',(req,res,next)=>{
   
    Competition.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
    .then(competition=>res.status(200).json({message:'Competition updated Seccesfuly'}))
    .catch(err=>res.status(400).json({error:err.message}));
        
   });
   exports.delete=('/:id',(req,res,next)=>{
      
    Competition.deleteOne({_id: req.params.id})
       .then(competition=>res.status(200).json({message:'Competition deleted Seccesfuly'}))
       .catch(err=>res.status(400).json({error:err.message}));
           
      });