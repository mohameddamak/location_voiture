const express=require('express');
const router = express.Router();
const stripe = require('stripe');
const Stripe =
stripe('sk_test_51N4JbXAiDLYSo1DyBYiDxwFKmrxIZGlzXIeathuRmT8ZBZrU3dHidbRXOrv3esPA8KF6JnitgEJX1UNJkJIkW4mj001JFY6Fl7');

router.post('/', async (req, res) => { console.log(req.body)
let status, error;
const { token, amount } = req.body;
try {
await Stripe.charges.create({
source: token.id,
amount,
currency: 'usd',
});
status = 'success';
} catch (error) {
console.log(error);
status = 'Failure';
}
res.json({ error, status });
});
module.exports = router;




// const express = require('express');
// const router = express.Router();
// const stripe = require('stripe');
// const Stripe =
// stripe('sk_test_51N4JbXAiDLYSo1DyBYiDxwFKmrxIZGlzXIeathuRmT8ZBZrU3dHidbRXOrv3esPA8KF6JnitgEJX1UNJkJIkW4mj001JFY6Fl7');

// const Payment = require('../Models/Payment.model'); // Importez le modèle de paiement
// const Reservation = require('../Models/Reservation.model'); // Importez le modèle de réservation

// router.post('/:reservationID', async (req, res) => {
//   const { token, amount } = req.body;
//   const reservationID = req.params.reservationID; // Récupérez l'ID de réservation depuis les paramètres d'URL

//   try {
//     const reservation = await Reservation.findById(reservationID);

//     if (!reservation) {
//       return res.status(404).json({ error: 'Réservation non trouvée' });
//     }

//     const charge = await stripe.charges.create({
//       source: token.id,
//       amount,
//       currency: 'usd',
//     });

//     const payment = new Payment({
//       reservationID: reservationID,
//       // ... autres champs de votre modèle de paiement
//     });

//     await payment.save();

//     // Mettez à jour la réservation pour marquer le paiement comme effectué
//     reservation.payment = true;
//     await reservation.save();

//     res.json({ status: 'success' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Échec de la transaction' });
//   }
// });

// module.exports = router;