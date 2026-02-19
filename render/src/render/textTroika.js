import { Text } from "troika-three-text";
import * as THREE from "three";

export class TextTroika {
    constructor(state) {
        this.state = state;
        this.meshes = [];
        this.maxLabels = 25;
        this.last = 0;
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

    update(camera) {
        if (performance.now() - this.last < 1000 || (camera.camera.top - camera.camera.bottom) / camera.camera.zoom > 60) return;
        this.last = performance.now();

        let visible = [];
        const { num, data } = this.state.data;

        const { bl, tr } = camera.contains(0, 0, true);

        for (let i = 0; i < num; i++) {
            if (data[i].x >= bl.x && data[i].x <= tr.x && data[i].y >= bl.y && data[i].y <= tr.y) {
                visible.push({
                    title: data[i].title,
                    x: data[i].x,
                    y: data[i].y,
                    diam: data[i].size * 2,
                });
            }

            if (visible.length === this.maxLabels) break;
        }

        for (let i = 0; i < this.maxLabels; i++) {
            const text = this.meshes[i];

            if (i >= visible.length) {
                text.visible = false;
                continue;
            }

            text.text = visible[i].title;
            text.visible = true;

            text.sync(() => {
                text.position.set(visible[i].x, visible[i].y);
                const w = text.geometry.boundingBox.max.x - text.geometry.boundingBox.min.x;
                const h = text.geometry.boundingBox.max.y - text.geometry.boundingBox.min.y;
                const scale = Math.min(visible[i].diam / w, visible[i].diam / h);
                text.scale.set(scale, scale);
            });
        }
    }

    dispose() {
        this.meshes.forEach((mesh) => {
            mesh.dispose();
        });
        this.meshes = [];
    }
}
