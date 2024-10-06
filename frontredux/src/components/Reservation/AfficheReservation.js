
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

// // Fonction pour convertir le format de date "dd-mm-yyyy" en un objet Date
// function parseDate(dateString) {
//     const parts = dateString.split("-");
//     const day = parseInt(parts[0]);
//     const month = parseInt(parts[1]) - 1; // Soustrayez 1 du mois pour l'index 0-11
//     const year = parseInt(parts[2]);
//     return new Date(year, month, day);
// }

// const AfficheReservation = () => {
//     const dispatch = useDispatch();
//     const { reservations, isLoading, error } = useSelector((state) => state.storereservation);
//     const [isConfirmed, setIsConfirmed] = useState(false);
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
//     const handleConfirmReservation = (reservationId) => {
//         axios.post(`http://localhost:3001/api/admin/${reservationId}`)
//             .then(response => {
//                 // La réservation a été confirmée
//                 console.log('Réservation confirmée avec succès');
//                 setIsConfirmed(true); // Désactiver le bouton
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

//         // Trie par nom de voiture
//         filteredReservations.sort((a, b) => a.voitureID.nomvoiture.localeCompare(b.voitureID.nomvoiture));

//         // Crée un objet de groupes de réservations par nom de voiture
//         const groupedReservations = filteredReservations.reduce((groups, reservation) => {
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
//                                             disabled={isConfirmed}
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
//         </div>
//     );
// };

// export default AfficheReservation;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteIcon from '@mui/icons-material/Delete';
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

// // Fonction pour convertir le format de date "dd-mm-yyyy" en un objet Date
// function parseDate(dateString) {
//     const parts = dateString.split("-");
//     const day = parseInt(parts[0]);
//     const month = parseInt(parts[1]) - 1;
//     const year = parseInt(parts[2]);
//     return new Date(year, month, day);
// }

// const AfficheReservation = () => {
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

//     const getFilteredAndSortedReservations = () => {
//         // Filtre par nom de voiture
//         const filteredReservations = reservations.filter(
//             (reservation) =>
//                 reservation.voitureID.nomvoiture.toLowerCase().includes(filterCriteria.vehicleName.toLowerCase())
//         );

//         // Trie par nom de voiture
//         filteredReservations.sort((a, b) => a.voitureID.nomvoiture.localeCompare(b.voitureID.nomvoiture));

//         // Crée un objet de groupes de réservations par nom de voiture
//         const groupedReservations = filteredReservations.reduce((groups, reservation) => {
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
//                             <TableCell>Voiture</TableCell>
//                             <TableCell>Nom</TableCell>
//                             <TableCell>Prénom</TableCell>
//                             <TableCell>Numéro de Permis</TableCell>
//                             <TableCell>Date de Naissance</TableCell>
//                             <TableCell>Date de Départ</TableCell>
//                             <TableCell>Date de Retour</TableCell>
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
//                                     <TableCell>{reservationA.voitureID.nomvoiture}</TableCell>
//                                     <TableCell>{reservationA.user.firstname}</TableCell>
//                                     <TableCell>{reservationA.user.lastname}</TableCell>
//                                     <TableCell>{reservationA.Npermis}</TableCell>
//                                     <TableCell>{reservationA.dateNaissance}</TableCell>
//                                     <TableCell>{reservationA.datedep}</TableCell>
//                                     <TableCell>{reservationA.dateretour}</TableCell>
//                                     <TableCell>{reservationA.prixfinal}</TableCell>
//                                     <TableCell>
//                                         <button onClick={() => handleDelete(reservationA._id)}>
//                                             <DeleteIcon className="icon" />
//                                         </button>
//                                     </TableCell>
//                                 </TableRow>
//                             ))
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default AfficheReservation;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteIcon from '@mui/icons-material/Delete';
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

// const AfficheReservation = () => {
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

//     const getFilteredAndSortedReservations = () => {
//         // Filtre par nom de voiture
//         const filteredReservations = reservations.filter(
//             (reservation) =>
//                 reservation.voitureID.nomvoiture.toLowerCase().includes(filterCriteria.vehicleName.toLowerCase())
//         );

//         // Trie par nom de voiture
//         filteredReservations.sort((a, b) => a.voitureID.nomvoiture.localeCompare(b.voitureID.nomvoiture));

//         // Crée un objet de groupes de réservations par nom de voiture
//         const groupedReservations = filteredReservations.reduce((groups, reservation) => {
//             const key = reservation.voitureID.nomvoiture;
//             if (!groups[key]) {
//                 groups[key] = [];
//             }
//             groups[key].push(reservation);
//             return groups;
//         }, {});

