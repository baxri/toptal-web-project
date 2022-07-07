import { Navigate } from "react-router-dom";

// import { useSession } from "../../storeon/session";
import { useAuthentication } from "../../hooks/useAuthentication";

function LoginScreen() {
  // const session = useSession();
  const { isAuthenticated, onLogin } = useAuthentication();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = () => {
    onLogin();

    // session.setAccessToken({
    //   accessToken: "23n4k2j3n42n3kj4n2k3n42k3n4k2n4",
    //   refreshToken: "2k34n2k3jn4k23n42k3jn423kjn4k23n4k23n",
    // });
  };

  return (
    <div>
      <h1>LOGIN SCREEN</h1>
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
}

export default LoginScreen;
