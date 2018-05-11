import { Scene, AxesHelper } from "three"
import { hemisphereLight, directionalLight } from "./Lighting"


export const mainScene = new Scene

mainScene.add(hemisphereLight, directionalLight)