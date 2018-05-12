export class Time {
	startTime = Date.now()
	previousFrame = Date.now()
	frameTime = 0
	frameCount = 0

	/** Updates the instance (meant to be called once every frame) */
	update() {
		this.frameTime = Date.now() - this.previousFrame
		this.previousFrame = Date.now()
		this.frameCount++
	}

	/** Returns time passed since the beginning of the animation (in milliseconds) */
	get deltaTime() {
		return Date.now() - this.startTime
	}

	/** It restarts the value of startTime */
	restart() {
		this.startTime = Date.now()
	}
}