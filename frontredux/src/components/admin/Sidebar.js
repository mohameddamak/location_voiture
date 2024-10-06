



// import React, { useEffect, useState } from 'react';
// import './../../App.css';

// import {
//     CDBSidebar,
//     CDBSidebarHeader,
//     CDBSidebarMenuItem,
//     CDBSidebarContent,
//     CDBSidebarMenu,
//     CDBSidebarSubMenu,
//     CDBSidebarFooter,
//     CDBBadge,
//     CDBContainer,
// } from 'cdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getReservations } from '../../features/reservationSlice';
// import EmailIcon from '@mui/icons-material/Email'; // Importez l'icône d'e-mail
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// const Sidebar = () => {
//     const dispatch = useDispatch();
//     const { reservations } = useSelector((state) => state.storereservation);
//     useEffect(() => {
//         dispatch(getReservations());
//     }, [dispatch]);


//     return (

//         <CDBSidebar textColor="white" backgroundColor="black" className="full-width-sidebar">
//             <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
//                 <div className="container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <img
//                             src={'https://res.cloudinary.com/duvzqx2ew/image/upload/v1698943303/images_fbdqac.png'}
//                             alt=""
//                             style={{ width: '100px' }}
//                         />
//                     </div>
//                     <h6 className="ms-2">Damak™</h6>
//                 </div>

//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                     <CDBSidebarMenuItem>
//                         <IconButton size="large" aria-label="show new notifications" color="inherit">
//                             <Badge badgeContent={17} color="error">
//                                 <EmailIcon /> {/* Remplacez EmailIcon par l'icône d'e-mail de votre choix */}
//                             </Badge>
//                         </IconButton>
//                         <IconButton
//                             size="large"
//                             aria-label="show new notifications"
//                             color="inherit"

//                         >
//                             <Badge badgeContent={16} color="error">
//                                 <NotificationsIcon />
//                             </Badge>
//                         </IconButton>
//                     </CDBSidebarMenuItem>


//                 </div>
//             </CDBSidebarHeader>

//             <CDBSidebarContent>
//                 <CDBSidebarMenu>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/voiture/liste" > Voitures </Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/voiture/insert" > nouvelle voiture</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/liste">Marques</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/insert" >Nouvelle marque </Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/liste">Marques</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/reservation/liste">Reservation</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="chart-line" iconType="solid">
//                         metrics
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem ></CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem ></CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem ></CDBSidebarMenuItem>
//                 </CDBSidebarMenu>
//             </CDBSidebarContent>
//         </CDBSidebar>
//     );
// };

// export default Sidebar;

// import React, { useEffect, useState } from 'react';
// import './../../App.css';
// import {
//     CDBSidebar,
//     CDBSidebarHeader,
//     CDBSidebarMenuItem,
//     CDBSidebarContent,
//     CDBSidebarMenu,
//     CDBSidebarSubMenu,
//     CDBSidebarFooter,
//     CDBBadge,
//     CDBContainer,
// } from 'cdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getReservations } from '../../features/reservationSlice';
// import NotificationsIcon from '@mui/icons-material/Notifications'; // Importez l'icône de notification
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';

// const Sidebar = () => {
//     const dispatch = useDispatch();
//     const { reservations } = useSelector((state) => state.storereservation);
//     const [newReservationCount, setNewReservationCount] = useState(0);

//     useEffect(() => {
//         dispatch(getReservations());
//     }, [dispatch]);

//     const handleResetNewReservationCount = () => {
//         setNewReservationCount(0);
//     };

//     useEffect(() => {
//         if (reservations && reservations.length > 0) {
//             const newReservations = reservations.filter((reservation) => !reservation.isRead);
//             setNewReservationCount(newReservations.length);
//         }
//     }, [reservations]);

//     return (
//         <CDBSidebar textColor="white" backgroundColor="black" className="full-width-sidebar">
//             <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
//                 <div className="container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <img
//                             src={'https://res.cloudinary.com/duvzqx2ew/image/upload/v1698943303/images_fbdqac.png'}
//                             alt=""
//                             style={{ width: '100px' }}
//                         />
//                     </div>
//                     <h6 className="ms-2">Damak™</h6>
//                 </div>

//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                     <CDBSidebarMenuItem>
//                         <IconButton size="large" aria-label="show new notifications" color="inherit" onClick={handleResetNewReservationCount}>
//                             <Badge badgeContent={newReservationCount} color="error">
//                                 <NotificationsIcon />
//                             </Badge>
//                         </IconButton>
//                     </CDBSidebarMenuItem>
//                 </div>
//             </CDBSidebarHeader>

