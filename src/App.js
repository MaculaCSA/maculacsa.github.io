import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

//importar jquery
import $ from 'jquery';

console.log("App.js")

function App() {
  return (
    <div className="App">
      <Parallax pages={10} scrolling={false}>
        <ParallaxLayer offset={0}/>
        <ParallaxLayer offset={1} style={{ backgroundColor: 'white' }} />
        <ParallaxLayer offset={2} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={3} style={{ backgroundColor: '#87BCDE' }}/>
        
        <ParallaxLayer offset={0} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div id="content">
            <h2 class="titulo">PREMIOS MÀCULA</h2>
            <div class="margen"></div>
            <p class="subtitulo">2024</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} sticky={{}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div class="modelo">
            <model-viewer id="aSide" src="model/maculanogirar.glb" alt="Macula" auto-rotate loading="eager" ar ar-modes="webxr scene-viewer quick-look" poster="model/poster.webp" shadow-intensity="1" autoplay environment-image="model/fireplace_2k.hdr"> </model-viewer>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div id="content" class="creditos">
            <h3 class="titulo">Hecho con ❤️ por Pablo García y Aarón Sancibrián</h3>
            <div class="margen"></div>
            <p class="subtitulo">Modelo por Hector Sancibrián</p>
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

window.onload = function(){
  //esperar 6 segundos
  setTimeout(function(){
          //handleScroll();
          $('#mainNav').removeClass('invisible');
          $('#carga').fadeOut();
  }
  , 6000);
  
}