import { OrbitControls } from "three/addons/controls/OrbitControls.js"; //magic
import * as THREE from "three";

export class Camera {
    constructor(state) {
        this.state = state;
        this.camera = new THREE.OrthographicCamera(0, 0, 0, 0, 0, 1);
        this.controls = new OrbitControls(this.camera, this.state.canvas);

        this.controls.enableRotate = false;
        this.controls.zoomToCursor = true;

        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.17;

        this.controls.minZoom = 1;
        this.controls.zoomSpeed = 1;

        this.controls.mouseButtons = {
            LEFT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN,
        };

        this.controls.touches = {
            ONE: THREE.TOUCH.PAN,
            TWO: THREE.TOUCH.DOLLY_PAN,
        };

        this.transits = null;
        this.transitState = {
            begin: null,
            active: null,
            state: null,
        };
    }

    resize(first) {
        //AKA set max zoom level
        const { minx, miny, maxx, maxy } = this.state.data.limits;

        const reqH = maxx - minx;
        const reqWH = maxy - miny;

        const height = Math.max(reqWH, reqH / this.state.aspect) * 1.1;
        const width = height * this.state.aspect;

        this.camera.position.set(0, 0);
        this.controls.target.set(this.camera.position.x, this.camera.position.y);

        this.camera.zoom = first ? 100 : 1;

        this.camera.left = -width / 2;
        this.camera.right = width / 2;
        this.camera.top = height / 2;
        this.camera.bottom = -height / 2;
        this.camera.updateProjectionMatrix();

        if (first) this.transit(0, 0, 1);
    }

    screenToWorld(x, y) {
        this.camera.updateMatrixWorld(); //the thing is this is called before every render but during initial load there is no animation loop so when transit calles this the camera is at the old state which breaks things
        //rule of thumb should be when dealing with camera matricies (or any?) always make sure they are updated. 
        const vec = new THREE.Vector3(x, y).unproject(this.camera);

        return { x: vec.x, y: vec.y };
    }

    contains(x, y, b) {
        const bl = this.screenToWorld(-1, -1);
        const tr = this.screenToWorld(1, 1);

        if (b) return { bl, tr };
        return x >= bl.x && x <= tr.x && y >= bl.y && y <= tr.y;
    }

    clickArticle(mx, my) {
        const world = this.screenToWorld(mx, my);

        const { num, data } = this.state.data;

        for (let i = 0; i < num; i++) {
            const xd = world.x - data[i].x;
            const yd = world.y - data[i].y;

            const dist = Math.hypot(xd, yd);
            if (dist <= data[i].size) {
                this.state.ui.popWiki(data[i].id);
                return;
            }
        }
    }

    transit(x, y, zoom) {
        //if target xy is contained by the camera only zoom in / pan -> NO mid state!
        //if target xy is not contained by the camera, zoom out till it is, then pan + zoom in -> mid state

        this.transits = [];

        this.transits.push({
            x: this.camera.position.x,
            y: this.camera.position.y,
            zoom: this.camera.zoom,
        });

        if (!this.contains(x, y)) {
            //which zoom contains the point
            //x? abs(cur x - x) -> half width
            //y? abs(cur y - y) -. half height max of these two
            //(fulscreen) height = size * 2 = (this.camera.top - this.camera.bottom) / zoom
            //half height = yd = (this.camera.top - this.camera.bottom) / (2 * zoom)

            const xd = Math.abs(this.camera.position.x - x);
            const yd = Math.abs(this.camera.position.y - y);
            const ys = (this.camera.top - this.camera.bottom) / yd / 2;
            const xs = (this.camera.right - this.camera.left) / xd / 2;

            const nz = Math.max(Math.min(xs, ys) * 0.85, 1);

            this.transits.push({
                x: this.camera.position.x,
                y: this.camera.position.y,
                zoom: nz,
            });
        }

        this.transits.push({
            x: x,
            y: y,
            zoom: zoom,
        });

        this.transitState.begin = performance.now();
        this.transitState.active = true;
        this.transitState.state = 0;

        this.controls.enablePan = false;
        this.controls.enableZoom = false;
    }

    updateTransit() {
        if (!this.transitState.active) return;

        const t = (performance.now() - this.transitState.begin) / 2000;

        if (t >= 1) {
            this.camera.position.x = this.transits[this.transitState.state + 1].x;
            this.camera.position.y = this.transits[this.transitState.state + 1].y;
            this.camera.zoom = this.transits[this.transitState.state + 1].zoom;
            this.controls.target.set(this.camera.position.x, this.camera.position.y);
            this.camera.updateProjectionMatrix();

            if (this.transitState.state === this.transits.length - 2) {
                this.transitState.active = false;
                this.controls.enablePan = true;
                this.controls.enableZoom = true;
                return;
            }

            this.transitState.state++;
            this.transitState.begin = performance.now();
            return;
        }

        const ease = t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

        this.camera.position.x = this.transits[this.transitState.state].x * (1 - ease) + this.transits[this.transitState.state + 1].x * ease;
        this.camera.position.y = this.transits[this.transitState.state].y * (1 - ease) + this.transits[this.transitState.state + 1].y * ease;
        this.controls.target.set(this.camera.position.x, this.camera.position.y);

        const st = 1 / this.transits[this.transitState.state].zoom;
        const en = 1 / this.transits[this.transitState.state + 1].zoom;

        const cur = st * (1 - ease) + en * ease;
        this.camera.zoom = 1 / cur;

        this.camera.updateProjectionMatrix();
    }

    goToArticle(id) {
        const { num, data } = this.state.data;

        let ind;
        if (id) {
            for (let i = 0; i < num; i++) {
                if (data[i].title === id) {
                    ind = i;
                    break;
                }
            }
        } else {
            ind = Math.floor(Math.random() * num);
        }

        this.transit(data[ind].x, data[ind].y, (this.camera.top - this.camera.bottom) / (data[ind].size * 4));
    }

    update() {
        this.updateTransit();
        this.controls.update();
    }
}
