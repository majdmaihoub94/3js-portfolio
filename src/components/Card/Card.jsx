import React, { Suspense } from "react";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import styled from "styled-components";

export default function Card({ img }) {
  const Img = styled.img`
    height: 600px;
    width: 800px;
    object-fit: contain;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;
    @keyframes animate {
      to {
        transform: translateY(30px);
      }
    }
  `;
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.1}>
            <MeshDistortMaterial
              color="#e5a10e"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Suspense>
      </Canvas>
      <Img src={img} />
    </>
  );
}
