import { Mesh, Material, Geometry, MeshLambertMaterial, JSONLoader } from "three"
import { mainScene } from './Scene'


class Fez {
	mesh?: Mesh

	constructor() {
		// Material
		const redMaterial = new MeshLambertMaterial({ color: "red" })
		const yellowMaterial = new MeshLambertMaterial({ color: "yellow" })
		const shadedRedMaterial = new MeshLambertMaterial({ color: 0xaa0000 })

		const materials = [redMaterial, yellowMaterial, shadedRedMaterial]

		// Mesh
		const loader = new JSONLoader
		loader.load('./models/fez.json', (geometry: Geometry) => {
			this.mesh = new Mesh(geometry, materials)
			mainScene.add(this.mesh)
		})
	}

	update() {
		if (this.mesh)
			this.mesh.rotateY(.01)
	}
}

export const fez = new Fez()