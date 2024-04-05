import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Sitio.css';

import carga from './carga.js';
import $ from 'jquery';
const datos = require('./datos.json');

const Sitios = ({ ciudad }) => {
  const datosCiudad = datos[ciudad];
  const titulo = datosCiudad.titulo;
  const fotociudad = '/img/colegios/' + datosCiudad.fotociudad;
  const numCategorias = Object.keys(datosCiudad.categorias).length;
  // Logs de prueba

  console.log("Categorias: " + numCategorias);

  const numPaginas = numCategorias + 1;

  console.log("Paginas: " + numPaginas);

  console.log(datosCiudad);


  window.onload = carga();
  let categoriaId = 0;

  const canvasRefs = useRef({});

  useEffect(() => {
    Object.keys(canvasRefs.current).forEach((key) => {
      const currentCanvas = canvasRefs.current[key];
      const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: currentCanvas });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, currentCanvas.clientWidth / currentCanvas.clientHeight, 0.1, 1000);
      const loader = new GLTFLoader();

      camera.position.set(0, 0, 5);
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      loader.load(`/path/to/models/${key}.glb`, (gltf) => {
        scene.add(gltf.scene);
      }, undefined, (error) => {
        console.error(error);
      });

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();

      const onWindowResize = () => {
        const width = currentCanvas.clientWidth;
        const height = currentCanvas.clientHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('resize', onWindowResize, false);

      return () => {
        window.removeEventListener('resize', onWindowResize, false);
      };
    });
  }, []);

  const categorias = Object.keys(datosCiudad.categorias).map((categoria, index) => {
    const categoriaData = datosCiudad.categorias[categoria];
    /*const modelocategoria = categoriaData[0].modelo;*/

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
          <canvas ref={(el) => canvasRefs.current[categoria] = el} className="modelocategoria" />
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