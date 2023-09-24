import * as THREE from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { BloomPass } from "three/addons/postprocessing/BloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { Octree } from "three/addons/math/Octree.js";
import { OctreeHelper } from "three/addons/helpers/OctreeHelper.js";

import { Capsule } from "three/addons/math/Capsule.js";
import Footsteps from '/public/audio/Minecraft Footsteps .mp3'


const clock = new THREE.Clock();
const loadingManager = new THREE.LoadingManager();
const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x88ccee );
// scene.fog = new THREE.Fog( 0x88ccee, 0, 50 );

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.rotation.order = "YXZ";
camera.rotation.set(0,Math.PI,0);

const fillLight1 = new THREE.HemisphereLight(0x8dc1de, 0xffffff, 1.5);
fillLight1.position.set(2, 1, 1);
scene.add(fillLight1);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(-5, 25, -1);
directionalLight.castShadow = true;
directionalLight.shadow.camera.near = 0.01;
directionalLight.shadow.camera.far = 500;
directionalLight.shadow.camera.right = 30;
directionalLight.shadow.camera.left = -30;
directionalLight.shadow.camera.top = 30;
directionalLight.shadow.camera.bottom = -30;
directionalLight.shadow.mapSize.width = 4096;
directionalLight.shadow.mapSize.height = 4096;
directionalLight.shadow.radius = 5;
directionalLight.shadow.bias = -0.00006;
scene.add(directionalLight);

const listener = new THREE.AudioListener();
camera.add( listener );
const sound = new THREE.Audio( listener );

const audioLoader = new THREE.AudioLoader(loadingManager);
audioLoader.load( '/public/audio/Minecraft Footsteps .mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0 );
	sound.play();
});


const MiceOnVenus = new THREE.Audio( listener );
const MiceOnVenusLoader = new THREE.AudioLoader(loadingManager);
MiceOnVenusLoader.load( '/public/audio/Mice On Venus  YouTube.mp3', function( buffer ) {
    MiceOnVenus.setBuffer( buffer );
    MiceOnVenus.setVolume( .1 );

  });
  
  
  const C418FarMinecraft = new THREE.Audio( listener );
  const C418FarMinecraftLoader = new THREE.AudioLoader(loadingManager);
  C418FarMinecraftLoader.load( '/public/audio/C418  Far Minecraft Volume Beta  YouTube.mp3', function( buffer ) {
    C418FarMinecraft.setBuffer( buffer );
    C418FarMinecraft.setVolume( .1 );
  });


  const PigStep = new THREE.Audio( listener );
  const PigStepLoader = new THREE.AudioLoader(loadingManager);
  PigStepLoader.load( '/public/audio/Pigstep Stereo Mix  YouTube.mp3', function( buffer ) {
    PigStep.setBuffer( buffer );
    PigStep.setVolume( .1 );
  });


  MiceOnVenus.onEnded=()=>{
    MiceOnVenus.stop()
    C418FarMinecraft.play()
  };
  C418FarMinecraft.onEnded=()=>{
    C418FarMinecraft.stop()
    PigStep.play()
  };
  PigStep.onEnded=()=>{ 
    PigStep.stop()
    MiceOnVenus.play()
  }


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

const container = document.getElementById("GameScene");

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
// renderer.shadowMapType = THREE.PCFSoftShadowMap; 
renderer.toneMapping = THREE.ACESFilmicToneMapping;
container.appendChild(renderer.domElement);

const GRAVITY = 30;

const STEPS_PER_FRAME = 5;

const worldOctree = new Octree();

const playerCollider = new Capsule(
  new THREE.Vector3(0, 0.35, 0),
  new THREE.Vector3(0, 1, 0),
  .55
);

const playerVelocity = new THREE.Vector3();
const playerDirection = new THREE.Vector3();

let playerOnFloor = false;
let mouseTime = 0;

const keyStates = {};

const vector1 = new THREE.Vector3();
const vector2 = new THREE.Vector3();
const vector3 = new THREE.Vector3();

document.addEventListener("keydown", (event) => {
  keyStates[event.code] = true;
});

document.addEventListener("keyup", (event) => {
  keyStates[event.code] = false;
});

container.addEventListener("mousedown", () => {
  document.body.requestPointerLock();
  MiceOnVenus.play();
  document.getElementById("GameScene").classList.add("LockedScene");

  mouseTime = performance.now();
});

// document.addEventListener( 'mouseup', () => {

// 		if ( document.pointerLockElement == null ) {
// 			document.getElementById('Scene').classList.remove("LockedScene");
// 		};

// 	} );

