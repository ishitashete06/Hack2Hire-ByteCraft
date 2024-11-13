// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';     // Ensure this file exists
import { reportWebVitals } from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
