import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";


let i=0
let SunIntensity=0


let SceneWidth =document.getElementById('Scene').clientWidth
let SceneHeight =document.getElementById('Scene').clientHeight
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 32, window.innerWidth / SceneHeight, 0.1, 100000 );

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth,SceneHeight );
document.getElementById('Scene').appendChild( renderer.domElement );

const PlanetDiffuse= new THREE.TextureLoader().load('public/Textures/8d12c1eb21eb70291bb884ae4f8984dc.png')
const sunMap= new THREE.TextureLoader().load('public/Textures/2k_sun.jpg')


const geometry = new THREE.SphereGeometry( 8, 512, 512 );
const material = new THREE.MeshPhysicalMaterial({map:PlanetDiffuse,displacementMap:PlanetDiffuse,displacementScale:.15});

const sun = new THREE.MeshPhysicalMaterial({map:sunMap,emissiveMap:sunMap,emissiveIntensity:1,emissive:0xffffff});
const planet = new THREE.Mesh( geometry, material );

planet.position.set(10,3,-35)
scene.add( planet );


setResponsiveMaterial()
document.getElementById('ColorModeICON').addEventListener('click',setResponsiveMaterial)

function setResponsiveMaterial(){
  if(localStorage.getItem('color-scheme')=='light'){
    SunIntensity=0
    // planet.material.emissiveIntensity=1
    planet.material=sun;
    document.getElementById('Scene').style.mixBlendMode='screen'
  }else{
    planet.material=material;
    document.getElementById('Scene').style.mixBlendMode='normal'
  }
}


const light = new THREE.PointLight(0xFFFFFF, 10000000)
light.decay=3.8
light.position.set(-100,60,-100)

scene.add(light)

const Ambient = new THREE.AmbientLight(0x020d2d, 1)
scene.add(Ambient)
camera.position.z = 5;


const renderScene = new RenderPass( scene, camera );


const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
				bloomPass.threshold = 1;
				bloomPass.strength = .3;
				bloomPass.radius = 2;

				const outputPass = new OutputPass();

				const composer = new EffectComposer( renderer );
				composer.addPass( renderScene );
				composer.addPass( bloomPass );
				composer.addPass( outputPass );








onWindowResize()
// Function to handle window resize
function onWindowResize() {
    const newWidth = window.innerWidth;
    const newHeight = document.getElementById('Scene').clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  }
  

  window.addEventListener('resize', onWindowResize);



function Ease(x,w){
  return(1/(1+Math.exp((-x/w)+(2*w))))
}


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

controls.enableZoom = false;

// controls.minDistance = 30;
// controls.maxDistance = 30;
controls.target.set(10,3,-35);
controls.update();

function animate() {
    requestAnimationFrame( animate );
    i+=.0005
    SunIntensity+=.091
    // planet.setRotationFromAxisAngle(new THREE.Vector3(.5,1,0),i)
    
    if(localStorage.getItem('color-scheme')=='light'){
      planet.material.emissiveIntensity=Ease(SunIntensity,2)*2
      composer.render();
    }else{
      renderer.render( scene, camera );
    }
    controls.update();
}
animate();