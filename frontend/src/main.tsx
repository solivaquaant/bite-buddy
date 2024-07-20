import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRouter';
import Auth0ProviderWithNavigation from './auth/Auth0ProviderWithNavigation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNavigation>
        <AppRoutes />
      </Auth0ProviderWithNavigation>
    </Router>
  </React.StrictMode>,
)
