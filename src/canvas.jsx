import { useEffect, Fragment } from 'react';
import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import { RoomEnvironment } from 'three/examples/jsm/Addons.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

import carga from './carga.js';

function PremioCanvas() {
// Al cargar el canvas de three.js ejecutar la función carga

useEffect(() => {

const loadingManager = new THREE.LoadingManager();

loadingManager.onLoad = function () {
  carga();
  console.log('Carga modelo completada');
};
  
var contenedor = document.getElementById('canvaspremio');

//const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, document.getElementById('canvaspremio').offsetWidth / document.getElementById('canvaspremio').offsetHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize( document.getElementById('canvaspremio').offsetWidth, document.getElementById('canvaspremio').offsetHeight );
if (contenedor.childNodes.length === 0) {
  contenedor.appendChild(renderer.domElement);
} else {
  // Si ya existe un canvas, reemplazarlo
  contenedor.replaceChild(renderer.domElement, contenedor.childNodes[0]);
}


/*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/
//const controls = new OrbitControls( camera, renderer.domElement );

camera.position.x = 0;
camera.position.z = 0.4;
camera.position.y = 0.3;

camera.rotation.x = 75;

let modelo; // Declare the modelo variable

function render() {
  renderer.render(scene, camera);
}

new RGBELoader()
  .setPath('/model/')
  .load('fireplace_2k.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    render();
  });

const loader = new GLTFLoader(loadingManager);

loader.load('../model/maculanogirar.glb', function (gltf) {
  scene.add(gltf.scene);
  modelo = gltf.scene; // Assign the gltf.scene to the modelo variable
}, undefined, function (error) {
  console.error(error);
});

document.body.onresize = function () {
  //console log con width y height
  //console.log(document.getElementById('canvaspremio').offsetHeight, document.getElementById('canvaspremio').offsetHeight);

  camera.aspect = document.getElementById('canvaspremio').offsetWidth / document.getElementById('canvaspremio').offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(document.getElementById('canvaspremio').offsetWidth, document.getElementById('canvaspremio').offsetHeight);
};

function animate() {
  requestAnimationFrame( animate );

  // Esto hará que el modelo gire constantemente en su eje Y.
  if (modelo && modelo.rotation) {
    // Esto hará que el modelo gire constantemente en su eje Y.
    modelo.rotation.y += 0.005;
  }

  render();
}

animate();

}, []);

return (
  <Fragment/>
);
}

// Export PremioCanvas con un solo elemento <canvas>
export default PremioCanvas;