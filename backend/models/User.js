const mongoose=require('mongoose');
const usersSchema = mongoose.Schema({

    Name : {type:String, required:true},
    ville : {type:String, required:true},
    email : {type:String, required:true},
    cin : {type:String},
    password :{type:String, required:true},
    tel :{type:Number, required:true},
    role:{type:String, required:true},

});
module.exports =mongoose.model('User',usersSchema);


