
const mongoose =require("mongoose")
var optionSchema = mongoose.Schema({

    puissance: String,
    boite: String,
    vitre: String,
    cameraRecul:Boolean,
    systemeNavigation:Boolean,
    regulateurVitesse:Boolean,
    volantIntegré:Boolean,
    prixoption:Number,
    conduiteIntelligent:Boolean,
    alarmeIntelligent:Boolean ,
    imageOption1:String,
    imageOption2:String,
});

module.exports=mongoose.model('Option',optionSchema)
