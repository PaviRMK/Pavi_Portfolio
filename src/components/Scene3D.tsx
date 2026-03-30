import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function FloatingShape({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={position} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.8, 0.3, 16, 32]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.2}
          speed={3}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position}>
        <octahedronGeometry args={[0.7]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2.5}
          roughness={0.1}
          metalness={0.95}
        />
      </mesh>
    </Float>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-5 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4ff" />
          
          <FloatingShape position={[-4, 2, -2]} color="#00d4ff" scale={0.8} />
          <FloatingShape position={[4, -1, -3]} color="#ffffff" scale={0.6} />
          <FloatingTorus position={[3, 2, -1]} color="#00d4ff" />
          <FloatingOctahedron position={[-3, -2, -2]} color="#8dd4ff" />
          <FloatingShape position={[0, -3, -4]} color="#00d4ff" scale={0.5} />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
