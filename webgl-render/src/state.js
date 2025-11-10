import WebGLContext from "./core/webglcontext.js";
import CircleRenderer from "./renderers/circlerenderer.js";
import TextRenderer from "./renderers/textrenderer.js";
import DataLoader from "./utils/dataloader.js";
import SearchManager from "./ui/searchmanager.js";
import Controls from "./ui/controls.js";
import Visualization from "./visualization.js";

//Not sure what this is, but the main idea is that it should be the state manager and if classes need stuff from other places they need to visit this central hub
//the whole idea is loose couping, two classes referencing each other is bad in my book. I mean they are still referencing each other, just through the bus but this is better eye candy
class State {
	constructor() {
		this.data;

		this.visualization = new Visualization(this);
		this.webgl = new WebGLContext();
		this.textRenderer = new TextRenderer(this);
		this.circleRenderer = new CircleRenderer(this);
		this.controls = new Controls(this);
		this.searchManager = new SearchManager(this);
		this.dataLoader = new DataLoader();
	}
}

try {
	new State();
} catch (error) {
	console.error(error);
	alert("Failed to initialize the application. See console for details.");
}
