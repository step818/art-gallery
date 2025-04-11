import { useAuth } from "react-oidc-context";

function Login() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "7ifg3lk63b2el4chploa5adeka";
    const logoutUri = "https://d84l1y8p4kdic.cloudfront.net";
    const cognitoDomain =
      "https://us-west-2bzmw14nqk.auth.us-west-2.amazoncognito.com"; // e.g. myapp.auth.us-west-2.amazoncognito.com
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;

  return auth.isAuthenticated ? (
    <div>
      <h2>Welcome, {auth.user?.profile.email}</h2>
      <button onClick={() => auth.removeUser()}>Sign out</button>
    </div>
  ) : (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={signOutRedirect}>Sign out</button>
    </div>
  );
}

export default Login;
