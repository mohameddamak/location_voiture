import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element, allowedRoles, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
  console.log('isAuthenticated',isAuthenticated)
  const userRole = useSelector(state => state.auth.user && state.auth.user.role);
  const navigate = useNavigate();
console.log("userRole",userRole)
  if (isAuthenticated && allowedRoles.includes(userRole)) {
    // L'utilisateur est authentifié et a un rôle autorisé
    return element;
    console.log('elemnt',element)
  } else {
    // L'utilisateur n'est pas authentifié ou n'a pas un rôle autorisé
    // Rediriger ou gérer l'accès non autorisé ici
    navigate('*');
    return null; // Vous pouvez également retourner un composant d'accès non autorisé
  }
};

export default PrivateRoute;