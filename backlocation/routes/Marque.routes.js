
const Marque = require('../Models/Marque.model')
const express = require('express');
const router = express.Router();
//  const authorizeRoles = require("../middleware/authorizedRoles")
//  const {verifyToken}= require("../middleware/veriftoken");
const { uploadFile } = require('../middleware/uploadfile');


router.get('/', async (req, res) => {
  try {
    const marques = await Marque.find();

    res.status(200).json(marques);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});



router.post('/', uploadFile.single("immarque"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file provided' });
    }

    const { nommarque, prixmarque } = req.body;
    const immarque = req.file.filename;

    const newMarque = new Marque({ nommarque: nommarque, prixmarque: prixmarque, immarque: immarque });

    await newMarque.save();

    res.status(201).json(newMarque);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:MarqueID', async (req, res) => {
  try {
    const marque = await Marque.findById(req.params.MarqueID)

    res.status(200).json(marque);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});



router.put('/:MarqueID', uploadFile.single("immarque"), async (req, res) => {
  try {
    const { MarqueID } = req.params;

    const { nommarque, prixmarque } = req.body;
    let Marq1 = { nommarque: nommarque, prixmarque: prixmarque};

    if (req.file) {
      const immarque = req.file.filename;
      Marq1 = { ...Marq1, immarque: immarque }
    }
console.log("marque",Marq1);
    await Marque.findByIdAndUpdate(MarqueID,Marq1);

    res.json(Marq1);
  } catch (error) {
    console.log("err", error);
  }
});
router.delete('/:MarqueID', async (req, res) => {
  const { MarqueID } = req.params;

  await Marque.findByIdAndDelete(MarqueID);

  res.json({ message: "Marque supprimé avec succès." });
}
);

module.exports = router;
