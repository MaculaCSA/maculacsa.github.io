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
          <h1>Sticky Layers!</h1>
        </ParallaxLayer>
      </Parallax>
    
    </div>
  );
}

export default App;
