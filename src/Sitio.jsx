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
  
  const numCategorias = Object.keys(datosCiudad.categorias).length;
  
  console.log("Categorias: " + numCategorias);

  const numPaginas = numCategorias + 1;
  console.log("Paginas: " + numPaginas);

  const modelocategoria = '/img/categorias/claqueta.mp4';
  
  console.log(datosCiudad);

  window.onload = carga();

  let categoriaId = 0; // Id inicial de la categoría

  // Generate category elements
  const categorias = Object.keys(datosCiudad.categorias).map((categoria) => {
    const cortos = datosCiudad.categorias[categoria].map((corto) => (
      <button
        style={{backgroundImage: `url(img/nominados/${corto.nombre_foto})`}}
        onClick={() => console.log(corto.youtube_id)}
        className="corto fondoimg"
      >
        <p className="nombre">{corto.titulo}</p>
      </button>
    ));
    
    categoriaId++;
    console.log("Id de página: " + categoriaId);
    return (
    <ParallaxLayer offset={categoriaId} speed={0.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="item categoria">
        <h2 className="titulocategoria titulo">{categoria}</h2>
        <div className="container2">
          {cortos}
        </div>
      </div>
    </ParallaxLayer>
    );
  });

  return (
    <div className="App">

      <Parallax style={{ backgroundColor: '#212121' }} pages={numPaginas} scrolling={false}>
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

        {categorias}

      </Parallax>
    
    </div>
  );
};
 
export default Sitios;
