"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Shape1() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={[-4, 2, -5]} scale={1.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color="#1F4A96" distort={0.4} speed={2} roughness={0.2} metalness={0.1} />
      </mesh>
    </Float>
  );
}

function Shape2() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={mesh} position={[5, -2, -6]} scale={1.2}>
        <capsuleGeometry args={[0.5, 1, 4, 16]} />
        <meshStandardMaterial color="#C3C15B" roughness={0.3} metalness={0.2} />
      </mesh>
    </Float>
  );
}

function Shape3() {
  return (
    <Float speed={1.2} rotationIntensity={1} floatIntensity={1}>
      <mesh position={[0, -4, -8]} scale={2}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshDistortMaterial color="#ECE9E1" distort={0.2} speed={1.5} roughness={0.4} />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Shape1 />
          <Shape2 />
          <Shape3 />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
