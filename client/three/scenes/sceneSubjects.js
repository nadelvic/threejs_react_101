import * as THREE from 'three';
import spriteDisc from '../../assets/sprites/disc.png';

export default scene => {    


    var sprite = new THREE.TextureLoader().load(spriteDisc);
    const radius = .2;
    scene.background = new THREE.Color(0x2E2E2E);
    /* deprecated
	const mesh = new THREE.Mesh(
        new THREE.IcosahedronBufferGeometry(radius, 4), 
        new THREE.MeshStandardMaterial({ flatShading: true }));
        */

    const dotGeometry = new THREE.Geometry();
    dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
    const dotMaterial = new THREE.PointsMaterial( { size: .2, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
    dotMaterial.color.setHSL( 0, 0, 40);
    

    const surfaceSize = 40;
    const minX = -20;
    const minZ = -20;
    
   
    const numberPerLine = 40;
    const inc = surfaceSize / numberPerLine;

    //mesh.position.set(maxX,1, minz);

    for(let i = 0; i< numberPerLine; i++){
        for(let j = 0; j < numberPerLine; j++){
            let shift = 0;
            if(i%2 == 0) shift = inc / 2;
           
            const dot = new THREE.Points( dotGeometry, dotMaterial );  
            dot.position.set(minX + inc * i,1, minZ + inc * j);
            scene.add( dot );
            
        }
    }
	//scene.add(mesh);
	
	function update(time) {
        //update1(time);
		
    }

    function update1(time){
        const scale = 1;//Math.sin(time)+2;
        mesh.position.set(5*Math.sin(time/10),3*Math.cos(time/10),-20)
		mesh.scale.set(scale, scale, scale);

    }


    return {
        update
    }

    
}