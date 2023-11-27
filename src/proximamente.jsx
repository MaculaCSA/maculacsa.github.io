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
            <img src={'/img/LogoDEV.png'} className='devlogo' alt="Error" />
            <h1 className="fade-in">Próximamente...</h1>
        </div>
    );
};

export default ErrorPage;
