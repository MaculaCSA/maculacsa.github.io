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

    const modelocategoria = '/img/categorias/claqueta.mp4';
    
    console.log(datosCiudad);

    window.onload = carga()
    return (
        <div className="App">
      <Parallax style={{ backgroundColor: '#212121' }} pages={2} scrolling={false}>
        <ParallaxLayer offset={0}>
          <img className="fondo" src={fotociudad} alt="" />
        </ParallaxLayer>


        <ParallaxLayer offset={0} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div id="content">
            <h2 className="titulociudad titulo">{titulo}</h2>

            <p className="subtitulo">Mácula 2024</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <video src={modelocategoria} className="modelocategoria" autoPlay muted loop />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
        <div className="item categoria">
          <p className="info">Nominados al mejor guion:</p>
          <div className="container2">
            <button style={{backgroundImage: `url(img/nominados/rencor.png)`}} onClick={() => console.log('GTxQBbB46mo')} className="corto fondoimg"><p className="nombre">El Rencor</p></button>
            <button style={{backgroundImage: `url(img/nominados/asalto.png)`}} onClick={() => console.log('xat-XYdr_u8')} className="corto fondoimg ganador"><p className="nombre">Un Asalto a la historia</p></button>
            <button style={{backgroundImage: `url(img/nominados/x.png)`}} onClick={() => console.log('pSFSd89KPbc')} className="corto fondoimg"><p className="nombre">Proyecto X</p></button>
            <button style={{backgroundImage: `url(img/nominados/newton2.png)`}} onClick={() => console.log('i7XQBbb94pY')} className="corto fondoimg"><p className="nombre">Newton</p></button>
          </div>
        </div>
          
        </ParallaxLayer>

      </Parallax>
    
    </div>
    );
};
 
export default Sitios;
