import { Mesh, Material, Geometry, MeshLambertMaterial, JSONLoader, CubicInterpolant } from "three"
import { mainScene } from './Scene'
import { Tween } from '@tweenjs/tween.js'


export class Fez {
	mesh: Mesh
	tween: Tween

	constructor(mesh: Mesh) {
		this.mesh = mesh
		mainScene.add(this.mesh)

		this.tween = new Tween(this.mesh.rotation)
	}

	update(frame: number) {
		if (this.mesh) {
			this.mesh.rotateY(0.001)
		}
	}
}