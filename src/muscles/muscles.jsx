import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'


function Box(props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX
    return (

        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>

    )
}

export default function Muscles() {


    const [models, setModels] = useState([]);

    useEffect(() => {


        const fetchMuscles = async() => {
            try {
                const response = await fetch("./public/data/muscles.json");
                const muscles = await response.json();
                console.log(muscles);

                let _models = [];
                // function Scene() {
                //     const obj = useLoader(OBJLoader, '/Poimandres.obj')
                //     return <primitive object={obj} />
                //   }

                for (let i = 0; i < muscles.length; i++) {
                    for (let j = 0; j < muscles[i].models.length; j++) {
                        if (muscles[i].models[j].fileName) {
                            console.log('obj', muscles[i].models[j].fileName);
                            const obj = useLoader(OBJLoader, `./public/models/${muscles[i].models[j].fileName}`)
                            _models.push(obj);
                        }
                    }
                }
                setModels(_models);
                return true;
            }
            catch (error) {
                console.log('error', error);
            }


        }

        const result = fetchMuscles();
        console.log('result', result);


    }, []);

    console.log('muscles');

    return (

        <> </>

        // <Canvas>  
        //     <ambientLight />
        //     <pointLight position={[10, 10, 10]} />
        //     <Box position={[-1.2, 0, 0]} />
        //     <Box position={[1.2, 0, 0]} />
        // </Canvas>
    )
}