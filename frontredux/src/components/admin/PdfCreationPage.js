// import React, { useState } from 'react';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const PdfCreationPage = () => {
//   const [reservationDetails, setReservationDetails] = useState({
//     clientName: '',
//     startDate: '',
//     endDate: '',
//     // Ajoutez d'autres détails de réservation ici
//   });

//   const generatePdf = () => {
//     const documentDefinition = {
//       content: [
//         { text: 'Contrat de Réservation', style: 'header' },
//         { text: 'Détails de la Réservation', style: 'subheader' },
//         {
//           ul: [
//             `Nom du client : ${reservationDetails.clientName}`,
//             `Date de début : ${reservationDetails.startDate}`,
//             `Date de fin : ${reservationDetails.endDate}`,
//             // Ajoutez d'autres détails de réservation ici
//           ],
//         },
//       ],
//       styles: {
//         header: {
//           fontSize: 24,
//           bold: true,
//           alignment: 'center',
//           margin: [0, 0, 0, 20],
//         },
//         subheader: {
//           fontSize: 18,
//           bold: true,
//           margin: [0, 10, 0, 10],
//         },
//       },
//     };

//     pdfMake.createPdf(documentDefinition).open();
//   };

//   return (
//     <div>
//       <h1>Création de Contrat PDF</h1>
//       <div>
//         <label>Nom du Client:</label>
//         <input
//           type="text"
//           value={reservationDetails.clientName}
//           onChange={(e) =>
//             setReservationDetails({
//               ...reservationDetails,
//               clientName: e.target.value,
//             })
//           }
//         />
//       </div>
//       <div>
//         <label>Date de Début:</label>
//         <input
//           type="text"
//           value={reservationDetails.startDate}
//           onChange={(e) =>
//             setReservationDetails({
//               ...reservationDetails,
//               startDate: e.target.value,
//             })
//           }
//         />
//       </div>
//       <div>
//         <label>Date de Fin:</label>
//         <input
//           type="text"
//           value={reservationDetails.endDate}
//           onChange={(e) =>
//             setReservationDetails({
//               ...reservationDetails,
//               endDate: e.target.value,
//             })
//           }
//         />
//       </div>
//       {/* Ajoutez d'autres champs de saisie pour les détails de la réservation ici */}
//       <button onClick={generatePdf}>Générer le Contrat PDF</button>
//     </div>
//   );
// };

// export default PdfCreationPage;




// import React, { useState } from 'react';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const PdfCreationPage = () => {
//   const [rentalDetails, setRentalDetails] = useState({
//     clientName: 'John Doe',
//     vehicleModel: 'Toyota Corolla',
//     startDate: '01/12/2023',
//     endDate: '01/15/2023',
//     // Ajoutez d'autres détails de location de voiture ici
//   });

//   const generatePdf = () => {
//     const documentDefinition = {
//       content: [
//         { text: 'Contrat de Location de Voiture', style: 'header' },
//         { text: 'Détails de la Location de Voiture', style: 'subheader' },
//         {
//           ul: [
//             `Nom du client : ${rentalDetails.clientName}`,
//             `Modèle du véhicule : ${rentalDetails.vehicleModel}`,
//             `Date de début : ${rentalDetails.startDate}`,
//             `Date de fin : ${rentalDetails.endDate}`,
//             // Ajoutez d'autres détails de location de voiture ici
//           ],
//         },
//         { text: 'Conditions de Location', style: 'subheader' },
//         {
//           ol: [
//             'Le Locataire doit être titulaire d\'un permis de conduire valide.',
//             'Le Locataire s\'engage à utiliser le véhicule de manière responsable et à le retourner dans le même état que lors de la location, à l\'exception de l\'usure normale.',
//             'Le Locataire est responsable de tous les frais de carburant et d\'entretien pendant la durée de la location.',
//             'En cas de dommages au véhicule ou d\'accident, le Locataire est tenu de signaler immédiatement l\'incident au Loueur et de suivre les procédures d\'assurance.',
//             'Le Loueur se réserve le droit de facturer des frais supplémentaires en cas de retard dans le retour du véhicule.',
//           ],
//         },
//       ],
//       styles: {
//         header: {
//           fontSize: 24,
//           bold: true,
//           alignment: 'center',
//           margin: [0, 0, 0, 20],
//         },
//         subheader: {
//           fontSize: 18,
//           bold: true,
//           margin: [0, 10, 0, 10],
//         },
//       },
//     };

//     // Générez le contrat PDF
//     const pdfDoc = pdfMake.createPdf(documentDefinition);

