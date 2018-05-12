import { BoxBufferGeometry, Mesh, Material, BufferGeometry, MeshLambertMaterial } from "three"
import { tween, easing } from 'popmotion'


export class Box {
	mesh: Mesh
	offset: number

	constructor(offset: number) {
		const geometry = new BoxBufferGeometry(3, 3, 3)
		const material = new MeshLambertMaterial

		this.mesh = new Mesh(geometry, material)
		this.offset = offset
	}

	update(frame: number) {
		if (this.mesh) {
			this.mesh.position.y = Math.sin(frame / 50 + this.offset) / 4

			if (frame % 120 === 0) this.rotate()
		}
	}

	rotate() {
		tween({
			from: this.mesh.rotation.y,
			to: this.mesh.rotation.y + Math.PI / 2,
			ease: easing.easeOut
		}).start((v: number) => { this.mesh.rotation.y = v })
	}
}