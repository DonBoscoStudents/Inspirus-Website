import * as THREE from 'three'

import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { TransformControls } from 'three/addons/controls/TransformControls.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(32,window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const cameraStill = new THREE.PerspectiveCamera(32,window.innerWidth / window.innerHeight, 0.1, 1000);
cameraStill.position.z = 5;
const CamHelper = new THREE.CameraHelper(cameraStill)
scene.add(CamHelper)
const renderer =new THREE.WebGLRenderer();

const renderer2 =new THREE.WebGLRenderer();
renderer2.setSize(window.innerWidth/4, window.innerHeight/4);
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('Graphic').appendChild(renderer.domElement)
document.getElementById('MainCamera').appendChild(renderer2.domElement)

const AmbientLight=new THREE.AmbientLight('#bbd1fa',1)
scene.add(AmbientLight)


const Directional = new THREE.DirectionalLight(0xffffff,20)

Directional.position.set(-8,-3.6,-2)

const DHelper= new THREE.DirectionalLightHelper(Directional)
scene.add(Directional,DHelper)
const TrControls = new TransformControls(camera,renderer.domElement)
TrControls.attach(Directional)
scene.add(TrControls)

window.addEventListener('keydown',(event)=>{
    switch (event.code) {
        case 'KeyG':
            TrControls.setMode('translate')
            break
        case 'KeyR':
            TrControls.setMode('rotate')
            break
        case 'KeyS':
            TrControls.setMode('scale')
            break
    }
})




const gltfLoader = new GLTFLoader();
let car;
gltfLoader.load('./assets/3D models/moon.gltf',(gltfScene)=>{
    car=gltfScene;
    gltfScene.scene.position.set(3.8,-3.6,-3)
    gltfScene.scene.scale.set(3.6,3.6,3.6)
    Directional.target=gltfScene.scene
    scene.add(gltfScene.scene)
})

    camera.position.set(2.6,42.6,5.7)
    camera.rotation.set(-1.4,0.06,0.4)

function animate() {
    if(car){
        car.scene.rotation.y+=.002
    }
    // controls.update();

    // console.log(camera.position,camera.rotation)
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	renderer2.render( scene, cameraStill );
}
// localStorage.setItem({'LastPos':camera.position})
animate();