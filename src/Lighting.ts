import { HemisphereLight, DirectionalLight } from 'three'


export const hemisphereLight = new HemisphereLight(0xffffff, 0x101010, 1)

export const directionalLight = new DirectionalLight(0xffffff)
directionalLight.position.set(0, 10, 2)