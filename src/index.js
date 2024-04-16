import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Sitios from './Sitio';

import ErrorPage from './errorpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
var ReactDOMClient = require('react-dom/client');


const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/nominados" element={<Sitios ciudad="nominados" />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  // </React.StrictMode>
);

reportWebVitals();