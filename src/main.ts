import { renderer } from "./Renderer"
import { mainScene } from "./Scene"
import { mainCamera } from "./Camera"
import { fez } from "./Fez"


function animate() {
	requestAnimationFrame(animate)

	fez.update()
	renderer.render(mainScene, mainCamera)
}

animate()