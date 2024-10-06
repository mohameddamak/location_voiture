
// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVoitures } from '../../features/voitureSlice';
// import { getMarques } from '../../features/marqueSlice';
// import { urlimage } from '../../Axios/Api';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import '../../Voiture.css';
// import { Link } from 'react-router-dom';

// function Voiture() {
//   const dispatch = useDispatch();
//   const { marqueId } = useParams(); // Récupérez le paramètre d'URL marqueId
//   const { voitureId } = useParams();
//   const voitures = useSelector((state) => state.storevoitures.voitures);
//   // const marques = useSelector((state) => state.storemarques.marques);

//   useEffect(() => {
//     // dispatch(getMarques());
//     dispatch(getVoitures());
//   }, [dispatch]);

//   // Filtrer les voitures par marqueId
//   const voituresDeMarque = voitures.filter((voiture) => voiture.marque._id === marqueId);

//   return (
//     <div>
//       <h2>Les voitures</h2>

//       <Row className="card-row">
//         {voituresDeMarque.map((voiture) => (
//           <Col key={voiture._id} xs={12} sm={6} md={4}>
//             <Card className="custom-card">
//               <Link to={`/options/${voiture._id}`}> {/* Lien vers les options de la voiture */}
//                 <Card.Img
//                   variant="top"
//                   src={`${urlimage}${voiture.imagevoiture}`}
//                   alt={`Image de ${voiture.nomvoiture}`}
//                   style={{ objectFit: 'cover', width: '100%', height: '200px' }}
//                 />
//               </Link>
//               <Card.Body>
//                 <Card.Title>{voiture.marque.nommarque}</Card.Title>
//                 <Card.Text>{voiture.nomvoiture}</Card.Text>
//                 <Card.Text>compteur: {voiture.compteur}Km</Card.Text>
//                 <Card.Text>Prix de la voiture: {voiture.prixvoiture}DT</Card.Text>
//                 <Link to={`/reservation/${voiture._id}`} className="btn btn-primary">
//                   Réserver
//                 </Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default Voiture;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVoitures } from '../../features/voitureSlice';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { urlimage } from '../../Axios/Api';

function Voiture() {
  const dispatch = useDispatch();
  const { marqueId } = useParams();
  const voitures = useSelector((state) => state.storevoitures.voitures);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  useEffect(() => {
    dispatch(getVoitures());
  }, [dispatch]);

  const voituresDeMarque = voitures.filter((voiture) => voiture.marque._id === marqueId);

  return (
    <div>
      <h2>Les voitures</h2>

      <Row className="card-row">
        {voituresDeMarque.map((voiture) => (
          <Col key={voiture._id} xs={12} sm={6} md={4}>
            <Card className="custom-card">
              <Link to={`/options/${voiture._id}`}>
                <Card.Img
                  variant="top"
                  src={`${urlimage}${voiture.imagevoiture}`}
                  alt={`Image de ${voiture.nomvoiture}`}
                  style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{voiture.marque.nommarque}</Card.Title>
                <Card.Text>{voiture.nomvoiture}</Card.Text>
                <Card.Text>compteur: {voiture.compteur}Km</Card.Text>
                <Card.Text>Prix de la voiture: {voiture.prixvoiture}DT</Card.Text>

                {/* Affichez les dates de disponibilité ici */}
                {/* <Card.Text>Disponibilité </Card.Text> */}
                {isLoggedIn ? (
                  // <Link to={`/reservation/${voiture._id}`} className="btn btn-primary">
                  //   Réserver
                  // </Link>
                  <Link to={voiture.disponibilite ? `/reservation/${voiture._id}` : '#'} className={`btn btn-primary ${voiture.disponibilite ? '' : 'disabled'}`} disabled={!voiture.disponibilite}>
                    Réserver
                  </Link>
                ) : (
                  <Link to="/login" className="btn btn-primary">
                    Login

                  </Link>

                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Voiture;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVoitures } from '../../features/voitureSlice';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Link, useNavigate } from 'react-router-dom'; // Utilisez useNavigate pour la redirection
// import { urlimage } from '../../Axios/Api';

// function Voiture() {
//   const dispatch = useDispatch();
//   const { marqueId } = useParams();
//   const voitures = useSelector((state) => state.storevoitures.voitures);
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Vérifiez la connexion de l'utilisateur
//   const navigate = useNavigate(); // Utilisez useNavigate pour accéder à la fonction de navigation

//   const [selectedCarId, setSelectedCarId] = useState(null); // État pour stocker l'ID de la voiture sélectionnée

//   useEffect(() => {
//     dispatch(getVoitures());
//   }, [dispatch]);

//   const voituresDeMarque = voitures.filter((voiture) => voiture.marque._id === marqueId);

//   // Redirection vers la page de réservation si l'utilisateur est connecté
//   useEffect(() => {
//     if (isLoggedIn) {
//       if (selectedCarId) {
//         navigate(`/reservation/${selectedCarId}`); // Utilisez la fonction de navigation pour la redirection
//       }
//     }
//   }, [isLoggedIn, selectedCarId, navigate]);

//   return (
//     <div>
//       <h2>Les voitures</h2>

//       <Row className="card-row">
//         {voituresDeMarque.map((voiture) => (
//           <Col key={voiture._id} xs={12} sm={6} md={4}>
//             <Card className="custom-card">
//               <Link to={`/options/${voiture._id}`}>
//                 <Card.Img
//                   variant="top"
//                   src={`${urlimage}${voiture.imagevoiture}`}
//                   alt={`Image de ${voiture.nomvoiture}`}
//                   style={{ objectFit: 'cover', width: '100%', height: '200px' }}
//                 />
//               </Link>
//               <Card.Body>
//                 <Card.Title>{voiture.marque.nommarque}</Card.Title>
//                 <Card.Text>{voiture.nomvoiture}</Card.Text>
//                 <Card.Text>compteur: {voiture.compteur}Km</Card.Text>
//                 <Card.Text>Prix de la voiture: {voiture.prixvoiture}DT</Card.Text>
//                 <Card.Text>Disponibilité : {voiture.disponibilite.join(', ')}</Card.Text>

//                 <button
//                   className="btn btn-primary"
//                   onClick={() => {
//                     setSelectedCarId(voiture._id); // Définir l'ID de la voiture sélectionnée
//                   }}
//                   style={{ marginBottom: '10px' }}
//                 >
//                   Réserver
//                 </button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default Voiture;