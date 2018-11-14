import * as THREE from 'three';


export default scene => {

    const light = new THREE.PointLight("#fafafa", 1);
    scene.add(light);
	
	function update(time) {
		//update1(time);
    }
    
    function update1(time){
        //light.intensity = (Math.sin(time/10)+1.5)/1.5;
		//light.color.setHSL( Math.sin(time/10), 0.5, 0.5 );
        
    }
	
    return {
        update
    }
}