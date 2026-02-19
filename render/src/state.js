import * as THREE from "three";
import { UI } from "./ui/ui.js";
import { Utils } from "./utils.js";
import { Circle } from "./render/circle.js";
import { TextTroika } from "./render/textTroika.js";
import { Camera } from "./render/camera.js";
import { Search } from "./ui/search.js";

class State {
    constructor() {
        this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("webgl") });
        this.canvas = this.renderer.domElement;

        this.scene = new THREE.Scene();

        this.camera = new Camera(this);
        this.circle = new Circle(this);
        this.text = new TextTroika(this);

        this.ui = new UI(this);
        this.search = new Search(this);
        this.utils = new Utils(this);

        this.dpr = window.devicePixelRatio;
        this.width = Math.floor(this.canvas.clientWidth * this.dpr);
        this.height = Math.floor(this.canvas.clientHeight * this.dpr);
        this.aspect = this.width / this.height;
        this.renderer.setSize(this.width, this.height, false);

        this.data = null;
    }

    async initialize(csv) {
        this.ui.toggleLoading(true);

        this.renderer.setAnimationLoop(null);
        this.scene.clear();
        this.ui.clearResults();

        this.data = await this.utils.load(csv);
        //console.log(this.data);

        this.circle.initialize(this.scene);
        this.text.initialize(this.scene);

        this.search.uploadTitles(this.data.data.map((d) => d.title));
        this.camera.resize(true);

        this.renderer.setAnimationLoop(this.render.bind(this));
        this.ui.toggleLoading(false);
    }

    render() {
        if (Math.floor(this.canvas.clientWidth * this.dpr) !== this.width || Math.floor(this.canvas.clientHeight * this.dpr) !== this.height) {
            this.width = Math.floor(this.canvas.clientWidth * this.dpr);
            this.height = Math.floor(this.canvas.clientHeight * this.dpr);
            this.aspect = this.width / this.height;
            this.renderer.setSize(this.width, this.height, false);

            this.camera.resize();
        }

        this.camera.update();
        this.circle.update(this.camera.camera);
        this.text.update(this.camera);

        this.renderer.render(this.scene, this.camera.camera);

        this.ui.stats.update();

        /*if (1) {
			console.clear();
			console.log("geom", this.renderer.info.memory.geometries);
			console.log("tex", this.renderer.info.memory.textures);
			console.log("calls:", this.renderer.info.render.calls); //meshes in all scene renders
			console.log("triangles", this.renderer.info.render.triangles); //total triangles in all scene renders
		}*/
    }
}

new State();
