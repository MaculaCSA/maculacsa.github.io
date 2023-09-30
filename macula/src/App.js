import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div className="App">
      <Parallax pages={10} scrolling={false}>
        <ParallaxLayer offset={0} style={{ backgroundColor: 'white' }} />
        <ParallaxLayer offset={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} style={{ backgroundColor: '#87BCDE' }} />
        
        <ParallaxLayer offset={0} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div id="content">
          <h2>PREMIOS MÀCULA</h2>
          <p>Cortos Agustinianos</p>
          <button>Shop</button>
        </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div class="modelo">
          <model-viewer id="aSide" src="model/maculanogirar.glb" alt="Macula" auto-rotate ar ar-modes="webxr scene-viewer quick-look" poster="model/poster.webp" shadow-intensity="1" autoplay environment-image="model/fireplace_2k.hdr"> </model-viewer>
        </div>
        </ParallaxLayer>


      </Parallax>
    
    </div>
  );
}

export default App;
