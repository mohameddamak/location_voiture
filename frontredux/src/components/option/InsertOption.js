import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { createOption } from '../../features/optionSlice';
import { buildFormData } from '../../utils/ConvertFormData';

const InsertOption = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [validated, setValidated] = useState(false);

  const [puissance, setPuissance] = useState('');
  const [boite, setBoite] = useState('');
  const [vitre, setVitre] = useState('');
  const [cameraRecul, setCameraRecul] = useState(false);
  const [systemeNavigation, setSystemeNavigation] = useState(false);
  const [regulateurVitesse, setRegulateurVitesse] = useState(false);
  const [volantIntegre, setVolantIntegre] = useState(false);
  const [conduiteIntelligent, setConduiteIntelligente] = useState(false);
  const [alarmeIntelligent, setAlarmeIntelligente] = useState(false);
  const [optionImage1, setOptionImage1] = useState('');
  const [optionImage2, setOptionImage2] = useState('');

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

      const optionToCreate = {
        puissance,
        boite,
        vitre,
        cameraRecul,
        systemeNavigation,
        regulateurVitesse,
        volantIntegre,
        conduiteIntelligent,
        alarmeIntelligent,
      };

      try {
        const formData = new FormData();
        buildFormData(formData, optionToCreate);
        for (let index = 0; index < images.length; index++) {
          formData.append("images", images[index]);
        }

        dispatch(createOption(formData))
          .then((res) => {
            console.log('Insert OK', res);

            setPuissance('');
            setBoite('');
            setVitre('');
            setCameraRecul(false);
            setSystemeNavigation(false);
            setRegulateurVitesse(false);
            setVolantIntegre(false);
            setConduiteIntelligente(false);
            setAlarmeIntelligente(false);
            setValidated(false);
            handleClose();
          })
          .catch((error) => {
            console.log(error);
            alert('Error! Insertion not completed');
          });
      } catch (error) {
        console.error('Error creating option:', error);
      }
    }

    setValidated(true);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 align="center">Insert Option</h1>
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
                      required
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
                      required
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
                      checked={conduiteIntelligent}
                      onChange={(e) => setConduiteIntelligente(e.target.checked)}
                    />
                  </Col>
                  <Col md="6">
                    <Form.Check
                      type="checkbox"
                      label="Alarme intelligente"
                      checked={alarmeIntelligent}
                      onChange={(e) => setAlarmeIntelligente(e.target.checked)}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit">Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default InsertOption;