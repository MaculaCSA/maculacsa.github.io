import React from 'react';
import { Link } from 'react-router-dom';
import './errorpage.css';
// importar logo desde public/img/LogoDEV.png
//import logo from './img/LogoDEV.png';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <img src="./img/LogoDEV.png" className='devlogo' alt="Error" />
            <h1 className="fade-in">Pagina no encontrada</h1>
            <Link to="/">
                <button className="btn-hover" onClick={() => window.location.href = "/"}>Página principal</button>
            </Link>
        </div>
    );
};

export default ErrorPage;