import { WebGLRenderer } from "three"


export const renderer = new WebGLRenderer({ antialias: true })
renderer.setClearColor(0x18133f)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)