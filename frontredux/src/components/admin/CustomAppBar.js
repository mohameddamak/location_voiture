// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// const CustomAppBar = ({ isVisible, onClose }) => {
//     if (!isVisible) {
//         return null;
//     }

//     return (
//         <AppBar position="fixed" color="primary">
//             <Toolbar>
//                 <IconButton edge="start" color="inherit" onClick={onClose}>
//                     <NotificationsIcon />
//                 </IconButton>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
//               <h1> Bienvennu</h1>
             
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default CustomAppBar;


// const CustomAppBar = ({ isVisible, onClose }) => {
//     if (!isVisible) {
//       return null;
//     }
  
// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
//   CDBSidebarFooter,
// } from 'cdbreact';
// import IconButton from '@mui/material/IconButton';

// const CustomAppBar = ({ isVisible, onClose }) => {
//     if (!isVisible) {
//       return null;
//     }
  
//   return (
//     <div style={{ height: '100vh', overflowY: 'auto' }}>
//      <IconButton edge="start" color="inherit" onClick={onClose}></IconButton>
//      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" className="full-width-sidebar">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
//           Contrast Light Mode
//         </CDBSidebarHeader>
//         <CDBSidebarContent>
//           <CDBSidebarMenu>
//             <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
//             <CDBSidebarMenuItem icon="chart-line" iconType="solid">
//               Metrics
//             </CDBSidebarMenuItem>
//             {/* Add more menu items as needed */}
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };

// export default CustomAppBar;

import React, { useState } from 'react';

import Modal from 'react-modal'; // Importez le composant Modal
import IconButton from '@mui/material/IconButton';

const CustomAppBar = ({ isVisible, onClose }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    // Fonction pour ouvrir le Modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Fonction pour fermer le Modal
    const closeModal = () => {
        setModalOpen(false);
        onClose(); // Appel de la fonction de fermeture principale
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            <IconButton edge="start" color="inherit" onClick={openModal}></IconButton>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Custom App Bar Modal"
                ariaHideApp={false} // Pour empêcher les erreurs d'accessibilité
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 9999,
                    },
                    content: {
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        backgroundColor: 'white',
                        overflowY: 'auto',
                    },
                }}
            >
                <div>
                    <IconButton edge="start" color="inherit" onClick={closeModal}></IconButton>
                    {/* Contenu de la barre latérale ici */}
                </div>
            </Modal>
        </div>
    );
};

export default CustomAppBar;