// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import StripeCheckout from 'react-stripe-checkout';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);

// function StripePayment() {
//   const { reservationId} = useParams();
//   console.log('reservationId',reservationId)
//   const [reservationData, setReservationData] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:3001/api/reservation/${reservationId}`)
//     // fetch(`http://localhost:3001/api/reservation/${reservationId}`)
//       .then(response => {
//         setReservationData(response.data);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des données de la réservation', error);
//       });
//   }, [reservationId]);

//   const handlePaymentSuccess = (token) => {
//     console.log('Paiement réussi ! Voici les détails du paiement :');
//     console.log('Token:', token);
//     axios.post('http://localhost:3001/api/payment', {

//       token,
//       reservationId,
//       amount: reservationData.prixfinal * 100,

//     })
//       .then(response => {
//         MySwal.fire({
//           icon: 'success',
//           title: 'Paiement réussi',
//           timer: 4000,
//         });
//       })
//       .catch(error => {
//         console.error('Erreur lors du traitement du paiement', error);
//         MySwal.fire({
//           icon: 'error',
//           title: 'Paiement non réussi',
//           timer: 4000,
//         });
//       });
//   };

//   return (
//     <div className="container">
//       {reservationData ? (
//         <div>
//           <h2>Récapitulatif de la réservation</h2>
//           <p>Nom de la voiture : {reservationData.voitureID.nomvoiture}</p>
//           <p>Prix de la réservation : {reservationData.prixfinal} </p>
//           <StripeCheckout
//             stripeKey="pk_test_51N4JbXAiDLYSo1DykYQY0Dq0MEPaoxMclGm5T9KVJrAnE9ZbqToP7hKU5OxEUQwCiPBbTRygMB4JpGJOBhY7GSBi00BIYfTdTe"
//             label="Payer maintenant"
//             name="Nom du vendeur"
//             billingAddress
//             shippingAddress
//             amount={reservationData.prixfinal * 100}
//             description={`Réservation pour la voiture ${reservationData.voitureID}`}
//             token={handlePaymentSuccess}
//           />
//         </div>
//       ) : (
//         <p>Chargement des détails de la réservation...</p>
//       )}
//     </div>
//   );
// }

// export default StripePayment;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import { urlimage } from '../../Axios/Api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
const MySwal = withReactContent(Swal);

function StripePayment() {
  const { reservationId } = useParams();
  const [reservationData, setReservationData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/reservation/${reservationId}`)
      .then(response => {
        setReservationData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de la réservation', error);
      });
  }, [reservationId]);

  const handlePaymentSuccess = (token) => {
    console.log('Paiement réussi ! Voici les détails du paiement :');
    console.log('Token:', token);
    axios.post('http://localhost:3001/api/payment', {
      token,
      reservationId,
      amount: reservationData.prixfinal * 100,
    })
      .then(response => {
        MySwal.fire({
          icon: 'success',
          title: 'Paiement réussi',
          timer: 4000,
        });
        navigate('/menuclient');
      })

      .catch(error => {
        console.error('Erreur lors du traitement du paiement', error);
        MySwal.fire({
          icon: 'error',
          title: 'Paiement non réussi',
          timer: 4000,
        });
      });
  };

  return (
    <div className="container">
      {reservationData && reservationData.confirmadmin ? (
        <div>

          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Récapitulatif de la réservation
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
          <p>Nom  : {reservationData.user.firstname}</p>
          <p>Prenom : {reservationData.user.lastname}</p>
          <p>Nom de la marque : {reservationData.voitureID.marque.nommarque}</p>
          <p>Nom de la voiture : {reservationData.voitureID.nomvoiture}</p>
          <p>Date Depart : {reservationData.datedep}</p>
          <p>Date Retour : {reservationData.dateretour}</p>
          <p>Prix de la réservation : {reservationData.prixfinal} </p>
                </Typography>
              </CardContent>

            </Box>
            <CardMedia
              component="img"
              sx={{ width: 600 }}
              image={`${urlimage}${reservationData.voitureID.imagevoiture}`}
              alt="Live from space album cover"
            />
          </Card>
          {/* <h2>Récapitulatif de la réservation</h2>
          <p>Nom  : {reservationData.user.firstname}</p>
          <p>Prenom : {reservationData.user.lastname}</p>
          <p>Nom de la marque : {reservationData.voitureID.marque.nommarque}</p>
          <p>Nom de la voiture : {reservationData.voitureID.nomvoiture}</p>
          <p>Prix de la réservation : {reservationData.prixfinal} </p> */}



          <StripeCheckout
            stripeKey="pk_test_51N4JbXAiDLYSo1DykYQY0Dq0MEPaoxMclGm5T9KVJrAnE9ZbqToP7hKU5OxEUQwCiPBbTRygMB4JpGJOBhY7GSBi00BIYfTdTe"
            label="Payer maintenant"
            name="Nom du vendeur"
            billingAddress
            shippingAddress
            amount={reservationData.prixfinal * 100}
            description={`Réservation pour la voiture ${reservationData.voitureID}`}
            token={handlePaymentSuccess}
          />
        </div>
      ) : (
        <p>La réservation n'a pas été confirmée ou est en cours de confirmation.</p>
      )}
    </div>
  );
}

export default StripePayment;