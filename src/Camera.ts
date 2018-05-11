import { OrthographicCamera, Vector3 } from "three"

const zoom = .03
const xRadius = window.innerWidth / 2 * zoom
const yRadius = window.innerHeight / 2 * zoom

export const mainCamera = new OrthographicCamera(-xRadius, xRadius, yRadius, -yRadius)

mainCamera.position.set(15, 15, 15)
mainCamera.lookAt(new Vector3(0, 0, 0))
