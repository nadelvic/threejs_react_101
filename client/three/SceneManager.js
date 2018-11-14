import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import Stats from 'stats-js';
import RendererStats from  'three-webgl-stats';
import SceneSubject from './scenes/SceneSubjects';
import GeneralLights from './scenes/GeneralLights';
import CameraManager from './CameraManager';


/**
 * SceneManager is the object responsible for the threejs logic.
 * 
 */
export default canvas => {

  

const canvasBehaviour = {
  pointerCamera : false,
  previousPointerCamera: false
}

const screenDimensions = {
    width: canvas.width,
    height: canvas.height
}

const mousePosition = {
    x: 0,
    y: 0
}

const clock = new THREE.Clock();
const scene = buildScene(); 
const renderer = buildRender(screenDimensions);
const camera = buildCamera(screenDimensions); 
const sceneSubjects = createSceneSubjects(scene);
const cameraManager = createCameraManager(camera);
const rendererStats  = new RendererStats();
const stats = new Stats();
rendererStats.domElement.style.position   = 'absolute';
rendererStats.domElement.style.left  = '0px';
rendererStats.domElement.style.bottom    = '0px';
stats.domElement.style.position   = 'absolute';
stats.domElement.style.right  = '0px';
stats.domElement.style.top   = '0px';
document.body.appendChild( rendererStats.domElement );
document.body.appendChild( stats.domElement );
const mouse = new THREE.Vector2();
//const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);



function buildScene() { 
  const scene = new THREE.Scene(); 
  return scene;
  }
function buildRender({ width, height }) { 
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
      const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
      renderer.setPixelRatio(DPR);
      renderer.setSize(width, height);
      

      renderer.gammaInput = true;
      renderer.gammaOutput = true; 

      return renderer;
}

function buildCamera({ width, height }) {
      const fieldOfView = 45;
      const aspectRatio = width / height;
      const nearPlane = 0.1;
      const farPlane = 1000;
      const camera = new THREE.PerspectiveCamera(fieldOfView,aspectRatio,nearPlane,farPlane);

      return camera;
  }
function createSceneSubjects(scene) { 
  const sceneSubjects = [
      new GeneralLights(scene),
      new SceneSubject(scene)
  ];

  return sceneSubjects;
}

function createCameraManager(camera){
  return new CameraManager(camera);
}

function update() {
  stats.begin();
  const elapsedTime = clock.getElapsedTime();
  cameraManager.update(elapsedTime);
  for(let i=0; i<sceneSubjects.length; i++) sceneSubjects[i].update(elapsedTime);
  cameraManager.pointerEffect(mouse);
  
  rendererStats.update(renderer);
  renderer.render(scene, camera); 
  stats.end();
}

function onWindowResize() { 
  const { width, height } = canvas;
  screenDimensions.width = width;
  screenDimensions.height = height;
  camera.aspect = canvas.width / canvas.height;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.width, canvas.height);
}
function enterCanvas(){
  canvasBehaviour.pointerCamera = true;
}

function leaveCanvas(){
  canvasBehaviour.pointerCamera = false;
}



function mouseMoveOnCanvas(event,canvas){
  const rect = canvas.getBoundingClientRect();
  
  event.preventDefault();
  const clientY = event.clientY - rect.top;
  const clientX = event.clientX - rect.left;
  mouse.x = (clientX / canvas.clientWidth) * 2 - 1;
  //mouse.x = (clientX / window.innerWidth)*2 - 1;
  //mouse.y = -(clientY / window.innerHeight)*2 - 1;
  mouse.y = (clientY / canvas.clientHeight)*2 - 1;
  //console.log(mouse.x+'|'+mouse.y);


  return mouse;
}

function clickAction(){
  cameraManager.clickMovement();
  

}
  /** 
   *  function onClick() {}
  */
  return {
    update,
    onWindowResize,
    enterCanvas,
    leaveCanvas,
    mouseMoveOnCanvas,
    clickAction
  }
}