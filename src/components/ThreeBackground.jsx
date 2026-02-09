import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

function FloatingParticles() {
    const ref = useRef();

    // Manual sphere point generation to avoid maath dependency issues during build
    const [sphere] = useState(() => {
        const points = new Float32Array(5000);
        for (let i = 0; i < 5000; i += 3) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = 1.5 * Math.pow(Math.random(), 1 / 3); // Distributed inside the sphere
            points[i] = r * Math.sin(phi) * Math.cos(theta);
            points[i + 1] = r * Math.sin(phi) * Math.sin(theta);
            points[i + 2] = r * Math.cos(phi);
        }
        return points;
    });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#4f46e5"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function AnimatedShape() {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.sin(time / 2) * 0.2;
        meshRef.current.rotation.y = Math.cos(time / 2) * 0.2;
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.2}>
                <MeshDistortMaterial
                    color="#4f46e5"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0}
                    metalness={1}
                />
            </Sphere>
        </Float>
    );
}

const BackgroundScene = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 1.5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <FloatingParticles />
                <AnimatedShape />
            </Canvas>
        </div>
    );
};

export default BackgroundScene;
