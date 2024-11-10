import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import PremioCanvas from './canvas.jsx';

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
    <div className="App">
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
            <p className="subtitulo">Modelos hechos en colaboración con Héctor Sancibrián</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1} style={{ display: "flex", alignItems: "center", justifycontent: "center", flexDirection: "column", flexWrap : "wrap" }}>
          <div className="flexcolegios">
            {botones}
          </div>
          <button style={{position: 'absolute', width: '200px', right: '5vh', bottom: '5vh'}} className="bcolegios" onClick={() => window.location.href='./2023'}>2023</button>
        </ParallaxLayer>

      </Parallax>
    
    </div>
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

