import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import { RoomEnvironment } from 'three/examples/jsm/Addons.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

import carga from './carga.js';
window.onload = carga();

//const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 8, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/
//const controls = new OrbitControls( camera, renderer.domElement );

camera.position.x = 0;
camera.position.z = 5;
camera.position.y = 0.14;

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

const loader = new GLTFLoader();

loader.load('../model/maculanogirar.glb', function (gltf) {
  scene.add(gltf.scene);
  modelo = gltf.scene; // Assign the gltf.scene to the modelo variable
  console.log(modelo);
}, undefined, function (error) {
  console.error(error);
});

window.onresize = function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

console.log(modelo);

function animate() {
  requestAnimationFrame( animate );

  // Esto hará que el modelo gire constantemente en su eje Y.
  modelo.rotation.y += 0.01;

  render();
}

animate();

// Export PremioCanvas con un solo elemento <canvas>
export default function PremioCanvas() {
  return ;
}