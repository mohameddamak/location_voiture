// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch } from 'react-redux';
// import { updateOption } from '../../features/optionSlice';
// import { buildFormData } from '../../utils/ConvertFormData';
// import { useParams } from 'react-router-dom'; // Import useParams to retrieve optionId

// const EditOption = ({ onHide }) => {
//   const { optionId } = useParams(); // Retrieve the optionId from the URL

//   const [validated, setValidated] = useState(false);
//   const [optionImage1, setOptionImage1] = useState('');
//   const [optionImage2, setOptionImage2] = useState('');

//   // Initialize state with the option data you want to edit
//   const [puissance, setPuissance] = useState('');
//   const [boite, setBoite] = useState('');
//   const [vitre, setVitre] = useState('');
//   const [cameraRecul, setCameraRecul] = useState(false);
//   const [systemeNavigation, setSystemeNavigation] = useState(false);
//   const [regulateurVitesse, setRegulateurVitesse] = useState(false);
//   const [volantIntegre, setVolantIntegre] = useState(false);
//   const [conduiteIntelligente, setConduiteIntelligente] = useState(false);
//   const [alarmeIntelligente, setAlarmeIntelligente] = useState(false);

//   const dispatch = useDispatch();

//   const handleImageChange = (event, key) => {
//     const file = event.target.files[0];

//     if (key === "option1") {
//       setOptionImage1(file);
//     }
//     if (key === "option2") {
//       setOptionImage2(file);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (form.checkValidity() === true) {
//       const images = [optionImage1, optionImage2];

//       const updatedOption = {
//         _id: optionId, // Include the option's ID
//         puissance,
//         boite,
//         vitre,
//         cameraRecul,
//         systemeNavigation,
//         regulateurVitesse,
//         volantIntegre,
//         conduiteIntelligente,
//         alarmeIntelligente,
//       };

//       try {
//         const formData = new FormData();
//         buildFormData(formData, updatedOption);
//         for (let index = 0; index < images.length; index++) {
//           formData.append("images", images[index]);
//         }
//         console.log("formData", formData.get("images"));
//         dispatch(updateOption(formData)) // Use the updateOption action instead of createOption
//           .then((res) => {
//             if (res.error) {
//               console.error('Update error:', res.error.message);
//               alert('Error! Update not completed');
//             } else {
//               console.log('Update OK', res);
//               // Close the modal or handle any other action after successful update
//               onHide();
//             }
//           })
//           .catch((error) => {
//             console.error('Update error:', error);
//             alert('Error! Update not completed');
//           });
//       } catch (error) {
//         console.error('Error updating option:', error);
//       }
//     }

//     setValidated(true);
//   };

//   return (
//     <Modal show={true} onHide={onHide}>
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             <h1 align="center">Edit option</h1>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="container w-100 d-flex justify-content-center">
//             <div>
//               <div className="form mt-3">
//               <Row className="mb-3">
//                   <Form.Group as={Col} md="6">
//                     <Form.Label>Image Option 1</Form.Label>
//                     <Form.Control
//                       required
//                       type="file"
//                       accept=".jpg, .jpeg, .png"
//                       onChange={(e) => { handleImageChange(e, "option1") }}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       Upload image for Option 1
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                   <Form.Group as={Col} md="6">
//                     <Form.Label>Image Option 2</Form.Label>
//                     <Form.Control
//                       required
//                       type="file"
//                       accept=".jpg, .jpeg, .png"
//                       onChange={(e) => { handleImageChange(e, "option2") }}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       Upload image for Option 2
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Row>

//                 <Row className="mb-3">
//                   <Form.Group as={Col} md="12">
//                     <Form.Label>Puissance</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Puissance"
//                       value={puissance}
//                       onChange={(e) => setPuissance(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Row>

//                 <Row className="mb-3">
//                   <Form.Group as={Col} md="6">
//                     <Form.Label>Boite</Form.Label>
//                     <Form.Control
//                       as="select"
//                       value={boite}
//                       onChange={(e) => setBoite(e.target.value)}
//                     >
//                       <option value="">Select</option>
//                       <option value="Automatique">Automatique</option>
//                       <option value="Manuelle">Manuelle</option>
//                     </Form.Control>
//                   </Form.Group>

