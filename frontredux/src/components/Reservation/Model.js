// import React from 'react';

// const ReservationModel = ({ onClose }) => {
//   return (
//     <div className="reservation-model">
 


//       <button onClick={onClose}>Fermer</button>
//     </div>
//   );
// };

// export default ReservationModel;


// import React from 'react';
// import { Dialog, DialogContent, Button } from '@mui/material';

// const ReservationModel = ({ isOpen, onClose }) => {
//   return (
//     <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
//       <DialogContent style={{ minHeight: '50vh' }}>
//         {/* Contenu de votre modèle ici */}
//         <Button onClick={onClose}>Fermer</Button>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ReservationModel;
// import React from 'react';

// const ReservationModel = ({ onClose }) => {
//   const modelStyle = {
//     backgroundColor: 'white', // Fond blanc pour le modèle
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Ombre légère
//     position: 'relative',
//     color: 'black', // Texte en noir
//   };

//   const closeButtonStyle = {
//     display: 'block',
//     margin: 'auto',
//     marginTop: '20px',
//     padding: '8px 16px',
//     backgroundColor: 'gray',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   };

//   return (
//     <div className="reservation-model" style={modelStyle}>
//       <h1>Texte en noir</h1>
//       <p>Plus de texte en noir.</p>
      
//       <button onClick={onClose} style={closeButtonStyle}>
//         Fermer
//       </button>
//     </div>
//   );
// };

// export default ReservationModel;
import React from 'react';

const ReservationModel = ({ onClose }) => {
  const modelStyle = {
    backgroundColor: 'white', // Fond blanc pour le modèle
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Ombre légère
    position: 'absolute',
    top: '50%', // Centrer verticalement
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000, // Assurez-vous que le modèle s'affiche au-dessus du contenu
    width: '90%', // Augmentation de la largeur du modèle
    height: '90vh', // Augmentation de la hauteur du modèle
  };

  const closeButtonStyle = {
    backgroundColor: 'gray',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '8px 16px',
    marginTop: '20px',
  };

  return (
    <div className="reservation-model" style={modelStyle}>
      <h1>Texte en noir</h1>
      <p>Plus de texte en noir.</p>

      <button onClick={onClose} style={closeButtonStyle}>
        Fermer
      </button>
    </div>
  );
};

export default ReservationModel;