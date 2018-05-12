export class Time {
	startTime = Date.now()
	previousFrame = Date.now()
	frameTime = 0

	/** Updates frameTime (meant to be called once every frame) */
	updateFrameTime() {
		this.frameTime = Date.now() - this.previousFrame
		this.previousFrame = Date.now()
	}

	/** Returns time passed since the beginning of the animation */
	get elapsedTime() {
		return Date.now() - this.startTime
	}
}