//             <CDBSidebarContent>
//                 <CDBSidebarMenu>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/voiture/liste">Voitures</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/voiture/insert">Nouvelle voiture</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/liste">Marques</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/insert">Nouvelle marque</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/liste">Marques</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/reservation/liste">Reservation</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="chart-line" iconType="solid">
//                         Metrics
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem></CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem></CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem></CDBSidebarMenuItem>
//                 </CDBSidebarMenu>
//             </CDBSidebarContent>
//         </CDBSidebar>
//     );
// };

// export default Sidebar;
// import React, { useEffect, useState } from 'react';
// import './../../App.css';
// import {
//     CDBSidebar,
//     CDBSidebarHeader,
//     CDBSidebarMenuItem,
//     CDBSidebarContent,
//     CDBSidebarMenu,
//     CDBSidebarSubMenu,
//     CDBSidebarFooter,
//     CDBBadge,
//     CDBContainer,
// } from 'cdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getReservations } from '../../features/reservationSlice';
// import NotificationsIcon from '@mui/icons-material/Notifications'; // Importez l'icône de notification
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';

// const Sidebar = () => {
//     const dispatch = useDispatch();
//     const { reservations } = useSelector((state) => state.storereservation);
//     const [newReservationCount, setNewReservationCount] = useState(0);

//     useEffect(() => {
//         dispatch(getReservations());
//     }, [dispatch]);

//     const handleResetNewReservationCount = () => {
//         setNewReservationCount(0); // Réinitialiser localement
//         localStorage.setItem('newReservationCount', '0'); // Enregistrez dans le localStorage
//     };

//     useEffect(() => {
//         // Récupérez le compteur depuis le localStorage lors du chargement de la page
//         const storedCount = localStorage.getItem('newReservationCount');
//         if (storedCount !== null) {
//             setNewReservationCount(parseInt(storedCount, 10));
//         }

//         if (reservations && reservations.length > 0) {
//             const newReservations = reservations.filter((reservation) => !reservation.isRead);
//             setNewReservationCount(newReservations.length);
//             localStorage.setItem('newReservationCount', newReservations.length.toString()); // Mettez à jour le compteur dans le localStorage
//         }
//     }, [reservations]);

//     return (
//         <CDBSidebar textColor="white" backgroundColor="black" className="full-width-sidebar">
//             <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
//                 <div className="container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <img
//                             src={'https://res.cloudinary.com/duvzqx2ew/image/upload/v1698943303/images_fbdqac.png'}
//                             alt=""
//                             style={{ width: '100px' }}
//                         />
//                     </div>
//                     <h6 className="ms-2">Damak™</h6>
//                 </div>

//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                     <CDBSidebarMenuItem>
//                         <IconButton size="large" aria-label="show new notifications" color="inherit" onClick={handleResetNewReservationCount}>
//                             <Badge badgeContent={newReservationCount} color="error">
//                                 <NotificationsIcon />
//                             </Badge>
//                         </IconButton>
//                     </CDBSidebarMenuItem>
//                 </div>
//             </CDBSidebarHeader>

//             <CDBSidebarContent>
//                 <CDBSidebarMenu>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/voiture/liste">Voitures</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/voiture/insert">Nouvelle voiture</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/liste">Marques</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/insert">Nouvelle marque</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/liste">Marques</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/reservation/liste">Reservation</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="chart-line" iconType="solid">
//                         Metrics
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem></CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem></CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem></CDBSidebarMenuItem>
//                 </CDBSidebarMenu>
//             </CDBSidebarContent>
//         </CDBSidebar>
//     );
// };

// export default Sidebar;


// import React, { useEffect, useState } from 'react';
// import './../../App.css';
// import {
//     CDBSidebar,
//     CDBSidebarHeader,
//     CDBSidebarMenuItem,
//     CDBSidebarContent,
//     CDBSidebarMenu,
//     CDBSidebarSubMenu,
//     CDBSidebarFooter,
//     CDBBadge,
//     CDBContainer,
// } from 'cdbreact';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getReservations } from '../../features/reservationSlice';
// import NotificationsIcon from '@mui/icons-material/Notifications'; // Importez l'icône de notification
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';

// const Sidebar = () => {
//     const dispatch = useDispatch();
//     const { reservations } = useSelector((state) => state.storereservation);
//     const [newReservationCount, setNewReservationCount] = useState(0);

//     useEffect(() => {
//         dispatch(getReservations());
//     }, [dispatch]);

//     useEffect(() => {
//         // Récupérez le compteur depuis le localStorage lors du chargement de la page
//         const storedCount = localStorage.getItem('newReservationCount');
//         if (storedCount !== null) {
//             setNewReservationCount(parseInt(storedCount, 10));
//         }

