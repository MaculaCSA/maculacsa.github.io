import React from "react";

import carga from './carga.js';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './Sitio.css';

const datos = require('./datos.json');

const Sitios = ({ciudad}) => {

    console.log(ciudad);
    //coger dato de datos.json
    const datosCiudad = datos[ciudad];
    const titulo = datosCiudad.titulo;
    const fotociudad = '/img/colegios/' + datosCiudad.fotociudad;
    
    console.log(datosCiudad);

    window.onload = carga()
    return (
        <div className="App">
      <Parallax pages={3} scrolling={false}>
        <ParallaxLayer offset={0}>
          <img className="fondo" src={fotociudad} alt="" />
        </ParallaxLayer>


        <ParallaxLayer offset={0} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div id="content">
            <h2 className="titulociudad titulo">{titulo}</h2>

            <p className="subtitulo">Mácula 2024</p>
          </div>
        </ParallaxLayer>

      </Parallax>
    
    </div>
    );
};
 
export default Sitios;