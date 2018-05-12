import { Mesh, BoxGeometry, Vector3 } from "three"
import { Box } from "./Box";
import { Fez } from "./Fez";

export class BoxGrid {
	boxes: Array<Box>

	constructor(fez: Box) {
		this.boxes = new Array<Box>()

		for (let i = -10; i < 10; i++) {
			for (let j = -10; j < 10; j++) {
				let box = new Box(j * 30, 0, i * 30)

				if (i === 0 && j === 0)
					box = fez

				if (Math.random() > 0.01)
					this.boxes.push(box)
			}
		}
	}

	update(frame: number) {
		this.boxes.forEach(box => box.update(frame))
	}
}