//         // Trie chaque groupe par date de départ
//         for (const key in groupedReservations) {
//             groupedReservations[key].sort((a, b) => new Date(a.datedep) - new Date(b.datedep));
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
//                             <TableCell>Voiture</TableCell>
//                             <TableCell>Nom</TableCell>
//                             <TableCell>Prénom</TableCell>
//                             <TableCell>Numéro de Permis</TableCell>
//                             <TableCell>Date de Naissance</TableCell>
//                             <TableCell>Date de Départ</TableCell>
//                             <TableCell>Date de Retour</TableCell>
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
//                                                 new Date(reservationA.datedep) <= new Date(reservationB.dateretour) &&
//                                                 new Date(reservationA.dateretour) >= new Date(reservationB.datedep)
//                                         )
//                                             ? 'yellow'
//                                             : 'transparent',
//                                     }}
//                                 >
//                                     <TableCell>{reservationA.voitureID.nomvoiture}</TableCell>
//                                     <TableCell>{reservationA.user.firstname}</TableCell>
//                                     <TableCell>{reservationA.user.lastname}</TableCell>
//                                     <TableCell>{reservationA.Npermis}</TableCell>
//                                     <TableCell>{reservationA.dateNaissance}</TableCell>
//                                     <TableCell>{reservationA.datedep}</TableCell>
//                                     <TableCell>{reservationA.dateretour}</TableCell>
//                                     <TableCell>{reservationA.prixfinal}</TableCell>
//                                     <TableCell>
//                                         <button onClick={() => handleDelete(reservationA._id)}>
//                                             <DeleteIcon className="icon" />
//                                         </button>
//                                     </TableCell>
//                                 </TableRow>
//                             ))
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default AfficheReservation;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteIcon from '@mui/icons-material/Delete';
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

// const AfficheReservation = () => {
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

//     const getFilteredAndSortedReservations = () => {
//         // Filtre par nom de voiture et confirm=true
//         const filteredReservations = reservations.filter(
//             (reservation) =>
//                 reservation.voitureID.nomvoiture.toLowerCase().includes(filterCriteria.vehicleName.toLowerCase()) &&
//                 reservation.confirm === true
//         );

//         // Trie par nom de voiture
//         filteredReservations.sort((a, b) => a.voitureID.nomvoiture.localeCompare(b.voitureID.nomvoiture));

//         // Crée un objet de groupes de réservations par nom de voiture
//         const groupedReservations = filteredReservations.reduce((groups, reservation) => {
//             const key = reservation.voitureID.nomvoiture;
//             if (!groups[key]) {
//                 groups[key] = [];
//             }
//             groups[key].push(reservation);
//             return groups;
//         }, {});

//         // Trie chaque groupe par date de départ
//         for (const key in groupedReservations) {
//             groupedReservations[key].sort((a, b) => new Date(a.datedep) - new Date(b.datedep));
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
//                             <TableCell>Voiture</TableCell>
//                             <TableCell>Nom</TableCell>
//                             <TableCell>Prénom</TableCell>
//                             <TableCell>Numéro de Permis</TableCell>
//                             <TableCell>Date de Naissance</TableCell>
//                             <TableCell>Date de Départ</TableCell>
//                             <TableCell>Date de Retour</TableCell>
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
//                                                 new Date(reservationA.datedep) <= new Date(reservationB.dateretour) &&
//                                                 new Date(reservationA.dateretour) >= new Date(reservationB.datedep)
//                                         )
//                                             ? 'yellow'
//                                             : 'transparent',
//                                     }}
//                                 >
//                                     <TableCell>{reservationA.voitureID.nomvoiture}</TableCell>
//                                     <TableCell>{reservationA.user.firstname}</TableCell>
//                                     <TableCell>{reservationA.user.lastname}</TableCell>
//                                     <TableCell>{reservationA.Npermis}</TableCell>
//                                     <TableCell>{reservationA.dateNaissance}</TableCell>
//                                     <TableCell>{reservationA.datedep}</TableCell>
//                                     <TableCell>{reservationA.dateretour}</TableCell>
//                                     <TableCell>{reservationA.prixfinal}</TableCell>
//                                     <TableCell>
//                                         <button onClick={() => handleDelete(reservationA._id)}>
//                                             <DeleteIcon className="icon" />
//                                         </button>
//                                     </TableCell>
//                                 </TableRow>
//                             ))
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default AfficheReservation;



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import { urlimage } from '../../Axios/Api';
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

// const AfficheReservation = () => {
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

