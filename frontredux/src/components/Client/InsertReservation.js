
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import React, { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { createReservation } from '../../features/reservationSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';


// const InsertReservation = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [datedep, setDatep] = useState('');
//   const [dateretour, setDateretour] = useState('');
//   const [imgCin, setImgcin] = useState('');
//   const [Npermis, setNpermis] = useState('');
//   const [dateNaissance, setDateNaissance] = useState('');
//   const { voitureId } = useParams(); // Utilisation de useParams pour extraire l'ID de la voiture
  
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const navigate = useNavigate();

//   const [disabledDates, setDisabledDates] = useState([]);

//   useEffect(() => {
//     console.log("useEffect is triggered");
//     // const fetchReservations = async () => {
//     //   try {
//     //     const response = await fetch(`http://localhost:3001/api/reservation/voiture/${voitureId}`);
      
//     //     if (!response.ok) {
//     //       throw new Error('Erreur lors de la récupération des réservations précédentes.');
//     //     }
//     //     const data = await response.json();
//     //     console.log("data:", data); // Maintenant, vous pouvez accéder à 'data'
//     //     const previousReservations = data;
//     //     const disabledDatesArray = previousReservations.flatMap((reservation) => [
//     //       [new Date(reservation.datedep), new Date(reservation.dateretour)],
//     //     ]);
//     //     setDisabledDates(disabledDatesArray);
//     //     console.log("disabledDates:", disabledDatesArray);
//     //   } catch (error) {
//     //     console.error(error);
//     //   }
//     // };
//     const fetchReservations = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/api/reservation/voiture/${voitureId}`);
      
//         if (!response.ok) {
//           throw new Error('Erreur lors de la récupération des réservations précédentes.');
//         }
//         const data = await response.json();
//         console.log("data:", data); // Now you can access 'data'
//         const previousReservations = data;
//         const disabledDatesArray = previousReservations.map((reservation) => {
//           // Convert the date format to 'dd-MM-yyyy'
//           const datedep = format(new Date(reservation.datedep), 'dd-MM-yyyy');
//           const dateretour = format(new Date(reservation.dateretour), 'dd-MM-yyyy');
//           return [datedep, dateretour];
//         });
//         setDisabledDates(disabledDatesArray);
//         console.log("disabledDates:", disabledDatesArray);
//       } catch (error) {
//         console.error(error);
//       }
//     };
   
    
//     fetchReservations();
//   }, [voitureId]); // Utilisez voitureId comme dépendance pour recharger les données en fonction de l'ID de la voiture

//   const handleDateChange = (date) => {
//     if (!datedep) {
//       setDatep(format(date, 'dd-MM-yyyy'));
//     } else {
//       setDateretour(format(date, 'dd-MM-yyyy'));
//     }
//   };

//   const isDateReserved = (date) => {
//     return disabledDates.some(
//       (disabledDate) =>
//         date >= disabledDate[0] && date <= disabledDate[1]
//     );
//   };

//   const highlightedDates = disabledDates.map((reservedDate) => {
//     return {
//       date: reservedDate[0],
//       color: 'red',
//     };
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === true) {
//       const reservation = {
//         datedep: datedep,
//         dateretour: dateretour,
//         imgCin: imgCin,
//         Npermis: Npermis,
//         dateNaissance: dateNaissance,
//         voitureID: voitureId,
//         user: user ? user._id : null,
//       };
//       dispatch(createReservation(reservation))
//         .then((res) => {
//           console.log('Insert OK', res);
//           const reservationId = res.payload._id;
//           console.log('ID de la réservation:', reservationId);
//           setDatep('');
//           setDateretour('');
//           setImgcin('');
//           setNpermis('');
//           setDateNaissance('');
//           navigate(`/reservation/confirm/${reservationId}`);
//         })
//         .catch((error) => {
//           console.log(error);
//           alert('Erreur ! Insertion non effectuée');
//         });
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="border p-4 rounded" style={{ margin: '200px 0' }}>
//         <h2>Réservation</h2>
//         <form onSubmit={handleSubmit}>
//           <Row className="mb-2">
//             <Form.Group as={Col} md="6">
//               <Form.Label>Nom de l'utilisateur</Form.Label>
//               <Form.Control readOnly type="text" value={user ? user.firstname : ''} />
//             </Form.Group>

//             <Form.Group as={Col} md="6">
//               <Form.Label>Prénom de l'utilisateur</Form.Label>
//               <Form.Control readOnly type="text" value={user ? user.lastname : ''} />
//             </Form.Group>
//           </Row>

//           <Row className="mb-2">
//             <Form.Group as={Col} md="12" className="d-flex flex-column align-items-center text-center">
//               <Form.Label>Date</Form.Label>
//               <div className="mx-auto">
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={handleDateChange}
//                   dateFormat="dd-MM-yyyy"
//                   placeholderText="Sélectionnez la date"
//                   customInput={
//                     <CustomDateInput isReserved={isDateReserved(selectedDate)} />
//                   }
//                   highlightDates={highlightedDates}
//                 />
//               </div>
//             </Form.Group>
//           </Row>

//           <Row className="mb-2">
//             <Form.Group as={Col} md="6">
//               <Form.Label>Date Départ</Form.Label>
//               <Form.Control
//                 readOnly
//                 type="text"
//                 placeholder="Date de départ"
//                 value={datedep}
//               />
//             </Form.Group>
//             <Form.Group as={Col} md="6">
//               <Form.Label>Date Retour</Form.Label>
//               <Form.Control
//                 readOnly
//                 type="text"
//                 value={dateretour}
//               />
//             </Form.Group>
//           </Row>

//           <Row className="mb-2">
//             <Form.Group as={Col} md="6">
//               <Form.Label>Image de la CIN</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Image CIN"
//                 value={imgCin}
//                 onChange={(e) => setImgcin(e.target.value)}
//               />
//               <Form.Control.Feedback type="invalid">
//                 Saisir l'image CIN
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="6">
//               <Form.Label>Numéro de Permis</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Numéro de Permis"
//                 value={Npermis}
//                 onChange={(e) => setNpermis(e.target.value)}
//               />
//               <Form.Control.Feedback type="invalid">
//                 Saisir le numéro de Permis
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} md="12">
//               <Form.Label>Date de Naissance</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="DD-MM-YYYY"
//                 value={dateNaissance}
//                 onChange={(e) => setDateNaissance(e.target.value)}
//               />
//               <Form.Control.Feedback type="invalid">
//                 Saisir la Date de Naissance
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
//           <div className="text-center">
//             <Button variant="primary" type="submit">
//               Confirmer
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const CustomDateInput = ({ isReserved, value, onClick }) => (
//   <div>
//     <input
//       type="text"
//       value={value}
//       onClick={onClick}
//       style={{ color: isReserved ? 'red' : 'black' }}
//     />
//   </div>
// );

// export default InsertReservation;




// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import React, { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { createReservation } from '../../features/reservationSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';

// const InsertReservation = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [datedep, setDatep] = useState('');
//   const [dateretour, setDateretour] = useState('');
//   const [imgCin, setImgcin] = useState('');
//   const [Npermis, setNpermis] = useState('');
//   const [dateNaissance, setDateNaissance] = useState('');
//   const { voitureId } = useParams(); // Utilisation de useParams pour extraire l'ID de la voiture
  
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const navigate = useNavigate();

//   const [disabledDates, setDisabledDates] = useState([]);

//   useEffect(() => {
//     console.log("useEffect is triggered");

//     const fetchReservations = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/api/reservation/voiture/${voitureId}`);
      
//         if (!response.ok) {
//           throw Error('Erreur lors de la récupération des réservations précédentes.');
//         }
//         const data = await response.json();
//         console.log("data:", data);
//         const previousReservations = data;
//         const disabledDatesArray = previousReservations.map((reservation) => {
//           // Convert the date format to 'dd-MM-yyyy'
//           const datedep = format(new Date(reservation.datedep), 'dd-MM-yyyy');
//           const dateretour = format(new Date(reservation.dateretour), 'dd-MM-yyyy');
//           return [datedep, dateretour];
//         });
//         setDisabledDates(disabledDatesArray);
//         console.log("disabledDates:", disabledDatesArray);
//       } catch (error) {
//         console.error(error);
//       }
//     };
   
//     fetchReservations();
//   }, [voitureId]);

//   const handleDateChange = (date) => {
//     if (!datedep) {
//       setDatep(format(date, 'dd-MM-yyyy'));
//     } else {
//       setDateretour(format(date, 'dd-MM-yyyy'));
//     }
//   };

//   const isDateReserved = (date) => {
//     return disabledDates.some(
//       (disabledDate) =>
//         date >= disabledDate[0] && date <= disabledDate[1]
//     );
//   };

//   const highlightedDates = disabledDates.map((reservedDate) => {
//     return {
//       date: reservedDate[0],
//       color: 'red',
//     };
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === true) {
//       const reservation = {
//         datedep: datedep,
//         dateretour: dateretour,
//         imgCin: imgCin,
//         Npermis: Npermis,
//         dateNaissance: dateNaissance,
//         voitureID: voitureId,
//         user: user ? user._id : null,
//       };
//       dispatch(createReservation(reservation))
//         .then((res) => {
//           console.log('Insert OK', res);
//           const reservationId = res.payload._id;
//           console.log('ID de la réservation:', reservationId);
//           setDatep('');
//           setDateretour('');
//           setImgcin('');
//           setNpermis('');
//           setDateNaissance('');
//           navigate(`/reservation/confirm/${reservationId}`);
//         })
//         .catch((error) => {
//           console.log(error);
//           alert('Erreur ! Insertion non effectuée');
//         });
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="border p-4 rounded" style={{ margin: '200px 0' }}>
//         <h2>Réservation</h2>
//         <form onSubmit={handleSubmit}>
//           <Row className="mb-2">
//             <Form.Group as={Col} md="6">
//               <Form.Label>Nom de l'utilisateur</Form.Label>
//               <Form.Control readOnly type="text" value={user ? user.firstname : ''} />
//             </Form.Group>

//             <Form.Group as={Col} md="6">
//               <Form.Label>Prénom de l'utilisateur</Form.Label>
//               <Form.Control readOnly type="text" value={user ? user.lastname : ''} />
//             </Form.Group>
//           </Row>

//           <Row className="mb-2">
//             <Form.Group as={Col} md="12" className="d-flex flex-column align-items-center text-center">
//               <Form.Label>Date</Form.Label>
//               <div className="mx-auto">
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={handleDateChange}
//                   dateFormat="dd-MM-yyyy"
//                   placeholderText="Sélectionnez la date"
//                   customInput={
//                     <CustomDateInput isReserved={isDateReserved(selectedDate)} />
//                   }
//                   highlightDates={highlightedDates}
//                 />
//               </div>
//             </Form.Group>
//           </Row>

//           <Row className="mb-2">
//             <Form.Group as={Col} md="6">
//               <Form.Label>Date Départ</Form.Label>
//               <Form.Control
//                 readOnly
//                 type="text"
//                 placeholder="Date de départ"
//                 value={datedep}
//               />
//             </Form.Group>
//             <Form.Group as={Col} md="6">
//               <Form.Label>Date Retour</Form.Label>
//               <Form.Control
//                 readOnly
//                 type="text"
//                 value={dateretour}
//               />
//             </Form.Group>
//           </Row>

//           <Row className="mb-2">
//             <Form.Group as={Col} md="6">
//               <Form.Label>Image de la CIN</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Image CIN"
//                 value={imgCin}
//                 onChange={(e) => setImgcin(e.target.value)}
//               />
//               <Form.Control.Feedback type="invalid">
//                 Saisir l'image CIN
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="6">
//               <Form.Label>Numéro de Permis</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Numéro de Permis"
//                 value={Npermis}
//                 onChange={(e) => setNpermis(e.target.value)}
//               />
//               <Form.Control.Feedback type="invalid">
//                 Saisir le numéro de Permis
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} md="12">
//               <Form.Label>Date de Naissance</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="DD-MM-YYYY"
//                 value={dateNaissance}
//                 onChange={(e) => setDateNaissance(e.target.value)}
//               />
//               <Form.Control.Feedback type="invalid">
//                 Saisir la Date de Naissance
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
//           <div className="text-center">
//             <Button variant="primary" type="submit">
//               Confirmer
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const CustomDateInput = ({ isReserved, value, onClick }) => (
//   <div>
//     <input
//       type="text"
//       value={value}
//       onClick={onClick}
//       style={{ color: isReserved ? 'red' : 'black' }}
//     />
//   </div>
// );

// export default InsertReservation;




import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from '../../features/reservationSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { buildFormData } from '../../utils/ConvertFormData';

const InsertReservation = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [datedep, setDatep] = useState('');
    const [dateretour, setDateretour] = useState('');
    const [numCin, setNumcin] = useState('');
    const [imgCin, setImgcin] = useState('');
    const [imgCin1, setImgcin1] = useState('');
    const [Npermis, setNpermis] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const { voitureId } = useParams(); // Utilisation de useParams pour extraire l'ID de la voiture

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const [disabledDates, setDisabledDates] = useState([]);

    useEffect(() => {
        console.log("useEffect is triggered");

        const fetchReservations = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/reservation/voiture/${voitureId}`);

                if (!response.ok) {
                    throw Error('Erreur lors de la récupération des réservations précédentes.');
                }
                const data = await response.json();
                console.log("data:", data);
                const previousReservations = data;
                const disabledDatesArray = previousReservations.map((reservation) => {
                    // Convert the date format to 'dd-MM-yyyy'
                    const datedep = format(new Date(reservation.datedep), 'dd-MM-yyyy');
                    const dateretour = format(new Date(reservation.dateretour), 'dd-MM-yyyy');
                    return [datedep, dateretour];
                });
                setDisabledDates(disabledDatesArray);
                console.log("disabledDates:", disabledDatesArray);
            } catch (error) {
                console.error(error);
            }
        };

        fetchReservations();
    }, [voitureId]);

    const handleDateChange = (date) => {
        if (!datedep) {
            setDatep(format(date, 'dd-MM-yyyy'));
        } else {
            setDateretour(format(date, 'dd-MM-yyyy'));
        }
    };

    const isDateReserved = (date) => {
        return disabledDates.some(
            (disabledDate) =>
                date >= disabledDate[0] && date <= disabledDate[1]
        );
    };

    const highlightedDates = disabledDates.map((reservedDate) => {
        return {
            date: reservedDate[0],
            color: 'red',
        };
    });
    const handleImageChange = (event, key) => {
        const file = event.target.files[0];

        if (key === "cin") {
            setImgcin(file)
        }
        if (key === "cin1") {
            setImgcin1(file)
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const images = [imgCin, imgCin1]
            const reservation = {
                datedep: datedep,
                dateretour: dateretour,
                numCin: numCin,
                Npermis: Npermis,
                dateNaissance: dateNaissance,
                voitureID: voitureId,
                user: user ? user._id : null,
            };
            const formData = new FormData();
            buildFormData(formData, reservation);
            for (let index = 0; index < images.length; index++) {
                formData.append("images", images[index]);
            }
            console.log("formData", formData.get("images"));

            dispatch(createReservation(formData))
                .then((res) => {
                    console.log('Insert OK', res);
                    const reservationId = res.payload._id;
                    console.log('ID de la réservation:', reservationId);
                    setDatep('');
                    setDateretour('');
                    setImgcin('');
                    setNpermis('');
                    setDateNaissance('');
                    navigate(`/reservation/confirm/${reservationId}`);
                })
                .catch((error) => {
                    console.log(error);
                    alert('Erreur ! Insertion non effectuée');
                });
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="border p-4 rounded" style={{ margin: '200px 0' }}>
                <h2>Réservation</h2>
                <form onSubmit={handleSubmit}>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="6">
                            <Form.Label>Nom de l'utilisateur</Form.Label>
                            <Form.Control readOnly type="text" value={user ? user.firstname : ''} />
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                            <Form.Label>Prénom de l'utilisateur</Form.Label>
                            <Form.Control readOnly type="text" value={user ? user.lastname : ''} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-2">
                        <Form.Group as={Col} md="12" className="d-flex flex-column align-items-center text-center">
                            <Form.Label>Date</Form.Label>
                            <div className="mx-auto">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd-MM-yyyy"
                                    placeholderText="Sélectionnez la date"
                                    customInput={
                                        <CustomDateInput isReserved={isDateReserved(selectedDate)} />
                                    }
                                    highlightDates={highlightedDates}
                                />
                            </div>
                        </Form.Group>
                    </Row>

                    <Row className="mb-2">
                        <Form.Group as={Col} md="6">
                            <Form.Label>Date Départ</Form.Label>
                            <Form.Control
                                readOnly
                                type="text"
                                placeholder="Date de départ"
                                value={datedep}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Date Retour</Form.Label>
                            <Form.Control
                                readOnly
                                type="text"
                                value={dateretour}
                            />
                        </Form.Group>
                    </Row>

                   


                    <Row className="mb-2">
                        <Form.Group as={Col} md="6">
                            <Form.Label>NumCin </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="NumCIN"
                                value={numCin}
                                onChange={(e) => setNumcin(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Saisir le numero CIN
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Numéro de Permis</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Numéro de Permis"
                                value={Npermis}
                                onChange={(e) => setNpermis(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Saisir le numéro de Permis
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Date de Naissance</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="DD-MM-YYYY"
                                value={dateNaissance}
                                onChange={(e) => setDateNaissance(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Saisir la Date de Naissance
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6">
                            <Form.Label>Image cin</Form.Label>
                            <Form.Control
                                required
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                onChange={(e) => { handleImageChange(e, "cin") }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Saisir l'image cin
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Image Permis</Form.Label>
                            <Form.Control
                                required
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                onChange={(e) => { handleImageChange(e, "cin1") }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Saisir l'image Permis
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Confirmer
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const CustomDateInput = ({ isReserved, value, onClick }) => (
    <div>
        <input
            type="text"
            value={value}
            onClick={onClick}
            style={{ color: isReserved ? 'red' : 'black' }}
        />
    </div>
);

export default InsertReservation;
