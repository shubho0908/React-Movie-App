import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-iszfldpzvidzbzp1.us.auth0.com"
    clientId="u5B92B0JSWTCXU1V0qY69w7NU2RC2Vr8"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