//     // Fonction pour filtrer et trier les réservations
//     const getFilteredAndSortedReservations = () => {
//         // Filtre par nom de voiture
//         const filteredReservations = reservations.filter(
//             (reservation) =>
//                 reservation.voitureID.nomvoiture.toLowerCase().includes(filterCriteria.vehicleName.toLowerCase())
//         );

//         // Trie par nom de voiture
//         filteredReservations.sort((a, b) => a.voitureID.nomvoiture.localeCompare(b.voitureID.nomvoiture));

//         // Crée un objet de groupes de réservations par nom de voiture
//         const groupedReservations = filteredReservations.reduce((groups, reservation) => {
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
//                             {/* <TableCell>Numéro cin</TableCell>
//                             <TableCell>Numéro de Permis</TableCell>
//                             <TableCell>Date de Naissance</TableCell> */}
//                             <TableCell>imgCin</TableCell>
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
//                                     {/* <TableCell>{reservationA.numCin}</TableCell>
//                                     <TableCell>{reservationA.Npermis}</TableCell>
//                                     <TableCell>{reservationA.dateNaissance}</TableCell> */}
//                                     <TableCell>
//                                         <img
//                                             src={`${urlimage}${reservationA.imgCin}`}
//                                             alt={`Image de l image}`}
//                                             style={{ width: '150px' }}
//                                         />
//                                     </TableCell>
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


// export default AfficheReservation;



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { urlimage } from '../../Axios/Api';
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

// Composant de la modal d'agrandissement
const ImageModal = ({ imageUrl, alt, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

// Fonction pour convertir le format de date "dd-mm-yyyy" en un objet Date
function parseDate(dateString) {
    const parts = dateString.split("-");
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
}

const AfficheReservation = () => {
    const dispatch = useDispatch();
    const { reservations, isLoading, error } = useSelector((state) => state.storereservation);

    // État pour contrôler l'ouverture de la modal d'agrandissement
    const [enlargedImageUrl, setEnlargedImageUrl] = useState(null);

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
        const confirmedReservations = JSON.parse(localStorage.getItem('confirmedReservations') || '{}');
        setIsConfirmed(confirmedReservations);
    }, []);

    const openImageModal = (imageUrl) => {
        setEnlargedImageUrl(imageUrl);
    };

    const closeImageModal = () => {
        setEnlargedImageUrl(null);
    };

    const handleConfirmReservation = (reservationId) => {
        if (isConfirmed[reservationId]) {
            return;
        }

        axios.post(`http://localhost:3001/api/reservation/admin/${reservationId}`)
            .then(response => {
                console.log('Réservation confirmée avec succès');
                const updatedConfirmedReservations = {
                    ...isConfirmed,
                    [reservationId]: true,
                };
                setIsConfirmed(updatedConfirmedReservations);
                localStorage.setItem('confirmedReservations', JSON.stringify(updatedConfirmedReservations));
            })
            .catch(error => {
                console.error('Erreur lors de la confirmation de la réservation', error);
            });
    };

    const getFilteredAndSortedReservations = () => {
        const filteredReservations = reservations.filter(
            (reservation) =>
                reservation.voitureID.nomvoiture.toLowerCase().includes(filterCriteria.vehicleName.toLowerCase())
        );

        filteredReservations.sort((a, b) => a.voitureID.nomvoiture.localeCompare(b.voitureID.nomvoiture));

        const groupedReservations = filteredReservations.reduce((groups, reservation) => {
            const key = reservation.voitureID.nomvoiture;
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(reservation);
            return groups;
        }, {});

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
                            <TableCell>imgCin</TableCell>
                            <TableCell>imgPermis</TableCell>
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
                                    <TableCell>
                                        <img
                                            src={`${urlimage}${reservationA.imgCin}`}
                                            alt={`Image du cin`}
                                            style={{ width: '180px', cursor: 'pointer' }}
                                            onClick={() => openImageModal(`${urlimage}${reservationA.imgCin}`)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <img
                                            src={`${urlimage}${reservationA.imgCin1}`}
                                            alt={`Image du cin`}
                                            style={{ width: '170px', cursor: 'pointer' }}
                                            onClick={() => openImageModal(`${urlimage}${reservationA.imgCin1}`)}
                                        />
                                    </TableCell>
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
            {enlargedImageUrl && (
                <ImageModal imageUrl={enlargedImageUrl} alt="Image agrandie" onClose={closeImageModal} />
            )}
            <Link to="/admin">
                <Button variant="contained" color="primary">
                    l'accueil
                </Button>
            </Link>
        </div>
    );
};

export default AfficheReservation;