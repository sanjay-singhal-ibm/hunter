import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const { user } = useAppContext();
  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }

  // Else
  return children;
};

export default RestrictedRoute;