//                   <Form.Group as={Col} md="6">
//                     <Form.Label>Vitre</Form.Label>
//                     <Form.Control
//                       as="select"
//                       value={vitre}
//                       onChange={(e) => setVitre(e.target.value)}
//                     >
//                       <option value="">Select</option>
//                       <option value="Toutautomatique">Tout automatique</option>
//                       <option value="Deuxvitresautomatiques">Deux vitres automatiques</option>
//                     </Form.Control>
//                   </Form.Group>
//                 </Row>

//                 <Row>
//                   <Col md="6">
//                     <Form.Check
//                       type="checkbox"
//                       label="Caméra de recul"
//                       checked={cameraRecul}
//                       onChange={(e) => setCameraRecul(e.target.checked)}
//                     />
//                   </Col>

//                   <Col md="6">
//                     <Form.Check
//                       type="checkbox"
//                       label="Système de navigation"
//                       checked={systemeNavigation}
//                       onChange={(e) => setSystemeNavigation(e.target.checked)}
//                     />
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col md="6">
//                     <Form.Check
//                       type="checkbox"
//                       label="Régulateur de vitesse"
//                       checked={regulateurVitesse}
//                       onChange={(e) => setRegulateurVitesse(e.target.checked)}
//                     />
//                   </Col>
//                   <Col md="6">
//                     <Form.Check
//                       type="checkbox"
//                       label="Volant intégré"
//                       checked={volantIntegre}
//                       onChange={(e) => setVolantIntegre(e.target.checked)}
//                     />
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col md="6">
//                     <Form.Check
//                       type="checkbox"
//                       label="Conduite intelligente"
//                       checked={conduiteIntelligente}
//                       onChange={(e) => setConduiteIntelligente(e.target.checked)}
//                     />
//                   </Col>
//                   <Col md="6">
//                     <Form.Check
//                       type="checkbox"
//                       label="Alarme intelligente"
//                       checked={alarmeIntelligente}
//                       onChange={(e) => setAlarmeIntelligente(e.target.checked)}
//                     />
//                   </Col>
//                 </Row>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={onHide}>
//             Close
//           </Button>
//           <Button type="submit">Save</Button>
//         </Modal.Footer>
//       </Form>
//     </Modal>
//   );
// };

// export default EditOption;





// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { getOptions, updateOption, } from '../../features/optionSlice'; // Import getOption action
// import { buildFormData } from '../../utils/ConvertFormData';
// import { useParams } from 'react-router-dom';

// const EditOption = ({ }) => {
//     const { optionId } = useParams();
//     const dispatch = useDispatch();
//     const option = useSelector((state) => state.storeoptions.options);
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     // State to manage form inputs
//     const [validated, setValidated] = useState(false);
//     const [optionImage1, setOptionImage1] = useState('');
//     const [optionImage2, setOptionImage2] = useState('');

//     // Populate the state with option data
//     const [puissance, setPuissance] = useState(option.puissance || '');
//     const [boite, setBoite] = useState(option.boite || '');
//     const [vitre, setVitre] = useState(option.vitre || '');
//     const [cameraRecul, setCameraRecul] = useState(!!option.cameraRecul);
//     const [systemeNavigation, setSystemeNavigation] = useState(!!option.systemeNavigation);
//     const [regulateurVitesse, setRegulateurVitesse] = useState(!!option.regulateurVitesse);
//     const [volantIntegre, setVolantIntegre] = useState(!!option.volantIntegre);
//     const [conduiteIntelligente, setConduiteIntelligente] = useState(!!option.conduiteIntelligente);
//     const [alarmeIntelligente, setAlarmeIntelligente] = useState(!!option.alarmeIntelligente);

//     // Handle image changes
//     const handleImageChange = (event, key) => {
//         const file = event.target.files[0];

//         if (key === "option1") {
//             setOptionImage1(file);
//         }
//         if (key === "option2") {
//             setOptionImage2(file);
//         }
//     };

//     // Handle form submission
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const form = event.currentTarget;

//         if (form.checkValidity() === true) {
//             const images = [optionImage1, optionImage2];

