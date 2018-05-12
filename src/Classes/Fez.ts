import { Mesh } from "three"
import { Box } from "./Box";


export class Fez extends Box {
	constructor(mesh: Mesh) {
		super(0, 0, 0)
		this.mesh = mesh
	}
}