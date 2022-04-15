
const User=require('../models/User');
//create new admin

//liste des users
exports.all=('/',(req,res)=>{
    // houni hatittt user.user.find() khater fil model aamala module.exports = { User, validate }
    User.User.find()
 .then(users=>res.status(200).json(users))
 .catch(err=>res.status(400).json({error:err.message}));
     
});

//un seul user
exports.get=('/:id',(req,res,next)=>{
    User.User.findOne({_id: req.params.id})
 .then(users=>res.status(200).json(users))
 .catch(err=>res.status(400).json({error:err.message}));
     
});

//update user
exports.update=('/:id',(req,res,next)=>{
   
 User.User.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
 .then(users=>res.status(200).json({message:'User updated Seccesfuly'}))
 .catch(err=>res.status(400).json({error:err.message}));
     
});
//delete user
exports.delete=('/:id',(req,res,next)=>{
   
    User.User.deleteOne({_id: req.params.id})
    .then(users=>res.status(200).json({message:'User deleted Seccesfuly'}))
    .catch(err=>res.status(400).json({error:err.message}));
         
   });
