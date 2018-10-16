import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import SceneManager from './SceneManager';
import TweenMax from 'gsap/TweenMax';
import TweenLite from 'gsap/TweenLite';
import ThreeContainer from '../components/ThreeContainer';


export default camera => {

    const mouse = new THREE.Vector2();

    const angle = 1 / 4 * Math.PI;
    const dist = 32;
    const initialPosition = {
        x : 0,
        y : 0,
        z : 32
    }
  

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set(initialPosition.x,initialPosition.y,initialPosition.z);
    camera.lookAt(new THREE.Vector3(0,0,0));
    //controls.target.set(0, 0, 0);
    //controls.update();


    function update(time){
        //update1(time);
    
    }

    function clickMovement(){}


    function pointerEffect(mouse){

        const inertia = 0.05;
        const phi0 = Math.PI / 2;
        const phiRange = Math.PI * 5/ 180;
        const phi = phi0 + mouse.y* phiRange;

        const theta0 = Math.PI / 4;
        const thetaRange =  Math.PI * 10 / 180;
        const theta = theta0 + mouse.x * thetaRange; 
        const r = 32;
        const x = r * Math.cos(theta)*Math.sin(phi);   
        const y = r * Math.cos(phi)
        const z = r * Math.sin(phi)*Math.sin(theta);
        


        camera.position.x += ( x - camera.position.x ) * inertia;
        camera.position.y += ( - y - camera.position.y ) * inertia;
        camera.position.z += ( z - camera.position.z ) * inertia;
        camera.lookAt(new THREE.Vector3(0,0,0));

    }



    function update1(time){
        const angle = 1 / 4  * time;
        const dist = 30;
        camera.position.set(dist * Math.sin(angle),10,dist * Math.cos(angle));
        controls.target.set(0, 0, 0);
        controls.update();

    }

    return {
        update,
        pointerEffect,
        clickMovement
    }
}