//         if (reservations && reservations.length > 0) {
//             const newReservations = reservations.filter((reservation) => !reservation.isRead);
//             setNewReservationCount(newReservations.length);
//             localStorage.setItem('newReservationCount', newReservations.length.toString()); // Mettez à jour le compteur dans le localStorage
//         }
//     }, [reservations]);

//     return (
//         <CDBSidebar textColor="white" backgroundColor="black" className="full-width-sidebar">
//             <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
//                 <div className="container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <img
//                             src={'https://res.cloudinary.com/duvzqx2ew/image/upload/v1698943303/images_fbdqac.png'}
//                             alt=""
//                             style={{ width: '100px' }}
//                         />
//                     </div>
//                     <h6 className="ms-2">Damak™</h6>
//                 </div>

//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                     <CDBSidebarMenuItem>
//                         <IconButton size="large" aria-label="show new notifications" color="inherit">
//                             <Badge badgeContent={newReservationCount} color="error">
//                                 <NotificationsIcon />
//                             </Badge>
//                         </IconButton>
//                     </CDBSidebarMenuItem>
//                 </div>
//             </CDBSidebarHeader>

//             <CDBSidebarContent>
//                 <CDBSidebarMenu>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/voiture/liste">Voitures</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/voiture/insert">Nouvelle voiture</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/liste">Marques</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/insert">Nouvelle marque</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/marque/liste">Marques</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="sticky-note">
//                         <Link to="/reservation/liste">Reservation</Link>
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem icon="chart-line" iconType="solid">
//                         Metrics
//                     </CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem></CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem></CDBSidebarMenuItem>
//                     <CDBSidebarMenuItem></CDBSidebarMenuItem>
//                 </CDBSidebarMenu>
//             </CDBSidebarContent>
//         </CDBSidebar>
//     );
// };

// export default Sidebar;

import React, { useEffect, useState } from 'react';
import './../../App.css';
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
} from 'cdbreact';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../features/reservationSlice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReservationIcon from '@mui/icons-material/EventNote';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ReservationModel from '../Reservation/Model';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { reservations } = useSelector((state) => state.storereservation);
    const [newReservationCount, setNewReservationCount] = useState(0);

    useEffect(() => {
        dispatch(getReservations());
    }, [dispatch]);

    useEffect(() => {
        const storedCount = localStorage.getItem('newReservationCount');
        if (storedCount !== null) {
            setNewReservationCount(parseInt(storedCount, 10));
        }

        if (reservations && reservations.length > 0) {
            const newReservations = reservations.filter((reservation) => !reservation.isRead);
            setNewReservationCount(newReservations.length);
            localStorage.setItem('newReservationCount', newReservations.length.toString());
        }
    }, [reservations]);

    return (
        <CDBSidebar textColor="white" backgroundColor="black" className="full-width-sidebar">
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={'https://res.cloudinary.com/duvzqx2ew/image/upload/v1698943303/images_fbdqac.png'}
                            alt=""
                            style={{ width: '100px' }}
                        />
                    </div>
                    <h6 className="ms-2">Damak™</h6>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <CDBSidebarMenuItem>
                        <Link to="/reservation/liste">
                            <IconButton size="large" aria-label="show new reservations" color="inherit">
                                <Badge badgeContent={newReservationCount} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                        <Link to="/reservation/jour">
                            <IconButton size="large" aria-label="show new reservations" color="inherit">
                                <ReservationIcon />
                            </IconButton>
                        </Link>
                        <Link to="/voiture/date">
                            <IconButton size="large" aria-label="show schedule" color="inherit">
                                <ScheduleIcon />
                            </IconButton>
                        </Link>
                    </CDBSidebarMenuItem>
                </div>
            </CDBSidebarHeader>

            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <CDBSidebarMenuItem icon="sticky-note">
                        <Link to="/voiture/liste">Voitures</Link>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="sticky-note">
                        <Link to="/voiture/insert">Nouvelle voiture</Link>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="sticky-note">
                        <Link to="/voiture/date"> Dates </Link>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="sticky-note">
                        <Link to="/marque/liste">Marques</Link>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="sticky-note">
                        <Link to="/marque/insert">Nouvelle marque</Link>
                    </CDBSidebarMenuItem>

                    <CDBSidebarMenuItem icon="sticky-note">
                        <Link to="/reservation/liste">Reservation</Link>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="sticky-note">
                        <Link to="/menu">Menu</Link>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem></CDBSidebarMenuItem>
                    <CDBSidebarMenuItem></CDBSidebarMenuItem>
                    <CDBSidebarMenuItem></CDBSidebarMenuItem>
                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    );
};

export default Sidebar;
