import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("jwtToken"); // or use context/state

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
