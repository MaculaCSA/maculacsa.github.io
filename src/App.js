import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import PremioCanvas from './canvas.jsx';
import React from 'react';

// Base de datos
const datos = require('./datos.json');

console.log("App.js")


function App() {

  //const data = JSON.parse(datos);
  const ciudades = Object.keys(datos);
  console.log(datos);

  const botones = ciudades.map((ciudad) => {
    return (
      <button key={ciudad} className="bcolegios" onClick={() => window.location.href='./' + ciudad} id={ciudad}>{datos[ciudad].titulo}</button>
    );
  });
  return (
    <React.Fragment className="App">
      <div id="carga" style={{ width: '100%', height: '100vh', backgroundColor: 'white' }}>
        <div className="logo" style={{ width: '50%' }}>
          <img width="100%" src="%PUBLIC_URL%/img/logoMP.png" alt="" class="imgr"/>
        </div>

        <div className="circular-progress">
          <div className="value-container">0%</div>
        </div>
      </div>
      <Parallax pages={3}>
        <ParallaxLayer offset={2} style={{backgroundColor: '#407ECD'}}/>


        <ParallaxLayer offset={0} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div id="content">
            <h2 className="titulo">PREMIOS MÁCULA</h2>

            <p className="subtitulo">2024</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} sticky={{}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div id="canvaspremio">
          <PremioCanvas id="aSide"  />
        </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div id="content" className="creditos">
            <h3 className="titulo">Hecho por: <br/>Pablo García y Aarón Sancibrián</h3>
            <p className="subtitulo">Modelos por Hector Sancibrián</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1} style={{ display: "flex", alignItems: "center", justifycontent: "center", flexDirection: "column", flexWrap : "wrap" }}>
          <div className="flexcolegios">
            {botones}
          </div>
          <button style={{position: 'absolute', width: '200px', right: '5vh', bottom: '5vh'}} className="bcolegios" onClick={() => window.location.href='./2023'}>2023</button>
        </ParallaxLayer>

      </Parallax>
    
    </React.Fragment>
  );
}

export default App;

//const modelViewer = document.getElementById('aSide');

//console.log("Cargando modelo en app.js");

//modelViewer.addEventListener('loaded', function() {
//        handleScroll();
//        $('#mainNav').removeClass('invisible');
//        $('body').removeClass('hidden');
//        $('#carga').fadeOut();
//        console.log("Modelo cargado");
//});

//window.onload = carga()

