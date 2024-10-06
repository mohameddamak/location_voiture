// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import {
//     TableContainer,
//     Table,
//     TableBody,
//     TableRow,
//     TableCell,
//     TableHead,
//     Paper,
//     Button,
//     TextField,
// } from '@mui/material';
// import { deleteReservation, getReservations } from '../../features/reservationSlice';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// // Fonction pour convertir le format de date "dd-mm-yyyy" en un objet Date
// function parseDate(dateString) {
//     const parts = dateString.split("-");
//     const day = parseInt(parts[0]);
//     const month = parseInt(parts[1]) - 1; // Soustrayez 1 du mois pour l'index 0-11
//     const year = parseInt(parts[2]);
//     return new Date(year, month, day);
// }

// const AfficheJour = () => {
//     const dispatch = useDispatch();
//     const { reservations, isLoading, error } = useSelector((state) => state.storereservation);

//     useEffect(() => {
//         dispatch(getReservations());
//     }, [dispatch]);

//     const handleDelete = (id) => {
//         if (window.confirm("Supprimer la réservation ?")) {
//             dispatch(deleteReservation(id));
//         }
//     };

//     const [isConfirmed, setIsConfirmed] = useState({});

//     useEffect(() => {
//         // Lorsque le composant est monté, vérifiez s'il y a des réservations confirmées dans le stockage local
//         const confirmedReservations = JSON.parse(localStorage.getItem('confirmedReservations') || '{}');
//         setIsConfirmed(confirmedReservations);
//     }, []);

//     const handleConfirmReservation = (reservationId) => {
//         if (isConfirmed[reservationId]) {
//             return;
//         }

//         axios.post(`http://localhost:3001/api/reservation/admin/${reservationId}`)
//             .then(response => {
//                 // La réservation a été confirmée
//                 console.log('Réservation confirmée avec succès');
//                 // Mettez à jour l'état de confirmation pour cette réservation
//                 const updatedConfirmedReservations = {
//                     ...isConfirmed,
//                     [reservationId]: true,
//                 };
//                 setIsConfirmed(updatedConfirmedReservations);
//                 // Enregistrez les réservations confirmées dans le stockage local
//                 localStorage.setItem('confirmedReservations', JSON.stringify(updatedConfirmedReservations));
//                 // Mettez à jour l'état ou rafraîchissez la liste des réservations si nécessaire
//             })
//             .catch(error => {
//                 console.error('Erreur lors de la confirmation de la réservation', error);
//             });
//     };

//     // Filtrer les réservations faites aujourd'hui
//     const today = new Date();
//     const filteredReservations = reservations.filter((reservation) => {
//         const reservationDate = parseDate(reservation.datedep); // Assurez-vous que `reservation.datedep` est le champ contenant la date de départ.
//         return (
//             reservationDate.getDate() === today.getDate() &&
//             reservationDate.getMonth() === today.getMonth() &&
//             reservationDate.getFullYear() === today.getFullYear()
//         );
//     });

//     return (
//         <div>
//             <h1>Liste des Réservations</h1>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Voiture</TableCell>
//                             <TableCell>Nom</TableCell>
//                             <TableCell>Prénom</TableCell>
//                             <TableCell>Date de Départ</TableCell>
//                             <TableCell>Date de Retour</TableCell>
//                             <TableCell>Confirmé</TableCell>
//                             <TableCell>Prix Final</TableCell>
//                             <TableCell>Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {filteredReservations.map((reservation) => (
//                             <TableRow key={reservation._id}>
                                
