
// const mongoose = require("mongoose")
// const Marque=require("./Marque.model")
// const Option=require("./Option.model")
// var voitureSchema = mongoose.Schema({
//     nomvoiture: String,
//     imagevoiture: String,
//     compteur :Number,
//     dateAchat:String,
//     prixvoiture: Number,
//     dateAssurance:String,
//     dateVisite:String,
//     dateVignette :String,
//     chiffreAffaires: { type: Number, default: 0 },
    
//     disponibilite: [Date],

//     marque: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref:'Marque'
//     },
//     option: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref:'Option'
//     },

// })

// module.exports = mongoose.model('Voiture', voitureSchema)


const mongoose = require("mongoose");
const Marque = require("./Marque.model");
const Option = require("./Option.model");

var voitureSchema = mongoose.Schema({
    nomvoiture: String,
    imagevoiture: String,
    compteur: Number,
    dateAchat: String, // Si vous avez besoin de cette date au format String
    prixvoiture: Number,
    dateAssurance:String, // Changer le type à Date
    dateVisite: String, // Changer le type à Date
    dateVignette:String, // Changer le type à Date
    chiffreAffaires: { type: Number, default: 0 },
    
    disponibilite: { type: Boolean, default: false},

    marque: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marque'
    },
    option: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    },
});

module.exports = mongoose.model('Voiture', voitureSchema);