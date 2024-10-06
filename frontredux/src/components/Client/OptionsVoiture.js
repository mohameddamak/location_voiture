import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { urlimage } from '../../Axios/Api';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function OptionsVoiture() {
    const { voitureId } = useParams();
    const voitures = useSelector((state) => state.storevoitures.voitures);
    const [voiture, setVoiture] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const selectedVoiture = voitures.find((voiture) => voiture._id === voitureId);
        if (selectedVoiture) {
            setVoiture(selectedVoiture);
        }
    }, [voitures, voitureId]);

    const imageStyle = {
        width: '100%',
        height: 'auto',
    };

    const fixedHeightImageStyle = {
        width: '100%',
        height: 'auto',
        maxHeight: '200px',
    };

    const cardStyle = {
        marginBottom: '20px',
    };

    const titleStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    const optionsCardStyle = {
        marginTop: '40px', // Ajoutez de la marge en haut de la carte d'options
    };

    const goBack = () => {
        navigate(-1); // Naviguer en arrière d'une page
      };
    return (
        <div>
            {voiture && (
                <div>

                    <h2 style={titleStyle}>Options de la voiture</h2>
                    <Row>
                        <Col>
                            <Card style={cardStyle}>
                                <Card.Img
                                    style={fixedHeightImageStyle}
                                    src={`${urlimage}${voiture.imagevoiture}`}
                                    alt={`Image de ${voiture.nomvoiture}`}
                                />
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={cardStyle}>
                                <Card.Img
                                    style={fixedHeightImageStyle}
                                    src={`${urlimage}${voiture.option.imageOption1}`}
                                    alt="Option 1"
                                />
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={cardStyle}>
                                <Card.Img
                                    style={fixedHeightImageStyle}
                                    src={`${urlimage}${voiture.option.imageOption2}`}
                                    alt="Option 2"
                                />
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div >


                        <Card style={{ ...cardStyle, ...optionsCardStyle }}>
                            <Card.Body>
                                <ul>
                                    {voiture.option && voiture.option.puissance && (
                                        <li>
                                            <strong>Puissance:</strong> {voiture.option.puissance}cv
                                        </li>
                                    )}
                                    {voiture.option && voiture.option.boite && (
                                        <li>
                                            <strong>Boîte:</strong> {voiture.option.boite}
                                        </li>
                                    )}
                                    {voiture.option && voiture.option.vitre && (
                                        <li>
                                            <strong>Vitre:</strong> {voiture.option.vitre}
                                        </li>
                                    )}
                                    {voiture.option && voiture.option.cameraRecul && (
                                        <li>
                                            <strong>Caméra de recul</strong>
                                        </li>
                                    )}
                                    {voiture.option && voiture.option.systemeNavigation && (
                                        <li>
                                            <strong>Système de navigation</strong>
                                        </li>
                                    )}
                                    {voiture.option && voiture.option.regulateurVitesse && (
                                        <li>
                                            <strong>Régulateur de vitesse</strong>
                                        </li>
                                    )}
                                    {voiture.option && voiture.option.volantIntegre && (
                                        <li>
                                            <strong>Volant intégré</strong>
                                        </li>
                                    )}
                                    {voiture.option && voiture.option.conduiteIntelligente && (
                                        <li>
                                            <strong>Conduite intelligente</strong>
                                        </li>
                                    )}
                                    {voiture.option && voiture.option.alarmeIntelligente && (
                                        <li>
                                            <strong>Alarme intelligente</strong>
                                        </li>
                                    )}
                                </ul>
                            </Card.Body>
                        </Card>
                        <button onClick={goBack}>Retourner à la page précédente</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OptionsVoiture;