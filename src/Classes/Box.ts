import { BoxBufferGeometry, Mesh, Material, BufferGeometry, MeshLambertMaterial, Vector3 } from "three"
import { Time } from "./Time"


export class Box {
	turns = 0
	offset: number
	rotating = false

	mesh: Mesh
	time = new Time()

	constructor(x: number, y: number, z: number) {
		const geometry = new BoxBufferGeometry(3, 3, 3)
		const material = new MeshLambertMaterial({ color: `hsl(${Math.random() * 255},50%,${Math.round(Math.random() * 65 + 25)}%)` })

		this.mesh = new Mesh(geometry, material)
		this.mesh.position.set(x, y, z)

		this.offset = this.mesh.position.distanceTo(new Vector3(0, 0, 0)) * 2

		this.rotate()
	}

	/** Gets called every frame */
	animate(time: number) {
		this.time.update()
		const oscilationSpeed = .002
		const amplitude = .25

		time += this.offset
		time *= -oscilationSpeed

		this.mesh.position.y = Math.sin(time) * amplitude
		if (!this.rotating) this.rotate()
	}

	rotate() {
		this.rotating = true
		console.log("turning")

	}
}