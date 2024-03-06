import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useGraph } from '@react-three/fiber'

// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
// import { useLoader } from '@react-three/fiber'

import Mesh from './mesh';


export default function Misc(data, ...props) {

    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX


    const [meshes, setMeshes] = useState([]);

    useEffect(() => {
        
        const _models = data.data.models;
        // console.log('muscle', _models);
        if (_models) {
            let _meshes = [];
            for (let i = 0; i < _models.length; i++) {
                _meshes.push(_models[i])
            }

            setMeshes(_meshes);
        }
    }, [data])

    return (
        <>
            {/* {...meshes} */}

            {meshes.map((item, key) => {
                return <Mesh key={key} data={item} />
            })}
        </>
    )
}