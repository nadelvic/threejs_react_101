import * as THREE from 'three';

export default scene => {    
    const radius = 2;
	const mesh = new THREE.Mesh(new THREE.IcosahedronBufferGeometry(radius, 2), new THREE.MeshStandardMaterial({ flatShading: true }));

	mesh.position.set(0, 0, -20);

	scene.add(mesh);
	
	function update(time) {
		const scale = 2;//Math.sin(time)+2;

		mesh.scale.set(scale, scale, scale);
	}
    return {
        update
    }
}