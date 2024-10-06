// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import {useDispatch,useSelector} from "react-redux";
// import { getMarques } from '../../features/marqueSlice';
// import { createVoiture } from '../../features/voitureSlice';
// import { setOptions } from 'filepond';
// const Insertvoiture = () => {
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
// const [validated, setValidated] = useState(false);
// const [nomvoiture, setNomvoiture] = useState("");
// const [imagevoiture, setImagevoiture] = useState("");
// const [compteur, setCompteur] = useState("");
// const [dateAchat, setDateAchat] = useState("");
// const [marque, setMarque] = useState("");
// const [prixvoiture, setPrixvoiture] = useState("");


// const dispatch = useDispatch();
// const { marques, isLoading } = useSelector((state) => state.storemarques);
// useEffect(() => {
// dispatch(getMarques());
// },[dispatch]);
// const handleSubmit = (event) => {
// event.preventDefault();
// const form = event.currentTarget;
// if (form.checkValidity() === true) {
//   const voiture={
//     nomvoiture: nomvoiture,
//     imagevoiture: imagevoiture,
//     compteur: compteur,
//     dateAchat:dateAchat,
//     marque:marque,
//     prixvoiture:prixvoiture,

//   }
//   dispatch(createVoiture(voiture))
//   .then(res=>{
//   console.log("Insert OK",res);
//   setNomvoiture("");
//   setImagevoiture("");
//   setCompteur("");
//   setDateAchat("");
//   setMarque("");
//   setValidated(false);
//   handleClose()
//   })
//   .catch(error=>{
//   console.log(error)
//   alert("Erreur ! Insertion non effectuée")
//   })
//   }
//   setValidated(true);
//   };
//   return (
//   <>
//   <Button variant="success"style={{'margin':10,'left':10}}
//   onClick={handleShow}>
//   Nouveau
//   </Button>
//   <Modal show={show} onHide={handleClose}>
//   <Form noValidate validated={validated} onSubmit={handleSubmit}>
//   <Modal.Header closeButton>
//   <Modal.Title> <h1 align="center">Ajout Article</h1></Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//   <div className="container w-100 d-flex justify-content-center">
//   <div>

//   <div className='form mt-3'>
//   <Row className="mb-2">
//   <Form.Group as={Col} md="6" >
//   <Form.Label >nom</Form.Label>
//   <Form.Control
//   required
//   type="text"
//   placeholder="nom"
//   value={nomvoiture}
//   onChange={(e)=>setNomvoiture(e.target.value)}
//   />
//   <Form.Control.Feedback type="invalid">
//   Saisir le nom de la voiture
//   </Form.Control.Feedback>
//   </Form.Group>
//   <Form.Group as={Col} md="6">
//   <Form.Label>image</Form.Label>
//   <Form.Control
//   required
//   type="text"
//   placeholder="image"
//   value={imagevoiture}
//   onChange={(e)=>setImagevoiture(e.target.value)}
//   />
//   <Form.Control.Feedback type="invalid">
//   Saisir l'image 
//   </Form.Control.Feedback>
//   </Form.Group>
//   </Row>
//   <Row className="mb-2">
//   <Form.Group className="col-md-6">
//   <Form.Label>Compteur *</Form.Label>
//   <InputGroup hasValidation>
//   <Form.Control
//   type="text"
//   required
//   placeholder="compteur"
//   value={compteur}
//   onChange={(e)=>setCompteur(e.target.value)}
//   />
//   <Form.Control.Feedback type="invalid">
//   Compteur Incorrecte
//   </Form.Control.Feedback>
//   </InputGroup>
//   </Form.Group>
//   <Form.Group as={Col} md="6">
// <Form.Label>dateAchat</Form.Label>
// <Form.Control
// type="text"
// placeholder="dateAchat"
// value={dateAchat}
// onChange={(e)=>setDateAchat(e.target.value)}
// />
// </Form.Group>
// </Row>
// <Row className="mb-3">
// <Form.Group as={Col} md="12">
// <Form.Label>marque</Form.Label>
// <Form.Control
// as="select"
// type="select"
// value={marque}
// onChange={(e)=>setMarque(e.target.value)}
// >
// <option></option>
// {!isLoading? marques.map((marq)=><option key={marq._id}
// value={marq._id}>{marq.nommarque}</option>):null}
// </Form.Control>
// </Form.Group>
// </Row>
// </div>
// </div>
// </div>
// </Modal.Body>
// <Modal.Footer>
// <Button variant="secondary" onClick={handleClose}>
// Fermer
// </Button>
// <Button type="submit">Enregistrer</Button>
// </Modal.Footer>
// </Form>
// </Modal>
// </>
// )
// }
// export default Insertvoiture
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { createVoiture } from '../../features/voitureSlice';
// import InsertOption from '../option/InsertOption';

// const Insertvoiture = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [validated, setValidated] = useState(false);
//   const [nomvoiture, setNomvoiture] = useState('');
//   const [imagevoiture, setImagevoiture] = useState('');
//   const [marque, setMarque] = useState('');
//   const [selectedOption, setSelectedOption] = useState(null); // Nouvel état pour stocker l'option sélectionnée
//   const dispatch = useDispatch();
//   const { marques, isLoading } = useSelector((state) => state.storemarques);

//   useEffect(() => {
//     dispatch(getMarques());
//   }, [dispatch]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (form.checkValidity() === true) {
//       const voiture = {
//         nomvoiture: nomvoiture,
//         imagevoiture: imagevoiture,
//         marque: marque,
//         option: selectedOption  // ID de l'option sélectionnée
//       };

//       dispatch(createVoiture(voiture))
//         .then((res) => {
//           console.log('Insert OK', res);

//           // Réinitialisation des champs et de la validation
//           setNomvoiture('');
//           setImagevoiture('');
//           setMarque('');
//           setSelectedOption('');
//           setValidated(false);
//           handleClose();
//         })
//         .catch((error) => {
//           console.log(error);
//           alert('Erreur ! Insertion non effectuée');
//         });
//     }
//     setValidated(true);
//   };

