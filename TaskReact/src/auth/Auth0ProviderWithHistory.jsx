// src/auth/auth0-provider-with-history.js

import React from 'react';
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-x89v66tk.us.auth0.com";
  const clientId = "WT7aAlguqhHjOyidU6PUAFt5tztJAWL5";
  
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;