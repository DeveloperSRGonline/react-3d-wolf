import * as THREE from "three"; // saari chijo ko import kar three naam se

// step - 1 : scene create karna
const scene = new THREE.Scene(); // ek scene ya hum bol sakte hai ek new world create kar chuke ho

// virtual world ke andar kya chal raha hai us chij ko dekhne ke liye hum camera ka use karte hai
//step - 2 : camera create karna
// camera bhi alag alag tarike ke hote hai abhi hum sirf perspective use karenge
// ye 4 chije mangta hai (parameters)
// PerspectiveCamera(FOV,aspectRatio,near)
// near value : less than this camera ignore it 
// far value : more than this camera igonre it
// in three js there is not unit only numbers
const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000)

// camera and mesh ek hi jagah pe hai is liye camera ki position ko thoda sift kar rahe hai
camera.position.z = 5;

// ab scene ke andar camera ko add karna padega
scene.add(camera)

// mesh - two things : 1.shape , 2.material

const cubeGeometry = new THREE.BoxGeometry(1,1,1)

// ab cube ka material kya hoga
const cubeMaterial = new THREE.MeshStandardMaterial({
    color:0x00ff00
})

const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)

// is cube ko bhi scene mein add
scene.add(cube)

// now we create light
// DirectionalLight(color,intensity)
const light = new THREE.DirectionalLight(0xffffff,1)

light.position.y = 4;
light.position.z = 4;

// light ko scene mein
scene.add(light)

// scene me jo bhi calculation means object par light padegi toh us ka behaviorr and all
// ab render create karenge
const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth,innerHeight)


document.body.appendChild(renderer.domElement) 
// webjs renderer 1s mein 16 bar update karta hai

function animate(){
    renderer.render(scene,camera)
    // jab bhi render function call hota hai toh vo calculation karta hai saar chije
}

// setanimationloop ke andar jo bhi raheta hai ye use baar baar call karta raheta hai
renderer.setAnimationLoop(animate)

// ab kuchh visible kyo nahi hai kyoki camera and scene ek hi jagah pe hai