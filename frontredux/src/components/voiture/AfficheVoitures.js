// import React from 'react';
// import ReactLoading from 'react-loading';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

// import { urlimage } from '../../Axios/Api';
// import MUIDataTable from 'mui-datatables';
// import { deleteVoiture } from '../../features/voitureSlice';
// import EditVoiture from './EditVoiture';


// // Assuming that 'urlimage' is defined and correctly set to the base URL of your images
// // const urlimage = "http://localhost:3001/";

// const AfficheMarques = () => {
//   const dispatch = useDispatch();
//   const { voitures, isLoading, error } = useSelector((state) => state.storevoitures);

//   const handleDelete = (id) => {
//     if (window.confirm('Supprimer l\'article ?')) {
//       dispatch(deleteVoiture(id));
//     }
//   };

//   const columns = [
//     {
//       label: 'Nom de la Marque', // Nom de la colonne
//       name: 'voitures.marque.nommarque', // Accès au nom de la marque liée
//       options: {
//         customBodyRender: (value, tableMeta, updateValue) => {
//           return value;
//         },
//       },
//     },


//     {
//       label: 'Nom',
//       name: 'nomvoiture',
//     },
//     {
//       label: 'image',
//       name: 'imagevoiture',
//       options: {
//         customBodyRender: (rowdata) => (
//           <img
//             style={{ height: 40, width: 60, borderRadius: '10%' }}
//             src={urlimage + rowdata} // Construct the full image URL
//             alt="imagevoiture"
//           />
//         ),
//       },
//     },
//     {
//       label: 'compteur',
//       name: 'compteur',

//     },

//     {
//       label: 'prix',
//       name: 'prixvoiture',

//     },


//     {
//       name: '_id',
//       label: 'Actions',
//       options: {
//         customBodyRender: (value) => (
//           <div>
//             < EditVoiture art ={voitures.find((voiture) => voiture._id === value)} />
//             <span
//               onClick={() => handleDelete(value)}
//               style={{ cursor: 'pointer' }}
//             >
//               <DeleteForeverRoundedIcon />
//             </span>
//           </div>
//         ),
//       },
//     },
//   ];

//   const options = {
//     rowsPerPageOptions: [5, 10, 15, 100],
//   };

//   const renderVoitures = () => {
//     if (isLoading) return <center><ReactLoading type="spokes" color="red" height={'8%'} width={'8%'} /></center>;
//     if (error) return <p>Impossible d'afficher la liste des articles...</p>;

//     return (
//       <MUIDataTable
//         title="                Liste des voitures"
//         data={voitures}
//         columns={columns}
//         options={options}
//       />
//     );
//   };

//   return (
//     <>
//       <div>

//       </div>
//       <div>
//         {renderVoitures()}
//       </div>
//     </>
//   );
// };

// export default AfficheMarques;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVoitures } from '../../features/voitureSlice';
// import { urlimage } from '../../Axios/Api';
// const TableauVoitures = () => {
//   const dispatch = useDispatch();
//   const { voitures, isLoading, error } = useSelector((state) => state.storevoitures);

//   useEffect(() => {
//     dispatch(getVoitures()); // Dispatch l'action pour obtenir les voitures lors du montage du composant.
//   }, [dispatch]);

//   const renderTable = () => {
//     if (isLoading) return <p>Chargement en cours...</p>;
//     if (error) return <p>Une erreur s'est produite : {error.message}</p>;

//     if (voitures.length === 0) return <p>Aucune voiture trouvée.</p>;

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Nom de la Marque</th>
//             <th>Nom de la Voiture</th>
//             <th>Image</th>
//             <th>Compteur</th>
//             <th>Prix</th>
//           </tr>
//         </thead>
//         <tbody>
//           {voitures.map((voiture) => (
//             <tr key={voiture._id}>
//               <td>{voiture.marque.nommarque}</td>
//               <td>{voiture.nomvoiture}</td>
//               <td>
//                 <img
//                   src={`${urlimage}${voiture.imagevoiture}`}
//                   alt={`Image de ${voiture.nomvoiture}`}
//                   style={{ width: '100px' }}
//                 />
//               </td>
//               <td>{voiture.compteur}</td>
//               <td>{voiture.prixvoiture}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div>
//       <h1>Liste des Voitures</h1>
//       {renderTable()}
//     </div>
//   );
// };

// export default TableauVoitures;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVoitures, deleteVoiture } from '../../features/voitureSlice'; // Importez deleteVoiture
// import { urlimage } from '../../Axios/Api';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditVoiture from './EditVoiture';
// const coloredIconStyle = {
//   color: 'blue', 
// };
// const TableauVoitures = () => {
//   const dispatch = useDispatch();
//   const { voitures, isLoading, error } = useSelector((state) => state.storevoitures);

//   useEffect(() => {
//     dispatch(getVoitures());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     if (window.confirm("Supprimer l'article ?")) {
//       dispatch(deleteVoiture(id));
//     }
//   };

//   const renderTable = () => {
//     if (isLoading) return <p>Chargement en cours...</p>;
//     if (error) return <p>Une erreur s'est produite : {error.message}</p>;

