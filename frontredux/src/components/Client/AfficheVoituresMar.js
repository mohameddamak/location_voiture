// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getVoitures } from '../../features/voitureSlice';


// function AfficheVoitureMarque() {
//     const dispatch = useDispatch();
//     const voitures = useSelector((state) => state.storevoitures.voitures);

//     const marqueID = '651b283bfbdcf1169f056ac4'; // Remplacez par l'ID de la marque sélectionnée
//     const [voituresDeLaMarque, setVoituresDeLaMarque] = useState([]);

//     useEffect(() => {
//         dispatch(getVoitures());
//     }, [dispatch]);
//     console.log(voitures)

//     useEffect(() => {
//         // Filtrer les voitures par marque lorsque l'état des voitures change
//         const filteredVoitures = voitures.filter (voiture => voiture.marque._ === marque._Id);
//         setVoituresDeLaMarque(filteredVoitures);
//     }, [voitures, marqueID]);

//     // Le reste de votre composant...

//     return (
//         <div>
//             <h1>Voitures de la marque sélectionnée</h1>
//             <ul>
//                 {voituresDeLaMarque.map(voiture => (
//                     <li key={voiture._id}>{voiture.nomvoiture}</li>

//                 ))}
//             </ul>
//             {/* Autres éléments de votre composant */}
//         </div>
//     );
// }

// export default AfficheVoitureMarque;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { getVoitures } from '../../features/voitureSlice';
// import { ClassNames } from '@emotion/react';

// function MarquesEtVoitures() {
//     const dispatch = useDispatch();
//     const marques = useSelector((state) => state.storemarques.marques);
//     const voitures = useSelector((state) => state.storevoitures.voitures);

//     useEffect(() => {
//         dispatch(getMarques());
//         dispatch(getVoitures());
//     }, [dispatch]);

   
//     console.log(voitures)
//     return (
//         <div>
//             {marques.map((marque) => (
                   
//                 <div key={marque._id}>
                    
//                     <h2>{marque.nommarque}</h2>
//                     <ul>
//                         {voitures.map((voiture) => (
//                            <li className={` ${voiture.marque._id === marque._id ? 'd-flex' : 'd-none'}`} key={voiture._id}>
                              
//                                 {voiture.nomvoiture} 
//                             </li>
//                         ))}
                       
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default MarquesEtVoitures;
// import React, { useEffect, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { getVoitures } from '../../features/voitureSlice';

// function AfficheVoituresMar() {
//     const dispatch = useDispatch();
//     const marques = useSelector((state) => state.storemarques.marques);
//     const voitures = useSelector((state) => state.storevoitures.voitures);

//     useEffect(() => {
//         dispatch(getMarques());
//         dispatch(getVoitures());
//     }, [dispatch]);

//     // Utilisez useMemo pour initialiser voituresParMarque de manière stable
//     const voituresParMarque = useMemo(() => {
//         const result = {};
//         voitures.forEach((voiture) => {
//             if (!result[voiture.marque]) {
//                 result[voiture.marque] = [];
//             }
//             result[voiture.marque].push(voiture);
//         });
//         return result;
//     }, [voitures]);

//     return (
//         <div>
//             {marques.map((marque) => (
//                 <div key={marque._id}>
//                     <h2>{marque.nommarque}</h2>
//                     <ul>
//                         {voituresParMarque[marque._id] &&
//                             voituresParMarque[marque._id].map((voiture) => (
//                                 <li key={voiture._id}>
//                                     {voiture.nomvoiture}
//                                 </li>
//                             ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default AfficheVoituresMar;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { getVoitures } from '../../features/voitureSlice';

// function MarquesEtVoitures() {
//     const dispatch = useDispatch();
//     const marques = useSelector((state) => state.storemarques.marques);
//     const voitures = useSelector((state) => state.storevoitures.voitures);

//     useEffect(() => {
//         dispatch(getMarques());
//         dispatch(getVoitures());
//     }, [dispatch]);

//     // Organisez les voitures par marque comme précédemment
//     const voituresParMarque = {};

