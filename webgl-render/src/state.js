import WebGL from "./render/webgl.js";
import CircleRenderer from "./render/circlerenderer.js";
import TextRenderer from "./render/textrenderer.js";
import DataLoader from "./utils/dataloader.js";
import Search from "./ui/search.js";
import Controls from "./ui/controls.js";
import Visualization from "./visualizaton.js";
import UI from "./ui/ui.js";

//Not sure what this is, but the main idea is that it should be the state manager and if classes need stuff from other places they need to visit this central hub
//the whole idea is loose couping, two classes referencing each other is bad in my book. I mean they are still referencing each other, just through the bus but this is better eye candy
class State {
	constructor() {
		this.data;

		this.visualization = new Visualization(this);
		this.webgl = new WebGL();
		this.textRenderer = new TextRenderer(this);
		this.circleRenderer = new CircleRenderer(this);
		this.controls = new Controls(this);
		this.search = new Search(this);
		this.dataLoader = new DataLoader();

		this.ui = new UI(this);
	}
}

new State();
