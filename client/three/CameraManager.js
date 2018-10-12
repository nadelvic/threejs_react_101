import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols';


export default camera => {

    const controls = new THREE.OrbitControls(camera);

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set(0, 12, -30);
    controls.target.set(0, 0, 0);
    controls.update();

    function update(time){
        //update1(time);
    }

    function update1(time){
        const nTime = time / 10;
        camera.position.set(10 * Math.cos(nTime + 3),5,10*Math.sin(nTime));
        controls.target.set(0, 0, 0);
        controls.update();

    }

    return {
        update
    }
}