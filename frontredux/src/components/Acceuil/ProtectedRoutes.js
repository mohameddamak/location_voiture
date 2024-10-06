import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  let token = localStorage.getItem("CC_Token");

  if (token != null) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes