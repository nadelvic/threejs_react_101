import * as THREE from 'three';


export default scene => {

    const light = new THREE.PointLight("#2222ff", 1);
    scene.add(light);
	
	function update(time) {
		//light.intensity = (Math.sin(time/4)+1.5)/1.5;
		//light.color.setHSL( Math.sin(time/4), 0.5, 0.5 );
	}
	
    return {
        update
    }
}