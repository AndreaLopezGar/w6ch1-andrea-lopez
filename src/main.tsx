import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from './context/app.context';
import App from './core/components/app/app';
import './core/components/app/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
