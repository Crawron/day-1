import { BoxBufferGeometry, Mesh, Material, BufferGeometry, MeshStandardMaterial } from "three"


class Box {
	mesh: Mesh

	constructor() {
		const geometry = new BoxBufferGeometry(1, 1, 1)
		const material = new MeshStandardMaterial({ color: 0x50bbff })
		this.mesh = new Mesh(geometry, material)
	}

	update() {
		this.mesh.rotateY(.01)
	}
}

export const box = new Box()