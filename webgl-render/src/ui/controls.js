export class Controls {
	constructor(state) {
		this.zoomLevel = 0;
		this.cameraX = 0;
		this.cameraY = 0;

		this.isDragging = false;
		this.wasDragging = false;
		this.lastMouseX = 0;
		this.lastMouseY = 0;
		this.sensitivity = 0.002;
		this.lastTouchDistance = null;

		this.transitionActive = false;
		this.startState = null;
		this.endState = null;
		this.midState = null;
		this.stageCount = 0;
		this.stage = 0;
		this.stage1Duration = 2000;
		this.stage2Duration = 2000;
		this.transitionStartTime = 0;

		this.state = state;

		this.lastAspectRatio = this.state.width / this.state.height;
	}

	handleMouseDown(e) {
		if (this.transitionActive) return;
		this.isDragging = true;
		this.lastMouseX = e.clientX;
		this.lastMouseY = e.clientY;
	}

	handleMouseMove(e) {
		//chrome for some reason also fires this event if you touch on a laptop
		if (!this.isDragging || this.transitionActive) return;
		this.wasDragging = true;
		this.updateCameraPosition(e.clientX, e.clientY);
	}

	handleMouseUp() {
		this.isDragging = false;
	}

	handleClick(e) {
		if (!this.wasDragging) {
			this.clickArticle(e);
		}
		this.wasDragging = false;
	}

	handleZoom(e) {
		if (this.transitionActive) return;
		const zoomFactor = Math.exp(e.deltaY * this.sensitivity);
		//Why does this work? After the zoomfactor is applied the mouse will be at a different world location (why? because now the area being covered is different but the mouse is still in the same place, so obviously world loc is different) and move the camera by that difference so the cursor points to the same world loc
		this.updateCameraPosition(e.clientX, e.clientY, zoomFactor);
	}

	handleTouchStart(e) {
		if (this.transitionActive) return;

		e.preventDefault();

		//pinch-zoom
		if (e.touches.length === 2) {
			this.lastTouchDistance = this.getTouchDistance(e.touches);
		}

		// single-touch pan
		else if (e.touches.length === 1) {
			this.isDragging = true;
			this.lastMouseX = e.touches[0].clientX;
			this.lastMouseY = e.touches[0].clientY;
		}
	}

	handleTouchMove(e) {
		if (this.transitionActive) return;
		e.preventDefault();
		//pinch zoom
		if (e.touches.length === 2) {
			const dist = this.getTouchDistance(e.touches);
			const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
			const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

			const zoomFactor = this.lastTouchDistance / dist;

			this.updateCameraPosition(centerX, centerY, zoomFactor);

			this.lastTouchDistance = dist;
		}
		// single-touch pan
		else if (e.touches.length === 1 && this.isDragging) {
			this.updateCameraPosition(e.touches[0].clientX, e.touches[0].clientY);
		}
	}

	handleTouchEnd() {
		this.isDragging = false;
	}

	getTouchDistance(touches) {
		const dx = touches[0].clientX - touches[1].clientX;
		const dy = touches[0].clientY - touches[1].clientY;
		return Math.hypot(dx, dy);
	}

	handleResize() {
		const currentAspectRatio = this.state.width / this.state.height;

		if ((this.lastAspectRatio > 1 && currentAspectRatio < 1) || (this.lastAspectRatio < 1 && currentAspectRatio > 1)) {
			this.cameraX = 0;
			this.cameraY = 0;
			this.zoomLevel = this.getMaxZoomLevel();
		}

		this.lastAspectRatio = currentAspectRatio;
		this.zoomLevel = Math.min(this.zoomLevel, this.getMaxZoomLevel());
	}

	screenToWorld(screenX, screenY) {
		const canvasX = screenX / this.state.canvas.clientWidth;
		const canvasY = screenY / this.state.canvas.clientHeight;

		const ndcX = canvasX * 2 - 1;
		const ndcY = -(canvasY * 2 - 1);

		const viewWidth = (this.zoomLevel * this.state.width) / this.state.height;
		const viewHeight = this.zoomLevel;

		const worldX = this.cameraX + (ndcX * viewWidth) / 2;
		const worldY = this.cameraY + (ndcY * viewHeight) / 2;

		return { x: worldX, y: worldY };
	}

	updateCameraPosition(currX, currY, zoomFactor) {
		const prevWorld = this.screenToWorld(zoomFactor ? currX : this.lastMouseX, zoomFactor ? currY : this.lastMouseY);

		if (zoomFactor) {
			this.zoomLevel *= zoomFactor;
			this.zoomLevel = Math.min(this.zoomLevel, this.getMaxZoomLevel());
			this.zoomLevel = Math.max(this.zoomLevel, 0.0000001);
		}

		const currWorld = this.screenToWorld(currX, currY);

		this.cameraX += prevWorld.x - currWorld.x;
		this.cameraY += prevWorld.y - currWorld.y;

		this.lastMouseX = currX;
		this.lastMouseY = currY;
	}

	getMaxZoomLevel() {
		if (!this.state.data) return;

		const [minx, miny, maxx, maxy] = this.state.data.axisLimits;
		const worldWidth = maxx - minx;
		const worldHeight = maxy - miny;

		const aspectRatio = this.state.width / this.state.height;

		const maxHeightW = worldWidth / aspectRatio;
		const maxHeightH = worldHeight;

		return Math.max(maxHeightW, maxHeightH) * 1.1;
	}

	smoothTransition(targetX, targetY, targetZoom, multi) {
		this.transitionActive = true;

		this.startState = { x: this.cameraX, y: this.cameraY, zoom: this.zoomLevel };
		this.endState = { x: targetX, y: targetY, zoom: targetZoom };

		this.stage1Duration = 2000;
		this.stage2Duration = 2000;

		if (multi === false) {
			this.stageCount = 1;
		} else {
			const xd = this.endState.x - this.startState.x;
			const yd = this.endState.y - this.startState.y;

			const dist = Math.hypot(xd, yd);
			const midZoom = Math.max(this.startState.zoom, dist);

			this.midState = { x: this.cameraX, y: this.cameraY, zoom: midZoom };
			this.stageCount = 2;
			this.stage = 0;

			if (this.zoomLevel === midZoom) {
				this.stage1Duration = 0;
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
		this.zoomLevel = 0;
		this.smoothTransition(0, 0, this.getMaxZoomLevel(), false);
	}

	clickArticle(e) {
		const worldPos = this.screenToWorld(e.clientX, e.clientY);

		const { offsets, sizes, ids, numItems } = this.state.data;

		for (let i = 0; i < numItems; i++) {
			const cx = offsets[i * 2];
			const cy = offsets[i * 2 + 1];
			const radius = sizes[i];

			const xd = worldPos.x - cx;
			const yd = worldPos.y - cy;
			const distance = Math.hypot(xd, yd);

			if (distance <= radius) {
				this.showEmbeddedWikiArticle(ids[i]);
				return;
			}
		}
	}

	showEmbeddedWikiArticle(id) {
		const wiki = document.getElementById("wiki");
		const iframe = document.getElementById("wiki-iframe");

		const wikiUrl = `https://en.wikipedia.org/?curid=${id}`;

		iframe.src = wikiUrl;
		wiki.classList.add("active");

		document.getElementById("close-wiki").onclick = () => {
			wiki.classList.remove("active");
			iframe.src = "about:blank";
		};
	}

	goToRandomArticle() {
		const randomIndex = Math.floor(Math.random() * this.state.data.numItems);

		const targetX = this.state.data.offsets[randomIndex * 2];
		const targetY = this.state.data.offsets[randomIndex * 2 + 1];
		const targetZoom = this.state.data.sizes[randomIndex] * 5;

		this.smoothTransition(targetX, targetY, targetZoom, true);
	}
}
