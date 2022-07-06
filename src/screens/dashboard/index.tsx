import { useSession } from "../../storeon/session";

function DashboardScreen() {
  const session = useSession();

  const handleLogout = () => {
    session.clear();
  };

  return (
    <div>
      <h1>DASHBOARD</h1>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default DashboardScreen;