//                                 <TableCell>{reservation.voitureID.nomvoiture}</TableCell>
//                                 <TableCell>{reservation.user.firstname}</TableCell>
//                                 <TableCell>{reservation.user.lastname}</TableCell>
//                                 <TableCell>{reservation.datedep}</TableCell>
//                                 <TableCell>{reservation.dateretour}</TableCell>
//                                 <TableCell>
//                                     {reservation.confirme ? (
//                                         <CheckIcon style={{ color: 'green' }} />
//                                     ) : (
//                                         <CloseIcon style={{ color: 'red' }} />
//                                     )}
//                                 </TableCell>
//                                 <TableCell>{reservation.prixfinal}</TableCell>
//                                 <TableCell>
//                                     <button onClick={() => handleDelete(reservation._id)}>
//                                         <DeleteIcon className="icon" />
//                                     </button>
//                                     <button
//                                         onClick={() => handleConfirmReservation(reservation._id)}
//                                         disabled={isConfirmed[reservation._id]}
//                                     >
//                                         Confirmer
//                                     </button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <Link to="/admin"> {/* Lien vers la page d'accueil */}
//                 <Button variant="contained" color="primary">
//                     l'accueil
//                 </Button>
//             </Link>
//         </div>
//     );
// };

// export default AfficheJour ;




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import {
//     TableContainer,
//     Table,
//     TableBody,
//     TableRow,
//     TableCell,
//     TableHead,
//     Paper,
//     Button,
//     TextField,
// } from '@mui/material';
// import { deleteReservation, getReservations } from '../../features/reservationSlice';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// // Fonction pour convertir le format de date "dd-mm-yyyy" en un objet Date
// function parseDate(dateString) {
//     const parts = dateString.split("-");
//     const day = parseInt(parts[0]);
//     const month = parseInt(parts[1]) - 1; // Soustrayez 1 du mois pour l'index 0-11
//     const year = parseInt(parts[2]);
//     return new Date(year, month, day);
// }

// const AfficheJour = () => {
//     const dispatch = useDispatch();
//     const { reservations, isLoading, error } = useSelector((state) => state.storereservation);

//     useEffect(() => {
//         dispatch(getReservations());
//     }, [dispatch]);

//     const handleDelete = (id) => {
//         if (window.confirm("Supprimer la réservation ?")) {
//             dispatch(deleteReservation(id));
//         }
//     };

//     const [isConfirmed, setIsConfirmed] = useState({});

//     useEffect(() => {
//         // Lorsque le composant est monté, vérifiez s'il y a des réservations confirmées dans le stockage local
//         const confirmedReservations = JSON.parse(localStorage.getItem('confirmedReservations') || '{}');
//         setIsConfirmed(confirmedReservations);
//     }, []);

//     const handleConfirmReservation = (reservationId) => {
//         if (isConfirmed[reservationId]) {
//             return;
//         }

//         axios.post(`http://localhost:3001/api/reservation/admin/${reservationId}`)
//             .then(response => {
//                 // La réservation a été confirmée
//                 console.log('Réservation confirmée avec succès');
//                 // Mettez à jour l'état de confirmation pour cette réservation
//                 const updatedConfirmedReservations = {
//                     ...isConfirmed,
//                     [reservationId]: true,
//                 };
//                 setIsConfirmed(updatedConfirmedReservations);
//                 // Enregistrez les réservations confirmées dans le stockage local
//                 localStorage.setItem('confirmedReservations', JSON.stringify(updatedConfirmedReservations));
//                 // Mettez à jour l'état ou rafraîchissez la liste des réservations si nécessaire
//             })
//             .catch(error => {
//                 console.error('Erreur lors de la confirmation de la réservation', error);
//             });
//     };

//     // Filtrer les réservations faites aujourd'hui
//     const today = new Date();
//     const filteredReservations = reservations.filter((reservation) => {
//         const reservationDate = parseDate(reservation.datedep); // Assurez-vous que `reservation.datedep` est le champ contenant la date de départ.
//         return (
//             reservationDate.getDate() === today.getDate() &&
//             reservationDate.getMonth() === today.getMonth() &&
//             reservationDate.getFullYear() === today.getFullYear()
//         );
//     });

//     return (
//         <div>
//             <h1>Liste des Réservations</h1>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Voiture</TableCell>
//                             <TableCell>Nom</TableCell>
//                             <TableCell>Prénom</TableCell>
//                             <TableCell>Date de Départ</TableCell>
//                             <TableCell>Date de Retour</TableCell>
//                             <TableCell>Confirmé</TableCell>
//                             <TableCell>Prix Final</TableCell>
//                             <TableCell>Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {filteredReservations.map((reservation) => (
//                             <TableRow key={reservation._id}>
//                                 <TableCell>{reservation.voitureID.nomvoiture}</TableCell>
//                                 <TableCell>{reservation.user.firstname}</TableCell>
//                                 <TableCell>{reservation.user.lastname}</TableCell>
//                                 <TableCell>{reservation.datedep}</TableCell>
//                                 <TableCell>{reservation.dateretour}</TableCell>
//                                 <TableCell>
//                                     {reservation.confirme ? (
//                                         <CheckIcon style={{ color: 'green' }} />
//                                     ) : (
//                                         <CloseIcon style={{ color: 'red' }} />
//                                     )}
//                                 </TableCell>
//                                 <TableCell>{reservation.prixfinal}</TableCell>
//                                 <TableCell>
//                                     <button onClick={() => handleDelete(reservation._id)}>
//                                         <DeleteIcon className="icon" />
//                                     </button>
//                                     <button
//                                         onClick={() => handleConfirmReservation(reservation._id)}
//                                         disabled={isConfirmed[reservation._id]}
//                                     >
//                                         Confirmer
//                                     </button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <Link to="/admin"> {/* Lien vers la page d'accueil */}
//                 <Button variant="contained" color="primary">
//                     l'accueil
//                 </Button>
//             </Link>
//         </div>
//     );
// };

// export default AfficheJour;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import {
//     TableContainer,
//     Table,
//     TableBody,
//     TableRow,
//     TableCell,
//     TableHead,
//     Paper,
//     Button,
//     TextField,
// } from '@mui/material';
// import { deleteReservation, getReservations } from '../../features/reservationSlice';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// // Fonction pour convertir le format de date "dd-mm-yyyy" en un objet Date
// function parseDate(dateString) {
//     const parts = dateString.split("-");
//     const day = parseInt(parts[0]);
//     const month = parseInt(parts[1]) - 1; // Soustrayez 1 du mois pour l'index 0-11
//     const year = parseInt(parts[2]);
//     return new Date(year, month, day);
// }

// const AfficheJour = () => {
//     const dispatch = useDispatch();
//     const { reservations, isLoading, error } = useSelector((state) => state.storereservation);

//     useEffect(() => {
//         dispatch(getReservations());
//     }, [dispatch]);

//     const handleDelete = (id) => {
//         if (window.confirm("Supprimer la réservation ?")) {
//             dispatch(deleteReservation(id));
//         }
//     };

//     const [isConfirmed, setIsConfirmed] = useState({});

//     useEffect(() => {
//         // Lorsque le composant est monté, vérifiez s'il y a des réservations confirmées dans le stockage local
//         const confirmedReservations = JSON.parse(localStorage.getItem('confirmedReservations') || '{}');
//         setIsConfirmed(confirmedReservations);
//     }, []);

//     const handleConfirmReservation = (reservationId) => {
//         if (isConfirmed[reservationId]) {
//             return;
//         }

//         axios.post(`http://localhost:3001/api/reservation/admin/${reservationId}`)
//             .then(response => {
//                 // La réservation a été confirmée
//                 console.log('Réservation confirmée avec succès');
//                 // Mettez à jour l'état de confirmation pour cette réservation
//                 const updatedConfirmedReservations = {
//                     ...isConfirmed,
//                     [reservationId]: true,
//                 };
//                 setIsConfirmed(updatedConfirmedReservations);
//                 // Enregistrez les réservations confirmées dans le stockage local
//                 localStorage.setItem('confirmedReservations', JSON.stringify(updatedConfirmedReservations));
//                 // Mettez à jour l'état ou rafraîchissez la liste des réservations si nécessaire
//             })
//             .catch(error => {
//                 console.error('Erreur lors de la confirmation de la réservation', error);
//             });
//     };

//     // Filtrer les réservations faites aujourd'hui
//     const today = new Date();
//     const filteredReservations = reservations.filter((reservation) => {
//         const reservationDate = parseDate(reservation.datedep); // Assurez-vous que `reservation.datedep` est le champ contenant la date de départ.
//         return (
//             reservationDate.getDate() === today.getDate() &&
//             reservationDate.getMonth() === today.getMonth() &&
//             reservationDate.getFullYear() === today.getFullYear()
//         );
//     });

//     return (
//         <div>
//             <h1>Liste des Réservations</h1>
//             <div style={{ maxHeight: '400px', overflow: 'auto' }}>
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Voiture</TableCell>
//                                 <TableCell>Nom</TableCell>
//                                 <TableCell>Prénom</TableCell>
//                                 <TableCell>Date de Départ</TableCell>
//                                 <TableCell>Date de Retour</TableCell>
//                                 <TableCell>Confirmé</TableCell>
//                                 <TableCell>Prix Final</TableCell>
//                                 <TableCell>Actions</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {filteredReservations.map((reservation) => (
//                                 <TableRow key={reservation._id}>
//                                     <TableCell>{reservation.voitureID.nomvoiture}</TableCell>
//                                     <TableCell>{reservation.user.firstname}</TableCell>
//                                     <TableCell>{reservation.user.lastname}</TableCell>
//                                     <TableCell>{reservation.datedep}</TableCell>
//                                     <TableCell>{reservation.dateretour}</TableCell>
//                                     <TableCell>
//                                         {reservation.confirme ? (
//                                             <CheckIcon style={{ color: 'green' }} />
//                                         ) : (
//                                             <CloseIcon style={{ color: 'red' }} />
//                                         )}
//                                     </TableCell>
//                                     <TableCell>{reservation.prixfinal}</TableCell>
//                                     <TableCell>
//                                         <button onClick={() => handleDelete(reservation._id)}>
//                                             <DeleteIcon className="icon" />
//                                         </button>
//                                         <button
//                                             onClick={() => handleConfirmReservation(reservation._id)}
//                                             disabled={isConfirmed[reservation._id]}
//                                         >
//                                             Confirmer
//                                         </button>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </div>
//             <Link to="/admin"> {/* Lien vers la page d'accueil */}
//                 <Button variant="contained" color="primary">
//                     l'accueil
//                 </Button>
//             </Link>
//         </div>
//     );
// };

// export default AfficheJour;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import {
//     TableContainer,
//     Table,
//     TableBody,
//     TableRow,
//     TableCell,
//     TableHead,
//     Paper,
//     Button,
//     TextField,
// } from '@mui/material';
// import { deleteReservation, getReservations } from '../../features/reservationSlice';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// // Fonction pour convertir le format de date "dd-mm-yyyy" en un objet Date
// function parseDate(dateString) {
//     const parts = dateString.split("-");
//     const day = parseInt(parts[0]);
//     const month = parseInt(parts[1]) - 1; // Soustrayez 1 du mois pour l'index 0-11
//     const year = parseInt(parts[2]);
//     return new Date(year, month, day);
// }

// const AfficheJour = () => {
//     const dispatch = useDispatch();
//     const { reservations, isLoading, error } = useSelector((state) => state.storereservation);

//     useEffect(() => {
//         dispatch(getReservations());
//     }, [dispatch]);

//     const handleDelete = (id) => {
//         if (window.confirm("Supprimer la réservation ?")) {
//             dispatch(deleteReservation(id));
//         }
//     };

//     const [filterCriteria, setFilterCriteria] = useState({
//         vehicleName: '',
//     });

//     const handleFilterChange = (event) => {
//         const { name, value } = event.target;
//         setFilterCriteria({
//             ...filterCriteria,
//             [name]: value,
//         });
//     };

//     const [isConfirmed, setIsConfirmed] = useState({});

//     useEffect(() => {
//         // Lorsque le composant est monté, vérifiez s'il y a des réservations confirmées dans le stockage local
//         const confirmedReservations = JSON.parse(localStorage.getItem('confirmedReservations') || '{}');
//         setIsConfirmed(confirmedReservations);
//     }, []);

//     const handleConfirmReservation = (reservationId) => {
//         if (isConfirmed[reservationId]) {
//             return;
//         }

//         axios.post(`http://localhost:3001/api/reservation/admin/${reservationId}`)
//             .then(response => {
//                 // La réservation a été confirmée
//                 console.log('Réservation confirmée avec succès');
//                 // Mettez à jour l'état de confirmation pour cette réservation
//                 const updatedConfirmedReservations = {
//                     ...isConfirmed,
//                     [reservationId]: true,
//                 };
//                 setIsConfirmed(updatedConfirmedReservations);
//                 // Enregistrez les réservations confirmées dans le stockage local
//                 localStorage.setItem('confirmedReservations', JSON.stringify(updatedConfirmedReservations));
//                 // Mettez à jour l'état ou rafraîchissez la liste des réservations si nécessaire
//             })
//             .catch(error => {
//                 console.error('Erreur lors de la confirmation de la réservation', error);
//             });
//     };

//     const getFilteredAndSortedReservations = () => {
//         // Filtre par nom de voiture
//         const filteredReservations = reservations.filter(
//             (reservation) =>
//                 reservation.voitureID.nomvoiture.toLowerCase().includes(filterCriteria.vehicleName.toLowerCase())
//         );

//         // Filtre les réservations pour aujourd'hui
//         const today = new Date();
//         today.setHours(0, 0, 0, 0); // Réglez l'heure à minuit pour comparer les dates
//         const reservationsForToday = filteredReservations.filter((reservation) => {
//             const departureDate = parseDate(reservation.datedep);
//             return departureDate.toDateString() === today.toDateString();
//         });

//         // Trie par nom de voiture
//         reservationsForToday.sort((a, b) => a.voitureID.nomvoiture.localeCompare(b.voitureID.nomvoiture));

//         // Crée un objet de groupes de réservations par nom de voiture
//         const groupedReservations = reservationsForToday.reduce((groups, reservation) => {
//             const key = reservation.voitureID.nomvoiture;
//             if (!groups[key]) {
//                 groups[key] = [];
//             }
//             groups[key].push(reservation);
//             return groups;
//         }, {});

//         // Trie chaque groupe par date de départ
//         for (const key in groupedReservations) {
//             groupedReservations[key].sort((a, b) => parseDate(a.datedep) - parseDate(b.datedep));
//         }

//         return groupedReservations;
//     };

//     return (
//         <div>
//             <h1>Liste des Réservations</h1>
//             <div>
//                 <TextField
//                     name="vehicleName"
//                     label="Nom de Voiture"
//                     value={filterCriteria.vehicleName}
//                     onChange={handleFilterChange}
//                 />
//             </div>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Marque</TableCell>
//                             <TableCell>Voiture</TableCell>
//                             <TableCell>Nom</TableCell>
//                             <TableCell>Prénom</TableCell>
//                             <TableCell>Numéro de Permis</TableCell>
//                             <TableCell>Date de Naissance</TableCell>
//                             <TableCell>Date de Départ</TableCell>
//                             <TableCell>Date de Retour</TableCell>
//                             <TableCell>Confirmé</TableCell>
//                             <TableCell>Prix Final</TableCell>
//                             <TableCell>Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {Object.keys(getFilteredAndSortedReservations()).map((vehicleName) => (
//                             getFilteredAndSortedReservations()[vehicleName].map((reservationA) => (
//                                 <TableRow
//                                     key={reservationA._id}
//                                     style={{
//                                         background: getFilteredAndSortedReservations()[vehicleName].some(
//                                             (reservationB) =>
//                                                 reservationA !== reservationB &&
//                                                 parseDate(reservationA.datedep) <= parseDate(reservationB.dateretour) &&
//                                                 parseDate(reservationA.dateretour) >= parseDate(reservationB.datedep)
//                                         )
//                                             ? 'yellow'
//                                             : 'transparent',
//                                     }}
//                                 >
//                                     <TableCell>{reservationA.voitureID.marque.nommarque}</TableCell>
//                                     <TableCell>{reservationA.voitureID.nomvoiture}</TableCell>

//                                     <TableCell>{reservationA.user.firstname}</TableCell>
//                                     <TableCell>{reservationA.user.lastname}</TableCell>
//                                     <TableCell>{reservationA.Npermis}</TableCell>
//                                     <TableCell>{reservationA.dateNaissance}</TableCell>
//                                     <TableCell>{reservationA.datedep}</TableCell>
//                                     <TableCell>{reservationA.dateretour}</TableCell>
//                                     <TableCell>
//                                         {reservationA.confirme ? (
//                                             <CheckIcon style={{ color: 'green' }} />
//                                         ) : (
//                                             <CloseIcon style={{ color: 'red' }} />
//                                         )}
//                                     </TableCell>
//                                     <TableCell>{reservationA.prixfinal}</TableCell>
//                                     <TableCell>
//                                         <button onClick={() => handleDelete(reservationA._id)}>
//                                             <DeleteIcon className="icon" />
//                                         </button>
//                                         <button
//                                             onClick={() => handleConfirmReservation(reservationA._id)}
//                                             disabled={isConfirmed[reservationA._id]}
//                                         >
//                                             Confirmer
//                                         </button>
//                                     </TableCell>
//                                 </TableRow>
//                             ))
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <Link to="/admin"> {/* Lien vers la page d'accueil */}
//                 <Button variant="contained" color="primary">
//                     l'accueil
//                 </Button>
//             </Link>
//         </div>
//     );
// };

// export default AfficheJour;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    Paper,
    Button,
    TextField,
} from '@mui/material';
import { deleteReservation, getReservations } from '../../features/reservationSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Fonction pour convertir le format de date "dd-mm-yyyy" en un objet Date
function parseDate(dateString) {
    const parts = dateString.split("-");
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Soustrayez 1 du mois pour l'index 0-11
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
}

