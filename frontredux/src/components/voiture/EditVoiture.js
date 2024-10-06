import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { buildFormData } from '../../utils/ConvertFormData';
import { getVoitures, updateVoiture } from '../../features/voitureSlice';


const EditVoiture = ({ art }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const [id, setId] = useState(art._id);
  const [nomvoiture, setNomvoiture] = useState(art.nomvoiture);
  const [prixvoiture, setPrixvoiture] = useState(art.prixvoiture);
  const [imagevoiture, setImagevoiture] = useState(art.imagevoiture);
  const [compteur, setCompteur] = useState(art.compteur);
  const [dateVisite, setDatevisite] = useState(art.dateVisite)
  const[dateAssurance,setDateassurance]=useState(art.dateAssurance)
  const [dateVignette,setDatevignette]=useState(art.dateVignette)
  const [disponibilite,setDisponibilite]=useState(art.disponibilite)

  const [selectedImage, setSelectedImage] = useState(art.selectedImage);
  const dispatch = useDispatch();
  console.log("art", art);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImagevoiture(file.name); // Set immarque to the image file's name
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const voiture = {
        nomvoiture: nomvoiture,
        prixvoiture: prixvoiture,
        imagevoiture: imagevoiture,
        compteur:compteur,
        dateVisite:dateVisite,
        dateVignette:dateVignette,
        dateAssurance:dateAssurance,
        disponibilite:disponibilite,
        _id: art._id

      }
      const formData = new FormData();
      buildFormData(formData,voiture);
      if (selectedImage) {
        // Append the selected image file to the formData
        formData.append('imagevoiture', selectedImage, selectedImage.name);
      }
      dispatch(updateVoiture(formData))
        .then(res => {
          console.log("Modification OK", res);
         
          setValidated(false);
          handleClose()

        }).then(() => {
          dispatch(getVoitures());
        })
        .catch(error => {
          console.log(error)
          alert("Erreur ! Modification non effectuée")
        })

      setValidated(true);
    };
  }
  return (
    <>
      <span
        onClick={handleShow}
        style={{ cursor: 'pointer' }}
      >
        <EditIcon color='success' />
      </span>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title> <h1 align="center">Modification voiture</h1></Modal.Title>
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
                        placeholder="Nom de la voiture"
                        value={nomvoiture}
                        onChange={(e) => setNomvoiture(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir le nom de la voiture
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="file" // Change input type to "file"
                        accept=".jpg, .jpeg, .png" // Specify accepted file types
                        onChange={handleImageChange} // Handle file selection
                      />
                      <Form.Control.Feedback type="invalid">
                        Sélectionnez une image pour la marque
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  

                  <Row className="mb-2">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Compteur</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Compteur de la marque"
                        value={compteur}
                        onChange={(e) => setCompteur(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir le compteur  
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Prix</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Compteur de la marque"
                        value={prixvoiture}
                        onChange={(e) => setPrixvoiture(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Sélectionnez une image pour la marque
                      </Form.Control.Feedback>
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
                        onChange={(e) =>setDisponibilite(e.target.checked)}
                      />
                    </Form.Group>
                  </Row>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            <Button type="submit">Enregistrer</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default EditVoiture;
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
// import { useDispatch } from "react-redux";
// // import { buildFormData } from '../../utils/ConvertFormData';
// import { getVoitures, updateVoiture} from '../../features/voitureSlice'; // Importez getVoitureById
// import { useParams } from 'react-router-dom';

// const EditVoiture = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [validated, setValidated] = useState(false);
//   const { id } = useParams(); // Obtenez l'ID à partir des paramètres d'URL
//   const [nomvoiture, setNomvoiture] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchCarData = async () => {
//       try {
//         const voiture = await (id);

//         // Assurez-vous que les données sont correctement chargées dans l'état
//         setNomvoiture(voiture.nomvoiture);
//         // Vous pouvez également charger d'autres données nécessaires ici
//       } catch (error) {
//         console.error(error);
//         // Gérez les erreurs de chargement des données
//       }
//     };

//     fetchCarData();
//   }, [id]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === true) {
//       const voitureData = {
//         _id: id,
//         nomvoiture: nomvoiture,
//         // Ajoutez d'autres champs de données ici si nécessaire
//       };

//       dispatch(updateVoiture(voitureData))
//         .then(() => {
//           setNomvoiture('');
//           setValidated(false);
//           handleClose();
//           dispatch(getVoitures());
//         })
//         .catch(error => {
//           console.log(error);
//           alert("Erreur ! Modification non effectuée");
//         });

//       setValidated(true);
//     }
//   };

//   return (
//     <>
//       <span
//         onClick={handleShow}
//         style={{ cursor: 'pointer' }}
//       >
//         <NoteAltOutlinedIcon color='success' />
//       </span>
//       <Modal show={show} onHide={handleClose}>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title> <h1 align="center">Modification Article</h1></Modal.Title>
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
//                         placeholder="Nom de la voiture"
//                         value={nomvoiture}
//                         onChange={(e) => setNomvoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le nom de la voiture
//                       </Form.Control.Feedback>
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

// export default EditVoiture;
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
// import { useDispatch, useSelector } from "react-redux";
// import { updateVoiture, findVoitureByID, getVoitures } from '../../features/voitureSlice';
// import { useParams } from 'react-router-dom';

// const EditVoiture = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [validated, setValidated] = useState(false);
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const voiture = useSelector((state) => {
//     return findVoitureByID(state, id);
//   });

//   const [nomvoiture, setNomvoiture] = useState( voiture.nomvoiture );

//   useEffect(() => {
//     if (voiture) {
//       setNomvoiture(voiture.nomvoiture);
//     }
//   }, [voiture]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === true) {
//       const voitureData = {
//         _id: id,
//         nomvoiture: nomvoiture,
//       };

//       dispatch(updateVoiture(voitureData))
//         .then(() => {
//           setNomvoiture('');
//           setValidated(false);
//           handleClose();
//           dispatch(getVoitures());
//         })
//         .catch(error => {
//           console.log(error);
//           alert("Erreur ! Modification non effectuée");
//         });

//       setValidated(true);
//     }
//   };

//   return (
//     <>
//       <span
//         onClick={handleShow}
//         style={{ cursor: 'pointer' }}
//       >
//         <NoteAltOutlinedIcon color='success' />
//       </span>
//       <Modal show={show} onHide={handleClose}>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title> <h1 align="center">Modification Article</h1></Modal.Title>
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
//                         placeholder="Nom de la voiture"
//                         value={nomvoiture}
//                         onChange={(e) => setNomvoiture(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le nom de la voiture
//                       </Form.Control.Feedback>
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

// export default EditVoiture;
