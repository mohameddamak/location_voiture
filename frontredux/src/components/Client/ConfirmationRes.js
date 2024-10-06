// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getReservations } from '../../features/reservationSlice';

// function ConfirmationReservation() {
//     const { reservationID } = useParams();
//     const reservation = useSelector((state) => state.storereservation.reservations);
//     console.log('reservation', reservation)
//     const dispatch=useDispatch();
//     useEffect(() => {
//         dispatch(getReservations());
//         console.log('get',getReservations)
//     }, [dispatch, reservationID]);

//     return (
//         <div>
//             <h2>Confirmation de la réservation</h2>
//             <p>Date de départ : {reservation.datedep}</p>
//             <p>Date de retour : {reservation.dateretour}</p>
//             <p>Prix final : {reservation.prixfinal}</p>

//         </div>
//     );
// }

// export default ConfirmationReservation;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getReservations } from '../../features/reservationSlice';

// function ConfirmationReservation() {
//     const { reservationID } = useParams();
//     const dispatch = useDispatch();
//     const reservation = useSelector((state) => state.storereservation.reservations);

//     useEffect(() => {
//         dispatch(getReservations());
//     }, [dispatch, reservationID]);

//     // Utilisez reservationID pour filtrer la réservation à afficher
//     // const reservation = reservations.find(res => res._id === reservationID);
//     console.log('reservation',reservation)

//     if (!reservation) {
//         return <p>Réservation non trouvée</p>;
//     }

//     return (
//         <div>
//             <h2>Confirmation de la réservation</h2>
//             <p>ID de la réservation : {reservationID}</p>
//             <p>Date de départ : {reservation.datedep}</p>
//             <p>Date de retour : {reservation.dateretour}</p>
//             <p>Prix final : {reservation.prixfinal}</p>
//         </div>
      
//     );
// console.log('reservationID',reservationID)
// }

// export default ConfirmationReservation;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { findReservationByID } from '../../features/reservationSlice';


// function ConfirmationReservation() {
//     const { reservationID } = useParams();
//     const reservation = useSelector((state) => state.storereservation.reservations); // Utilisez le nom du champ pour une réservation unique
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(findReservationByID(reservationID)); // Utilisez le service pour obtenir la réservation par ID
//     }, [dispatch, reservationID]);


//     console.log('reservation', reservation);

//     if (!reservation) {
//         return <p>Réservation non trouvée</p>;
//     }

//     return (
//         <div>
//             <h2>Confirmation de la réservation</h2>
//             <p>Date de départ : {reservation.datedep}</p>
//             <p>Date de retour : {reservation.dateretour}</p>
//             <p>Prix final : {reservation.prixfinal}</p>
//         </div>
//     );
// }

// export default ConfirmationReservation;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { findReservationByID} from '../../features/reservationSlice';

// function ConfirmationReservation() {
//     const { reservationID } = useParams();
//     const dispatch = useDispatch();
//     const reservation = useSelector((state) => state.storereservation.reservations);
//     console.log('reservation',reservation)

//     useEffect(() => {
//         dispatch(findReservationByID(reservationID));
//     }, [dispatch, reservationID]);
// console.log('find',findReservationByID)
    
//     return (
//         <div>
//             <h2>Confirmation de la réservation</h2>
//             {reservation ? (
//                 <div>
//                     <p>Date de départ : {reservation.datedep}</p>
//                     <p>Date de retour : {reservation.dateretour}</p>
//                     <p>Prix final : {reservation.prixfinal}</p>
//                     {/* Affichez d'autres informations de réservation ici */}
//                 </div>
//             ) : (
//                 <p>Réservation non trouvée</p>
//             )}
//         </div>
//     );
// }

// export default ConfirmationReservation;





// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchReservationById } from '../../service/ResevationService';

// // Importez votre service de gestion des réservations


// function ConfirmationReservation() {
//     const { reservationID } = useParams();
//     const [reservation, setReservation] = useState(null);

//     useEffect(() => {
//         // Utilisez votre fonction fetchReservationByID pour obtenir la réservation
//         fetchReservationById(reservationID)
//             .then(data => setReservation(data))
//             .catch(error => console.error('Erreur lors de la récupération de la réservation', error));
//     }, [reservationID]);

//     return (
//         <div>
//             <h2>Confirmation de la réservation</h2>
//             {reservation ? (
//                 <div>
//                     <p>Date de départ : {reservation.datedep}</p>
//                     <p>Date de retour : {reservation.dateretour}</p>
//                     <p>Prix final : {reservation.prixfinal}</p>
//                     {/* Affichez d'autres informations de réservation ici */}
//                 </div>
//             ) : (
//                 <p>Réservation non trouvée</p>
//             )}
//         </div>
//     );
// }

// export default ConfirmationReservation;
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
function ConfirmationReservation() {
    const { reservationId } = useParams();
    const [reservation, setReservation] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Utilisez fetch ou Axios pour effectuer une requête à votre API
        // Remplacez 'URL_DE_VOTRE_API' par l'URL réelle de votre API
        fetch(`http://localhost:3001/api/reservation/${reservationId}`)

            .then(response => response.json())
            .then(data => setReservation(data))
            .catch(error => console.error('Erreur lors de la récupération de la réservation', error));
    }, [reservationId]);
    console.log('reservation',reservation)

    const handleConfirmReservation = () => {
        MySwal.fire({
            title: 'Confirmer la réservation',
            text: 'Êtes-vous sûr de vouloir confirmer cette réservation ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirmer',
            cancelButtonText: 'Annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                // L'utilisateur a cliqué sur "Confirmer"
                axios.post(`http://localhost:3001/api/reservation/${reservationId}`)
                    .then(response => {
                        // Affichez une notification de confirmation
                        MySwal.fire({
                            title: 'Réservation confirmée',
                            icon: 'success',
                            timer: 3000,
                          

                        });
                        // Mettez à jour l'état du composant ou effectuez d'autres actions en cas de succès
                        console.log('Réservation confirmée avec succès');
                             navigate(`/pdf/${reservationId}`)
                        //    navigate(`/payment/${reservationId}`)
                    })
                    .catch(error => {
                        // Affichez une notification d'erreur
                        MySwal.fire({
                            title: 'Erreur lors de la confirmation de la réservation',
                            icon: 'error',
                            timer: 3000,
                        });
                        console.error('Erreur lors de la confirmation de la réservation', error);
                    });
            }
        });
    };


    return (
        <div>
            <h2>Confirmation de la réservation</h2>
            {reservation ? (
                <div>
                    <p>Date de départ : {reservation.datedep}</p>
                    <p>Date de retour : {reservation.dateretour}</p>
                    <p>Prix final : {reservation.prixfinal}</p>
                    <button onClick={handleConfirmReservation}>Confirmer la réservation</button>
                    {/* Affichez d'autres informations de réservation ici */}
                </div>
            ) : (
                <p>Réservation non trouvée</p>
            )}
        </div>
    );
}

export default ConfirmationReservation;