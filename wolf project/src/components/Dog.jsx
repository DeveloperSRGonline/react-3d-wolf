import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const Dog = () => {
    useThree(({ camera, scene, gl }) => {
        console.log(camera.position)
    })
    return (
        <>
            <mesh>
                <meshBasicMaterial color={0x00FF00} />
                <boxGeometry args={[1, 1, 1]} />
            </mesh>
            <OrbitControls />
            {/* stopped at 1:07:52 */}
        </>
    )
}

export default Dog