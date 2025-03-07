import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Sitios from './Sitio';
import importarTodosLosDatos from './importarDatos.js';
import ErrorPage from './errorpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importar todos los datos de los archivos JSON
const datosPorAno = importarTodosLosDatos();
console.log("index.js - Archivos JSON encontrados:", Object.keys(datosPorAno));

// Crear rutas dinámicamente para cada año
const generarRutasPorAno = () => {
  return Object.keys(datosPorAno).map(ano => (
    <Route key={ano} path={`/${ano}`} element={<Sitios ciudad="nominados" ano={ano} />} />
  ));
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nominados" element={<Sitios ciudad="nominados" ano="2024"/>} />
        {generarRutasPorAno()}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();