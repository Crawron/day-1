import { Scene, AxesHelper } from "three"
import { hemisphereLight } from "./Lighting"


export const mainScene = new Scene

mainScene.add(hemisphereLight)