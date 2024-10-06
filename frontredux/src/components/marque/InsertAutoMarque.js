import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { createMarque } from '../../features/marqueSlice';
import { buildFormData } from '../../utils/ConvertFormData';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const InsertAutoMarque = () => {
  const [show, setShow] = useState(true); // Afficher le modal par défaut
  const handleClose = () => setShow(false);
  const [validated, setValidated] = useState(false);
  const [nommarque, setNommarque] = useState('');
  const [prixmarque, setPrixmarque] = useState('');
  const [immarque, setImmarque] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImmarque(file.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const marque = {
        nommarque: nommarque,
        prixmarque: prixmarque,
        immarque: immarque,
      }
      const formData = new FormData();
      buildFormData(formData, marque);
      if (selectedImage) {
        formData.append('immarque', selectedImage, selectedImage.name);
      }

      dispatch(createMarque(formData))
        .then((res) => {
          console.log('Insert OK', res);
          setNommarque('');
          setPrixmarque('');
          setImmarque(null);
          setValidated(false);
          handleClose();

          Swal.fire({
            icon: 'success',
            title: 'Insertion effectuée!',
            showConfirmButton: true,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
          alert('Erreur ! Insertion non effectuée');

          Swal.fire({
            icon: 'error',
            title: 'Erreur lors de l\'insertion!',
            text: 'Veuillez réessayer.',
          });
        });
    }
    setValidated(true);
  };

  // Utilisez useEffect pour afficher le modal automatiquement
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 align="center">Ajout Marque</h1>
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
                      placeholder="Nom de la marque"
                      value={nommarque}
                      onChange={(e) => setNommarque(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Saisir le nom de la marque
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Prix"
                      value={prixmarque}
                      onChange={(e) => setPrixmarque(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Saisir le prix de la marque
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-2">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleImageChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Sélectionnez une image pour la marque
                    </Form.Control.Feedback>
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
  );
};

export default InsertAutoMarque;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch } from 'react-redux';
// import { createMarque } from '../../features/marqueSlice';
// import { buildFormData } from '../../utils/ConvertFormData';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const InsertAutoMarque = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [validated, setValidated] = useState(false);
//   const [nommarque, setNommarque] = useState('');
//   const [prixmarque, setPrixmarque] = useState('');
//   const [immarque, setImmarque] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const dispatch = useDispatch();

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//     setImmarque(file.name);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === true) {
//       const marque = {
//         nommarque: nommarque,
//         prixmarque: prixmarque,
//         immarque: immarque,
//       }
//       const formData = new FormData();
//       buildFormData(formData, marque);
//       if (selectedImage) {
//         formData.append('immarque', selectedImage, selectedImage.name);
//       }

//       dispatch(createMarque(formData))
//         .then((res) => {
//           console.log('Insert OK', res);
//           setNommarque('');
//           setPrixmarque('');
//           setImmarque(null);
//           setValidated(false);
//           handleClose();

//           Swal.fire({
//             icon: 'success',
//             title: 'Insertion réussie!',
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         })
//         .catch((error) => {
//           console.log(error);
//           alert('Erreur ! Insertion non effectuée');

//           Swal.fire({
//             icon: 'error',
//             title: 'Erreur lors de l\'insertion!',
//             text: 'Veuillez réessayer.',
//           });
//         });
//     }
//     setValidated(true);
//   };

//   return (
//     <>
//       {/* <Button variant="primary" onClick={handleShow}>
//         Ajouter une marque
//       </Button> */}

//       <Modal show={show} onHide={handleClose}>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <h1 align="center">Ajout Marque</h1>
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
//                         placeholder="Nom de la marque"
//                         value={nommarque}
//                         onChange={(e) => setNommarque(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le nom de la marque
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Prix</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Prix"
//                         value={prixmarque}
//                         onChange={(e) => setPrixmarque(e.target.value)}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         Saisir le prix de la marque
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                   </Row>
//                   <Row className="mb-2">
//                     <Form.Group as={Col} md="6">
//                       <Form.Label>Image</Form.Label>
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

// export default InsertAutoMarque;

