import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/normalize.css';
import './css/skeleton.css';
import './css/dark-theme.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
