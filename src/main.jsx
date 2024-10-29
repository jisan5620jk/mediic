import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './Router/App';
import './index.css'
import Preloader from './Shared/Preloader/Preloader';

const helmetContext = {}; // Define helmetContext here

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <Preloader />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