//             const updatedOption = {
//                 _id: optionId,
//                 puissance,
//                 boite,
//                 vitre,
//                 cameraRecul,
//                 systemeNavigation,
//                 regulateurVitesse,
//                 volantIntegre,
//                 conduiteIntelligente,
//                 alarmeIntelligente,
//             };

//             try {
//                 const formData = new FormData();
//                 buildFormData(formData, updatedOption);
//                 for (let index = 0; index < images.length; index++) {
//                     formData.append("images", images[index]);
//                 }
//                 dispatch(updateOption(formData))
//                     .then((res) => {
//                         console.log('Update OK', res);
//                         setPuissance("");
//                         setValidated(false);
//                         handleClose()


//                     })
//                     .then(() => {
//                         dispatch(getOptions());
//                     })
//                     .catch((error) => {
//                         console.log(error);
//                         alert('Erreur ! Mise à jour non effectuée');
//                     });
//             } catch (error) {
//                 console.error('Error updating option:', error);
//             }
//         }

//         setValidated(true);
//     };

//     return (
//         <>
//             <span
//                 onClick={handleShow}
//                 style={{ cursor: 'pointer' }}
//             ></span>
//             <Modal show={show} onHide={handleClose} >
//                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>
//                             <h1 align="center">Edit option</h1>
//                         </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <div className="container w-100 d-flex justify-content-center">
//                             <div>
//                                 <div className="form mt-3">
//                                     <Row className="mb-3">
//                                         <Form.Group as={Col} md="6">
//                                             <Form.Label>Image Option 1</Form.Label>
//                                             <Form.Control
//                                                 required
//                                                 type="file"
//                                                 accept=".jpg, .jpeg, .png"
//                                                 onChange={(e) => { handleImageChange(e, "option1") }}
//                                             />
//                                             <Form.Control.Feedback type="invalid">
//                                                 Upload image for Option 1
//                                             </Form.Control.Feedback>
//                                         </Form.Group>
//                                         <Form.Group as={Col} md="6">
//                                             <Form.Label>Image Option 2</Form.Label>
//                                             <Form.Control
//                                                 required
//                                                 type="file"
//                                                 accept=".jpg, .jpeg, .png"
//                                                 onChange={(e) => { handleImageChange(e, "option2") }}
//                                             />
//                                             <Form.Control.Feedback type="invalid">
//                                                 Upload image for Option 2
//                                             </Form.Control.Feedback>
//                                         </Form.Group>
//                                     </Row>

//                                     <Row className="mb-3">
//                                         <Form.Group as={Col} md="12">
//                                             <Form.Label>Puissance</Form.Label>
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="Puissance"
//                                                 value={puissance}
//                                                 onChange={(e) => setPuissance(e.target.value)}
//                                             />
//                                         </Form.Group>
//                                     </Row>
//                                     <Form.Group as={Col} md="6">
//                                         <Form.Label>Boite</Form.Label>
//                                         <Form.Control
//                                             as="select"
//                                             value={boite}
//                                             onChange={(e) => setBoite(e.target.value)}
//                                         >
//                                             <option value="">Select</option>
//                                             <option value="Automatique">Automatique</option>
//                                             <option value="Manuelle">Manuelle</option>
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Form.Group as={Col} md="6">
//                                         <Form.Label>Vitre</Form.Label>
//                                         <Form.Control
//                                             as="select"
//                                             value={vitre}
//                                             onChange={(e) => setVitre(e.target.value)}
//                                         >
//                                             <option value="">Select</option>
//                                             <option value="Toutautomatique">Tout automatique</option>
//                                             <option value="Deuxvitresautomatiques">Deux vitres automatiques</option>
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Row>
//                                         <Col md="6">
//                                             <Form.Check
//                                                 type="checkbox"
//                                                 label="Caméra de recul"
//                                                 checked={cameraRecul}
//                                                 onChange={(e) => setCameraRecul(e.target.checked)}
//                                             />
//                                         </Col>

//                                         <Col md="6">
//                                             <Form.Check
//                                                 type="checkbox"
//                                                 label="Système de navigation"
//                                                 checked={systemeNavigation}
//                                                 onChange={(e) => setSystemeNavigation(e.target.checked)}
//                                             />
//                                         </Col>
//                                     </Row>

