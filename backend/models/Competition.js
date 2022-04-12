const mongoose=require('mongoose');
const CompetetionSchema = mongoose.Schema({

    date : {type:String, required:"true"},
    tarif : {type:Number, required:"true"},
    prix : {type:Number, required:"true"},
    nomComp : {type:String, required:"true" },
    id_terrain : {type:String, required:"true"},
    }, { timestamps: true },
    
    )
const Competition = mongoose.model('Competition', CompetetionSchema);
module.exports = Competition;

 