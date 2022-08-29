import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";
import { toRelativeUrl } from "@okta/okta-auth-js";

const Home = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });
  const logout = () => {
    restoreOriginalUri();
    oktaAuth.signOut({ originalUri: "/" });
  };

  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <h3>You are not authenticated</h3>
        <button onClick={login}>Login</button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>You are authenticated</h3>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
};
export default Home;
