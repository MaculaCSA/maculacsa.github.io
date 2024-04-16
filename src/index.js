import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sitios from './Sitio';
import ErrorPage from './errorpage';

import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  { path: '/', element: <App /> },
  { path: '/nominados', element: <Sitios ciudad={"nominados"} /> },
  { path: '*', element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();