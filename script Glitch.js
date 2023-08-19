import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  32,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("Graphic").appendChild(renderer.domElement);

const AmbientLight = new THREE.AmbientLight("#bbd1fa", 1);
scene.add(AmbientLight);

const Directional = new THREE.DirectionalLight(0xffffff, 20);

Directional.position.set(-8, -3.6, -2);

const gltfLoader = new GLTFLoader();
let moon;
gltfLoader.load("./assets/3D models/moon.gltf", (gltfScene) => {
  moon = gltfScene;
  gltfScene.scene.position.set(3.8, -3.6, -3);
  gltfScene.scene.scale.set(3.6, 3.6, 3.6);
  Directional.target = gltfScene.scene;
  scene.add(gltfScene.scene);
});

window.addEventListener('resize',()=>{
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
})


const composer = new EffectComposer( renderer )
const renderPass = new RenderPass( scene, camera );
composer.addPass( renderPass );

const glitchPass = new GlitchPass();
// glitchPass.goWild=true
composer.addPass( glitchPass );

const outputPass = new OutputPass();
composer.addPass( outputPass );


function animate() {
  if (moon) {
    moon.scene.rotation.y += 0.002;
  }

  requestAnimationFrame(animate);
  composer.render();
}

function render() {
    renderer.render(scene, camera)
}
animate();
