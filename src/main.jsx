import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const canvas = document.getElementById('canvas')

//create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//add camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//add object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({color: '#468585'});
const DodecahedronGeometry = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshBasicMaterial({color: '#468585'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(DodecahedronGeometry);
scene.add(box);

//light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

//renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); //for mobile devices
renderer.render(scene, camera);

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = true;
controls.enableZoom = true;

//add animations 
function animate(){
  requestAnimationFrame(animate);

  DodecahedronGeometry.rotation.x += 0.01;
  DodecahedronGeometry.rotation.y += 0.01;

  box.rotation.y += 0.005;

  controls.update();

  renderer.render(scene, camera);
}

animate();