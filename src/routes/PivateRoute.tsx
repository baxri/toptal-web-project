import { Navigate, Outlet } from "react-router-dom";

// import { useSession } from "../storeon/session";
import { useAuthentication } from "../hooks/useAuthentication";

function PrivateRoute() {
  // const session = useSession();
  const { isAuthenticated } = useAuthentication();
  return !isAuthenticated ? <Navigate to="/login" replace /> : <Outlet />;
}

export default PrivateRoute;
