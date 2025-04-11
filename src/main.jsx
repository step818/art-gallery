import "./index.css";

import App from "./App.jsx";
import { AuthProvider } from "react-oidc-context";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_bZmw14NQK",
  client_id: "7ifg3lk63b2el4chploa5adeka",
  redirect_uri: "https://stephentrewick.com",
  response_type: "code",
  scope: "email openid phone",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
