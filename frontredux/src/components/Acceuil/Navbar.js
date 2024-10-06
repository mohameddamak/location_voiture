// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import { Grid } from '@mui/material';
// import { useDispatch,useSelector } from 'react-redux';
// const marques = useSelector((state) => state.storemarques);

// function NavScrollExample() {
//   return (
//     <Navbar bg="info" expand="lg">
//       <Container fluid>
//         {/* Logo */}
//         <Navbar.Brand href="#">Logo</Navbar.Brand>

//         {/* Bouton de bascule pour la navigation mobile */}
//         <Navbar.Toggle aria-controls="navbarScroll" />

//         <Navbar.Collapse id="navbarScroll">
//           {/* Navigation principale */}
//           <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <NavDropdown title="Marques" id="navbarScrollingDropdown">
//               <NavDropdown.Item as={Link} to="/peugeot">Peugeot</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/renault">Renault</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/siat">Siat</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/kia">Kia</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/nissan">Nissan</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/">Contact</Nav.Link>
//           </Nav>
//           <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link to="/login" variant="body2"  style={{ color: 'black' }}>
//                    Login 
//                 </Link>
//                 <span style={{ marginRight: '10px' }}></span>
//                 <Link to="/logout" variant="body2"  style={{ color: 'black' }}>
//                  Logout
//                 </Link>
//               </Grid>
//             </Grid>
//             <span style={{ marginRight: '5px' }}></span>
//           <Form className="d-flex">

//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success">Search</button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;
// 
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Grid } from '@mui/material';
import { getMarques } from '../../features/marqueSlice';
import { urlimage } from '../../Axios/Api';

function NavScrollExample() {
  const dispatch = useDispatch();
  const marques = useSelector((state) => state.storemarques.marques);
  const userRole = useSelector((state) => state.auth.user.role); // Accédez au rôle de l'utilisateur
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    dispatch(getMarques());

    // Vérifiez si le rôle de l'utilisateur est "admin" pour déterminer s'il est administrateur
    if (userRole === 'admin') {
      setIsAdmin(true);
    }
  }, [dispatch, userRole]);

  return (
    <Navbar bg="info" expand="lg">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#">
          
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
        </Navbar.Brand>

        {/* Bouton de bascule pour la navigation mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Navigation principale */}
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Marques" id="navbarScrollingDropdown">
              {marques.map((marque) => (
                <NavDropdown.Item as={Link} to={`/voiture/${marque._id}`} key={marque._id}>
                  <img
                    src={`${urlimage}${marque.immarque}`}
                    alt={marque.nommarque}
                    style={{ width: '40px', height: '40px', marginRight: '10px' }}
                  />
                  {marque.nommarque}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
             <Nav.Link as={Link} to="/">Contact</Nav.Link>

            {isAdmin && (
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            )} 
          </Nav>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2" style={{ color: 'black' }}>
                Login
              </Link>
              <span style={{ marginRight: '10px' }}></span>
              <Link to="/logout" variant="body2" style={{ color: 'black' }}>
                Logout
              </Link>
            </Grid>
          </Grid>
          <span style={{ marginRight: '5px' }}></span>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Search</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;