//   return (
//     <>
//       <Button
//         variant="success"
//         style={{ margin: 10, left: 10 }}
//         onClick={handleShow}
//       >
//         Nouveau
//       </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <h1 align="center">Ajout Article</h1>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container w-100 d-flex justify-content-center">
//               <div>
//                 <div className="form mt-3">
//                   <Row className="mb-2">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Nom</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Nom"
//                         value={nomvoiture}
//                         onChange={(e) => setNomvoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le nom de la voiture
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Image</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Image"
//                         value={imagevoiture}
//                         onChange={(e) => setImagevoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir l'image
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="12">
//                       <Form.Label>Marque</Form.Label>
//                       <Form.Control
//                         as="select"
//                         type="select"
//                         value={marque}
//                         onChange={(e) => setMarque(e.target.value)}
//                       >
//                         <option></option>
//                         {!isLoading ? (
//                           marques.map((marq) => (
//                             <option key={marq._id} value={marq._id}>
//                               {marq.nommarque}
//                             </option>
//                           ))
//                         ) : null}
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="12">
//                       <Form.Label>Option</Form.Label>
//                       <InsertOption
//                         selectedOption={selectedOption}
//                         onOptionSelect={setSelectedOption}
//                       />
//                     </Form.Group>
//                   </Row>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Fermer
//             </Button>
//             <Button type="submit">Enregistrer</Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default Insertvoiture;
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { createVoiture } from '../../features/voitureSlice';
// import InsertOption from '../option/InsertOption';

// const Insertvoiture = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [validated, setValidated] = useState(false);
//   const [nomvoiture, setNomvoiture] = useState('');
//   const [imagevoiture, setImagevoiture] = useState('');
//   const [marque, setMarque] = useState('');
//   const [selectedOptions, setSelectedOptions] = useState([]); // Tableau pour stocker les options sélectionnées
//   const dispatch = useDispatch();
//   const { marques, isLoading } = useSelector((state) => state.storemarques);

//   useEffect(() => {
//     dispatch(getMarques());
//   }, [dispatch]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (form.checkValidity() === true) {
//       const voiture = {
//         nomvoiture: nomvoiture,
//         imagevoiture: imagevoiture,
//         marque: marque,
//         option: selectedOptions, // Utilisation du tableau d'options sélectionnées
//       };

//       dispatch(createVoiture(voiture))
//         .then((res) => {
//           console.log('Insert OK', res);

//           // Réinitialisation des champs et de la validation
//           setNomvoiture('');
//           setImagevoiture('');
//           setMarque('');
//           setSelectedOptions([]); // Réinitialisation du tableau d'options
//           setValidated(false);
//           handleClose();
//         })
//         .catch((error) => {
//           console.log(error);
//           alert('Erreur ! Insertion non effectuée');
//         });
//     }
//     setValidated(true);
//   };

//   return (
//     <>
//       <Button
//         variant="success"
//         style={{ margin: 10, left: 10 }}
//         onClick={handleShow}
//       >
//         Nouveau
//       </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <h1 align="center">Ajout Article</h1>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container w-100 d-flex justify-content-center">
//               <div>
//                 <div className="form mt-3">
//                   <Row className="mb-2">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Nom</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Nom"
//                         value={nomvoiture}
//                         onChange={(e) => setNomvoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le nom de la voiture
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Image</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Image"
//                         value={imagevoiture}
//                         onChange={(e) => setImagevoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir l'image
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="12">
//                       <Form.Label>Marque</Form.Label>
//                       <Form.Control
//                         as="select"
//                         type="select"
//                         value={marque}
//                         onChange={(e) => setMarque(e.target.value)}
//                       >
//                         <option></option>
//                         {!isLoading ? (
//                           marques.map((marq) => (
//                             <option key={marq._id} value={marq._id}>
//                               {marq.nommarque}
//                             </option>
//                           ))
//                         ) : null}
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="12">
//                       <Form.Label>Options</Form.Label>
//                       <InsertOption
//                         selectedOptions={selectedOptions}
//                         onOptionSelect={setSelectedOptions}
//                       />
//                     </Form.Group>
//                   </Row>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Fermer
//             </Button>
//             <Button type="submit">Enregistrer</Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default Insertvoiture;

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { createVoiture } from '../../features/voitureSlice';
// import { createOption } from '../../features/optionSlice';
// import { buildFormData } from '../../utils/ConvertFormData';

// const Insertvoiture = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [validated, setValidated] = useState(false);
//   const [nomvoiture, setNomvoiture] = useState('');
//   const [imagevoiture, setImagevoiture] = useState('');
//   const [marque, setMarque] = useState('');
//   const [puissance, setPuissance] = useState('');
//   const [boite, setBoite] = useState('');
//   const [vitre, setVitre] = useState('');
//   const [cameraRecul, setCameraRecul] = useState(false);
//   const [systemeNavigation, setSystemeNavigation] = useState(false);
//   const [regulateurVitesse, setRegulateurVitesse] = useState(false);
//   const [volantIntegre, setVolantIntegre] = useState(false);
//   const [conduiteIntelligente, setConduiteIntelligente] = useState(false);
//   const [alarmeIntelligente, setAlarmeIntelligente] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [compteur, setCompteur] = useState('');

//   // Ajoutez un état pour gérer l'image de l'option
//   const [optionImage, setOptionImage] = useState('');

//   const dispatch = useDispatch();
//   const { marques, isLoading } = useSelector((state) => state.storemarques);

//   useEffect(() => {
//     dispatch(getMarques());
//   }, [dispatch]);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//     setImagevoiture(file.name);
//   };

