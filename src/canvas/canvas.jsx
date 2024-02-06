import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from "react";

import { OrbitControls } from "@react-three/drei";
import Scene from "../scene/scene";
import Camera from "../camera/camera";


export default function R3FCanvas({ children, ...props }) {

    // console.log('canvas');

    const cameraDefault = [0, 18.5, 5];
    const cameraTarget = [0, 18.5, 0];

    return (

        <Canvas
            camera={{ position: cameraDefault }}
        >
            <Suspense fallback={null}>

                {/* <pointLight position={[0, 18, 3]} intensity={2} /> */}
                {/* <ambientLight intensity={0.5} /> */}
                <spotLight
                    position={[0, 22, 3]}
                    angle={1}
                    penumbra={1}
                    intensity={1}
                    decay={0.1}
                    // castShadow
                    // shadow-mapSize-width={1028}
                    // shadow-mapSize-height={1028}
                />

                {/* <ambientLight /> */}
                {/* <Camera target={cameraTarget} /> */}

                {/* <pointLight position={[10, 10, 10]} /> */}
                <Scene />
                <OrbitControls target={cameraTarget} />
            </Suspense>
        </Canvas>
    )
}