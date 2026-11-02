import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Network() {
  const group = useRef();

  const { points, lines } = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 90; i++) {
      pts.push(
        new THREE.Vector3()
          .randomDirection()
          .multiplyScalar(1 + Math.random() * 1.5)
      );
    }
    const seg = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 1.1) {
          seg.push(pts[i].x, pts[i].y, pts[i].z);
          seg.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    return {
      points: new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z])),
      lines: new Float32Array(seg),
    };
  }, []);

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.4,
      0.05
    );
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#22d3ee" size={0.07} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#22d3ee" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetwork() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ width: "100%", height: "100%" }}>
      <Network />
    </Canvas>
  );
}