//     if (voitures.length === 0) return <p>Aucune voiture trouvée.</p>;

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Nom de la Marque</th>
//             <th>Nom de la Voiture</th>
//             <th>Image</th>
//             <th>Compteur</th>
//             <th>Prix</th>
//             <th>Actions</th> {/* Colonne pour les actions de suppression */}
//           </tr>
//         </thead>
//         <tbody>
//           {voitures.map((voiture) => (
//             <tr key={voiture._id}>
//               <td>{voiture.marque.nommarque}</td>
//               <td>{voiture.nomvoiture}</td>
//               <td>
//                 <img
//                   src={`${urlimage}${voiture.imagevoiture}`}
//                   alt={`Image de ${voiture.nomvoiture}`}
//                   style={{ width: '100px' }}
//                 />
//               </td>
//               <td>{voiture.compteur}</td>
//               <td>{voiture.prixvoiture}</td>
//               <td>
//               <EditVoiture art={voiture} />
//                 <button onClick={() => handleDelete(voiture._id)}>
//                   <DeleteIcon style={coloredIconStyle}/>
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div>
//       <h1>Liste des Voitures</h1>
//       {renderTable()}
//     </div>
//   );
// };

// export default TableauVoitures;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVoitures, deleteVoiture } from '../../features/voitureSlice'; // Importez deleteVoiture
// import { urlimage } from '../../Axios/Api';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// const iconSize = '24px'; // Taille des icônes (en pixels)

// const TableauVoitures = () => {
//   const dispatch = useDispatch();
//   const { voitures, isLoading, error } = useSelector((state) => state.storevoitures);

//   useEffect(() => {
//     dispatch(getVoitures());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     if (window.confirm("Supprimer l'article ?")) {
//       dispatch(deleteVoiture(id));
//     }
//   };

//   const renderTable = () => {
//     if (isLoading) return <p>Chargement en cours...</p>;
//     if (error) return <p>Une erreur s'est produite : {error.message}</p>;

//     if (voitures.length === 0) return <p>Aucune voiture trouvée.</p>;

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Nom de la Marque</th>
//             <th>Nom de la Voiture</th>
//             <th>Image</th>
//             <th>Compteur</th>
//             <th>Prix</th>
//             <th>Actions</th> {/* Colonne pour les actions de suppression */}
//           </tr>
//         </thead>
//         <tbody>
//           {voitures.map((voiture) => (
//             <tr key={voiture._id}>
//               <td>{voiture.marque.nommarque}</td>
//               <td>{voiture.nomvoiture}</td>
//               <td>
//                 <img
//                   src={`${urlimage}${voiture.imagevoiture}`}
//                   alt={`Image de ${voiture.nomvoiture}`}
//                   style={{ width: '100px' }}
//                 />
//               </td>
//               <td>{voiture.compteur}</td>
//               <td>{voiture.prixvoiture}</td>
//               <td>
//                 <EditIcon style={{ fontSize: iconSize, cursor: 'pointer', marginRight: '10px' }} />
//                 <DeleteIcon style={{ fontSize: iconSize, cursor: 'pointer' }} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div>
//       <h1>Liste des Voitures</h1>
//       {renderTable()}
//     </div>
//   );
// };

// export default TableauVoitures;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVoitures, deleteVoiture } from '../../features/voitureSlice'; // Importez deleteVoiture
// import { urlimage } from '../../Axios/Api';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { Link } from 'react-router-dom';
// import EditVoiture from './EditVoiture';

// const greenIconStyle = {
//   color: 'green', // Couleur verte pour l'icône "Edit"
//   fontSize: '24px', // Taille de l'icône
// };

// const redIconStyle = {
//   color: 'red', // Couleur rouge pour l'icône "Delete"
//   fontSize: '24px', // Taille de l'icône
// };

// const TableauVoitures = () => {
//   const dispatch = useDispatch();
//   const { voitures, isLoading, error } = useSelector((state) => state.storevoitures);

//   useEffect(() => {
//     dispatch(getVoitures());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     if (window.confirm("Supprimer l'article ?")) {
//       dispatch(deleteVoiture(id));
//     }
//   };

//   const renderTable = () => {
//     if (isLoading) return <p>Chargement en cours...</p>;
//     if (error) return <p>Une erreur s'est produite : {error.message}</p>;

//     if (voitures.length === 0) return <p>Aucune voiture trouvée.</p>;

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Nom de la Marque</th>
//             <th>Nom de la Voiture</th>
//             <th>Image</th>
//             <th>Compteur</th>
//             <th>Prix</th>
//             <th>Actions</th> {/* Colonne pour les actions de suppression */}
//           </tr>
//         </thead>
//         <tbody>
//           {voitures.map((voiture) => (
//             <tr key={voiture._id}>
//               <td>{voiture.marque.nommarque}</td>
//               <td>{voiture.nomvoiture}</td>
//               <td>
//                 <img
//                   src={`${urlimage}${voiture.imagevoiture}`}
//                   alt={`Image de ${voiture.nomvoiture}`}
//                   style={{ width: '100px' }}
//                 />
//               </td>
//               <td>{voiture.compteur}</td>
//               <td>{voiture.prixvoiture}</td>
//               <td>
//               <EditVoiture art={voitures.find((voiture) => voiture._id === value)} />
//                 <button onClick={() => handleDelete(voiture._id)}>
//                 <DeleteIcon style={redIconStyle} /> {/* Icône "Delete" rouge */}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div>
//       <h1>Liste des Voitures</h1>
//       {renderTable()}
//     </div>
//   );
// };

