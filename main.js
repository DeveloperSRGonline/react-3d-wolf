import * as THREE from "three"

// virtual world crate 
const scene = new THREE.Scene()

// to see world we need camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
// Create a Three.js scene with a spinning green cube and a directional light