//   // Ajoutez une fonction pour gérer le changement de l'image de l'option
//   const handleOptionImageChange = (event) => {
//     const file = event.target.files[0];
//     setOptionImage(file.name);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     const formDataOption = new FormData();
//     formDataOption.append('imageoption', selectedOptionImage, selectedOptionImage.name);
//     if (form.checkValidity() === true) {
//       try {
//         const createdOption = await dispatch(createOption({
//           puissance: puissance,
//           boite: boite,
//           vitre: vitre,
//           cameraRecul: cameraRecul,
//           systemeNavigation: systemeNavigation,
//           regulateurVitesse: regulateurVitesse,
//           volantIntegre: volantIntegre,
//           conduiteIntelligente: conduiteIntelligente,
//           alarmeIntelligente: alarmeIntelligente,
//           compteur: compteur,
//           // Ajoutez l'image de l'option
//           imageOption: optionImage,
//         }));

//         const voiture = {
//           nomvoiture: nomvoiture,
//           imagevoiture: imagevoiture,
//           marque: marque,
//           option: createdOption.payload._id,
//           compteur: compteur,
//         };

//         const formData = new FormData();
//         buildFormData(formData, voiture);

//         if (selectedImage) {
//           formData.append('imagevoiture', selectedImage, selectedImage.name);
//         }

//         dispatch(createVoiture(formData))
//           .then((res) => {
//             console.log('Insert OK', res);

//             setNomvoiture('');
//             setImagevoiture('');
//             setMarque('');
//             setPuissance('');
//             setBoite('');
//             setVitre('');
//             setCameraRecul(false);
//             setSystemeNavigation(false);
//             setRegulateurVitesse(false);
//             setVolantIntegre(false);
//             setConduiteIntelligente(false);
//             setAlarmeIntelligente(false);
//             setCompteur('');
//             setOptionImage(''); // Réinitialisez l'image de l'option
//             setValidated(false);
//             handleClose();
//           })
//           .catch((error) => {
//             console.error(error);
//             alert('Erreur ! Insertion non effectuée');
//           });
//       } catch (error) {
//         console.error('Error creating option:', error);
//       }
//     }

//     setValidated(true);
//   };

//   return (
//     <>
//       <Button
//         variant="success"
//         style={{ margin: 10, left: 10 }}
//         onClick={handleShow}
//       >
//         Nouveau
//       </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <h1 align="center">Ajout Voiture</h1>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container w-100 d-flex justify-content-center">
//               <div>
//                 <div className="form mt-3">
//                   <Row className="mb-2">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Nom</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Nom"
//                         value={nomvoiture}
//                         onChange={(e) => setNomvoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le nom de la voiture
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>ImageVoiture</Form.Label>
//                       <Form.Control
//                         type="file"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={handleImageChange}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Sélectionnez une image pour la marque
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>compteur</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Compteur"
//                         value={compteur}
//                         onChange={(e) => setCompteur(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le champ compteur
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Marque</Form.Label>
//                       <Form.Control
//                         as="select"
//                         type="select"
//                         value={marque}
//                         onChange={(e) => setMarque(e.target.value)}
//                       >
//                         <option></option>
//                         {!isLoading ? (
//                           marques.map((marq) => (
//                             <option key={marq._id} value={marq._id}>
//                               {marq.nommarque}
//                             </option>
//                           ))
//                         ) : null}
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>


//                   <Row className="mb-2">

//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Image de l'option</Form.Label>
//                       <Form.Control
//                         type="file" // Ajoutez un champ pour l'image de l'option
//                         name="imageoption"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={handleOptionImageChange} // Gérez l'image de l'option
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Sélectionnez une image pour l'option
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Puissance</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Puissance"
//                         value={puissance}
//                         onChange={(e) => setPuissance(e.target.value)}
//                       />
//                     </Form.Group>

//                   </Row>


//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Boite</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={boite}
//                         onChange={(e) => setBoite(e.target.value)}
//                       >
//                         <option value="">Sélectionner</option>
//                         <option value="Automatique">Automatique</option>
//                         <option value="Manuelle">Manuelle</option>
//                       </Form.Control>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Vitre</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={vitre}
//                         onChange={(e) => setVitre(e.target.value)}
//                       >
//                         <option value="">Sélectionner</option>
//                         <option value="Toutautomatique">Tout automatique</option>
//                         <option value="Deuxvitresautomatiques">Deux vitres automatiques</option>
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>
//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Caméra de recul"
//                         checked={cameraRecul}
//                         onChange={(e) => setCameraRecul(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Système de navigation"
//                         checked={systemeNavigation}
//                         onChange={(e) => setSystemeNavigation(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Régulateur de vitesse"
//                         checked={regulateurVitesse}
//                         onChange={(e) => setRegulateurVitesse(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Volant intégré"
//                         checked={volantIntegre}
//                         onChange={(e) => setVolantIntegre(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Conduite intelligente"
//                         checked={conduiteIntelligente}
//                         onChange={(e) => setConduiteIntelligente(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Alarme intelligente"
//                         checked={alarmeIntelligente}
//                         onChange={(e) => setAlarmeIntelligente(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Fermer
//             </Button>
//             <Button type="submit">Enregistrer</Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default Insertvoiture;

// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { createVoiture } from '../../features/voitureSlice';
// import { createOption } from '../../features/optionSlice';
// import { buildFormData } from '../../utils/ConvertFormData';

// const InsertVoiture = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [validated, setValidated] = useState(false);
//   const [nomvoiture, setNomvoiture] = useState('');
//   const [imagevoiture, setImagevoiture] = useState('');
//   const [marque, setMarque] = useState('');
//   const [puissance, setPuissance] = useState('');
//   const [boite, setBoite] = useState('');
//   const [vitre, setVitre] = useState('');
//   const [cameraRecul, setCameraRecul] = useState(false);
//   const [systemeNavigation, setSystemeNavigation] = useState(false);
//   const [regulateurVitesse, setRegulateurVitesse] = useState(false);
//   const [volantIntegre, setVolantIntegre] = useState(false);
//   const [conduiteIntelligente, setConduiteIntelligente] = useState(false);
//   const [alarmeIntelligente, setAlarmeIntelligente] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [compteur, setCompteur] = useState('');

//   // Ajoutez un état pour gérer l'image de l'option
//   const [optionImage, setOptionImage] = useState('');

//   const dispatch = useDispatch();
//   const { marques, isLoading } = useSelector((state) => state.storemarques);

