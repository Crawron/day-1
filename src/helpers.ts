import { Geometry, JSONLoader, MeshLambertMaterial, Mesh } from "three"

export function load(path: string): Promise<Geometry> {
	const loader = new JSONLoader()

	return new Promise((resolve, reject) => {
		loader.load(path, resolve, undefined, reject)
	})
}

export function loadFezMesh(path: string): Promise<Mesh> {
	// Materials
	const redMaterial = new MeshLambertMaterial({ color: 0xdd1111 })
	const redShadedMaterial = new MeshLambertMaterial({ color: 0xcc0505 })
	const yellowMaterial = new MeshLambertMaterial({ color: "yellow" })

	const materials = [redMaterial, yellowMaterial, redShadedMaterial]

	// Mesh
	const handleGeometry = (geometry: Geometry) => {
		return new Mesh(geometry, materials)
	}

	return load(path).then(handleGeometry)
}

enum Easing {
	Linear,
	Cubic
}

interface TweeningParams {
	from: number | Array<number>
	to: number | Array<number>
	time: number

	duration?: number
	easing: string
}

export function tween(params: TweeningParams) {

}