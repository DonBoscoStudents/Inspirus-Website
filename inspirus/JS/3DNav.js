import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

const SceneDOM = document.getElementById("Scene");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  SceneDOM.clientWidth / SceneDOM.clientHeight,
  0.1,
  1000
);

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const vertex = new THREE.Vector3();
const color = new THREE.Color();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(SceneDOM.clientWidth, SceneDOM.clientHeight);
document.getElementById("Scene").appendChild(renderer.domElement);

camera.position.z = 2;

const light = new THREE.AmbientLight(0xffffff, 3);
scene.add(light);

const Loader = new GLTFLoader();
Loader.load("/Models/DBCE_3F_COMP.gltf", function (gltf) {
  scene.add(gltf.scene);
});

const loadingManager = new THREE.LoadingManager();

const progressBar = document.getElementById("progressBar");

loadingManager.onProgress = function (url, loaded, total) {
  progressBar.style.width = (loaded / total) * 100;
};

const controls = new PointerLockControls(camera, document.body);
SceneDOM.addEventListener("click", function () {
  controls.lock();
});

const onKeyDown = function (event) {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      moveForward = true;
      break;

    case "ArrowLeft":
    case "KeyA":
      moveLeft = true;
      break;

    case "ArrowDown":
    case "KeyS":
      moveBackward = true;
      break;

    case "ArrowRight":
    case "KeyD":
      moveRight = true;
      break;

    case "Space":
      if (canJump === true) velocity.y += 350;
      canJump = false;
      break;
  }
};

const onKeyUp = function (event) {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      moveForward = false;
      break;

    case "ArrowLeft":
    case "KeyA":
      moveLeft = false;
      break;

    case "ArrowDown":
    case "KeyS":
      moveBackward = false;
      break;

    case "ArrowRight":
    case "KeyD":
      moveRight = false;
      break;
  }
};

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // cube.rotateY(.01)
  // cube.rotateX(.01)
  if (controls.isLocked === true) {
    const delta = (time - prevTime) / 1000;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize(); // this ensures consistent movements in all directions

    if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

    controls.moveRight(-velocity.x * delta);
    controls.moveForward(-velocity.z * delta);

    controls.getObject().position.y += velocity.y * delta; // new behavior
  }
}
animate();
