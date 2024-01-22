/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase.init";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  if (!auth.currentUser) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoutes;
