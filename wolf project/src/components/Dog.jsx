import { useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF,useTexture } from '@react-three/drei'
import * as THREE from "three"

const Dog = () => {

    const { scene } = useGLTF("/models/dog.drc.glb")

    useThree(({ camera, scene, gl }) => {
        camera.position.z = 0.75
    })

    const textures = useTexture({
        normalMap:"/dog_normals.jpg"
    })

    textures.normalMap.flipY = false

    // har ek object ke liye ek ek baar chalege
    scene.traverse((child)=>{
        if(child.name.includes("DOG")){
            child.material = new THREE.MeshMatcapMaterial({
                normalMap:textures.normalMap
            })
        }
    })
    return (
        <>
            <primitive object={scene} position={[0.25, -0.6, 0]} rotation={[0, Math.PI / 3.55, 0]} />
            <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
            <OrbitControls />
        </>
    )
}

export default Dog
// stopped at 1:50:44