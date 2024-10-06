const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  reservationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation', // Assurez-vous que c'est le bon modèle
    required: true,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;