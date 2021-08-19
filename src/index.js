import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);