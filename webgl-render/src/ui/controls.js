export default class Controls {
	constructor(bus) {
		this.zoomLevel = 1;
		this.cameraX = 0;
		this.cameraY = 0;

		this.isDragging = false;
		this.wasDragging = false;
		this.lastMouseX = 0;
		this.lastMouseY = 0;

		this.transitionActive = false;
		this.startState = null;
		this.endState = null;
		this.midState = null;
		this.stageCount = 0;
		this.stage = 0;
		this.stage1Duration = 2000;
		this.stage2Duration = 2000;
		this.transitionStartTime = 0;

		this.wheelSensitivity = 0.002; //fix by creating a settings menu
		this.touchSensitivity = 0.004;
		this.lastTouchDistance = null;

		this.bus = bus;

		this.bus.webgl.canvas.addEventListener("mousedown", (e) => this.handleMouseDown(e));
		this.bus.webgl.canvas.addEventListener("touchstart", (e) => this.handleTouchStart(e));

		this.bus.webgl.canvas.addEventListener("mouseup", () => this.handleMouseUp());
		this.bus.webgl.canvas.addEventListener("mouseleave", () => this.handleMouseUp());

		this.bus.webgl.canvas.addEventListener("touchend", () => (this.isDragging = false));

		this.bus.webgl.canvas.addEventListener("mousemove", (e) => this.handleMouseMove(e));
		this.bus.webgl.canvas.addEventListener("touchmove", (e) => this.handleTouchMove(e));

		this.bus.webgl.canvas.addEventListener("wheel", (e) => this.handleZoom(e));
		this.bus.webgl.canvas.addEventListener("click", (e) => {
			//This is probably not the best way to do this
			if (!this.wasDragging) {
				this.clickArticle(e);
			}
			this.wasDragging = false;
		});

		document.getElementById("random-button").addEventListener("click", () => this.goToRandomArticle());
	}

	handleMouseDown(e) {
		if (this.transitionActive) return;
		this.isDragging = true;
		this.lastMouseX = e.clientX;
		this.lastMouseY = e.clientY;
	}

	handleMouseUp() {
		this.isDragging = false;
	}

	//only when mouse down
	handleMouseMove(e) {
		if (!this.isDragging || this.transitionActive) return;
		this.wasDragging = true;
		this.updateCameraPosition(e.clientX, e.clientY);
	}

	handleTouchStart(e) {//broken on laptop touchscreen
		if (this.transitionActive) return;
		console.log("touch start");

		e.preventDefault();
		//pinch-zoom
		if (e.touches.length === 2) {
			this.lastTouchDistance = this.getTouchDistance(e.touches);
			return;
		}
		// single-touch pan
		this.isDragging = true;
		this.lastMouseX = e.touches[0].clientX;
		this.lastMouseY = e.touches[0].clientY;
	}

	handleTouchMove(e) {
		if (this.transitionActive) return;
		e.preventDefault();
		//pinch zoom
		//same logic as handle zoom
		if (e.touches.length === 2) {
			const dist = this.getTouchDistance(e.touches);
			const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
			const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

			const zoomFactor = dist / this.lastTouchDistance;

			const worldPos = this.screenToWorld(centerX, centerY);
			this.zoomLevel *= 1 / zoomFactor;
			this.zoomLevel = Math.min(this.zoomLevel, 300); //TODO; make this dynamic based on which graph
			this.zoomLevel = Math.max(this.zoomLevel, 0.001);

			const newWorldPos = this.screenToWorld(centerX, centerY);

			this.cameraX += worldPos.x - newWorldPos.x;
			this.cameraY += worldPos.y - newWorldPos.y;

			this.lastTouchDistance = dist;
			return;
		}
		// single-touch pan
		if (!this.isDragging) return;
		this.wasDragging = true;
		this.updateCameraPosition(e.touches[0].clientX, e.touches[0].clientY);
	}

	getTouchDistance(touches) {
		const dx = touches[0].clientX - touches[1].clientX;
		const dy = touches[0].clientY - touches[1].clientY;
		return Math.hypot(dx, dy);
	}

	//I now understand what is happening
	handleZoom(e) {
		if (this.transitionActive) return;

		// https://stackoverflow.com/questions/77863197/distinguish-trackpad-and-mouse-on-wheel-event
		const isMouseWheel = Number.isInteger(e.deltaY) && e.deltaX === 0;
		const sens = isMouseWheel ? this.wheelSensitivity : this.touchSensitivity;
		const zoomFactor = Math.exp(e.deltaY * sens);

		//Why does this work? After the zoomfactor is applied the mouse will be at a different world location (why? because now the area being covered is different but the mouse is still in the same place, so obviously world loc is different) and move the camera by that difference so the cursor points to the same world loc
		const worldPos = this.screenToWorld(e.clientX, e.clientY);
		this.zoomLevel *= zoomFactor;
		this.zoomLevel = Math.min(this.zoomLevel, 300); //TODO; make this dynamic based on which graph
		this.zoomLevel = Math.max(this.zoomLevel, 0.001);
		const newWorldPos = this.screenToWorld(e.clientX, e.clientY);

		this.cameraX += worldPos.x - newWorldPos.x;
		this.cameraY += worldPos.y - newWorldPos.y;
	}

	screenToWorld(screenX, screenY) {
		const rect = this.bus.webgl.canvas.getBoundingClientRect(); //the correct way to get size

		const canvasWidth = rect.width;
		const canvasHeight = rect.height;

		// Convert screen coordinates to canvas-relative coordinates (0 to 1)
		const canvasX = (screenX - rect.left) / canvasWidth;
		const canvasY = (screenY - rect.top) / canvasHeight;

		// Convert to clip space (-1 to 1)
		const clipX = canvasX * 2 - 1;
		const clipY = -(canvasY * 2 - 1);

		// Account for the aspect ratio
		const aspectRatio = canvasWidth / canvasHeight;

		let correctedZoom = this.zoomLevel;
		if (aspectRatio > 1) {
			correctedZoom = this.zoomLevel / aspectRatio;
		}

		// Convert from clip space to world space
		const worldX = this.cameraX + clipX * correctedZoom * aspectRatio;
		const worldY = this.cameraY + clipY * correctedZoom;

		return { x: worldX, y: worldY };
	}

	updateCameraPosition(currX, currY) {
		const prevWorld = this.screenToWorld(this.lastMouseX, this.lastMouseY);
		const currWorld = this.screenToWorld(currX, currY);

		this.cameraX += prevWorld.x - currWorld.x;
		this.cameraY += prevWorld.y - currWorld.y;

		this.lastMouseX = currX;
		this.lastMouseY = currY;
	}

	smoothTransition(targetX, targetY, targetZoom, multi) {
		this.transitionActive = true;

		this.startState = { x: this.cameraX, y: this.cameraY, zoom: this.zoomLevel };
		this.endState = { x: targetX, y: targetY, zoom: targetZoom };

		this.stage1Duration = 2000; // to be changed
		this.stage2Duration = 2000;

		if (multi === false) {
			this.stageCount = 1;
		} else {
			//fix timing later, right now its just 2000ms
			const dx = this.endState.x - this.startState.x;
			const dy = this.endState.y - this.startState.y;

			const dist = Math.hypot(dx, dy);
			const midZoom = Math.max(this.startState.zoom, dist * 0.8);

			this.midState = { x: this.cameraX, y: this.cameraY, zoom: midZoom };
			this.stageCount = 2;
			this.stage = 0;

			if (this.zoomLevel === midZoom) {
				this.stage1Duration = 0; //to be removed with proper timings
			}
		}
		this.transitionStartTime = performance.now();
	}

	updateTransition(timestamp) {
		const elapsed = timestamp - this.transitionStartTime;

		let duration;

		if (this.stageCount === 1) {
			duration = this.stage1Duration;
		} else if (this.stage === 0) {
			duration = this.stage1Duration;
		} else {
			duration = this.stage2Duration;
		}

		const progress = Math.min(elapsed / duration, 1);
		const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

		if (this.stageCount === 1) {
			// only zoom out
			this.zoomLevel = this.startState.zoom + (this.endState.zoom - this.startState.zoom) * eased;

			if (progress >= 1) {
				this.cameraX = this.endState.x;
				this.cameraY = this.endState.y;
				this.transitionActive = false;
			}
		} else if (this.stageCount === 2 && this.stage === 0) {
			// first zoom out
			this.zoomLevel = this.startState.zoom + (this.midState.zoom - this.startState.zoom) * eased;

			if (progress >= 1) {
				this.stage = 1;
				this.transitionStartTime = timestamp;
			}
		} else if (this.stageCount === 2 && this.stage === 1) {
			// pan and zoom in
			const s1 = this.midState;
			const e1 = this.endState;
			this.cameraX = s1.x + (e1.x - s1.x) * eased;
			this.cameraY = s1.y + (e1.y - s1.y) * eased;
			this.zoomLevel = s1.zoom + (e1.zoom - s1.zoom) * eased;

			if (progress >= 1) {
				this.transitionActive = false;
			}
		}
	}

	reset() {
		this.cameraX = 0;
		this.cameraY = 0;
		this.zoomLevel = 1;
		this.smoothTransition(0, 0, 60, false);
	}

	clickArticle(e) {
		const worldPos = this.screenToWorld(e.clientX, e.clientY);
		console.log("cursor", worldPos);

		const { offsets, sizes, ids, titles, numItems } = this.bus.data;

		for (let i = 0; i < numItems; i++) {
			const cx = offsets[i * 2];
			const cy = offsets[i * 2 + 1];
			const radius = sizes[i];

			const dx = worldPos.x - cx;
			const dy = worldPos.y - cy;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance <= radius) {
				const articleId = ids[i];
				const articleTitle = titles[i];
				console.log(cx, cy, radius);
				console.log(`Clicked on article: ${articleTitle} (ID: ${articleId})`);

				this.showEmbeddedWikiArticle(articleId);
				return;
			}
		}
	}

	showEmbeddedWikiArticle(id) {
		const container = document.getElementById("wiki-embed-container");
		const iframe = document.getElementById("wiki-iframe");
		const closeBtn = document.getElementById("close-wiki-btn");

		const wikiUrl = `https://en.wikipedia.org/?curid=${id}`;

		iframe.src = wikiUrl;
		container.classList.add("active");

		if (!this._outsideClickHandler) {
			this._outsideClickHandler = (e) => {
				if (!container.contains(e.target) && container.classList.contains("active") && !e.target.closest("#webgl-canvas")) {
					closeBtn.click();
				}
			};
		}

		closeBtn.onclick = () => {
			container.classList.remove("active");
			document.removeEventListener("click", this._outsideClickHandler);
			setTimeout(() => {
				iframe.src = "about:blank";
			}, 300);
		};

		document.addEventListener("click", this._outsideClickHandler);
	}

	goToRandomArticle() {
		const randomIndex = Math.floor(Math.random() * this.bus.data.numItems);

		const targetX = this.bus.data.offsets[randomIndex * 2];
		const targetY = this.bus.data.offsets[randomIndex * 2 + 1];
		const targetZoom = this.bus.data.sizes[randomIndex] * 5;

		this.smoothTransition(targetX, targetY, targetZoom, true);
	}
}
