const mongoose=require('mongoose');
const terrainSchema = mongoose.Schema({

    nameTerrain : {type:String, required:"true"},
    localisation : {type:String, required:"true"},
    image : {type:String, required:"true"},
    capaciteJoueur : {type:String, required:"true" },
    ville : {type:String, required:"true"},
    images : {type:String, required:"true"},
    id_user: {type:String, required:"true"},
    }, { timestamps: true },
    
    )
const Terrain = mongoose.model('Terrain', terrainSchema);
module.exports = Terrain;

 