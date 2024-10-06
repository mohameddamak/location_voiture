
const mongoose = require("mongoose")
var marqueSchema = mongoose.Schema({

    nommarque: String,
    prixmarque: Number,
    immarque:String,

});



module.exports = mongoose.model('Marque', marqueSchema)




