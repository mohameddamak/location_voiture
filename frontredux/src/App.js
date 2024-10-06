
import './App.css';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Acceuil/Login';
import Register from './components/Acceuil/Register';
import NavScrollExample from './components/Acceuil/Navbar';
import { Footer } from './components/Acceuil/Footer';
import ControlledCarousel from './components/Acceuil/Carousel';
import Menu from './components/Acceuil/Menu';
import Sidebar from './components/admin/Sidebar';
import ClientPage from './components/admin/AdminPage';
import Logout from './components/Acceuil/Logout';
import InsertMarque from './components/marque/InsertMarque';
import EditMarque from './components/marque/EditMarque';
import AfficheMarques from './components/marque/AfficheMarques';
import ListMarques from './components/marque/ListMarque';
import Insertvoiture from './components/voiture/InsertVoiture';
import AfficheVoitureMarque from './components/Client/AfficheVoituresMar';
import MarquesEtVoitures from './components/Client/AfficheVoituresMar';
import Voiture from './components/Client/Voiture';
import OptionsVoiture from './components/Client/OptionsVoiture';
import Reservation from './components/Client/InsertReservation';
import InsertReservation from './components/Client/InsertReservation';
import AdminPage from './components/admin/AdminPage';
import Affiche from './components/admin/VoitureCards';
import AfficheV from './components/admin/VoitureCards';
import VoitureCards from './components/admin/VoitureCards';
import InsertAutoMarque from './components/marque/InsertAutoMarque';
import PrivateRoute from './components/Acceuil/PrivateRoute';
import Unathorized from './Unathorized';
import EditVoiture from './components/voiture/EditVoiture';

import TableauVoitures from './components/voiture/AfficheVoitures';
import ConfirmationReservation from './components/Client/ConfirmationRes';
import AfficheReservation from './components/Reservation/AfficheReservation';
import StripePayment from './components/Client/StripePayement';
import InsertOption from './components/option/InsertOption';
import EditOption from './components/option/EditOption';
import CustomAppBar from './components/admin/CustomAppBar';
import Side from './components/admin/CustomAppBar';
import MenuClient from './components/Acceuil/MenuClient';
import AfficheJour from './components/Reservation/AfficheSide';
import PdfCreationPage from './components/admin/PdfCreationPage';
import DateVoitures from './components/voiture/VoitureDate';


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/menu" element={<Menu />} /> 
         <Route path="/menuclient" element={<MenuClient/>} /> 
      
         <Route path="/register" element={<Register />} />
         < Route path="/login" element={<Login />} />
        <Route path="/nav" element={<NavScrollExample />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/carousel" element={<ControlledCarousel />} />
        <Route path="/sidebar" element={<Sidebar />} /> 

        <Route path="/logout" element={<Logout />} />
        <Route path="/marque" element={<TableauVoitures />} />
        <Route path="/marque/liste" element={<ListMarques />} />
        <Route path="/marque/insert" element={<InsertAutoMarque />} />
        <Route path="/editmarque/:id" element={<EditMarque />} />
        <Route path="/voiture/insert" element={<Insertvoiture />} />
    
        <Route path="/voiture/liste" element={<TableauVoitures />} />
        <Route path="/voiture/date" element={<DateVoitures />} />


        {/* <Route path="/reservation/liste" element={<AfficheReservation />} /> */}
        <Route path="/payment/:reservationId" element={<StripePayment />} />
        <Route path="/editvoiture/:id" element={<EditVoiture />} />
        <Route path="/option/edit/:optionId" element={<EditOption  />} />
     
        
        <Route path="/voiture/:marqueId" element={<Voiture />} />
        <Route path="/options/:voitureId" element={<OptionsVoiture />} />
        <Route path="/reservation/:voitureId" element={<InsertReservation />} />
        <Route path="/reservation/liste" element={<AfficheReservation />} />
        <Route path="/reservation/jour" element={<AfficheJour />} />


        <Route path="/reservation/confirm/:reservationId" element={<ConfirmationReservation />} />
        <Route path="*" element={<Unathorized />} />
        <Route path="/admin/option/:voitureId" element={<OptionsVoiture />} />
        <Route path="/pdf/:reservationId" element={<PdfCreationPage />} />
        
        
      
        <Route
          path="/admin"
          element={
            <PrivateRoute
              allowedRoles={['admin']}
              element={<AdminPage />}
            />
          }
        />
         <Route path="/insertoption" element={<InsertOption/>} />

      </Routes>

  

    </div>
  );
}

export default App;
