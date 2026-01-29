// Adapted from https://github.com/anvaka/map-of-reddit/blob/main/src/lib/PointCollection.js

import * as THREE from "three";

export class Circle {
	constructor(state) {
		this.state = state;
		this.mesh = null;
	}

	initialize(scene) {
		this.dispose();

		const geometry = new THREE.PlaneGeometry(2, 2);
		const material = new THREE.ShaderMaterial({
			uniforms: {
				camera: { value: null },
			},

			glslVersion: THREE.GLSL3,

			vertexShader: `
                out vec2 vUv;
                out vec3 vColor;
                uniform float camera;

				void main() { 
					vUv = position.xy; 
					vColor = instanceColor; 
					float size = instanceMatrix[0].x;  

					gl_Position = projectionMatrix * viewMatrix * vec4(vUv * (size + camera) + instanceMatrix[3].xy, 0.0, 1.0); 

                }
            `,
			fragmentShader: `
                in vec2 vUv;
                in vec3 vColor;
                out vec4 fragColor;

                void main() {
                    if(length(vUv) > 1.0) discard;
                    fragColor = vec4(vColor, 1.0);
                }
            `,
		});

		const { numItems, offsets, sizes, colors } = this.state.data;

		this.mesh = new THREE.InstancedMesh(geometry, material, numItems);

		const position = new THREE.Object3D();
		const color = new THREE.Color();

		for (let i = 0; i < numItems; i++) {
			position.position.set(offsets[i * 2], offsets[i * 2 + 1], 0);
			position.scale.set(sizes[i], sizes[i]);
			position.updateMatrix();
			color.setRGB(colors[i * 4], colors[i * 4 + 1], colors[i * 4 + 2]);

			this.mesh.setMatrixAt(i, position.matrix);
			this.mesh.setColorAt(i, color);
		}

		//this.mesh.instanceMatrix.needsUpdate = true; //?
		//this.mesh.instanceColor.needsUpdate = true;

		scene.add(this.mesh);
	}

	dispose() {
		if (this.mesh) {
			this.mesh.geometry.dispose();
			this.mesh.material.dispose();
		}
	}
}
