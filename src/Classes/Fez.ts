import { Mesh } from "three"
//import TWEEN from '@tweenjs/tween.js'
import { Box } from "./Box";


export class Fez extends Box {
	constructor(mesh: Mesh) {
		super()
		this.mesh = mesh
	}
}