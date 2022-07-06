import { Navigate, Outlet } from "react-router-dom";

import { useSession } from "../storeon/session";

function PrivateRoute() {
  const session = useSession();
  return !session.authenticated ? <Navigate to="/login" replace /> : <Outlet />;
}

export default PrivateRoute;
