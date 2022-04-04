import React from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ currentUser, children }) => {
  return !currentUser ? <Navigate to='/signin' replace /> : children
};
export default ProtectedRoute;