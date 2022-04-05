const mongoose=require('mongoose');
const ReservationSchema = mongoose.Schema({

    id_Terrain : {type:Number, required:"true"},
    dateJour : {type:String, required:"true"},
    heure : {type:String, required:"true"},
    duree : {type:String, required:"true" },
    etat : {type:String, required:"true"},
    prix: {type:Number, required:"true"},
    prixPayant:{type:Number,required:"true"}
    }, { timestamps: true },
    
    )
const Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;

 