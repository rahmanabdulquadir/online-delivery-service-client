import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  if(loading) {
    // return <h1 className="text-5xl">Loading...</h1>
    return navigate('/login')
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
