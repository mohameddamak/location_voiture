// import React from 'react';
// import ReactLoading from 'react-loading';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import { deleteMarque } from '../../features/marqueSlice';
// import InsertMarque from './InsertMarque';

// import MUIDataTable from 'mui-datatables';
// import EditMarque from './EditMarque';
// // import { urlimage } from '../../Axios/Api';

// const AfficheMarques = () => {
//   const dispatch = useDispatch();
//   const { marques, isLoading, error } = useSelector((state) => state.storemarques);

//   const handleDelete = (id) => {
//     if (window.confirm('Supprimer l\'article ?')) {
//       dispatch(deleteMarque(id));
//     }
//   };
// // const image=urlimage+"Nissan.jpg.png"
//   const columns = [
//     {
//       label: 'Nom',
//       name: 'nommarque',
//     },
//     {
//       label: 'Prix',
//       name: 'prixmarque',
//     },
//     {
//       label: 'Image',
//       name: 'immarque',
//       options: {
//         customBodyRender: (rowdata) => (
//           <img
//             style={{ height: 40, width: 60, borderRadius: '10%' }}
//             src={rowdata}
//             alt=""
//           />
//         ), // Ajout d'une accolade fermante ici
//       },
//     },
//     {
//       name: '_id',
//       label: 'Actions',
//       options: {
//         customBodyRender: (value) => (
//           <div>
//             <EditMarque art={marques.find((marque) => marque._id === value)} />
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

//   const renderMarques = () => {
//     if (isLoading) return <center><ReactLoading type="spokes" color="red" height={'8%'} width={'8%'} /></center>;
//     if (error) return <p>Impossible d'afficher la liste des articles...</p>;

//     return (
//       <MUIDataTable
//         title="Liste des marques"
//         data={marques}
//         columns={columns}
//         options={options}
//       />
//     );
//   };

//   return (
//     <>
//       <div>
//         <InsertMarque />
//       </div>
//       <div>
//         {renderMarques()}
//       </div>
//       <img src={image} height={"200"} width={"200"} alt=''/>
//     </>
//   );
// };

// export default AfficheMarques;
import React from 'react';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { deleteMarque } from '../../features/marqueSlice';
import InsertMarque from './InsertMarque';
import { urlimage } from '../../Axios/Api';
import MUIDataTable from 'mui-datatables';
import EditMarque from './EditMarque';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Assuming that 'urlimage' is defined and correctly set to the base URL of your images
// const urlimage = "http://localhost:3001/";

const AfficheMarques = () => {
  const dispatch = useDispatch();
  const { marques, isLoading, error } = useSelector((state) => state.storemarques);

  const handleDelete = (id) => {
    if (window.confirm('Supprimer l\'article ?')) {
      dispatch(deleteMarque(id));
    }
  };

  const columns = [
    {
      label: 'Nom',
      name: 'nommarque',
    },
    {
      label: 'Prix',
      name: 'prixmarque',
    },
    {
      label: 'Image',
      name: 'immarque',
      options: {
        customBodyRender: (rowdata) => (
          <img
            style={{ height: 40, width: 60, borderRadius: '10%' }}
            src={urlimage + rowdata} // Construct the full image URL
            alt=""
          />
        ),
      },
    },
    {
      name: '_id',
      label: 'Actions',
      options: {
        customBodyRender: (value) => (
          <div>
            <EditMarque art={marques.find((marque) => marque._id === value)} />
            <span
              onClick={() => handleDelete(value)}
              style={{ cursor: 'pointer' }}
            >
              <DeleteForeverRoundedIcon />
            </span>
          </div>
        ),
      },
    },
  ];

  const options = {
    rowsPerPageOptions: [5, 10, 15, 100],
  };
 

  const renderMarques = () => {
    if (isLoading) return <center><ReactLoading type="spokes" color="red" height={'8%'} width={'8%'} /></center>;
    if (error) return <p>Impossible d'afficher la liste des articles...</p>;
    
    
    return (
      <div>
      <h1 style={{ textAlign: 'center' }}>Liste des marques</h1>
      <MUIDataTable
        data={marques}
        columns={columns}
        options={options}
      />
        </div>
    );
  };

  return (
    <>
      <div>
    
        {renderMarques()}
        <Link to="/admin"> {/* Lien vers la page d'accueil */}
        <Button variant="contained" color="primary">
         l'accueil
        </Button>
      </Link>
      </div>
    </>
  );
};

export default AfficheMarques;
// import React from 'react';
// import ReactLoading from 'react-loading';
// import { useDispatch, useSelector } from 'react-redux';
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import { deleteMarque } from '../../features/marqueSlice';
// import { urlimage } from '../../Axios/Api';
// import MUIDataTable from 'mui-datatables';
// import EditMarque from './EditMarque';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// // Assuming that 'urlimage' is defined and correctly set to the base URL of your images
// // const urlimage = "http://localhost:3001/";

// const AfficheMarques = () => {
//   const dispatch = useDispatch();
//   const { marques, isLoading, error } = useSelector((state) => state.storemarques);

//   const handleDelete = (id) => {
//     if (window.confirm('Supprimer l\'article ?')) {
//       dispatch(deleteMarque(id));
//     }
//   };

//   const columns = [
//     {
//       label: 'Nom',
//       name: 'nommarque',
//     },
//     {
//       label: 'Prix',
//       name: 'prixmarque',
//     },
//     {
//       label: 'Image',
//       name: 'immarque',
//       options: {
//         customBodyRender: (rowdata) => (
//           <img
//             style={{ height: 40, width: 60, borderRadius: '10%' }}
//             src={urlimage + rowdata} // Construct the full image URL
//             alt=""
//           />
//         ),
//       },
//     },
//     {
//       name: '_id',
//       label: 'Actions',
//       options: {
//         customBodyRender: (value) => (
//           <div>
//             <EditMarque art={marques.find((marque) => marque._id === value)} />
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

//   // const options = {
//   //   rowsPerPageOptions: [5, 10, 15, 100],
//   // };

//   const renderMarques = () => {
//     if (isLoading) return <center><ReactLoading type="spokes" color="red" height={'8%'} width={'8%'} /></center>;
//     if (error) return <p>Impossible d'afficher la liste des articles...</p>;

//     return (
//       <MUIDataTable
//         data={marques}
//         columns={columns}
//         // options={options}
//       />
//     );
//   };

//   return (
//     <>
//       <div style={{ textAlign: 'center' }}>
//         <h1>Affiche Marque</h1>
        
//       </div>
      
//       <div>
//         {renderMarques()}
//       </div>
//       <Link to="/"> {/* Lien vers la page d'accueil */}
//           <Button variant="contained" color="primary">
//             Retour à l'accueil
//           </Button>
//         </Link>
//     </>
//   );
// };

// export default AfficheMarques;