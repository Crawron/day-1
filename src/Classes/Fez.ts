import { Mesh } from "three"
import { Tween } from '@tweenjs/tween.js'
import { Box } from "./Box";


export class Fez extends Box {
	mesh: Mesh

	constructor(mesh: Mesh) {
		super()
		this.mesh = mesh
		this.tween = new Tween(this.mesh.rotation)
	}
}