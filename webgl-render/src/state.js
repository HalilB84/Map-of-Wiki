import * as THREE from "three";
import { Circle } from "./render/circle.js";
import { TextTroika } from "./render/text.js";
import { DataLoader } from "./utils/dataloader.js";
import { Search } from "./ui/search.js";
import { Controls } from "./ui/controls.js";
import { UI } from "./ui/ui.js";

//Not sure what this is, but the main idea is that it should be the state manager and if classes need stuff from other places they need to visit this central hub
//the whole idea is loose couping, two classes referencing each other is bad in my book. I mean they are still referencing each other, just through the state but this is better eye candy
class State {
	constructor() {
		this.data = null;

		this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("webgl") });
		this.canvas = this.renderer.domElement;

		this.resize();

		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(0, 0, 0, 0, 0, 1);

		this.initializing = false;
		this.lastTime = 0;

		this.circle = new Circle(this);
		this.textTroika = new TextTroika(this);
		this.controls = new Controls(this);
		this.search = new Search(this);
		this.dataLoader = new DataLoader(this);
		this.ui = new UI(this);
	}

	async initialize(selectedCSV) {
		if (this.initializing) return;
		this.initializing = true;
		this.renderer.setAnimationLoop(null);

		this.ui.toggleLoading(true);
		this.search.isDataInitialized = false;

		this.data = await this.dataLoader.loadCSV(selectedCSV);

		this.scene.clear();
		this.circle.initialize(this.scene);
		this.textTroika.initialize(this.scene);

		this.controls.reset();

		this.ui.toggleLoading(false);
		this.initializing = false;
		this.renderer.setAnimationLoop(this.render.bind(this));
	}

	resize() {
		this.dpr = window.devicePixelRatio;

		this.width = Math.floor(this.canvas.clientWidth * this.dpr);
		this.height = Math.floor(this.canvas.clientHeight * this.dpr);
		
		this.renderer.setSize(this.width, this.height, false);
	}

	render(timestamp) {
		if(Math.floor(this.canvas.clientWidth * this.dpr) !== this.width || Math.floor(this.canvas.clientHeight * this.dpr) !== this.height) {
			this.resize();
			this.controls.handleResize();
		}

		if (this.controls.transitionActive) {
			this.controls.updateTransition(timestamp);
		}

		const aspectRatio = this.width / this.height;
		const viewHeight = this.controls.zoomLevel;
		const viewWidth = this.controls.zoomLevel * aspectRatio;

		this.camera.left = this.controls.cameraX - viewWidth / 2;
		this.camera.right = this.controls.cameraX + viewWidth / 2;
		this.camera.bottom = this.controls.cameraY - viewHeight / 2;
		this.camera.top = this.controls.cameraY + viewHeight / 2;

		this.camera.updateProjectionMatrix();

		this.circle.mesh.material.uniforms.camera.value = this.controls.zoomLevel * 0.0004;

		if (timestamp - this.lastTime > 1000) {
			this.textTroika.updateVisibleText();
			this.lastTime = timestamp;
			this.dbg = true;
		}

		this.renderer.render(this.scene, this.camera);

		this.ui.stats.update();

		/*if (this.dbg) {
			console.clear();
			console.log("geom", this.renderer.info.memory.geometries);
			console.log("tex", this.renderer.info.memory.textures);
			console.log("calls:", this.renderer.info.render.calls); //meshes in all scene renders
			console.log("triangles", this.renderer.info.render.triangles); //total triangles in all scene renders
			this.dbg = false;
		}*/
	}
}

new State();