const AfficheJour = () => {
    const dispatch = useDispatch();
    const { reservations, isLoading, error } = useSelector((state) => state.storereservation);

    useEffect(() => {
        dispatch(getReservations());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm("Supprimer la réservation ?")) {
            dispatch(deleteReservation(id));
        }
    };

    const [filterCriteria, setFilterCriteria] = useState({
        vehicleName: '',
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({
            ...filterCriteria,
            [name]: value,
        });
    };

    const [isConfirmed, setIsConfirmed] = useState({});

    useEffect(() => {
        // Lorsque le composant est monté, vérifiez s'il y a des réservations confirmées dans le stockage local
        const confirmedReservations = JSON.parse(localStorage.getItem('confirmedReservations') || '{}');
        setIsConfirmed(confirmedReservations);
    }, []);

    const today = new Date();
    today.setHours(8, 0, 0, 0); // Aujourd'hui à 8h du matin

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Lendemain

    const reservationsFor24Hours = reservations.filter((reservation) => {
        const departureDate = parseDate(reservation.datedep);
        return departureDate >= today && departureDate < tomorrow;
    });

    const handleConfirmReservation = (reservationId) => {
        if (isConfirmed[reservationId]) {
            return;
        }

        axios.post(`http://localhost:3001/api/reservation/admin/${reservationId}`)
            .then(response => {
                // La réservation a été confirmée
                console.log('Réservation confirmée avec succès');
                // Mettez à jour l'état de confirmation pour cette réservation
                const updatedConfirmedReservations = {
                    ...isConfirmed,
                    [reservationId]: true,
                };
                setIsConfirmed(updatedConfirmedReservations);
                // Enregistrez les réservations confirmées dans le stockage local
                localStorage.setItem('confirmedReservations', JSON.stringify(updatedConfirmedReservations));
                // Mettez à jour l'état ou rafraîchissez la liste des réservations si nécessaire
            })
            .catch(error => {
                console.error('Erreur lors de la confirmation de la réservation', error);
            });
    };

    const getFilteredAndSortedReservations = () => {
        // Filtre par nom de voiture
        const filteredReservations = reservationsFor24Hours.filter(
            (reservation) =>
                reservation.voitureID.nomvoiture.toLowerCase().includes(filterCriteria.vehicleName.toLowerCase())
        );

        // Trie par nom de voiture
        filteredReservations.sort((a, b) => a.voitureID.nomvoiture.localeCompare(b.voitureID.nomvoiture));

        // Crée un objet de groupes de réservations par nom de voiture
        const groupedReservations = filteredReservations.reduce((groups, reservation) => {
            const key = reservation.voitureID.nomvoiture;
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(reservation);
            return groups;
        }, {});

        // Trie chaque groupe par date de départ
        for (const key in groupedReservations) {
            groupedReservations[key].sort((a, b) => parseDate(a.datedep) - parseDate(b.datedep));
        }

        return groupedReservations;
    };

    return (
        <div>
            <h1>Liste des Réservations</h1>
            <div>
                <TextField
                    name="vehicleName"
                    label="Nom de Voiture"
                    value={filterCriteria.vehicleName}
                    onChange={handleFilterChange}
                />
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Marque</TableCell>
                            <TableCell>Voiture</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Prénom</TableCell>
                            <TableCell>Numéro de Permis</TableCell>
                            <TableCell>Date de Naissance</TableCell>
                            <TableCell>Date de Départ</TableCell>
                            <TableCell>Date de Retour</TableCell>
                            <TableCell>Confirmé</TableCell>
                            <TableCell>Prix Final</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(getFilteredAndSortedReservations()).map((vehicleName) => (
                            getFilteredAndSortedReservations()[vehicleName].map((reservationA) => (
                                <TableRow
                                    key={reservationA._id}
                                    style={{
                                        background: getFilteredAndSortedReservations()[vehicleName].some(
                                            (reservationB) =>
                                                reservationA !== reservationB &&
                                                parseDate(reservationA.datedep) <= parseDate(reservationB.dateretour) &&
                                                parseDate(reservationA.dateretour) >= parseDate(reservationB.datedep)
                                        )
                                            ? 'yellow'
                                            : 'transparent',
                                    }}
                                >
                                    <TableCell>{reservationA.voitureID.marque.nommarque}</TableCell>
                                    <TableCell>{reservationA.voitureID.nomvoiture}</TableCell>
                                    <TableCell>{reservationA.user.firstname}</TableCell>
                                    <TableCell>{reservationA.user.lastname}</TableCell>
                                    <TableCell>{reservationA.Npermis}</TableCell>
                                    <TableCell>{reservationA.dateNaissance}</TableCell>
                                    <TableCell>{reservationA.datedep}</TableCell>
                                    <TableCell>{reservationA.dateretour}</TableCell>
                                    <TableCell>
                                        {reservationA.confirme ? (
                                            <CheckIcon style={{ color: 'green' }} />
                                        ) : (
                                            <CloseIcon style={{ color: 'red' }} />
                                        )}
                                    </TableCell>
                                    <TableCell>{reservationA.prixfinal}</TableCell>
                                    <TableCell>
                                        <button onClick={() => handleDelete(reservationA._id)}>
                                            <DeleteIcon className="icon" />
                                        </button>
                                        <button
                                            onClick={() => handleConfirmReservation(reservationA._id)}
                                            disabled={isConfirmed[reservationA._id]}
                                        >
                                            Confirmer
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to="/admin"> {/* Lien vers la page d'accueil */}
                <Button variant="contained" color="primary">
                    l'accueil
                </Button>
            </Link>
        </div>
    );
};

export default AfficheJour;