import React from "react";

import carga from './carga.js';

//Importar jquery
import $ from 'jquery';

//Importar elevator.js
import Elevator from 'elevator.js';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './Sitio.css';

const datos = require('./datos.json');

const Sitios = ({ciudad}) => {

  window.onload = function() {
    carga();
    console.log("Elevator cargado");
    var elevator = new Elevator({
      element: document.querySelector('#elevator'),
      mainAudio: '../public/elevator/subir.mp3',
      endAudio: '../public/elevator/ding.mp3'
    });
  }
  

  console.log(ciudad);
  //coger dato de datos.json
  const datosCiudad = datos[ciudad];
  const titulo = datosCiudad.titulo;
  const fotociudad = '/img/colegios/' + datosCiudad.fotociudad;
  
  const numCategorias = Object.keys(datosCiudad.categorias).length;
  
  console.log("Categorias: " + numCategorias);

  const numPaginas = numCategorias + 1;
  console.log("Paginas: " + numPaginas);

  
  console.log(datosCiudad);

  //window.onload = carga();

  let categoriaId = 0; // Id inicial de la categoría

  // Generate category elements
const categorias = Object.keys(datosCiudad.categorias).map((categoria, index) => {
  const categoriaData = datosCiudad.categorias[categoria];
  const modelocategoria = categoriaData[0].modelo;

  const cortos = categoriaData.slice(1).map((corto) => (
    <button
      style={{backgroundImage: `url(../img/nominados/${corto.nombre_foto})`}}
      onClick={() => openPopup(corto.youtube_id)}
      className="corto fondoimg"
      onMouseEnter={() => cambiarimg(corto.nombre_foto, index)}
      onMouseLeave={() => ocultarimg(index)}
    >
      <p className="nombre">{corto.titulo}</p>
    </button>
  ));

  categoriaId++;
  console.log("Id de página: " + categoriaId);

  return (
    <React.Fragment key={categoriaId}>
      <ParallaxLayer offset={categoriaId} speed={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video src={modelocategoria} className="modelocategoria" playsInline autoPlay muted loop />
      </ParallaxLayer>

      <ParallaxLayer offset={categoriaId} speed={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div id={'div' + index} style={{ display: 'none'}} className="DivImgCorto modelocategoria">
          <div className="gradient fotocorto"></div>
          <img id={'img' + index} src="../img/LogoDEV.png" className="fotocorto" alt="" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={categoriaId} speed={0.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="item categoria">
          <h2 className="titulocategoria titulo">{categoria}</h2>
          <div className="container2">
            {cortos}
          </div>
        </div>
      </ParallaxLayer>
    </React.Fragment>
  );
});

  return (
    <div className="App">

      <div className="popup" id="popup">
        <iframe
          width="100%"
          height="100%"
          id="IframeVideo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <button className="cerrarpopup" onClick={closePopup}>
          <img src="../img/x-square.svg" alt="Cerrar" />
        </button>
      </div>

      <div className="popup" id="popupImg">
        <img src="img/logoMP.png" id="IframeImg" frameBorder="0" alt="" />
        <button className="cerrarpopup cerrarpopupImg" onClick={closePopup}>
          <img src="../img/x-square.svg" alt="Cerrar" />
        </button>
      </div>

      <button id="closePopup" className="cerrarpopupgigante" onClick={closePopup}></button>

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

        {categorias}

      </Parallax>
      <button id="elevator" style={{display: 'block', position: 'fixed', bottom: '20px', right: '20px'}}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg></button>
    </div>
  );
};

function cambiarimg(img, categoriaId) {
  document.getElementById('img' + categoriaId).src = "../img/nominados/" + img;
  console.log("Cambiando imagen a " + img);
  mostrarimg(categoriaId);
}

const velocidad = 175;

function mostrarimg(Id) {
  //document.getElementById('div' + Id).style.display = "block";
  //fadein jquery
  $('#div' + Id).fadeIn(velocidad);
  console.log("Mostrando imagen" + Id);
}

function ocultarimg(Id) {
  //document.getElementById('div' + Id).style.display = "none";
  //FadeOut jquery
  $('#div' + Id).fadeOut(velocidad);
  console.log("Ocultando imagen" + Id);
}

const userAgent = navigator.userAgent;

function openPopup(VideoId) {
  // Si el usuario es de movil, en vez de ejecutarse close popup se redirige a la pagina de youtube
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      url("https://www.youtube.com/watch?v=" + VideoId);
  }
  else {
      // Se cambia el src del iframe
      document.getElementById("IframeVideo").src = "https://www.youtube.com/embed/" + VideoId;
      // Se muestra el div
      document.getElementById("popup").style.display = "block";
      document.getElementById("closePopup").style.display = "block";
  }
}

// Abrir popup para carteles
/*function openPopupImg(ImageId) {
  // Se cambia el src del iframe
  document.getElementById("IframeImg").src = "img/nominados/carteles/" + ImageId;
  // Se muestra el div
  document.getElementById("popupImg").style.display = "block";
  document.getElementById("closePopup").style.display = "block";

}*/

// Cuando el boton de cerrar se pulsa
function closePopup() {
  // Desaparece el div
  document.getElementById("popup").style.display = "none";
  document.getElementById("popupImg").style.display = "none";
  document.getElementById("closePopup").style.display = "none";

  // Se para el video
  document.getElementById("IframeVideo").src = "";
}

// Redirigir a una web
function url(url) {
  window.open(url);
}


export default Sitios;