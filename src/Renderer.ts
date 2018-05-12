import { WebGLRenderer } from "three"


export const renderer = new WebGLRenderer({ antialias: true })
renderer.setClearColor(0x11011E)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)