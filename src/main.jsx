import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import ReactGA from 'react-ga';

const GA_TRACKING_ID = import.meta.env.VITE_REACT_APP_GA_TRACKING_ID;

ReactGA.initialize(GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
