import { BoxBufferGeometry, Mesh, Material, BufferGeometry, MeshLambertMaterial } from "three"
import { Tween } from "@tweenjs/tween.js";


export class Box {
	mesh: Mesh
	tween: Tween

	constructor() {
		const geometry = new BoxBufferGeometry(3, 3, 3)
		const material = new MeshLambertMaterial

		this.mesh = new Mesh(geometry, material)
		this.tween = new Tween(this.mesh.rotation)
	}

	update(frame: number) {
		if (this.mesh) {
			this.mesh.rotateY(0.001)
		}
	}
}