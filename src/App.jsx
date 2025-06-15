import * as THREE from 'three';

//steps
//1. create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0')

//2. set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.z = 5;

//3. add object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'})
const cube = new THREE.Mesh(geometry, material);

//4. Add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

//5. set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//6. Animate the scene
renderer.render(scene, camera);


export default App
