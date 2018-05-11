import { Fez } from "./Fez"
import { JSONLoader, MeshLambertMaterial, Mesh, LoadingManager } from "three"
import { animate } from "./Animate"


export let fez: Fez

const loadingManager = new LoadingManager
loadingManager.onProgress = animate

export function init() {
	loadFezMesh()
}

function loadFezMesh() {
	// Materials
	const redMaterial = new MeshLambertMaterial({ color: "red" })
	const redShadedMaterial = new MeshLambertMaterial({ color: 0xcc0000 })
	const yellowMaterial = new MeshLambertMaterial({ color: "yellow" })

	const materials = [redMaterial, yellowMaterial, redShadedMaterial]

	// Mesh
	const loader = new JSONLoader(loadingManager)
	loader.load('./assets/models/fez.json', geometry => {
		fez = new Fez(new Mesh(geometry, materials))
	})
}