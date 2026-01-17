import * as THREE from "three"

// virtual world crate 
const scene = new THREE.Scene()

// to see world we need camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
// no unit in three js

// add camera to scene
scene.add(camera)

// Mesh - (Shape & Material)
// shape


