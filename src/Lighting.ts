import { HemisphereLight, DirectionalLight } from 'three'


export const hemisphereLight = new HemisphereLight(0xffeeff, 0x1010ff, 1.1)
hemisphereLight.position.set(5, 20, 10)