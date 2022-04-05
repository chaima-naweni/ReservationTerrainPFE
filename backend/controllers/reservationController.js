
const Reservation=require('../models/Reservation')

exports.all=('/',(req,res)=>{
    Reservation.find()
 .then(reservation=>res.status(200).json(reservation))
 .catch(err=>res.status(400).json({error:err.message}));
     
});


exports.create = (req, res, next) => {
    const reservation = new Reservation({
      ...req.body
    });
    reservation.save()
      .then(() => res.status(201).json({ message: 'Reservation created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  exports.get=('/:id',(req,res,next)=>{
    Reservation.findOne({_id: req.params.id})
 .then(reservation=>res.status(200).json(reservation))
 .catch(err=>res.status(400).json({error:err.message}));
     
});


  exports.update=('/:id',(req,res,next)=>{
   
    Reservation.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
    .then(reservation=>res.status(200).json({message:'Reservation updated Seccesfuly'}))
    .catch(err=>res.status(400).json({error:err.message}));
        
   });
   exports.delete=('/:id',(req,res,next)=>{
      
    Reservation.deleteOne({_id: req.params.id})
       .then(reservation=>res.status(200).json({message:'Reservation deleted Seccesfuly'}))
       .catch(err=>res.status(400).json({error:err.message}));
           
      });