/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    return token ? children : <Navigate to="/auth" replace />;
};
export default ProtectedRoute;