//     useEffect(() => {
//         voitures.forEach((voiture) => {
//             if (!voituresParMarque[voiture.marque]) {
//                 voituresParMarque[voiture.marque] = [];
//             }
//             voituresParMarque[voiture.marque].push(voiture);
//         });
//         console.log('Marques:', marques); // Affichez les données des marques
//         console.log('Voitures:', voitures); // Affichez les données des voitures
//         console.log('Voitures par marque:', voituresParMarque); // Affichez comment les voitures sont organisées par marque
//     }, [voitures, voituresParMarque, marques]);

//     return (
//         <div>
//             {marques.map((marque) => (
//                 <div key={marque._id}>
//                     <h2>{marque.nommarque}</h2>
//                     <ul>
//                         {voituresParMarque[marque._id] &&
//                             voituresParMarque[marque._id].map((voiture) => (
//                                 <li key={voiture._id}>
//                                     {voiture.nomvoiture} 
//                                 </li>
//                             ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default MarquesEtVoitures;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { getVoitures } from '../../features/voitureSlice';

// function MarquesEtVoitures() {
//     const dispatch = useDispatch();
//     const voitures = useSelector((state) => state.storevoitures.voitures);

//     useEffect(() => {
//         dispatch(getMarques());
//         dispatch(getVoitures());
//     }, [dispatch]);

//     return (
//         <div>
//             <h2>Toutes les voitures</h2>
//             <ul>
//                 {voitures.map((voiture) => (
//                     <li key={voiture._id}>
//                         {voiture.nomvoiture} - {voiture.prixvoiture}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default MarquesEtVoitures;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMarques } from '../../features/marqueSlice';
// import { getVoitures } from '../../features/voitureSlice';

// function MarquesEtVoitures() {
    
//     const dispatch = useDispatch();
//     const marques = useSelector((state) => state.storemarques.marques);
//     const voitures = useSelector((state) => state.storevoitures.voitures);

//     useEffect(() => {
//         dispatch(getMarques());
//         dispatch(getVoitures());
//     }, [dispatch]);

//     return (
//         <div>
//             {marques.map((marque) => (
//                 <div key={marque._id}>
//                     <h2>{marque.nommarque}</h2>
//                     <ul>
//                         {voitures.map((voiture) => (
//                             voiture.marqueId === marque._id ? (
//                                 <li key={voiture._id}>
//                                     {voiture.nomvoiture}
//                                 </li>
//                             ) : null
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default MarquesEtVoitures;
import React, { useEffect } from 'react';
import { getMarques } from '../../features/marqueSlice';
import { getVoitures } from '../../features/voitureSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MarquesEtVoitures() {
    const dispatch = useDispatch();
    const { marqueId } = useParams(); // Accéder à l'ID de la marque depuis les paramètres de requête
    const marques = useSelector((state) => state.storemarques.marques);
    const voitures = useSelector((state) => state.storevoitures.voitures);

    useEffect(() => {
        dispatch(getMarques());
        dispatch(getVoitures());
    }, [dispatch, marqueId]);

    // Filtrer les voitures par marque en utilisant marqueId
    const filteredVoitures = voitures.filter(voiture => voiture.marqueId=== marqueId);

    return (
        <div>
            {marques.map((marque) => (
                <div key={marque._id}>
                    <h2>{marque.nommarque}</h2>
                    <ul>
                        {filteredVoitures.map((voiture) => (
                            <li key={voiture._id}>
                                

                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default MarquesEtVoitures;
// function MarquesEtVoitures() {
//     const dispatch = useDispatch();
//     const { marqueId } = useParams();
//     const marques = useSelector((state) => state.storemarques.marques);
//     const voitures = useSelector((state) => state.storevoitures.voitures);

//     useEffect(() => {
//         dispatch(getMarques());
//         dispatch(getVoitures());
//     }, [dispatch, marqueId]);

//     // Trouver la marque correspondant à marqueId
//     const selectedMarque = marques.find((marque) => marque._id === marqueId);

//     if (!selectedMarque) {
//         return <div>Marque non trouvée</div>;
//     }

//     // Filtrer les voitures par marque en utilisant marqueId
//     const filteredVoitures = voitures.filter(voiture => voiture.marqueId === marqueId);

//     return (
//         <div>
//             <h2>{selectedMarque.nommarque}</h2>
//             <ul>
//                 {filteredVoitures.map((voiture) => (
//                     <li key={voiture._id}>
//                         {/* Affichez les informations de la voiture ici */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }