import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("jwtToken");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export const PublicRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("jwtToken");
  return isAuthenticated ? <Navigate to="/notes" /> : children;
};