//                                     <Row>
//                                         <Col md="6">
//                                             <Form.Check
//                                                 type="checkbox"
//                                                 label="Régulateur de vitesse"
//                                                 checked={regulateurVitesse}
//                                                 onChange={(e) => setRegulateurVitesse(e.target.checked)}
//                                             />
//                                         </Col>
//                                         <Col md="6">
//                                             <Form.Check
//                                                 type="checkbox"
//                                                 label="Volant intégré"
//                                                 checked={volantIntegre}
//                                                 onChange={(e) => setVolantIntegre(e.target.checked)}
//                                             />
//                                         </Col>
//                                     </Row>

//                                     <Row>
//                                         <Col md="6">
//                                             <Form.Check
//                                                 type="checkbox"
//                                                 label="Conduite intelligente"
//                                                 checked={conduiteIntelligente}
//                                                 onChange={(e) => setConduiteIntelligente(e.target.checked)}
//                                             />
//                                         </Col>
//                                         <Col md="6">
//                                             <Form.Check
//                                                 type="checkbox"
//                                                 label="Alarme intelligente"
//                                                 checked={alarmeIntelligente}
//                                                 onChange={(e) => setAlarmeIntelligente(e.target.checked)}
//                                             />
//                                         </Col>
//                                     </Row>
//                                 </div>
//                             </div>
//                         </div>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={handleClose}>
//                             Fermer
//                         </Button>
//                         <Button type="submit">Enregistrer</Button>
//                     </Modal.Footer>
//                 </Form>
//             </Modal>
//         </>
//     );
// };

// export default EditOption;



