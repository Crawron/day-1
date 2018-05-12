import { JSONLoader, MeshLambertMaterial, Mesh, LoadingManager, Scene } from "three"

import { Box } from "./Classes/Box"
import { Fez } from "./Classes/Fez"
import { BoxGrid } from "./Classes/Grid"
import { Time } from "./Classes/Time"

import { hemisphereLight } from "./lighting"
import { renderer } from "./renderer"
import { mainCamera } from "./camera"


export const mainScene = new Scene
export let fez: Fez
let grid: BoxGrid

let time: Time

const loadingManager = new LoadingManager
loadingManager.onProgress = () => {
	grid = new BoxGrid(fez)
	loadScene()
	animate()
}

function loadFezMesh() {
	// Materials
	const redMaterial = new MeshLambertMaterial({ color: 0xdd1111 })
	const redShadedMaterial = new MeshLambertMaterial({ color: 0xcc0505 })
	const yellowMaterial = new MeshLambertMaterial({ color: "yellow" })

	const materials = [redMaterial, yellowMaterial, redShadedMaterial]

	// Mesh
	let mesh: Mesh
	const loader = new JSONLoader(loadingManager)
	loader.load('./assets/models/fez.json', geometry => {
		mesh = new Mesh(geometry, materials)
	})

	return
}

function loadScene() {
	// Lighting
	mainScene.add(hemisphereLight)

	// Meshes
	//mainScene.add(fez.mesh)
	grid.boxes.forEach(box => mainScene.add(box.mesh))
}

function init() {
	time = new Time
	loadFezMesh()
}

function animate() {
	const frame = requestAnimationFrame(animate)
	time.updateFrameTime()

	console.log(time.elapsedTime)

	grid.update(frame)
	renderer.render(mainScene, mainCamera)
}

init()