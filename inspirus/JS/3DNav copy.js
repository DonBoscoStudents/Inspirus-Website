import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const SceneDOM = document.getElementById("Scene");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  SceneDOM.clientWidth / SceneDOM.clientHeight,
  0.1,
  1000
);



const renderer = new THREE.WebGLRenderer();
renderer.setSize(SceneDOM.clientWidth, SceneDOM.clientHeight);
document.getElementById("Scene").appendChild(renderer.domElement);

camera.position.z = 2;

const light = new THREE.AmbientLight(0xffffff, 3);
scene.add(light);

const loadingManager = new THREE.LoadingManager();

var Loader = new GLTFLoader(loadingManager);
Loader.load("/Models/DBCE_3F_COMP.gltf", function (gltf) {
  scene.add(gltf.scene);
});


const progressBar = document.getElementById("progressBar");
const ItemLoadingText = document.getElementById('ItemLoading');

loadingManager.onProgress = function (item, loaded, total) {
  progressBar.style.width = (loaded / total) * 100 +'%';
  ItemLoadingText.innerText=String(item)
  if(loaded / total==1){
    setTimeout(()=>{
      document.getElementById('ProgressContainer').style.opacity=0 

    },500)
  }
};



function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  
}
animate();
