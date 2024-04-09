import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/Addons.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

import carga from './carga.js';
window.onload = carga();

//const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const pmremGenerator = new THREE.PMREMGenerator( renderer );

/*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/
const controls = new OrbitControls( camera, renderer.domElement );
scene.environment = pmremGenerator.fromScene( new RoomEnvironment( renderer ), 0.04 ).texture;

camera.position.z = 5;

function render() {

  renderer.render( scene, camera );

}


new RGBELoader()
  .setPath( 'textures/equirectangular/' )
  .load( '../model/fireplace_2k.hdr', function ( texture ) {

    texture.mapping = THREE.EquirectangularReflectionMapping;

    scene.background = texture;
    scene.environment = texture;

    render();

    // model

    const loader = new GLTFLoader().setPath( 'models/gltf/DamagedHelmet/glTF/' );
    loader.load( 'DamagedHelmet.gltf', async function ( gltf ) {

      const model = gltf.scene;

      // wait until the model can be added to the scene without blocking due to shader compilation

      await renderer.compileAsync( model, camera, scene );

      scene.add( model );

      render();

    } );

  } );

const loader = new GLTFLoader();

loader.load( '../model/maculanogirar.glb', function ( gltf ) {
  scene.add( gltf.scene );
}, undefined, function ( error ) {
  console.error( error );
});

window.onresize = function () {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

};


function animate() {
	requestAnimationFrame( animate );

  //const delta = clock.getDelta();
	//mixer.update( delta );
  controls.update();

	renderer.render( scene, camera );
}

animate();

// Export PremioCanvas con un solo elemento <canvas>
export default function PremioCanvas() {
  return ;
}