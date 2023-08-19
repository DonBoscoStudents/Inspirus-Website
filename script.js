import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FilmPass } from'three/examples/jsm/postprocessing/FilmPass.js'
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass'


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

const AmbientLight = new THREE.AmbientLight("#bbd1fa", .1);
scene.add(AmbientLight);

const Directional = new THREE.PointLight(0xffffff, 10);

Directional.position.set(2, 1, -10);
scene.add(Directional);



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





const Bloom =new UnrealBloomPass(new THREE.Vector2(0,0),.6,1, 0)
composer.addPass(Bloom)

const filmPass =new FilmPass(10,.2, 1000,false)
composer.addPass( filmPass );

const outputPass = new OutputPass();
composer.addPass( outputPass );

renderer.toneMapping=THREE.CineonToneMapping;
renderer.toneMappingExposure=1



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
