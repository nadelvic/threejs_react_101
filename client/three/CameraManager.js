import * as THREE from 'three';

export default camera => {
    const initialPosition = getCoordinates(0,-.2);
    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set(initialPosition.x,initialPosition.y,initialPosition.z);
    camera.lookAt(new THREE.Vector3(0,0,0));

    function update(time){
        //update1(time);
    
    }

    function clickMovement(){}


    function pointerEffect(mouse){
        const coord = getCoordinates(mouse.x,mouse.y);
        const inertia = 0.05;
        camera.position.x += ( coord.x - camera.position.x ) * inertia;
        camera.position.y += ( - coord.y - camera.position.y ) * inertia;
        camera.position.z += ( coord.z - camera.position.z ) * inertia;
        camera.lookAt(new THREE.Vector3(0,0,0));
    }

    function getCoordinates(xPos,yPos){
        const phi0 = Math.PI * 92 / 180;
        const phiRange = Math.PI * 5/ 180;
        const phi = phi0 + yPos* phiRange;
        const theta0 = Math.PI / 4;
        const thetaRange =  Math.PI * 10 / 180;
        const theta = theta0 + xPos * thetaRange; 
        const r = 42;
        const coord = {
            x: r * Math.cos(theta)*Math.sin(phi),
            y: r * Math.cos(phi),
            z: r * Math.sin(phi)*Math.sin(theta)
        };
        return coord;
    }



    function update1(time){
        const angle = 1 / 4  * time;
        const dist = 30;
        camera.position.set(dist * Math.sin(angle),10,dist * Math.cos(angle));
        //controls.target.set(0, 0, 0);
        //controls.update();

    }

    return {
        update,
        pointerEffect,
        clickMovement
    }
}