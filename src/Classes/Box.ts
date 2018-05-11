import { BoxBufferGeometry, Mesh, Material, BufferGeometry, MeshStandardMaterial } from "three"
import { Tween } from "@tweenjs/tween.js";


export class Box {
	mesh: Mesh
	tween: Tween

	constructor() {
		const geometry = new BoxBufferGeometry(1, 1, 1)
		const material = new MeshStandardMaterial({ color: 0x50bbff })

		this.mesh = new Mesh(geometry, material)
		this.tween = new Tween(this.mesh.rotation)
	}

	update(frame: number) {
		if (this.mesh) {
			this.mesh.rotateY(0.001)
		}
	}
}