import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { updateOption } from '../../features/optionSlice';
import { buildFormData } from '../../utils/ConvertFormData';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditOption = () => {
  const { optionId } = useParams();
  const navigate = useNavigate();
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
const {voitures} =useSelector(state=>state.storevoitures)
const voitureOptionIndex=voitures.findIndex(item=>item.option._id===optionId)
const voitureOption=voitures[voitureOptionIndex].option
console.log("voitureOption",voitureOption);
  const [validated, setValidated] = useState(false);
  const [optionImage1, setOptionImage1] = useState('');
  const [optionImage2, setOptionImage2] = useState('');
  
  const [puissance, setPuissance] = useState(voitureOption.puissance);
  const [boite, setBoite] = useState(voitureOption.boite);
  const [vitre, setVitre] = useState(voitureOption.vitre);
  const [cameraRecul, setCameraRecul] = useState(voitureOption.cameraRecul);
  const [systemeNavigation, setSystemeNavigation] = useState(voitureOption.systemeNavigation);
  const [regulateurVitesse, setRegulateurVitesse] = useState(voitureOption.regulateurVitesse);
  const [volantIntegre, setVolantIntegre] = useState(voitureOption.volantIntegre);
  const [conduiteIntelligente, setConduiteIntelligente] = useState(voitureOption.conduiteIntelligente);
  const [alarmeIntelligente, setAlarmeIntelligente] = useState(voitureOption.alarmeIntelligente);

  const dispatch = useDispatch();

  const handleImageChange = (event, key) => {
    const file = event.target.files[0];

    if (key === "option1") {
      setOptionImage1(file);
    }
    if (key === "option2") {
      setOptionImage2(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const images = [optionImage1, optionImage2];

      const updatedOption = {
        _id: optionId,
        puissance,
        boite,
        vitre,
        cameraRecul,
        systemeNavigation,
        regulateurVitesse,
        volantIntegre,
        conduiteIntelligente,
        alarmeIntelligente,
      };

      try {
        const formData = new FormData();
        buildFormData(formData, updatedOption);
        for (let index = 0; index < images.length; index++) {
          formData.append("images", images[index]);
        }
        dispatch(updateOption(formData))
          .then((res) => {
            if (res.error) {
              console.error('Update error:', res.error.message);
              alert('Error! Update not completed');
            } else {
              console.log('Update OK', res);
              // navigate('/options/${}'); 
            navigate('/voiture/liste')
       
            }
          })
          .catch((error) => {
            console.error('Update error:', error);
            alert('Error! Update not completed');
          });
      } catch (error) {
        console.error('Error updating option:', error);
      }
    }

    setValidated(true);
  };



  return (
    <Modal show={true}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 align="center">Edit option</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container w-100 d-flex justify-content-center">
            <div>
              <div className="form mt-3">
                <Row className="mb-3">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Image Option 1</Form.Label>
                    <Form.Control
                      // required
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => { handleImageChange(e, "option1") }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Upload image for Option 1
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Image Option 2</Form.Label>
                    <Form.Control
                      // required
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => { handleImageChange(e, "option2") }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Upload image for Option 2
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
                      <option value="">Select</option>
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
                      <option value="">Select</option>
                      <option value="Toutautomatique">Tout automatique</option>
                      <option value="Deuxvitresautomatiques">Deux vitres automatiques</option>
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
          <Button variant="secondary">
            Close
          </Button>
          <Button type="submit">Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditOption;









// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateOption } from '../../features/optionSlice';
// import { buildFormData } from '../../utils/ConvertFormData';
// import { useParams } from 'react-router-dom';

// const EditOption = ({ onHide }) => {
//   const { optionId } = useParams();
//   const dispatch = useDispatch();
  
//   // Utilisez useSelector pour obtenir les options du Redux store
//   const options = useSelector((state) => state.storeoptions.options);

//   const [validated, setValidated] = useState(false);
  
//   // Trouvez l'option correspondante dans les options chargées depuis le Redux store
//   const option = options.find((opt) => opt._id === optionId);

//   const [optionImage1, setOptionImage1] = useState('');
//   const [optionImage2, setOptionImage2] = useState('');
//   const [puissance, setPuissance] = useState('');
//   const [boite, setBoite] = useState('');
//   const [vitre, setVitre] = useState('');

//   useEffect(() => {
//     if (option) {
//       // Utilisez les valeurs de l'option trouvée dans les options du Redux store
//       setOptionImage1(option.optionImage1);
//       setOptionImage2(option.optionImage2);
//       setPuissance(option.puissance);
//       setBoite(option.boite);
//       setVitre(option.vitre);
//     }
//   }, [option, optionId]);

//   const handleUpdateOption = () => {
//     if (option) {
//       // Utilisez les valeurs actuelles des états locaux pour mettre à jour l'option
//       const updatedOption = {
//         optionImage1: optionImage1,
//         optionImage2: optionImage2,
//         puissance: puissance,
//         boite: boite,
//         vitre: vitre,
//         _id: option._id,
//       };
  
//       // Ensuite, vous pouvez appeler la fonction de mise à jour de l'option avec ces données
//       dispatch(updateOption(updatedOption));
      
//       // Fermez la fenêtre modale ou effectuez d'autres actions nécessaires
//       onHide();
//     }
//   };

//   return (
//     <Modal show={true} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modifier l'option</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form validated={validated} onSubmit={handleUpdateOption}>
//           <Form.Group controlId="optionImage1">
//             <Form.Label>Option Image 1</Form.Label>
//             <Form.Control
//               type="text"
//               value={optionImage1}
//               onChange={(e) => setOptionImage1(e.target.value)}
//             />
//           </Form.Group>
          
//           <Form.Group controlId="optionImage2">
//             <Form.Label>Option Image 2</Form.Label>
//             <Form.Control
//               type="text"
//               value={optionImage2}
//               onChange={(e) => setOptionImage2(e.target.value)}
//             />
//           </Form.Group>
          
//           <Form.Group controlId="puissance">
//             <Form.Label>Puissance</Form.Label>
//             <Form.Control
//               type="text"
//               value={puissance}
//               onChange={(e) => setPuissance(e.target.value)}
//             />
//           </Form.Group>
          
//           <Form.Group controlId="boite">
//             <Form.Label>Boite</Form.Label>
//             <Form.Control
//               type="text"
//               value={boite}
//               onChange={(e) => setBoite(e.target.value)}
//             />
//           </Form.Group>
          
//           <Form.Group controlId="vitre">
//             <Form.Label>Vitre</Form.Label>
//             <Form.Control
//               type="text"
//               value={vitre}
//               onChange={(e) => setVitre(e.target.value)}
//             />
//           </Form.Group>
          
//           <Button type="submit">Enregistrer</Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default EditOption;