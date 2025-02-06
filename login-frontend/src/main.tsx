import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-m1je47ng7olmidg5.us.auth0.com"
      clientId="VcfFSO6O3IrGHIORb1cRwT1E0HkjDVkD"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/frontpage",
        audience: "https://my-auth0-social-login/",
        scope: "test:scope",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