//     // Ouvrez le PDF dans une nouvelle fenêtre
//     pdfDoc.open();
//   };

//   return (
//     <div>
//       <h1>Création de Contrat de Location de Voiture</h1>
//       <div>
//         <label>Nom du Client:</label>
//         <input
//           type="text"
//           value={rentalDetails.clientName}
//           onChange={(e) =>
//             setRentalDetails({
//               ...rentalDetails,
//               clientName: e.target.value,
//             })
//           }
//         />
//       </div>
//       <div>
//         <label>Modèle du Véhicule:</label>
//         <input
//           type="text"
//           value={rentalDetails.vehicleModel}
//           onChange={(e) =>
//             setRentalDetails({
//               ...rentalDetails,
//               vehicleModel: e.target.value,
//             })
//           }
//         />
//       </div>
//       <div>
//         <label>Date de Début:</label>
//         <input
//           type="text"
//           value={rentalDetails.startDate}
//           onChange={(e) =>
//             setRentalDetails({
//               ...rentalDetails,
//               startDate: e.target.value,
//             })
//           }
//         />
//       </div>
//       <div>
//         <label>Date de Fin:</label>
//         <input
//           type="text"
//           value={rentalDetails.endDate}
//           onChange={(e) =>
//             setRentalDetails({
//               ...rentalDetails,
//               endDate: e.target.value,
//             })
//           }
//         />
//       </div>
//       {/* Ajoutez d'autres champs de saisie pour les détails de la location de voiture ici */}
//       <button onClick={generatePdf}>Générer le Contrat PDF</button>
//     </div>
//   );
// };

// export default PdfCreationPage;

import React, { useState, useEffect } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findReservationByID } from '../../features/reservationSlice';
import StripePayment from '../Client/StripePayement';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfCreationPage = () => {
  const { reservation, isLoading, error } = useSelector((state) => state.storereservation);
  // const { voitureID } = useSelector((state) => state.storerevoitures);



  const { reservationId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findReservationByID(reservationId));
  }, [reservationId, dispatch]);

  const generatePdf = () => {
    const documentDefinition = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      content: [
        { text: 'Contrat de Location de Voiture', style: 'header' },
        { text: 'Détails de la Location de Voiture', style: 'subheader' },
        {
          ul: [
            `Nom du client : ${reservation.user.firstname}`,
            `Prenom du client : ${reservation.user.lastname}`,
            `Carte d'Identité : ${reservation.numCin}`,
            `Numero de conduite : ${reservation.Npermis}`,
            `Date Depart : ${reservation.datedep}`,
            `Date Retour : ${reservation.dateretour}`,
            `Voiture' : ${reservation.voitureID.nomvoiture}`,



          ],
        },
        { text: 'Conditions de Location', style: 'subheader' },
        {
          ol: [
            'Le Locataire doit être titulaire d\'un permis de conduire valide.',
            'Le Locataire s\'engage à utiliser le véhicule de manière responsable et à le retourner dans le même état que lors de la location, à l\'exception de l\'usure normale.',
            'Le Locataire est responsable de tous les frais de carburant et d\'entretien pendant la durée de la location.',
            'En cas de dommages au véhicule ou d\'accident, le Locataire est tenu de signaler immédiatement l\'incident au Loueur et de suivre les procédures d\'assurance.',
            'Le Loueur se réserve le droit de facturer des frais supplémentaires en cas de retard dans le retour du véhicule.',
          ],
        },
        {
          text: 'Date de Signature : ___________________________',
          style: 'signatureDate',
          alignment: 'right',
        },
        {
          text: 'Signature du Locataire : ___________________________',
          style: 'signature',
          alignment: 'right',
        },
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        subheader: {
          fontSize: 18,
          bold: true,
          margin: [0, 10, 0, 10],
        },
        signature: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
          margin: [0, 40, 0, 0],
        },
        signatureDate: {
          fontSize: 12,
          alignment: 'center',
          margin: [0, 10, 0, 0],
        },
      },
    };

    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.open();
  };

  if (reservation.confirmadmin) {
    return (
      <div>
        {/* <h1>Création de Contrat de Location de Voiture</h1> */}

        <StripePayment />
        <button variant="contained" onClick={generatePdf} style={{ backgroundColor: 'black', color: 'white' }}>
          Générer le Contrat PDF
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>La réservation n'a pas été confirmée ou est en cours de confirmation.</p>
      </div>
    );
  }
};

export default PdfCreationPage;



