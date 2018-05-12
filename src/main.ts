import { JSONLoader, MeshLambertMaterial, Mesh, LoadingManager, Scene, Geometry } from "three"
import { load, loadFezMesh } from "./helpers"

import { Fez } from "./Classes/Fez"
import { BoxGrid } from "./Classes/Grid"
import { Time } from "./Classes/Time"

import { hemisphereLight } from "./lighting"
import { renderer } from "./renderer"
import { mainCamera } from "./camera"


const mainScene = new Scene
let fez: Fez
let grid: BoxGrid
let time: Time

function loadScene() {
	// Lighting
	mainScene.add(hemisphereLight)

	// Meshes
	mainScene.add(fez.mesh)

	animate()
}

function init() {
	time = new Time
	loadFezMesh('./assets/models/fez.json').then(mesh => {
		fez = new Fez(mesh)
		loadScene()
	})
}


function animate() {
	requestAnimationFrame(animate)
	time.update()

	fez.animate(time.deltaTime)
	renderer.render(mainScene, mainCamera)
}

init()