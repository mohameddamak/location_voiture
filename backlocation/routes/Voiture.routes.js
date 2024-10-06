const Voiture = require("../Models/Voiture.model");
const express = require('express');
const router = express.Router();
const Marque = require("../Models/Marque.model")
const Option = require("../Models/Option.model")
const authorizeRoles = require("../middleware/authorizedRoles")
const { verifyToken } = require("../middleware/veriftoken")
const moment = require('moment'); // Si vous utilisez moment.js pour la gestion des dates
const { uploadFile } = require("../middleware/uploadfile");
const multer = require("multer");

router.get('/', async (req, res,) => {
    try {
        const voit = await Voiture.find().populate('marque').populate('option').exec()

        res.status(200).json(voit);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})


router.post('/', uploadFile.single("imagevoiture"), async (req, res) => {


    try {

        if (!req.file) {
            return res.status(400).json({ message: 'No file provided' });
        }
        const { nomvoiture, compteur, marque, option ,dateAssurance,dateVignette,dateVisite, disponibilite} = req.body;
        console.log("Date d'assurance reçue :", dateAssurance);
        const imagevoiture = req.file.filename;
        const modeleMarque = await Marque.findById(marque).select('prixmarque').exec();
        const modeleOption = await Option.findById(option).select('prixoption').exec();
        if (!modeleMarque || !modeleOption) {
            return res.status(400).json({ message: "Marque ou option non trouvée." });
        }

        let prixvoiture = modeleMarque.prixmarque + modeleOption.prixoption;

        // Ajouter 20 au prixvoiture si le nombre de jours est inférieur ou égal à 365 et compteur < 40000
        if (compteur < 40000) {
            prixvoiture += 20;
        }

        const newVoiture = new Voiture({
            nomvoiture: nomvoiture,
            imagevoiture: imagevoiture,
            compteur: compteur,
            // dateAchat: formattedDateAchat, 
            marque: marque,
            option: option,
            prixvoiture: prixvoiture,
            dateAssurance:dateAssurance,
            dateVisite:dateVisite,
            dateVignette :dateVignette ,
            disponibilite: disponibilite


        });

        await newVoiture.save();
        res.status(201).json(newVoiture);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

router.put('/:VoitureID', uploadFile.single("imagevoiture"), async (req, res) => {
    try {
      const { VoitureID } = req.params;
  
      const { nomvoiture, compteur, marque, option, dateAssurance, dateVignette, dateVisite, disponibilite,prixvoiture } = req.body;
  
      let voit1 = {
        nomvoiture: nomvoiture,
        compteur: compteur,
        marque: marque,
        option: option,
        dateAssurance: dateAssurance,
        dateVignette: dateVignette,
        dateVisite: dateVisite,
        disponibilite: disponibilite,
        prixvoiture:prixvoiture
      };
  
      if (req.file) {
        const imagevoiture = req.file.filename;
        voit1 = { ...voit1, imagevoiture: imagevoiture }
      }
  
      console.log("VoitureID:", VoitureID);
      console.log("Updated Voiture:", voit1);
      
      // Ajoutez cette ligne pour voir la valeur de disponibilite
      console.log("Disponibilité:", disponibilite);
  
      await Voiture.findByIdAndUpdate(VoitureID, voit1);
  
      res.json(voit1);
    } catch (error) {
      console.log("err", error);
    }
  });

// router.put('/:VoitureID', uploadFile.single("imagevoiture"), async (req, res) => {
//     try {
//       const { VoitureID } = req.params;
  
//       const { nomvoiture,compteur,marque,option,dateAssurance,dateVignette,dateVisite, disponibilite } = req.body;
//       let voit1 = { nomvoiture:nomvoiture,compteur:compteur,marque:marque,option:option,dateAssurance:dateAssurance,

//         dateVignette:dateVignette,dateVisite:dateVisite, disponibilite:disponibilite
//     };
  
//       if (req.file) {
//         const imagevoiture = req.file.filename;
//         voit1 = { ...voit1, imagevoiture:imagevoiture }
//       }
//   console.log("marque",voit1);
//       await Voiture.findByIdAndUpdate(VoitureID,voit1);
  
//       res.json(voit1);
//     } catch (error) {
//       console.log("err", error);
//     }
//   });

router.get('/:VoitureID', async (req, res) => {
    try {
        const voit = await Voiture.findById(req.params.VoitureID)


        res.status(200).json(voit);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});



router.put('/:VoitureId', async (req, res) => {
    try {
        const id = req.params.VoitureId;
        const { nomvoiture, imagevoiture, compteur, dateAchat, marque, option, prixvoiture,dateAssurance,dateVisite,dateVignette} = req.body;

        // Valider et formater la date d'achat au format jj/mois/année
        const formattedDateAchat = moment(dateAchat, 'DD/MM/YYYY');
        if (!formattedDateAchat.isValid()) {
            return res.status(400).json({ message: "La date d'achat doit être au format jj/mois/année." });
        }

        // Calculer le nombre de jours entre la date d'achat et la date actuelle
        const joursDifference = moment().diff(formattedDateAchat, 'days');

        // Calculer le prixvoiture en fonction des prix de la marque et de l'option
        const modeleMarque = await Marque.findById(marque).select('prixmarque').exec();
        const modeleOption = await Option.findById(option).select('prixoption').exec();
        if (!modeleMarque || !modeleOption) {
            return res.status(400).json({ message: "Marque ou option non trouvée." });
        }

        let nouveauPrixVoiture = modeleMarque.prixmarque + modeleOption.prixoption;

        // Ajouter 20 au prixvoiture si le nombre de jours est inférieur ou égal à 365 et compteur < 40000
        if (joursDifference <= 365 && compteur < 40000) {
            nouveauPrixVoiture += 20;
        }

        const updatedData = {
            nomvoiture: nomvoiture,
            imagevoiture: imagevoiture,
            compteur: compteur,
            dateAchat: formattedDateAchat,
            marque: marque,
            option: option,
            prixvoiture: prixvoiture !== undefined ? prixvoiture : nouveauPrixVoiture,
            dateAssurance:dateAssurance,
            dateVignette:dateVignette,
            dateVisite:dateVignette

        };

        const updatedVoiture = await Voiture.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedVoiture) {
            return res.status(404).json({ message: "Voiture non trouvée." });
        }

        res.json(updatedVoiture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



router.delete('/:VoitureId', async (req, res) => {
    const id = req.params.VoitureId;
    await Voiture.findByIdAndDelete(id);

    res.json({ message: "Voiture supprimé avec succès." });
})


module.exports = router;



