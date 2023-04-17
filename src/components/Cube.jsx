import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
} from "@react-three/drei";
import { Text } from "@react-three/drei";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#c1850c"]} />
          <Text ref={textRef} fontSize={1.3} color="black">
            Services
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};
export default Cube;
