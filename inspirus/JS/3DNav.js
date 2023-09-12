import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { EXRLoader } from "three/addons/loaders/EXRLoader.js";

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const SceneDOM = document.getElementById("Scene");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  SceneDOM.clientWidth / SceneDOM.clientHeight,
  0.1,
  1000
);

// scene.environment=environmentMap

const renderer = new THREE.WebGLRenderer();
renderer.setSize(SceneDOM.clientWidth, SceneDOM.clientHeight);
document.getElementById("Scene").appendChild(renderer.domElement);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
function resizeScene() {
  camera.aspect = SceneDOM.clientWidth / SceneDOM.clientHeight;
  camera.updateProjectionMatrix();
  // update renderer
  renderer.setSize(SceneDOM.clientWidth, SceneDOM.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);
}
window.addEventListener("resize", resizeScene);

camera.position.z = 2;

const light = new THREE.AmbientLight(0xffffff, 3);
scene.add(light);

const loadingManager = new THREE.LoadingManager();
let College;
var Loader = new GLTFLoader(loadingManager);
Loader.load("/Public/Models/DBCE_3F_COMP2.gltf", function (gltf) {
  scene.add(gltf.scene);
  College = gltf.scene;
});

const texture = new THREE.TextureLoader(loadingManager).load(
  "/Public/Texture/hilly_terrain_01_puresky_4k.jpg",
  () => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    scene.background = texture;
  }
);

const progressBar = document.getElementById("progressBar");
const ItemLoadingText = document.getElementById("ItemLoading");

loadingManager.onProgress = function (item, loaded, total) {
  progressBar.style.width = (loaded / total) * 100 + "%";
  ItemLoadingText.innerText = String(item);
  if (loaded / total == 1) {
    setTimeout(() => {
      document.getElementById("ProgressContainer").style.opacity = 0;
    }, 500);
  }
};

const controls = new PointerLockControls(camera, document.body);
SceneDOM.onclick = () => {
  controls.lock();
};

scene.add( controls.getObject() );


const onKeyDown = function (event) {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      // controls.moveForward(1)
      moveForward = true;
      break;

    case "ArrowLeft":
    case "KeyA":
      // controls.moveRight(-1)

      moveLeft = true;
      break;

    case "ArrowDown":
    case "KeyS":
      // controls.moveForward(-1)

      moveBackward = true;
      break;

    case "ArrowRight":
    case "KeyD":
      // controls.moveRight(1)

      moveRight = true;
      break;

    case "Space":
      if (canJump === true) velocity.y += 350;
      canJump = false;
      break;
  }
};

const onKeyUp = function ( event ) {

  switch ( event.code ) {

    case 'ArrowUp':
    case 'KeyW':
      moveForward = false;
      break;

    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = false;
      break;

    case 'ArrowDown':
    case 'KeyS':
      moveBackward = false;
      break;

    case 'ArrowRight':
    case 'KeyD':
      moveRight = false;
      break;

  }

};

document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );


controls.addEventListener("lock", function () {
  SceneDOM.classList.add("LockedScene");

  //Resize Scene
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  // update renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);
});

controls.addEventListener("unlock", function () {
  SceneDOM.classList.remove("LockedScene");

  // menu.style.display = 'block';
});



function animate() {
  requestAnimationFrame(animate);
  const time = performance.now();
  if ( controls.isLocked === true ) {
  const delta = (time - prevTime)/1000;


  velocity.x -= velocity.x * 1.0 * delta;
  velocity.z -= velocity.z * 1.0 * delta;

  velocity.y -= 9.8 * 0* delta; // 100.0 = mass

  direction.z = Number(moveForward) - Number(moveBackward);
  direction.x = Number(moveRight) - Number(moveLeft);
  direction.normalize();

  if (moveForward || moveBackward) velocity.z -= direction.z * 100 * delta;
  if (moveLeft || moveRight) velocity.x -= direction.x * 100.0 * delta;

  controls.moveRight(-velocity.x * delta);
  controls.moveForward(-velocity.z * delta);
  controls.getObject().position.y += ( velocity.y * delta );
  }
  prevTime = time;
  renderer.render(scene, camera);
}
animate();
