import './App.css';

import carga from './carga.js';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

console.log("App.js")

function App() {
  //carga de la página
  window.onload = carga()
  return (
    <div className="App">
      <Parallax pages={3} scrolling={false}>
        <ParallaxLayer offset={2} style={{backgroundColor: '#407ECD'}}/>


        <ParallaxLayer offset={0} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div id="content">
            <h2 className="titulo">PREMIOS MÁCULA</h2>

            <p className="subtitulo">2024</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} sticky={{}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="modelo">
            <model-viewer id="aSide" src="model/maculanogirar.glb" alt="Macula" auto-rotate loading="eager" ar ar-modes="webxr scene-viewer quick-look" poster="model/poster.webp" shadow-intensity="1" autoplay environment-image="model/fireplace_2k.hdr"> </model-viewer>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div id="content" class="creditos">
            <h3 class="titulo">Hecho con ❤️</h3>
            <h3 class="titulo">Pablo García y Aarón Sancibrián</h3>
            <p class="subtitulo">Modelos por Hector Sancibrián</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1} style={{ display: "flex", alignItems: "center", justifycontent: "center", flexDirection: "column", flexWrap : "wrap" }}>
          <div className="flexcolegios">
            <button className="bcolegios" onClick={() => window.location.href='./santander'} id='santander'>Santander</button>
            <button className="bcolegios" onClick={() => window.location.href='./negrales'} id='negrales'>Los Negrales</button>
            <button className="bcolegios" onClick={() => window.location.href='./alicante'} id='alicante'>Alicante</button>
          </div>
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

