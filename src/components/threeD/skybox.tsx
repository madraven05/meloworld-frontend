import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Skybox = () => {
  const { scene } = useGLTF("/autumn_forest_skybox.glb");
  const skyboxRef = useRef<THREE.Group>(null);

  // Optional: Slowly rotate skybox for effect
  //   useFrame(() => {
  //     if (skyboxRef.current) {
  //       skyboxRef.current.rotation.y += 0.0005;
  //     }
  //   });

  return (
    <group scale={0.02}>
      <primitive ref={skyboxRef} object={scene} />
    </group>
  );
};

export default Skybox;