// export default TableauVoitures;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVoitures, deleteVoiture } from '../../features/voitureSlice'; // Importez deleteVoiture
// import { urlimage } from '../../Axios/Api';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditVoiture from './EditVoiture';
// import'../../App.css'
// const TableauVoitures = () => {
//   const dispatch = useDispatch();
//   const { voitures, isLoading, error } = useSelector((state) => state.storevoitures);

//   useEffect(() => {
//     dispatch(getVoitures());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     if (window.confirm("Supprimer l'article ?")) {
//       dispatch(deleteVoiture(id));
//     }
//   };

//   const renderTable = () => {
//     if (isLoading) return <p>Chargement en cours...</p>;
//     if (error) return <p>Une erreur s'est produite : {error.message}</p>;

//     if (voitures.length === 0) return <p>Aucune voiture trouvée.</p>;

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Nom de la Marque</th>
//             <th>Nom de la Voiture</th>
//             <th>Image</th>
//             <th>Compteur</th>
//             <th>Prix</th>
//             <th>Actions</th> {/* Colonne pour les actions de suppression */}
//           </tr>
//         </thead>
//         <tbody>
//           {voitures.map((voiture) => (
//             <tr key={voiture._id}>
//               <td>{voiture.marque.nommarque}</td>
//               <td>{voiture.nomvoiture}</td>
//               <td>
//                 <img
//                   src={`${urlimage}${voiture.imagevoiture}`}
//                   alt={`Image de ${voiture.nomvoiture}`}
//                   style={{ width: '100px' }}
//                 />
//               </td>
//               <td>{voiture.compteur}</td>
//               <td>{voiture.prixvoiture}</td>
//               <td>
//                 <EditVoiture art={voiture} />
//                 <button onClick={() => handleDelete(voiture._id)}>
//                   <DeleteIcon className="icon" /> {/* Ajoutez la classe CSS pour les styles */}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div>
//       <h1>Liste des Voitures</h1>
//       {renderTable()}
//     </div>
//   );
// };

// export default TableauVoitures;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVoitures, deleteVoiture } from '../../features/voitureSlice';
import { urlimage } from '../../Axios/Api';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';

import EditVoiture from './EditVoiture';
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
const TableauVoitures = () => {
  const dispatch = useDispatch();
  const { voitures, isLoading, error } = useSelector((state) => state.storevoitures);

  useEffect(() => {
    dispatch(getVoitures());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Supprimer l'article ?")) {
      dispatch(deleteVoiture(id));
    }
  };

  // Sort the voitures by "Nom de la Marque" in alphabetical order
  const sortedVoitures = voitures.slice().sort((a, b) =>
    a.marque.nommarque.localeCompare(b.marque.nommarque)
  );

  return (
    <div>
      <h1>Liste des Voitures</h1>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Marque</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Voiture</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Compteur</TableCell>
              <TableCell>Prix</TableCell>
              <TableCell>Options</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedVoitures.map((voiture) => (
              <TableRow key={voiture._id}>
                <TableCell>{voiture.marque.nommarque}
                </TableCell>
                <TableCell>
                  <img
                    src={`${urlimage}${voiture.marque.immarque}`}
                    alt={`Image de ${voiture.nommarque}`}
                    style={{ width: '50px' }}
                  />
                </TableCell>
                <TableCell>{voiture.nomvoiture}</TableCell>
                <TableCell>
                  <img
                    src={`${urlimage}${voiture.imagevoiture}`}
                    alt={`Image de ${voiture.nomvoiture}`}
                    style={{ width: '100px' }}
                  />
                </TableCell>
                <TableCell>{voiture.compteur}</TableCell>
                <TableCell>{voiture.prixvoiture}</TableCell>
                <TableCell>
                  {/* <Link to={`/options/edit/${voiture.option._id}`}> */}

                  <Link to={`/options/${voiture._id}`}>
                    {/* "/options/:voitureId"  */}
                    <Button component={Link} to={`/options/${voiture._id}`} variant="contained" color="primary">
                      <SettingsIcon />
                    </Button>
                  </Link>
                  <Button component={Link} to={`/option/edit/${voiture.option._id}`} variant="contained" color="secondary">
                    <EditIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <EditVoiture art={voiture} />
                  <button onClick={() => handleDelete(voiture._id)}>
                    <DeleteIcon className="icon" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/admin"> {/* Lien vers la page d'accueil */}
        <Button variant="contained" color="primary">
         l'accueil
        </Button>
      </Link>
    
      

    </div>
  );
};

export default TableauVoitures;



