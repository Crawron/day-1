import { renderer } from "./Renderer"
import { mainScene } from "./Scene"
import { mainCamera } from "./Camera"
import { fez } from "./Init"

export function animate() {
	const frame = requestAnimationFrame(animate)

	fez.update(frame)
	renderer.render(mainScene, mainCamera)
}