
const mongoose = require("mongoose")
const express = require('express');
const router = express.Router();
const Reservation = require('../Models/Reservation.model');
const Voiture = require("../Models/Voiture.model")
const User = require('../Models/User.model')
const authorizeRoles = require("../middleware/authorizedRoles")
const { verifyToken } = require("../middleware/veriftoken")
const moment = require('moment');
const { uploadFile } = require("../middleware/uploadfile");

router.get('/', async (req, res) => {
    try {
        const reserv = await Reservation.find().populate({ path: 'voitureID', populate: { path: "marque", model: "Marque" } }).populate('user')
        ""
        res.status(200).json(reserv);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});







router.post('/', uploadFile.array("images", 2), async (req, res) => {
    console.log("req", req.files);

    try {

        if (!req.files) {
            return res.status(400).json({ message: 'No file provided' });
        }
        const { datedep, dateretour, numCin, Npermis, dateNaissance, voitureID: voitureID, user: user } = req.body;
        const imgCin = req.files[0].filename;
        const imgCin1 = req.files[1].filename;


        const selectedVoiture = await Voiture.findById(voitureID);

        if (!selectedVoiture) {
            res.status(404).json({ message: 'Voiture not found' });
            return;
        }

        const daysDifference = moment(dateretour, 'DD-MM-YYYY').diff(moment(datedep, 'DD-MM-YYYY'), 'days');
        console.log('Days Difference:', daysDifference);
        let prixfinal = selectedVoiture.prixvoiture * daysDifference;

        const june25 = moment('2023-06-25');
        const august25 = moment('2023-08-25');
        const december25 = moment('2023-12-25');
        const january1 = moment('2024-01-01');


        if (moment(datedep).isBetween(june25, august25, undefined, '[]') || moment(dateretour).isBetween(june25, august25, undefined, '[]')) {
            prixfinal *= 1.1; // Augmentation de 10% en été
        }

        if (moment(datedep).isBetween(december25, january1, undefined, '[]') || moment(dateretour).isBetween(december25, january1, undefined, '[]')) {
            prixfinal *= 1.1; // Augmentation de 10% pendant les fêtes
        }


        if (daysDifference > 7) {
            prixfinal *= 0.93;
        }
        prixfinal = Math.floor(prixfinal);

        const reservation = new Reservation({
            datedep,
            dateretour,
            numCin,
            imgCin,
            imgCin1,
            Npermis,
            dateNaissance,
            prixfinal: prixfinal,
            voitureID,
            user: user,
            confirme: false,
            confirmadmin: false,
            isRead: false,

        });

        await reservation.save();
        const updatedVoiture = await Voiture.findByIdAndUpdate(
            voitureID,
            { $inc: { chiffreAffaires: prixfinal } },
            { new: true }
        );

        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
    }
});


router.post('/:reservationId', async (req, res) => {
    const { reservationId } = req.params;

    try {
        const reservation = await Reservation.findByIdAndUpdate(
            reservationId,
            { confirme: true },
            { new: true }
        );

        if (!reservation) {
            return res.status(404).json({ message: "Réservation non trouvée" });
        }

        res.status(200).json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la confirmation de la réservation" });
    }
});


router.post('/allread', async (req, res) => {
    try {
        console.log("Route /allread called"); // Ajoutez cette console pour vérifier si la route est appelée

        const result = await Reservation.updateMany({ isRead: false }, { isRead: true });

        console.log("Result of updating reservations:", result); // Console pour vérifier le résultat de la mise à jour

        res.status(200).json({ message: 'Toutes les nouvelles réservations ont été marquées comme lues.' });
    } catch (error) {
        console.error("Error in /allread route:", error); // Ajoutez cette console pour capturer d'éventuelles erreurs
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour des réservations.' });
    }
});

router.post('/admin/:reservationId', async (req, res) => {
    const { reservationId } = req.params;

    try {
        const reservation = await Reservation.findByIdAndUpdate(
            reservationId,
            { confirmadmin: true },
            { new: true }
        );

        if (!reservation) {
            return res.status(404).json({ message: "Réservation non trouvée" });
        }

        res.status(200).json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la confirmation de la réservation" });
    }
});



router.get('/:ReservationID', async (req, res) => {
    try {
        const Res = await Reservation.findById(req.params.ReservationID).populate({ path: 'voitureID', populate: { path: "marque", model: "Marque" } }).populate('user')

        res.status(200).json(Res);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// router.put('/:ReservationID',verifyToken, async (req, res) => {
//     const id = req.params.VoitureId;
//     const { datedep, dateretour, imgCin, Npermis, dateNaissance, voitureID: voitureID, user,prixfinal } = req.body;
//     const res1 = { datedep, dateretour, imgCin, Npermis, dateNaissance, voitureID: voitureID, user,prixfinal, _id: id };

//     await Reservation.findByIdAndUpdate(id, res1);

//     res.json(res1);
// }
// )
router.delete('/:ReservationID', async (req, res) => {
    const id = req.params.ReservationID;

    await Reservation.findByIdAndDelete(id);

    res.json({ message: "Reservation supprimé avec succès." });
}
);


router.get('/voiture/:voitureID', async (req, res) => {
    try {
        const reservations = await Reservation.find({ voitureID: req.params.voitureID });
        if (!reservations) {
            return res.status(404).json({ message: "Aucune réservation trouvée pour cette voiture" });
        }
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Une erreur est survenue' });
    }
});
module.exports = router;



