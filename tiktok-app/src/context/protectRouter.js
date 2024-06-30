import { Navigate } from "react-router-dom";
import {useAuth} from "./AuthContext";

export const ProtectedRoute = ({ children , roles}) => {
  const { user } = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  if (haveRole(user.roles, roles)) {}
  return children;
};

function haveRole(userRoles, roles){
  console.log(userRoles + roles)
  return true;
}