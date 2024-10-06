const Option = require('../Models/Option.model')
const express = require('express');
const router = express.Router();
const authorizeRoles = require("../middleware/authorizedRoles")
const { verifyToken } = require("../middleware/veriftoken");
const { uploadFile } = require('../middleware/uploadfile');


router.get('/', async (req, res) => {
    try {
        const options = await Option.find();

        res.status(200).json(options);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


router.post('/', uploadFile.array("images", 2), async (req, res) => {
    
        console.log("req",req.files);
        if (!req.files) {
            return res.status(400).json({ message: 'No file provided' });
        }
        const {
            puissance,
            boite,
            vitre,
            cameraRecul,
            systemeNavigation,
            regulateurVitesse,
            volantIntegré,
            conduiteIntelligent,
            alarmeIntelligent
        } = req.body;
        const imageOption1 = req.files[0].filename;
        const imageOption2 = req.files[1].filename;
        // Initial prixoption
        let prixoption = 0;

        // Calculer en fonction de la puissance
        if (puissance === "5") {
            prixoption += 10;
        } else if (puissance > "5") {
            const differenceInPower = parseInt(puissance) - 5;
            prixoption += 10 * differenceInPower;
        }

        // Ajouter des montants pour d'autres options
        if (boite === "Automatique") {
            prixoption += 10;
        }
        if (vitre === "Toutautomatique") {
            prixoption += 10;
        }
        if (cameraRecul) {
            prixoption += 10;
        }
        if (systemeNavigation) {
            prixoption += 10;
        }
        if (regulateurVitesse) {
            prixoption += 10;
        }
        if (volantIntegré) {
            prixoption += 10;
        }
        if (conduiteIntelligent) {
            prixoption += 40;
        }
        if (alarmeIntelligent) {
            prixoption += 40;
        }

        const newOption = new Option({
            puissance,
            boite,
            vitre,
            cameraRecul,
            systemeNavigation,
            regulateurVitesse,
            volantIntegré,
            conduiteIntelligent,
            alarmeIntelligent,
            prixoption,
            imageOption1,
            imageOption2
        });

        try {
            await newOption.save();
            res.status(201).json(newOption);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

router.get('/:OptionID', async (req, res) => {
    try {
        const option = await Option.findById(req.params.OptionID)


        res.status(200).json(option);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// router.put('/:id', uploadFile.array("images", 2), async (req, res) => {
//     try {
//       const optionId = req.params.id;
  
//       const updatedData = {
//         puissance: req.body.puissance,
//         boite: req.body.boite,
//         vitre: req.body.vitre,
//         cameraRecul: req.body.cameraRecul,
//         systemeNavigation: req.body.systemeNavigation,
//         regulateurVitesse: req.body.regulateurVitesse,
//         volantIntegre: req.body.volantIntegre,
//         conduiteIntelligent: req.body.conduiteIntelligent,
//         alarmeIntelligent: req.body.alarmeIntelligent,
//       };
  
//       const newImages = req.files;
//       if (newImages.length === 2) {
//         updatedData.imageOption1 = newImages[0].filename;
//         updatedData.imageOption2 = newImages[1].filename;
//       }
  
//       // Add your price calculation logic here if needed.
  
//       const updatedOption = await Option.findByIdAndUpdate(optionId, updatedData, {
//         new: true,
//       });
  
//       if (!updatedOption) {
//         return res.status(404).json({ message: 'Option not found' });
//       }
  
//       return res.status(200).json(updatedOption);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   });
router.put('/:id', uploadFile.array("images", 2), async (req, res) => {
    try {
      const optionId = req.params.id;
  
      const updatedData = {
        puissance: req.body.puissance,
        boite: req.body.boite,
        vitre: req.body.vitre,
        cameraRecul: req.body.cameraRecul,
        systemeNavigation: req.body.systemeNavigation,
        regulateurVitesse: req.body.regulateurVitesse,
        volantIntegre: req.body.volantIntegre,
        conduiteIntelligent: req.body.conduiteIntelligent,
        alarmeIntelligent: req.body.alarmeIntelligent,
      };
  
      const newImages = req.files;
      if (newImages.length === 2) {
        updatedData.imageOption1 = newImages[0].filename;
        updatedData.imageOption2 = newImages[1].filename;
      }
  
      // Logique de calcul du prix des options
      let prixoption = 0;
  
      // Calculer en fonction de la puissance
      if (updatedData.puissance === "5") {
        prixoption += 10;
      } else if (parseInt(updatedData.puissance) > 5) {
        const differenceInPower = parseInt(updatedData.puissance) - 5;
        prixoption += 10 * differenceInPower;
      }
  
      // Ajouter des montants pour d'autres options
      if (updatedData.boite === "Automatique") {
        prixoption += 10;
      }
      if (updatedData.vitre === "Toutautomatique") {
        prixoption += 10;
      }
      if (updatedData.cameraRecul) {
        prixoption += 10;
      }
      if (updatedData.systemeNavigation) {
        prixoption += 10;
      }
      if (updatedData.regulateurVitesse) {
        prixoption += 10;
      }
      if (updatedData.volantIntegre) {
        prixoption += 10;
      }
      if (updatedData.conduiteIntelligent) {
        prixoption += 40;
      }
      if (updatedData.alarmeIntelligent) {
        prixoption += 40;
      }
  
      // Ajouter le prix calculé aux données mises à jour
      updatedData.prixoption = prixoption;
  
      const updatedOption = await Option.findByIdAndUpdate(optionId, updatedData, {
        new: true,
      });
  
      if (!updatedOption) {
        return res.status(404).json({ message: 'Option not found' });
      }
  
      return res.status(200).json(updatedOption);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

// router.put ('/:OptionID', async (req, res) => {
//     const  id = req.params.OptionID;
//     const {
//         puissance,
//         boite,
//         vitre,
//         cameraRecul,
//         systemeNavigation,
//         regulateurVitesse,
//         volantIntegré,
//         conduiteIntelligent,
//         alarmeIntelligent,
//         prixoption,
//     } = req.body;

//     const Opt1 = {puissance,boite,vitre,cameraRecul,systemeNavigation,regulateurVitesse,volantIntegré,conduiteIntelligent,
//        prixoption, _id: id };
//     await Option.findByIdAndUpdate(id, Opt1);

//     res.json(Opt1);
// }
// )

router.put('/:OptionID', verifyToken, authorizeRoles("admin"), async (req, res) => {
    const id = req.params.OptionID;
    const {
        puissance,
        boite,
        vitre,
        cameraRecul,
        systemeNavigation,
        regulateurVitesse,
        volantIntegré,
        conduiteIntelligent,
        alarmeIntelligent
    } = req.body;

    // Initial prixoption
    let nouveauPrixOption = 0;

    // Calculer en fonction de la puissance
    if (puissance === "5") {
        nouveauPrixOption += 10;
    } else if (puissance > "5") {
        const differenceInPower = parseInt(puissance) - 5;
        nouveauPrixOption += 10 * differenceInPower;
    }

    // Ajouter des montants pour d'autres options
    if (boite === "automatique") {
        nouveauPrixOption += 10;
    }
    if (vitre === "allautomatique") {
        nouveauPrixOption += 10;
    }
    if (cameraRecul) {
        nouveauPrixOption += 10;
    }
    if (systemeNavigation) {
        nouveauPrixOption += 10;
    }
    if (regulateurVitesse) {
        nouveauPrixOption += 10;
    }
    if (volantIntegré) {
        nouveauPrixOption += 10;
    }
    if (conduiteIntelligent) {
        nouveauPrixOption += 40;
    }
    if (alarmeIntelligent) {
        nouveauPrixOption += 40;
    }

    // Mettre à jour les champs
    const updatedFields = {
        puissance,
        boite,
        vitre,
        cameraRecul,
        systemeNavigation,
        regulateurVitesse,
        volantIntegré,
        conduiteIntelligent,
        alarmeIntelligent,
        prixoption: nouveauPrixOption
    };

    try {
        const updatedOption = await Option.findByIdAndUpdate(id, updatedFields, { new: true });
        res.json(updatedOption);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


router.delete('/:OptionID', verifyToken, authorizeRoles("admin"), async (req, res) => {
    const id = req.params.OptionID;

    await Option.findByIdAndDelete(id);

    res.json({ message: "Optionsupprimé avec succès." });
}
);

module.exports = router;