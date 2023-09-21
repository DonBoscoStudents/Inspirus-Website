import * as THREE from "three";

import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let camera, scene, renderer, controls;

const objects = [];

let raycaster;

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

const loadingManager = new THREE.LoadingManager();

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const vertex = new THREE.Vector3();
const color = new THREE.Color();

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );

  const armGeo =new THREE.BoxGeometry(1.2,1.2,7)
  const armMaterial=new THREE.MeshPhysicalMaterial({roughness:0.2,metalness:1})
  const arm = new THREE.Mesh(armGeo,armMaterial)

  arm.position.set(2,-3.2,-2)
  arm.rotation.set(1,3.5,0)
  camera.add(arm)
    console.log(arm)
  camera.position.y = 10;

  scene = new THREE.Scene();
  const texture = new THREE.TextureLoader(loadingManager).load(
	"/Public/Texture/hilly_terrain_01_puresky_4k.jpg",
	() => {
	  texture.mapping = THREE.EquirectangularReflectionMapping;
	  texture.colorSpace = THREE.SRGBColorSpace;
	  scene.background = texture;
    armMaterial.envMap=texture;
	}
  );

 const armTexture =new THREE.TextureLoader(loadingManager).load(
	"/Public/Texture/Arm.png",
	() => {

	  texture.colorSpace = THREE.SRGBColorSpace;

    armMaterial.map=armTexture;
	}
  );

 const armNoiseTexture =new THREE.TextureLoader(loadingManager).load(
	"/Public/Texture/Noise.jpg",
	() => {

	  texture.colorSpace = THREE.SRGBColorSpace;

    armMaterial.roughnessMap=armNoiseTexture;
	}
  );
  scene.fog = new THREE.Fog(0xffffff, 0, 750);

  const light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 2.5);
  light.position.set(0.5, 1, 0.75);
  scene.add(light);

  controls = new PointerLockControls(camera, document.body);

  const SceneDOM = document.getElementById("GameScene");

  SceneDOM.addEventListener("click", function () {
    controls.lock();
  });

  controls.addEventListener("lock", function () {
	SceneDOM.classList.add("LockedScene");
    // SceneDOM.style.display = 'none';
    // blocker.style.display = 'none';
  });

  controls.addEventListener("unlock", function () {
	SceneDOM.classList.remove("LockedScene");

    // blocker.style.display = 'block';
    // SceneDOM.style.display = '';
  });

  scene.add(controls.getObject());

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

  raycaster = new THREE.Raycaster(
    new THREE.Vector3(),
    new THREE.Vector3(0, -1, 0),
    0,
    10
  );


  var Loader = new GLTFLoader(loadingManager);
  Loader.load("/Public/Models/Floor2V1_cLEAN.gltf", function (gltf) {
    scene.add(gltf.scene);
	gltf.scene.scale.set(12,12,12)
	for(const object in gltf.scene.children[0].children){
    const Mesh=gltf.scene.children[0].children[object]

		objects.push(Mesh)

	}
	// objects.push(gltf.scene.children)
	
    // College = gltf.scene;
  });

  //

  
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

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("Scene").appendChild(renderer.domElement);
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  const time = performance.now();

  if (controls.isLocked === true) {
    raycaster.ray.origin.copy(controls.getObject().position);
    raycaster.ray.origin.y -= 10;

    const intersections = raycaster.intersectObjects(objects, false);
    // console.log(intersections)
    const onObject = intersections.length > 0;

    const delta = (time - prevTime) / 1000;
	const speed=3
    velocity.x -= velocity.x * speed * delta;
    velocity.z -= velocity.z * speed * delta;

    velocity.y -= 9.8 * 200.0 * delta; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize(); // this ensures consistent movements in all directions

    if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

    if (onObject === true) {
      velocity.y = Math.max(0, velocity.y);
      canJump = true;
    }

    controls.moveRight(-velocity.x * delta);
    controls.moveForward(-velocity.z * delta);

    controls.getObject().position.y += velocity.y * delta; // new behavior

    if (controls.getObject().position.y < 10) {
      velocity.y = 0;
      controls.getObject().position.y = 10;

      canJump = true;
    }
  }

  prevTime = time;

  renderer.render(scene, camera);
}
