import React from 'react';
import { Link } from 'react-router-dom';
import './errorpage.css';

//importar jquery
import $ from 'jquery';

//función de carga de la página
const carga = () => {
    $('#mainNav').removeClass('invisible');
    $('body').removeClass('hidden');
    $('#carga').fadeOut();
}

const ErrorPage = () => {
    //carga de la página
    window.onload = carga()
    return (
        <div className="error-page">
            <img src={process.env.PUBLIC_URL + '/img/LogoDEV.png'} className='devlogo' alt="Error" />
            <h1 className="fade-in">Pagina no encontrada</h1>
            <Link to="/">
                <button className="btn-hover" onClick={() => window.location.href = "/"}>Página principal</button>
            </Link>
        </div>
    );
};

export default ErrorPage;