const multer =require( "multer")
const fs =require( "fs")
var DIR = './public/';
if (!fs.existsSync(DIR)) { // CREATE DIRECTORY IF NOT FOUND
fs.mkdirSync(DIR, { recursive: true });
}
const storage = multer.diskStorage({
destination: (req, file, callback) => {
callback(null, DIR);
},
filename: (req, file, callback) => {
const name = file.originalname.split(' ').join('_');
callback(null, name);
}
});
const uploadFile = multer({
storage: storage
});
module.exports={uploadFile};

// const  multer =require( "multer")
// const fs =require( "fs")

// var DIR = './public/';
// if (!fs.existsSync(DIR)) {  // CREATE DIRECTORY IF NOT FOUND
//   fs.mkdirSync(DIR, { recursive: true });
// }
//  const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
    
//     callback(null, DIR);
//   },
//   filename: (req, file, callback) => {
//     const name = file.originalname.split(' ').join('_');
//     callback(null, name);
//   }
  
// });

// const uploadFile = multer({
//   storage: storage
// });
// module.exports={uploadFile};

// const multer = require('multer');
// const fs = require('fs');

// const DIR = './public/';
// if (!fs.existsSync(DIR)) {
//   fs.mkdirSync(DIR, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, DIR);
//   },
//   filename: (req, file, callback) => {
//     const name = file.originalname.split(' ').join('_');
//     callback(null, name);
//   }
// });

// // Middleware pour gérer un seul fichier avec le champ 'imagevoiture'
// const uploadSingleFile = multer({ storage: storage }).single('imagevoiture');

// // Middleware pour gérer plusieurs fichiers avec le champ 'imagesvoiture'
// const uploadMultipleFiles = multer({ storage: storage }).array('imagesvoiture', 5); // Vous pouvez spécifier le nombre maximum de fichiers ici

// module.exports = { uploadSingleFile, uploadMultipleFiles };