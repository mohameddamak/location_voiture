
const mongoose = require("mongoose")
const Voiture = require("./Voiture.model")
const User = require("./User.model")
var reservationSchema = mongoose.Schema({
    datedep: String,
    dateretour: String,
    prixfinal: Number,

    numCin: {
        type: Number,
        required: false
    },

    imgCin: {
        type: String,
        required: false
    },

    imgCin1: {
        type: String,
        required: false
    },

    Npermis: {
        type: Number,
        required: false,
    },
    dateNaissance: {
        type: String,
        required: false
    },
    voitureID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Voiture'
    },

    confirme: {
        type: Boolean,

    },

    confirmadmin: {
        type: Boolean,

    },

    payment: {
        type: Boolean,
        default: false, // Par défaut, le paiement n'est pas effectué
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isRead: {
        type: Boolean,
        default: false, // Par défaut, la réservation n'est pas lue
    },

});


module.exports = mongoose.model('Reservation', reservationSchema)