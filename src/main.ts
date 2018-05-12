import { JSONLoader, MeshLambertMaterial, Mesh, LoadingManager, Scene } from "three"

import { Box } from "./Classes/Box"
import { Fez } from "./Classes/Fez"
import { BoxGrid } from "./Classes/Grid";

import { hemisphereLight } from "./lighting"
import { renderer } from "./renderer"
import { mainCamera } from "./camera"


export const mainScene = new Scene
export let fez: Fez
let box: Box

const loadingManager = new LoadingManager
loadingManager.onProgress = () => {
	loadScene()
	animate()
}

export function init() {
	box = new Box(0)
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
	mainScene.add(fez.mesh/*, box.mesh*/)
}

function animate() {
	const frame = requestAnimationFrame(animate)

	fez.update(frame)
	renderer.render(mainScene, mainCamera)
}

init()