
const Admin=require('../models/Admin')

exports.all=('/',(req,res)=>{
    Admin.find()
 .then(admin=>res.status(200).json(admin))
 .catch(err=>res.status(400).json({error:err.message}));
     
});


exports.create = (req, res, next) => {
    const admin = new Admin({
      ...req.body
    });
    admin.save()
      .then(() => res.status(201).json({ message: 'admin created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  exports.get=('/:id',(req,res,next)=>{
    Admin.findOne({_id: req.params.id})
 .then(admin=>res.status(200).json(admin))
 .catch(err=>res.status(400).json({error:err.message}));
     
});


  exports.update=('/:id',(req,res,next)=>{
   
    Admin.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
    .then(admin=>res.status(200).json({message:'admin updated Seccesfuly'}))
    .catch(err=>res.status(400).json({error:err.message}));
        
   });
   exports.delete=('/:id',(req,res,next)=>{
      
    Admin.deleteOne({_id: req.params.id})
       .then(admin=>res.status(200).json({message:'Admin deleted Seccesfuly'}))
       .catch(err=>res.status(400).json({error:err.message}));
           
      });