//   useEffect(() => {
//     dispatch(getMarques());
//   }, [dispatch]);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//     setImagevoiture(file.name);
//   };

//   // Ajoutez une fonction pour gérer le changement de l'image de l'option
//   const handleOptionImageChange = (event) => {
//     const file = event.target.files[0];
//     setOptionImage(file.name);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     const formDataOption = new FormData();
//     formDataOption.append('imageoption', selectedImage, selectedImage.name); // Convertissez l'image de l'option en FormData

//     if (form.checkValidity() === true) {
//       try {
//         const createdOption = await dispatch(createOption({
//           puissance: puissance,
//           boite: boite,
//           vitre: vitre,
//           cameraRecul: cameraRecul,
//           systemeNavigation: systemeNavigation,
//           regulateurVitesse: regulateurVitesse,
//           volantIntegre: volantIntegre,
//           conduiteIntelligente: conduiteIntelligente,
//           alarmeIntelligente: alarmeIntelligente,
//           compteur: compteur,
//           // Utilisez le FormData pour l'image de l'option
//           imageOption: selectedImage.name,
//         }));

//         const voiture = {
//           nomvoiture: nomvoiture,
//           imagevoiture: imagevoiture,
//           marque: marque,
//           option: createdOption.payload._id,
//           compteur: compteur,
//         };

//         const formData = new FormData();
//         buildFormData(formData, voiture);

//         if (selectedImage) {
//           formData.append('imagevoiture', selectedImage, selectedImage.name);
//         }

//         // Ajoutez également l'image de l'option au FormData de la voiture
//         formData.append('imageoption', selectedImage, selectedImage.name);

//         dispatch(createVoiture(formData))
//           .then((res) => {
//             console.log('Insert OK', res);

//             setNomvoiture('');
//             setImagevoiture('');
//             setMarque('');
//             setPuissance('');
//             setBoite('');
//             setVitre('');
//             setCameraRecul(false);
//             setSystemeNavigation(false);
//             setRegulateurVitesse(false);
//             setVolantIntegre(false);
//             setConduiteIntelligente(false);
//             setAlarmeIntelligente(false);
//             setCompteur('');
//             setOptionImage(''); // Réinitialisez l'image de l'option
//             setValidated(false);
//             handleClose();
//           })
//           .catch((error) => {
//             console.error(error);
//             alert('Erreur ! Insertion non effectuée');
//           });
//       } catch (error) {
//         console.error('Error creating option:', error);
//       }
//     }

//     setValidated(true);
//   };

//   return (
//     <>
//       <Button
//         variant="success"
//         style={{ margin: 10, left: 10 }}
//         onClick={handleShow}
//       >
//         Nouveau
//       </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <h1 align="center">Ajout Voiture</h1>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container w-100 d-flex justify-content-center">
//               <div>
//                 <div className="form mt-3">
//                   <Row className="mb-2">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Nom</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Nom"
//                         value={nomvoiture}
//                         onChange={(e) => setNomvoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le nom de la voiture
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>ImageVoiture</Form.Label>
//                       <Form.Control
//                         type="file"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={handleImageChange}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Sélectionnez une image pour la marque
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>compteur</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Compteur"
//                         value={compteur}
//                         onChange={(e) => setCompteur(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le champ compteur
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Marque</Form.Label>
//                       <Form.Control
//                         as="select"
//                         type="select"
//                         value={marque}
//                         onChange={(e) => setMarque(e.target.value)}
//                       >
//                         <option></option>
//                         {!isLoading ? (
//                           marques.map((marq) => (
//                             <option key={marq._id} value={marq._id}>
//                               {marq.nommarque}
//                             </option>
//                           ))
//                         ) : null}
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>


//                   <Row className="mb-2">

//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Image de l'option</Form.Label>
//                       <Form.Control
//                         type="file" // Ajoutez un champ pour l'image de l'option
//                         name="imageoption"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={handleOptionImageChange} // Gérez l'image de l'option
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Sélectionnez une image pour l'option
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Puissance</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Puissance"
//                         value={puissance}
//                         onChange={(e) => setPuissance(e.target.value)}
//                       />
//                     </Form.Group>

//                   </Row>


//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Boite</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={boite}
//                         onChange={(e) => setBoite(e.target.value)}
//                       >
//                         <option value="">Sélectionner</option>
//                         <option value="Automatique">Automatique</option>
//                         <option value="Manuelle">Manuelle</option>
//                       </Form.Control>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Vitre</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={vitre}
//                         onChange={(e) => setVitre(e.target.value)}
//                       >
//                         <option value="">Sélectionner</option>
//                         <option value="Toutautomatique">Tout automatique</option>
//                         <option value="Deuxvitresautomatiques">Deux vitres automatiques</option>
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>
//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Caméra de recul"
//                         checked={cameraRecul}
//                         onChange={(e) => setCameraRecul(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Système de navigation"
//                         checked={systemeNavigation}
//                         onChange={(e) => setSystemeNavigation(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Régulateur de vitesse"
//                         checked={regulateurVitesse}
//                         onChange={(e) => setRegulateurVitesse(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Volant intégré"
//                         checked={volantIntegre}
//                         onChange={(e) => setVolantIntegre(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Conduite intelligente"
//                         checked={conduiteIntelligente}
//                         onChange={(e) => setConduiteIntelligente(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Alarme intelligente"
//                         checked={alarmeIntelligente}
//                         onChange={(e) => setAlarmeIntelligente(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Fermer
//             </Button>
//             <Button type="submit">Enregistrer</Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// };
// export default InsertVoiture;














// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { createVoiture } from '../../features/voitureSlice';
// import { createOption } from '../../features/optionSlice';
// import { buildFormData } from '../../utils/ConvertFormData';
// import { FormatIndentIncreaseSharp } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { useStepContext } from '@mui/material';