document.body.addEventListener("mousemove", (event) => {
  if (document.pointerLockElement === document.body) {
    camera.rotation.y -= event.movementX / 500;
    camera.rotation.x -= event.movementY / 500;
  }
});

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function playerCollisions() {
  const result = worldOctree.capsuleIntersect(playerCollider);

  playerOnFloor = false;

  if (result) {
    playerOnFloor = result.normal.y > 0;

    if (!playerOnFloor) {
      playerVelocity.addScaledVector(
        result.normal,
        -result.normal.dot(playerVelocity)
      );
    }

    playerCollider.translate(result.normal.multiplyScalar(result.depth));
  }
}

function updatePlayer(deltaTime) {
  let damping = Math.exp(-4 * deltaTime) - 1;

  if (!playerOnFloor) {
    playerVelocity.y -= GRAVITY * deltaTime;

    // small air resistance
    damping *= 0.1;
  }

  playerVelocity.addScaledVector(playerVelocity, damping);

  const deltaPosition = playerVelocity.clone().multiplyScalar(deltaTime);
  playerCollider.translate(deltaPosition);

  playerCollisions();


camera.position.copy(playerCollider.end);

}

function getForwardVector() {
  camera.getWorldDirection(playerDirection);
  playerDirection.y = 0;
  playerDirection.normalize();

  return playerDirection;
}

function getSideVector() {
  camera.getWorldDirection(playerDirection);
  playerDirection.y = 0;
  playerDirection.normalize();
  playerDirection.cross(camera.up);

  return playerDirection;
}



function controls(deltaTime) {
  // gives a bit of air control
  const speedDelta = deltaTime * (playerOnFloor ? 25 : 8);

  if (keyStates["KeyW"]) {
    playerVelocity.add(getForwardVector().multiplyScalar(speedDelta));
	
  
}

  if (keyStates["KeyS"]) {
    playerVelocity.add(getForwardVector().multiplyScalar(-speedDelta));
  }

  if (keyStates["KeyA"]) {
    playerVelocity.add(getSideVector().multiplyScalar(-speedDelta));
  }

  if (keyStates["KeyD"]) {
    playerVelocity.add(getSideVector().multiplyScalar(speedDelta));
  }

  if (playerOnFloor) {
    if (keyStates["Space"]) {
      playerVelocity.y = 8;
    }
  }

  if((keyStates["KeyW"]||keyStates["KeyA"]||keyStates["KeyS"]||keyStates["KeyD"])&&(playerOnFloor)){
    sound.setVolume(.1)
    
  }else{

      sound.setVolume(0)
    
  }


}

const DefaultMaterial= new THREE.MeshPhysicalMaterial({color:0xfafaff})

const loader = new GLTFLoader(loadingManager).setPath("/Public/Models/");
const Dloader = new DRACOLoader();
Dloader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
Dloader.setDecoderConfig({type:'js'})

loader.setDRACOLoader(Dloader)
loader.load("Main.gltf", (gltf) => {
  scene.add(gltf.scene);

  worldOctree.fromGraphNode(gltf.scene);

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      // if(child.material.color.r+child.material.color.g+child.material.color.b==3&&child.map==null){
      //   // child.material=DefaultMaterial
        
      // }
      if (child.material.map) {
        // child.material.map.anisotropy = 4;
        const texture = new THREE.TextureLoader(loadingManager).load(
          "/Public/Texture/hilly_terrain_01_puresky_4k.jpg",
          () => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.colorSpace = THREE.SRGBColorSpace;
            scene.background = texture;
            child.material.envMap = texture;
      
          }
        );
      }
    }
  });

  const helper = new OctreeHelper(worldOctree);
  helper.visible = false;
  scene.add(helper);

  animate();
});

function teleportPlayerIfOob() {
  if (camera.position.y <= -25) {
    playerCollider.start.set(0, 0.35, 0);
    playerCollider.end.set(0, 1, 0);
    playerCollider.radius = 0.35;
    camera.position.copy(playerCollider.end);
    camera.rotation.set(0, 0, 0);
  }
}

const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,
  0.7,
  1.5
);


// resolution, strength, radius, threshold 


const outputPass = new OutputPass();

const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);
// composer.addPass(bloom);
composer.addPass(outputPass);
// function updateStats(){
//   let XVal=camera.position['x'].toPrecision(2)
//   let YVal=camera.position['y'].toPrecision(2)
//   let ZVal=camera.position['z'].toPrecision(2)

// document.getElementById("STATS").innerHTML=statsValue
// }
function animate() {
  const deltaTime = Math.min(0.05, clock.getDelta()) / STEPS_PER_FRAME;

  // we look for collisions in substeps to mitigate the risk of
  // an object traversing another too quickly for detection.

  for (let i = 0; i < STEPS_PER_FRAME; i++) {
    controls(deltaTime);

    updatePlayer(deltaTime);
    // updateStats();

    teleportPlayerIfOob();
  }
  composer.render();
//   renderer.render(scene, camera);

  requestAnimationFrame(animate);
}
