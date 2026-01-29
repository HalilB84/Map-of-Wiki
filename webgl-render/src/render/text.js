import { Text } from "troika-three-text";

export class TextTroika {
	constructor(state) {
		this.state = state;
		this.meshes = [];
		this.maxLabels = 25;
	}

	initialize(scene) {
		this.dispose();

		for (let i = 0; i < this.maxLabels; i++) {
			const mesh = new Text();

			mesh.anchorX = "center";
			mesh.anchorY = "middle";
			mesh.outlineWidth = "2%";
			mesh.visible = false;

			scene.add(mesh);
			this.meshes.push(mesh);
		}
	}

	updateVisibleText() {
		const tl = this.state.controls.screenToWorld(0, 0);
		const br = this.state.controls.screenToWorld(this.state.canvas.clientWidth, this.state.canvas.clientHeight);

		const bounds = {
			minX: Math.min(tl.x, br.x),
			maxX: Math.max(tl.x, br.x),
			minY: Math.min(tl.y, br.y),
			maxY: Math.max(tl.y, br.y),
		};

		let threshold = 3000;

		if ((bounds.maxX - bounds.minX) * (bounds.maxY - bounds.minY) > threshold) {
			return;
		}

		let data = [];
		const { numItems, offsets, sizes, titles } = this.state.data;

		for (let i = 0; i < numItems; i++) {
			const x = offsets[i * 2];
			const y = offsets[i * 2 + 1];

			if (x >= bounds.minX && x <= bounds.maxX && y >= bounds.minY && y <= bounds.maxY) {
				data.push({
					titles: titles[i],
					x: x,
					y: y,
					diam: sizes[i] * 2,
				});
			}
		}

		data = data.sort((a, b) => b.diam - a.diam).slice(0, this.maxLabels);

		for (let i = 0; i < this.maxLabels; i++) {
			const text = this.meshes[i];
			if (i >= data.length) {
				text.visible = false;
			} else {
				text.text = data[i].titles;
				text.visible = true; //text._needsSync = true; //should be in sync but ts is making me mad

				text.sync(() => {
					text.position.set(data[i].x, data[i].y, 0);
					const w = text.geometry.boundingBox.max.x - text.geometry.boundingBox.min.x;
					const h = text.geometry.boundingBox.max.y - text.geometry.boundingBox.min.y;
					const scale = Math.min(data[i].diam / w, data[i].diam / h);
					text.scale.set(scale, scale, 1);
				});
			}
		}
	}

	dispose() {
		this.meshes.forEach((mesh) => {
			mesh.dispose();
		});
		this.meshes = [];
	}
}
