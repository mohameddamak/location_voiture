
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMarques } from '../../features/marqueSlice';
import { getVoitures } from '../../features/voitureSlice';
import { Card, CardGroup } from 'react-bootstrap';
import { urlimage } from '../../Axios/Api';
import '../../App.css'; // Créez un fichier CSS pour le style

function VoitureCards() {
    const dispatch = useDispatch();
    const marques = useSelector((state) => state.storemarques.marques);
    const voitures = useSelector((state) => state.storevoitures.voitures);

    useEffect(() => {
        dispatch(getMarques());
        dispatch(getVoitures());
    }, [dispatch]);

    const voituresParMarque = new Map();

    voitures.forEach((voiture) => {
        const nomMarque = voiture.marque.nommarque;
        if (!voituresParMarque.has(nomMarque)) {
            voituresParMarque.set(nomMarque, []);
        }
        voituresParMarque.get(nomMarque).push(voiture);
    });

    return (
        
        <div className="voiture-cards-container">
            <h1>les voitures</h1>
            {Array.from(voituresParMarque.keys()).map((nomMarque) => (
                <div key={nomMarque}>
                    <h2>{nomMarque}</h2>
                    {/* <img
                    src={`${urlimage}${voiture.marque.immarque}`}
                    alt={`Image de la `}
                    style={{ width: '100px' }}
                  /> */}
                    <div className="card-grid">
                        {voituresParMarque.get(nomMarque).map((voiture) => (
                            <Card key={voiture._id}>
                                <Card.Img
                                    variant="top"
                                    src={`${urlimage}${voiture.imagevoiture}`}
                                    style={{ width: '100%', height: '100px' }}
                                />
                                <Card.Body>
                                    <Card.Title>{voiture.nomvoiture}</Card.Title>
                               <p>chiffreAffaires:{voiture.chiffreAffaires}</p>

                                    {/* Ajoutez d'autres informations si nécessaire */}
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VoitureCards;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { getVoitures } from '../../features/voitureSlice';
// import { Card, Button } from 'react-bootstrap';
// import { urlimage } from '../../Axios/Api';
// import '../../App.css'; // Fichier CSS pour le style

// function VoitureCards() {
//     const dispatch = useDispatch();
//     const [voitures, setVoitures] = useState([]); // Définir l'état local pour les voitures

//     const marques = useSelector((state) => state.storemarques.marques);

//     useEffect(() => {
//         dispatch(getMarques());
//         dispatch(getVoitures());
//     }, [dispatch]);

//     const resetChiffreAffaires = (voitureId) => {
//         const updatedVoitures = voitures.map((voiture) => {
//             if (voiture._id === voitureId) {
//                 return {
//                     ...voiture,
//                     chiffreAffaires: 0, // Réinitialiser le chiffre d'affaires à zéro
//                 };
//             }
//             return voiture;
//         });
//         setVoitures(updatedVoitures); // Mettre à jour l'état local des voitures
//     };

//     const voituresParMarque = new Map();

//     voitures.forEach((voiture) => {
//         const nomMarque = voiture.marque.nommarque;
//         if (!voituresParMarque.has(nomMarque)) {
//             voituresParMarque.set(nomMarque, []);
//         }
//         voituresParMarque.get(nomMarque).push(voiture);
//     });

//     return (
//         <div className="voiture-cards-container">
//             <h1>Les voitures</h1>
//             {Array.from(voituresParMarque.keys()).map((nomMarque) => (
//                 <div key={nomMarque}>
//                     <h2>{nomMarque}</h2>
//                     <div className="card-grid">
//                         {voituresParMarque.get(nomMarque).map((voiture) => (
//                             <Card key={voiture._id}>
//                                 <Card.Img
//                                     variant="top"
//                                     src={`${urlimage}${voiture.imagevoiture}`}
//                                     style={{ width: '100%', height: '100px' }}
//                                 />
//                                 <Card.Body>
//                                     <Card.Title>{voiture.nomvoiture}</Card.Title>
//                                     <p>Chiffre d'affaires : {voiture.chiffreAffaires}</p>
//                                     {/* Bouton pour réinitialiser le chiffre d'affaires */}
//                                     <Button
//                                         variant="secondary"
//                                         onClick={() => resetChiffreAffaires(voiture._id)}
//                                     >
//                                         Réinitialiser à zéro
//                                     </Button>
//                                     {/* Autres informations si nécessaire */}
//                                 </Card.Body>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default VoitureCards;