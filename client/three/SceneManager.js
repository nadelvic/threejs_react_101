import * as THREE from 'three';
import {OrbitControls} from 'three-orbitcontrols';
import SceneSubject from './scenes/SceneSubjects';
import GeneralLights from './scenes/GeneralLights';
import CameraManager from './CameraManager';
/**
 * SceneManager is the object responsible for the threejs logic.
 * 
 */



export default canvas => {


const origin = new THREE.Vector3(0,0,0);

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
  //const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);

  

  function buildScene() { 
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000");
    
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
    const elapsedTime = clock.getElapsedTime();
    cameraManager.update(elapsedTime);
    
    for(let i=0; i<sceneSubjects.length; i++) sceneSubjects[i].update(elapsedTime);
    renderer.render(scene, camera);
  }
  function onWindowResize() { 
    const { width, height } = canvas;
    screenDimensions.width = width;
    screenDimensions.height = height;
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.width, canvas.height);
  }
  /** 
   *  function onClick() {}
  */
  return {
    update,
    onWindowResize
  }
}