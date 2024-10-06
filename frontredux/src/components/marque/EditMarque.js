import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { useDispatch } from "react-redux";

import { getMarques, updateMarque } from '../../features/marqueSlice';
import { buildFormData } from '../../utils/ConvertFormData';


const EditMarque = ({ art }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const [id, setId] = useState(art._id);
  const [nommarque, setNommarque] = useState(art.nommarque);
  const [prixmarque, setPrixmarque] = useState(art.prixmarque);
  const [immarque, setImmarque] = useState(art.immarque);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  console.log("art", art);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImmarque(file.name); // Set immarque to the image file's name
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {


      const marque = {
        nommarque: nommarque,
        prixmarque: prixmarque,
        immarque: immarque,
        _id: art._id

      }
      const formData = new FormData();
      buildFormData(formData, marque);
      if (selectedImage) {
        // Append the selected image file to the formData
        formData.append('immarque', selectedImage, selectedImage.name);
      }
      dispatch(updateMarque(formData))
        .then(res => {
          console.log("Modification OK", res);
          setNommarque("");
          setPrixmarque("");
          setImmarque("");

          setValidated(false);
          handleClose()

        }).then(() => {
          dispatch(getMarques());
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
        <NoteAltOutlinedIcon color='success' />
      </span>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title> <h1 align="center">Modification Article</h1></Modal.Title>
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
                        type="file" // Change input type to "file"
                        accept=".jpg, .jpeg, .png" // Specify accepted file types
                        onChange={handleImageChange} // Handle file selection
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
    </>
  );
};

export default EditMarque;

