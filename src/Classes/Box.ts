import { BoxBufferGeometry, Mesh, Material, BufferGeometry, MeshLambertMaterial, Vector3 } from "three"
import { tween, easing } from 'popmotion'


export class Box {
	mesh: Mesh
	turns: number
	offset: number

	constructor(x: number, y: number, z: number) {
		const geometry = new BoxBufferGeometry(3, 3, 3)
		const material = new MeshLambertMaterial({ color: `hsl(${Math.random() * 255},50%,${Math.round(Math.random() * 65 + 25)}%)` })

		this.mesh = new Mesh(geometry, material)
		this.mesh.position.set(x, y, z)
		this.turns = 0

		this.offset = this.mesh.position.distanceTo(new Vector3(0, 0, 0))
		setTimeout(() =>
			setInterval(() => {
				this.rotate()
				this.turns++
			}, 2000), this.offset * 5)
	}

	update(frame: number) {
		if (this.mesh) {
			this.mesh.position.y = Math.sin((-frame + this.offset) / 50) / 4
		}
	}

	rotate() {
		tween({
			from: this.turns * Math.PI / 2,
			to: (this.turns + 1) * Math.PI / 2,
			ease: easing.easeOut,
			duration: 700
		}).start((v: number) => { this.mesh.rotation.y = v })
	}
}