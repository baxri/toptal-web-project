// import { useSession } from "../../storeon/session";
import { useAuthentication } from "../../hooks/useAuthentication";

function DashboardScreen() {
  const { onLogOut } = useAuthentication();

  const handleLogout = () => {
    onLogOut();
  };

  return (
    <div>
      <h1>DASHBOARD</h1>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default DashboardScreen;
