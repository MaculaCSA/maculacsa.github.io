import React from "react";

import carga from './carga.js';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './Sitio.css';

//fetch('archivo.json')
//  .then(response => response.json())
//  .then(data => {
//    const variable1 = data.variable1;
//    const variable2 = data['variable2'];
    // Usa las variables como necesites
//  });

const Sitios = ({ciudad}) => {
    window.onload = carga()
    return (
        <div className="App">
      <Parallax pages={3} scrolling={false}>
        <ParallaxLayer offset={2} style={{backgroundImage: `url(${ciudad})`}} />


        <ParallaxLayer offset={0} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div id="content">
            <h2 class="titulo titulociudad">{ciudad}</h2>

            <p class="subtitulo">Mácula 2024</p>
          </div>
        </ParallaxLayer>

      </Parallax>
    
    </div>
    );
};
 
export default Sitios;