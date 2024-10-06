

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVoitures, deleteVoiture } from '../../features/voitureSlice';
// import { urlimage } from '../../Axios/Api';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SettingsIcon from '@mui/icons-material/Settings';
// import EditIcon from '@mui/icons-material/Edit';

// import EditVoiture from './EditVoiture';
// import {
//   TableContainer,
//   Table,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableHead,
//   Paper,
//   Button,
// } from '@mui/material';
// import { Link } from 'react-router-dom';

// const DateVoitures = () => {
//   const dispatch = useDispatch();
//   const { voitures } = useSelector((state) => state.storevoitures);

//   useEffect(() => {
//     dispatch(getVoitures());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     if (window.confirm("Supprimer l'article ?")) {
//       dispatch(deleteVoiture(id));
//     }
//   };

//   const isWithin10Days = (dateString) => {
//     if (!dateString) {
//       return false; // If dateString is undefined, return false
//     }
  
//     const dateParts = dateString.split('-');
  
//     if (dateParts.length !== 3) {
//       return false; // If date format is incorrect, return false
//     }
  
//     const [day, month, year] = dateParts.map(Number);
  
//     if (isNaN(day) || isNaN(month) || isNaN(year)) {
//       return false; // If any part is not a number, return false
//     }
  
//     const currentDate = new Date();
//     // Note: Months are 0-indexed in JavaScript Dates
//     const targetDate = new Date(year, month - 1, day);
//     const differenceInDays = Math.floor((targetDate - currentDate) / (24 * 60 * 60 * 1000));
  
//     // Check if the difference is within the range (0 to 10 days)
//     return differenceInDays >= 0 && differenceInDays <= 10;
//   };

//   return (
//     <div>
//       <h1>Liste des Voitures</h1>
      
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Marque</TableCell>
//               <TableCell>Image</TableCell>
//               <TableCell>Voiture</TableCell>
//               <TableCell>Image</TableCell>
//               <TableCell>Assurance</TableCell>
//               <TableCell>Vignette</TableCell>
//               <TableCell>Visite</TableCell>
//               <TableCell>Options</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {voitures.map((voiture) => (
//               <TableRow
//                 key={voiture._id}
//                 style={{
//                   backgroundColor: (isWithin10Days(voiture.dateVisite) ||
//                     isWithin10Days(voiture.dateVignette) ||
//                     isWithin10Days(voiture.dateAssurance)) ? '#ffcccc' : 'inherit',
//                 }}
//               >
//                 <TableCell>{voiture.marque.nommarque}</TableCell>
//                 <TableCell>
//                   <img
//                     src={`${urlimage}${voiture.marque.immarque}`}
//                     alt={`Image de ${voiture.nommarque}`}
//                     style={{ width: '50px' }}
//                   />
//                 </TableCell>
//                 <TableCell>{voiture.nomvoiture}</TableCell>
//                 <TableCell>
//                   <img
//                     src={`${urlimage}${voiture.imagevoiture}`}
//                     alt={`Image de ${voiture.nomvoiture}`}
//                     style={{ width: '100px' }}
//                   />
//                 </TableCell>
//                 <TableCell>{voiture.dateAssurance}</TableCell>
//                 <TableCell>{voiture.dateVignette}</TableCell>
//                 <TableCell>{voiture.dateVisite}</TableCell>
//                 <TableCell>
//                   <Link to={`/options/${voiture._id}`}>
//                     <Button component={Link} to={`/options/${voiture._id}`} variant="contained" color="primary">
//                       <SettingsIcon />
//                     </Button>
//                   </Link>
//                   <Button component={Link} to={`/option/edit/${voiture.option._id}`} variant="contained" color="secondary">
//                     <EditIcon />
//                   </Button>
//                 </TableCell>
//                 <TableCell>
//                   <EditVoiture art={voiture} />
//                   <button onClick={() => handleDelete(voiture._id)}>
//                     <DeleteIcon className="icon" />
//                   </button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Link to="/admin">
//         <Button variant="contained" color="primary">
//           l'accueil
//         </Button>
//       </Link>
//     </div>
//   );
// };

// export default DateVoitures;



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

const DateVoitures = () => {
  const dispatch = useDispatch();
  const { voitures } = useSelector((state) => state.storevoitures);

  useEffect(() => {
    dispatch(getVoitures());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Supprimer l'article ?")) {
      dispatch(deleteVoiture(id));
    }
  };

  const isWithin10Days = (dateString) => {
    if (!dateString) {
      return false; // If dateString is undefined, return false
    }
  
    const dateParts = dateString.split('-');
  
    if (dateParts.length !== 3) {
      return false; // If date format is incorrect, return false
    }
  
    const [day, month, year] = dateParts.map(Number);
  
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return false; // If any part is not a number, return false
    }
  
    const currentDate = new Date();
    // Note: Months are 0-indexed in JavaScript Dates
    const targetDate = new Date(year, month - 1, day);
    const differenceInDays = Math.floor((targetDate - currentDate) / (24 * 60 * 60 * 1000));
  
    // Check if the difference is within the range (0 to 10 days)
    return differenceInDays >= 0 && differenceInDays <= 9;
  };

  // Tri alphabétique des voitures par nom de marque
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
              <TableCell>Assurance</TableCell>
              <TableCell>Vignette</TableCell>
              <TableCell>Visite</TableCell>
              <TableCell>Options</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedVoitures.map((voiture) => (
              <TableRow
                key={voiture._id}
                style={{
                  backgroundColor: (isWithin10Days(voiture.dateVisite) ||
                    isWithin10Days(voiture.dateVignette) ||
                    isWithin10Days(voiture.dateAssurance)) ? '#ffcccc' : 'inherit',
                }}
              >
                <TableCell>{voiture.marque.nommarque}</TableCell>
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
                <TableCell>{voiture.dateAssurance}</TableCell>
                <TableCell>{voiture.dateVignette}</TableCell>
                <TableCell>{voiture.dateVisite}</TableCell>
                <TableCell>
                  <Link to={`/options/${voiture._id}`}>
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

      <Link to="/admin">
        <Button variant="contained" color="primary">
          l'accueil
        </Button>
      </Link>
    </div>
  );
};

export default DateVoitures;