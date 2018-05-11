import { JSONLoader, MeshLambertMaterial, Mesh, LoadingManager, Scene } from "three"
import { Fez } from "./Classes/Fez"

import { hemisphereLight } from "./lighting"
import { renderer } from "./renderer"
import { mainCamera } from "./camera"


export const mainScene = new Scene
export let fez: Fez

const loadingManager = new LoadingManager
loadingManager.onProgress = () => {
	loadScene()
	animate()
}

export function init() {
	loadFezMesh()
}

function loadFezMesh() {
	// Materials
	const redMaterial = new MeshLambertMaterial({ color: 0xdd1111 })
	const redShadedMaterial = new MeshLambertMaterial({ color: 0xcc0505 })
	const yellowMaterial = new MeshLambertMaterial({ color: "yellow" })

	const materials = [redMaterial, yellowMaterial, redShadedMaterial]

	// Mesh
	const loader = new JSONLoader(loadingManager)
	loader.load('./assets/models/fez.json', geometry => {
		const mesh = new Mesh(geometry, materials)
		fez = new Fez(mesh)
	})
}

function loadScene() {
	// Lighting
	mainScene.add(hemisphereLight)

	// Meshes
	mainScene.add(fez.mesh)
}

function animate() {
	const frame = requestAnimationFrame(animate)

	fez.update(frame)
	renderer.render(mainScene, mainCamera)
}

init()