import { Scene, AxesHelper } from "three"
import { hemisphereLight, directionalLight } from "./Lighting"


const helper = new AxesHelper(10)
export const mainScene = new Scene

mainScene.add(helper)
mainScene.add(hemisphereLight, directionalLight)