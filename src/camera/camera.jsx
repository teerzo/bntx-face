import { createRoot } from 'react-dom/client'
import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import * as THREE from "three";


export default function Camera({ target, ...props }) {

    console.log('camera', target);

    useThree((state) => {
        // state.camera.lookAt(new THREE.Vector3(target))
        // state.camera.up = new THREE.Vector3(0, 1, 0);
        // state.camera.updateProjectionMatrix()
    });

    return (
        <OrbitControls target={target} enabled={false} />
    )
}