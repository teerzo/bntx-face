import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from "react";

import { OrbitControls } from "@react-three/drei";
import Scene from "../scene/scene";


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

export default function R3FCanvas({ children, ...props }) {

    // console.log('canvas');

    return (

        <Canvas>
            <Suspense fallback={null}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {/* <Box position={[-1.2, 0, 0]} /> */}
                {/* <Box position={[1.2, 0, 0]} /> */}
                <Scene />
                <OrbitControls />
            </Suspense>
        </Canvas>
    )
}