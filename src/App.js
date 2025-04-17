import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import PremioCanvas from './canvas.jsx';
import importarTodosLosDatos from './importarDatos.js';

const datosPorAno = importarTodosLosDatos();

console.log("App.js");
console.log("Archivos JSON encontrados:", Object.keys(datosPorAno));

function App() {
  const anosDisponibles = Object.keys(datosPorAno).sort((a, b) => b - a);
  
  const actual = anosDisponibles[0];
  
  // Crear botones para los años disponibles
  const botonesAnos = anosDisponibles.map(ano => (
    <button 
      key={ano} 
      className={`${ano === actual ? 'actual' : ''} bcolegios`}
      onClick={() => window.location.href=`./${ano}`} 
      id={`ano-${ano}`}
    >
      {ano}
    </button>
  ));

  return (
    <div className="App">
      <Parallax pages={3}>
        <ParallaxLayer offset={2} style={{backgroundColor: '#407ECD'}}/>

        <ParallaxLayer offset={0} speed={0.1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div id="content">
            <h2 className="titulo">PREMIOS MÁCULA</h2>
            <p className="subtitulo">{actual}</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} sticky={{}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div id="canvaspremio">
          <PremioCanvas id="aSide" />
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
            {botonesAnos}
            <button 
              key={'2023'} 
              className={`bcolegios`}
              onClick={() => window.location.href=`./2023`} 
            >
              2023
            </button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

