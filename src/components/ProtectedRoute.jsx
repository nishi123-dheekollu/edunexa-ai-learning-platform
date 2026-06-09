import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");   // Retrieve JWT token from local storage

   // Redirect unauthenticated users to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children; // Render protected component for authenticated users
}

export default ProtectedRoute;