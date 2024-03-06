import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useGraph } from '@react-three/fiber'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'



export default function Mesh(data, ...props) {

    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX



    const MeshGroup = () => {
        // console.log('mesh group', data.data);
        // const materials = useLoader(MTLLoader, "Poimandres.mtl");
        if (!data.data.fileName) {
            return null
        }


        const obj = useLoader(OBJLoader, `./obj/${data.data.fileName}`, (loader) => {
            // materials.preload();
            // loader.setMaterials(materials);
            // console.log('obj', loader);
        });
        const { nodes, materials } = useGraph(obj)

        // console.log(obj, nodes, materials);
        // return <primitive object={obj} scale={0.4} />;


        // console.log('nodes', Object.keys(nodes));

        const firstNode = Object.keys(nodes)[0];


        if (data.data.fileName === 'male_body.obj') {
            console.log('data', data);
        }

        if (nodes[firstNode] && nodes[firstNode].geometry) {
            // return <mesh geometry={nodes.Skull_High_Res.geometry} material={materials.metal} />
            return (
                <mesh
                    ref={meshRef}
                    geometry={nodes[firstNode].geometry}
                    onClick={(event) => setActive(!active)}
                    onPointerOver={(event) => setHover(true)}
                    onPointerOut={(event) => setHover(false)}>

                    {data.data.fileName === 'male_body.obj' ?
                        <meshPhongMaterial color={'#eda4a4'} transparent={true} opacity={0.5} />
                        :
                        <meshPhongMaterial color={'#d9d0b8'} emissive={hovered ? '#770000' : '#000000'} />
                    }
                    {/* <meshPhongMaterial color={'#d9d0b8'} emissive={hovered ? '#770000' : '#000000'}  /> */}
                </mesh>
            )
        }
        else {
            // return <primitive object={obj} scale={0.4} />;
            return <> </>
        }
    }

    return (
        <MeshGroup />
    )
}