// const Insertvoiture = () => {
//   const [show, setShow] = useState(true); // Afficher le modal par défaut
//   const handleClose = () => setShow(false);
//   const [validated, setValidated] = useState(false);
//   const [nomvoiture, setNomvoiture] = useState('');
//   const [imagevoiture, setImagevoiture] = useState('');
//   const [marque, setMarque] = useState('');
//   const [puissance, setPuissance] = useState('');
//   const [boite, setBoite] = useState('');
//   const [vitre, setVitre] = useState('');
//   const [cameraRecul, setCameraRecul] = useState(false);
//   const [systemeNavigation, setSystemeNavigation] = useState(false);
//   const [regulateurVitesse, setRegulateurVitesse] = useState(false);
//   const [volantIntegre, setVolantIntegre] = useState(false);
//   const [conduiteIntelligente, setConduiteIntelligente] = useState(false);
//   const [alarmeIntelligente, setAlarmeIntelligente] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [compteur, setCompteur] = useState('');
//   const [optionImage1, setOptionImage1] = useState('')
//   const [optionImage2, setOptionImage2] = useState('')



//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { marques, isLoading } = useSelector((state) => state.storemarques);

//   useEffect(() => {
//     dispatch(getMarques());
//   }, [dispatch]);

//   const handleImageChange = (event, key) => {
//     const file = event.target.files[0];
//     if (key === "voiture") {
//       setSelectedImage(file);
//       setImagevoiture(file.name);
//     }
//     if (key === "option1") {
//       setOptionImage1(file)
//     }
//     if (key === "option2") {
//       setOptionImage2(file)
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (form.checkValidity() === true) {
//       const images = [optionImage1, optionImage2]

//       const optionToCreate = {
//         puissance: puissance,
//         boite: boite,
//         vitre: vitre,
//         cameraRecul: cameraRecul,
//         systemeNavigation: systemeNavigation,
//         regulateurVitesse: regulateurVitesse,
//         volantIntegre: volantIntegre,
//         conduiteIntelligente: conduiteIntelligente,
//         alarmeIntelligente: alarmeIntelligente,
//         compteur: compteur,
//         // imageOption3: optionImage3,
//       };

//       try {
//         const formData = new FormData();
//         buildFormData(formData, optionToCreate);
//         for (let index = 0; index < images.length; index++) {
//           formData.append("images", images[index]);
//         }
//         console.log("formData", formData.get("images"));
//         const createdOption = await dispatch(createOption(formData));

//         const voiture = {
//           nomvoiture: nomvoiture,
//           imagevoiture: imagevoiture,
//           marque: marque,
//           option: createdOption.payload._id,
//           compteur: compteur,
//         };
//         const formData1 = new FormData();
//         buildFormData(formData1, voiture);
//         if (selectedImage) {
//           formData1.append('imagevoiture', selectedImage, selectedImage.name);
//         }

//         dispatch(createVoiture(formData1))
//           .then((res) => {
//             console.log('Insert OK', res);
//             // Afficher un Swal avec le message et le prix final
//             Swal.fire({
//               title: 'Insertion effectuée',
//               text: `Prix final de la voiture : ${res.payload.prixvoiture}`,
//               icon: 'success',
//             });
//             navigate(`/voiture/liste`);


//             setNomvoiture('');
//             setImagevoiture('');
//             setMarque('');
//             setPuissance('');
//             setBoite('');
//             setVitre('');
//             setCameraRecul(false);
//             setSystemeNavigation(false);
//             setRegulateurVitesse(false);
//             setVolantIntegre(false);
//             setConduiteIntelligente(false);
//             setAlarmeIntelligente(false);
//             setValidated(false);
//             handleClose();
//             // navigate(`/voiture/liste`);

//           })


//           .catch((error) => {
//             console.log(error);
//             alert('Erreur ! Insertion non effectuée');
//           });
//       } catch (error) {
//         console.error('Error creating option:', error);
//       }
//     }

//     setValidated(true);
//   };

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <h1 align="center">Ajout Voiture</h1>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container w-100 d-flex justify-content-center">
//               <div>
//                 <div className="form mt-3">
//                   <Row className="mb-2">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Nom</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Nom"
//                         value={nomvoiture}
//                         onChange={(e) => setNomvoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le nom de la voiture
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>ImageVoiture</Form.Label>
//                       <Form.Control
//                         type="file"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={(e) => { handleImageChange(e, "voiture") }}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Sélectionnez une image pour la voiture
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-2">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Compteur</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Compteur"
//                         value={compteur}
//                         onChange={(e) => setCompteur(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le champ compteur
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Marque</Form.Label>
//                       <Form.Control
//                         as="select"
//                         type="select"
//                         value={marque}
//                         onChange={(e) => setMarque(e.target.value)}
//                       >
//                         <option></option>
//                         {!isLoading ? (
//                           marques.map((marq) => (
//                             <option key={marq._id} value={marq._id}>
//                               {marq.nommarque}
//                             </option>
//                           ))
//                         ) : null}
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Image Option 1</Form.Label>
//                       <Form.Control
//                         required
//                         type="file"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={(e) => { handleImageChange(e, "option1") }}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir l'image de l'option 1
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Image Option 2</Form.Label>
//                       <Form.Control
//                         required
//                         type="file"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={(e) => { handleImageChange(e, "option2") }}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir l'image de l'option 2
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="12">
//                       <Form.Label>Puissance</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Puissance"
//                         value={puissance}
//                         onChange={(e) => setPuissance(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Boite</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={boite}
//                         onChange={(e) => setBoite(e.target.value)}
//                       >
//                         <option value="">Sélectionner</option>
//                         <option value="Automatique">Automatique</option>
//                         <option value="Manuelle">Manuelle</option>
//                       </Form.Control>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Vitre</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={vitre}
//                         onChange={(e) => setVitre(e.target.value)}
//                       >
//                         <option value="">Sélectionner</option>
//                         <option value="Toutautomatique">Tout automatique</option>
//                         <option value="Deuxvitresautomatiques">
//                           Deux vitres automatiques
//                         </option>
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>

//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Caméra de recul"
//                         checked={cameraRecul}
//                         onChange={(e) => setCameraRecul(e.target.checked)}
//                       />
//                     </Col>

//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Système de navigation"
//                         checked={systemeNavigation}
//                         onChange={(e) => setSystemeNavigation(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Régulateur de vitesse"
//                         checked={regulateurVitesse}
//                         onChange={(e) => setRegulateurVitesse(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Volant intégré"
//                         checked={volantIntegre}
//                         onChange={(e) => setVolantIntegre(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Conduite intelligente"
//                         checked={conduiteIntelligente}
//                         onChange={(e) => setConduiteIntelligente(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Alarme intelligente"
//                         checked={alarmeIntelligente}
//                         onChange={(e) => setAlarmeIntelligente(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Fermer
//             </Button>
//             <Link to="/voiture/liste">
//               <Button type="submit">Enregistrer</Button>
//             </Link>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default Insertvoiture;




// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { createVoiture } from '../../features/voitureSlice';
// import { createOption } from '../../features/optionSlice';
// import { buildFormData } from '../../utils/ConvertFormData';
// import { FormatIndentIncreaseSharp } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { useStepContext } from '@mui/material';

// const Insertvoiture = () => {
//   const [show, setShow] = useState(true); // Afficher le modal par défaut
//   const handleClose = () => setShow(false);
//   const [validated, setValidated] = useState(false);
//   const [nomvoiture, setNomvoiture] = useState('');
//   const [imagevoiture, setImagevoiture] = useState('');
//   const [marque, setMarque] = useState('');
//   const [puissance, setPuissance] = useState('');
//   const [boite, setBoite] = useState('');
//   const [vitre, setVitre] = useState('');
//   const [cameraRecul, setCameraRecul] = useState(false);
//   const [systemeNavigation, setSystemeNavigation] = useState(false);
//   const [regulateurVitesse, setRegulateurVitesse] = useState(false);
//   const [volantIntegre, setVolantIntegre] = useState(false);
//   const [conduiteIntelligente, setConduiteIntelligente] = useState(false);
//   const [alarmeIntelligente, setAlarmeIntelligente] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [compteur, setCompteur] = useState('');
//   const [optionImage1, setOptionImage1] = useState('')
//   const [optionImage2, setOptionImage2] = useState('')
//   const [dateVisite, setDatevisite] = useState('')
//   const[dateAssurance,setDateassurance]=useState('')
//   const [dateVignette,setDatevignette]=useState('')


//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { marques, isLoading } = useSelector((state) => state.storemarques);

//   useEffect(() => {
//     dispatch(getMarques());
//   }, [dispatch]);

//   const handleImageChange = (event, key) => {
//     const file = event.target.files[0];
//     if (key === "voiture") {
//       setSelectedImage(file);
//       setImagevoiture(file.name);
//     }
//     if (key === "option1") {
//       setOptionImage1(file)
//     }
//     if (key === "option2") {
//       setOptionImage2(file)
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (form.checkValidity() === true) {
//       const images = [optionImage1, optionImage2]

//       const optionToCreate = {
//         puissance: puissance,
//         boite: boite,
//         vitre: vitre,
//         cameraRecul: cameraRecul,
//         systemeNavigation: systemeNavigation,
//         regulateurVitesse: regulateurVitesse,
//         volantIntegre: volantIntegre,
//         conduiteIntelligente: conduiteIntelligente,
//         alarmeIntelligente: alarmeIntelligente,
//         compteur: compteur,
//         // imageOption3: optionImage3,
//       };

//       try {
//         const formData = new FormData();
//         buildFormData(formData, optionToCreate);
//         for (let index = 0; index < images.length; index++) {
//           formData.append("images", images[index]);
//         }
//         console.log("formData", formData.get("images"));
//         const createdOption = await dispatch(createOption(formData));

//         const voiture = {
//           nomvoiture: nomvoiture,
//           imagevoiture: imagevoiture,
//           marque: marque,
//           option: createdOption.payload._id,
//           compteur: compteur,
//           dateAssurance:dateAssurance,
//           dateVisite:dateVisite,
//           dateVignette:dateVignette
//         };
//         const formData1 = new FormData();
//         buildFormData(formData1, voiture);
//         if (selectedImage) {
//           formData1.append('imagevoiture', selectedImage, selectedImage.name);
//         }

//         dispatch(createVoiture(formData1))
//           .then((res) => {
//             console.log('Insert OK', res);
//             // Afficher un Swal avec le message et le prix final
//             Swal.fire({
//               title: 'Insertion effectuée',
//               text: `Prix final de la voiture : ${res.payload.prixvoiture}`,
//               icon: 'success',
//             });
//             navigate(`/voiture/liste`);


//             setNomvoiture('');
//             setImagevoiture('');
//             setDateassurance('');
//             setDatevisite('');
//             setDatevignette('');
//             setMarque('');
//             setPuissance('');
//             setBoite('');
//             setVitre('');
//             setCameraRecul(false);
//             setSystemeNavigation(false);
//             setRegulateurVitesse(false);
//             setVolantIntegre(false);
//             setConduiteIntelligente(false);
//             setAlarmeIntelligente(false);
//             setValidated(false);
//             handleClose();
//             // navigate(`/voiture/liste`);

//           })


//           .catch((error) => {
//             console.log(error);
//             alert('Erreur ! Insertion non effectuée');
//           });
//       } catch (error) {
//         console.error('Error creating option:', error);
//       }
//     }

//     setValidated(true);
//   };

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <h1 align="center">Ajout Voiture</h1>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container w-100 d-flex justify-content-center">
//               <div>
//                 <div className="form mt-3">
//                   <Row className="mb-2">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Nom</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Nom"
//                         value={nomvoiture}
//                         onChange={(e) => setNomvoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le nom de la voiture
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>ImageVoiture</Form.Label>
//                       <Form.Control
//                         type="file"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={(e) => { handleImageChange(e, "voiture") }}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Sélectionnez une image pour la voiture
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                         <Form.Group as={Col} md="4">
//                             <Form.Label>Assurance</Form.Label>
//                             <Form.Control
//                                 required
//                                 type="text"
//                                 placeholder="DD-MM-YYYY"
//                                 value={dateAssurance}
//                                 onChange={(e) => setDateassurance(e.target.value)}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 Saisir la Date d assurance
//                             </Form.Control.Feedback>
//                         </Form.Group>
//                     </Row>

//                   <Row className="mb-2">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Compteur</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Compteur"
//                         value={compteur}
//                         onChange={(e) => setCompteur(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le champ compteur
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Marque</Form.Label>
//                       <Form.Control
//                         as="select"
//                         type="select"
//                         value={marque}
//                         onChange={(e) => setMarque(e.target.value)}
//                       >
//                         <option></option>
//                         {!isLoading ? (
//                           marques.map((marq) => (
//                             <option key={marq._id} value={marq._id}>
//                               {marq.nommarque}
//                             </option>
//                           ))
//                         ) : null}
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Image Option 1</Form.Label>
//                       <Form.Control
//                         required
//                         type="file"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={(e) => { handleImageChange(e, "option1") }}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir l'image de l'option 1
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Image Option 2</Form.Label>
//                       <Form.Control
//                         required
//                         type="file"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={(e) => { handleImageChange(e, "option2") }}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir l'image de l'option 2
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="12">
//                       <Form.Label>Puissance</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Puissance"
//                         value={puissance}
//                         onChange={(e) => setPuissance(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Row>

//                   <Row className="mb-3">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Boite</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={boite}
//                         onChange={(e) => setBoite(e.target.value)}
//                       >
//                         <option value="">Sélectionner</option>
//                         <option value="Automatique">Automatique</option>
//                         <option value="Manuelle">Manuelle</option>
//                       </Form.Control>
//                     </Form.Group>

//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Vitre</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={vitre}
//                         onChange={(e) => setVitre(e.target.value)}
//                       >
//                         <option value="">Sélectionner</option>
//                         <option value="Toutautomatique">Tout automatique</option>
//                         <option value="Deuxvitresautomatiques">
//                           Deux vitres automatiques
//                         </option>
//                       </Form.Control>
//                     </Form.Group>
//                   </Row>

//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Caméra de recul"
//                         checked={cameraRecul}
//                         onChange={(e) => setCameraRecul(e.target.checked)}
//                       />
//                     </Col>

//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Système de navigation"
//                         checked={systemeNavigation}
//                         onChange={(e) => setSystemeNavigation(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Régulateur de vitesse"
//                         checked={regulateurVitesse}
//                         onChange={(e) => setRegulateurVitesse(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Volant intégré"
//                         checked={volantIntegre}
//                         onChange={(e) => setVolantIntegre(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>

//                   <Row>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Conduite intelligente"
//                         checked={conduiteIntelligente}
//                         onChange={(e) => setConduiteIntelligente(e.target.checked)}
//                       />
//                     </Col>
//                     <Col md="6">
//                       <Form.Check
//                         type="checkbox"
//                         label="Alarme intelligente"
//                         checked={alarmeIntelligente}
//                         onChange={(e) => setAlarmeIntelligente(e.target.checked)}
//                       />
//                     </Col>
//                   </Row>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Fermer
//             </Button>
//             <Link to="/voiture/liste">
//               <Button type="submit">Enregistrer</Button>
//             </Link>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default Insertvoiture;






import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { getMarques } from '../../features/marqueSlice';
import { createVoiture } from '../../features/voitureSlice';
import { createOption } from '../../features/optionSlice';
import { buildFormData } from '../../utils/ConvertFormData';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { redirect } from 'react-router-dom';
import { Vignette } from '@mui/icons-material';


const Insertvoiture = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [validated, setValidated] = useState(false);
  const [nomvoiture, setNomvoiture] = useState('');
  const [imagevoiture, setImagevoiture] = useState('');
  const [marque, setMarque] = useState('');
  const [puissance, setPuissance] = useState('');
  const [boite, setBoite] = useState('');
  const [vitre, setVitre] = useState('');
  const [cameraRecul, setCameraRecul] = useState(false);
  const [systemeNavigation, setSystemeNavigation] = useState(false);
  const [regulateurVitesse, setRegulateurVitesse] = useState(false);
  const [volantIntegre, setVolantIntegre] = useState(false);
  const [conduiteIntelligente, setConduiteIntelligente] = useState(false);
  const [alarmeIntelligente, setAlarmeIntelligente] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [compteur, setCompteur] = useState('');
  const [optionImage1, setOptionImage1] = useState('');
  const [optionImage2, setOptionImage2] = useState('');
  const [dateVisite, setDatevisite] = useState('')
  const[dateAssurance,setDateassurance]=useState('')
  const [dateVignette,setDatevignette]=useState('')
  const [disponibilite, setDisponibilite] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { marques, isLoading } = useSelector((state) => state.storemarques);

  useEffect(() => {
    dispatch(getMarques());
  }, [dispatch]);

  const handleImageChange = (event, key) => {
    const file = event.target.files[0];
    if (key === 'voiture') {
      setSelectedImage(file);
      setImagevoiture(file.name);
    }
    if (key === 'option1') {
      setOptionImage1(file);
    }
    if (key === 'option2') {
      setOptionImage2(file);
    }
  };

  const handleRedirect = () => {
    navigate('/voiture/liste');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const images = [optionImage1, optionImage2];

      const optionToCreate = {
        puissance: puissance,
        boite: boite,
        vitre: vitre,
        cameraRecul: cameraRecul,
        systemeNavigation: systemeNavigation,
        regulateurVitesse: regulateurVitesse,
        volantIntegre: volantIntegre,
        conduiteIntelligente: conduiteIntelligente,
        alarmeIntelligente: alarmeIntelligente,
        compteur: compteur,
       
      };

      try {
        const formData = new FormData();
        buildFormData(formData, optionToCreate);
        for (let index = 0; index < images.length; index++) {
          formData.append('images', images[index]);
        }
        console.log('formData', formData.get('images'));
        const createdOption = await dispatch(createOption(formData));

        const voiture = {
          nomvoiture: nomvoiture,
          imagevoiture: imagevoiture,
          marque: marque,
          option: createdOption.payload._id,
          compteur: compteur,
          dateVignette:dateVignette,
          dateVisite:dateVisite,
          dateAssurance:dateAssurance,
          disponibilite: disponibilite,
        };
        const formData1 = new FormData();
        buildFormData(formData1, voiture);
        if (selectedImage) {
          formData1.append('imagevoiture', selectedImage, selectedImage.name);
        }

        dispatch(createVoiture(formData1))
          .then((res) => {
            if (res.payload._id) {
              Swal.fire({
                title: 'Insertion effectuée',
                text: `Prix final de la voiture : ${res.payload.prixvoiture}`,
                icon: 'success',
              });

              return redirect(`/voiture/liste`);
            } else {
              Swal.fire({
                title: 'Erreur',
                text: "L'insertion n'a pas été effectuée avec succès.",
                icon: 'error',
              });
            }

            setNomvoiture('');
            setImagevoiture('');
            setMarque('');
            setPuissance('');
            setBoite('');
            setVitre('');
            setDateassurance('');
            setDatevisite('');
            setDatevignette('');

            setSystemeNavigation(false);
            setRegulateurVitesse(false);
            setVolantIntegre(false);
            setConduiteIntelligente(false);
            setAlarmeIntelligente(false);
            setValidated(false);
            setDisponibilite(false);
            handleClose();
          })
          .catch((error) => {
            console.error(error);
            alert('Erreur ! Insertion non effectuée');
          });
      } catch (error) {
        console.error('Error creating option:', error);
      }
    }

    setValidated(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h1 align="center">Ajout Voiture</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container w-100 d-flex justify-content-center">
              <div>
                <div className="form mt-3">
                  <Row className="mb-2">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nom"
                        value={nomvoiture}
                        onChange={(e) => setNomvoiture(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir le nom de la voiture
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>ImageVoiture</Form.Label>
                      <Form.Control
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => { handleImageChange(e, "voiture") }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Sélectionnez une image pour la voiture
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className="mb-2">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Compteur</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Compteur"
                        value={compteur}
                        onChange={(e) => setCompteur(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir le champ compteur
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Marque</Form.Label>
                      <Form.Control
                        as="select"
                        type="select"
                        value={marque}
                        onChange={(e) => setMarque(e.target.value)}
                      >
                        <option></option>
                        {!isLoading ? (
                          marques.map((marq) => (
                            <option key={marq._id} value={marq._id}>
                              {marq.nommarque}
                            </option>
                          ))
                        ) : null}
                      </Form.Control>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                      <Form.Label>Assurance</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="DD-MM-YYYY"
                        value={dateAssurance}
                        onChange={(e) => setDateassurance(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir la Date d assurance
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                      <Form.Label>Visite</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="DD-MM-YYYY"
                        value={dateVisite}
                        onChange={(e) => setDatevisite(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir la Date de la visite  
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                      <Form.Label>Vignette</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="DD-MM-YYYY"
                        value={dateVignette}
                        onChange={(e) => setDatevignette(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir la Date Vignette
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      {/* <Form.Label>Disponibilité</Form.Label> */}
                      <Form.Check
                        type="checkbox"
                        label="Disponibilité"
                        checked={disponibilite}
                        onChange={(e) => setDisponibilite(e.target.checked)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Image Option 1</Form.Label>
                      <Form.Control
                        required
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => { handleImageChange(e, "option1") }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir l'image de l'option 1
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Image Option 2</Form.Label>
                      <Form.Control
                        required
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => { handleImageChange(e, "option2") }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir l'image de l'option 2
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md="12">
                      <Form.Label>Puissance</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Puissance"
                        value={puissance}
                        onChange={(e) => setPuissance(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Boite</Form.Label>
                      <Form.Control
                        as="select"
                        value={boite}
                        onChange={(e) => setBoite(e.target.value)}
                      >
                        <option value="">Sélectionner</option>
                        <option value="Automatique">Automatique</option>
                        <option value="Manuelle">Manuelle</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                      <Form.Label>Vitre</Form.Label>
                      <Form.Control
                        as="select"
                        value={vitre}
                        onChange={(e) => setVitre(e.target.value)}
                      >
                        <option value="">Sélectionner</option>
                        <option value="Toutautomatique">Tout automatique</option>
                        <option value="Deuxvitresautomatiques">
                          Deux vitres automatiques
                        </option>
                      </Form.Control>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Col md="6">
                      <Form.Check
                        type="checkbox"
                        label="Caméra de recul"
                        checked={cameraRecul}
                        onChange={(e) => setCameraRecul(e.target.checked)}
                      />
                    </Col>

                    <Col md="6">
                      <Form.Check
                        type="checkbox"
                        label="Système de navigation"
                        checked={systemeNavigation}
                        onChange={(e) => setSystemeNavigation(e.target.checked)}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <Form.Check
                        type="checkbox"
                        label="Régulateur de vitesse"
                        checked={regulateurVitesse}
                        onChange={(e) => setRegulateurVitesse(e.target.checked)}
                      />
                    </Col>
                    <Col md="6">
                      <Form.Check
                        type="checkbox"
                        label="Volant intégré"
                        checked={volantIntegre}
                        onChange={(e) => setVolantIntegre(e.target.checked)}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <Form.Check
                        type="checkbox"
                        label="Conduite intelligente"
                        checked={conduiteIntelligente}
                        onChange={(e) => setConduiteIntelligente(e.target.checked)}
                      />
                    </Col>
                    <Col md="6">
                      <Form.Check
                        type="checkbox"
                        label="Alarme intelligente"
                        checked={alarmeIntelligente}
                        onChange={(e) => setAlarmeIntelligente(e.target.checked)}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>

            {/* <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button> */}
            <Button type="submit">Enregistrer</Button>
            <Button variant="primary" onClick={handleRedirect}>
              Redirect
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Insertvoiture;