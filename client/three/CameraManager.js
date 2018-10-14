import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import SceneManager from './SceneManager';


export default camera => {

    const controls = new THREE.OrbitControls(camera);
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enablePan = false;

    const mouse = new THREE.Vector2();

    const angle = 1 / 4 * Math.PI;
    const dist = 32;

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set(dist*Math.cos(angle), 1,dist*Math.sin(angle));
    controls.target.set(0, 0, 0);
    controls.update();

    function update(time){
        //update1(time);
    
    }

    function pointerEffect(time,mouse){
        const angle =  (1/4 - Math.atan(mouse.x) / (6 * Math.PI)) * Math.PI;
        const dist = 32;
        const y = 1 - 2.4*Math.atan(mouse.y);
        camera.position.set(dist * Math.sin(angle),y,dist * Math.cos(angle));
        controls.update();
        
        

    }

   

    function update1(time){
        const angle = 1 / 4  * time;
        const dist = 10;
        camera.position.set(dist * Math.sin(angle),0,dist * Math.cos(angle));
        controls.target.set(0, 0, 0);
        controls.update();

    }

    return {
        update,
        pointerEffect
    }
}