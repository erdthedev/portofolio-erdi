import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'

function LaptopShape() {
  const groupRef = useRef(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = -0.45 + Math.sin(t * 0.6) * 0.18
    groupRef.current.rotation.x = 0.12 + Math.sin(t * 0.8) * 0.05
    groupRef.current.position.y = Math.sin(t * 1.2) * 0.08
  })

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.48, 0]}>
        <boxGeometry args={[3.2, 2, 0.12]} />
        <meshStandardMaterial color="#101827" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.48, 0.08]}>
        <boxGeometry args={[2.75, 1.55, 0.05]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.28} />
      </mesh>
      <mesh position={[0, -0.72, 0.75]} rotation={[1.1, 0, 0]}>
        <boxGeometry args={[3.55, 0.18, 1.9]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.5, 1.05]}>
        <torusGeometry args={[0.58, 0.018, 12, 80]} />
        <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={0.65} />
      </mesh>
    </group>
  )
}

function StarField() {
  const points = useRef(null)
  const positions = useMemo(() => {
    const values = new Float32Array(700 * 3)
    for (let i = 0; i < 700; i += 1) {
      values[i * 3] = (Math.random() - 0.5) * 26
      values[i * 3 + 1] = (Math.random() - 0.5) * 18
      values[i * 3 + 2] = (Math.random() - 0.5) * 18
    }
    return values
  }, [])

  useFrame((state) => {
    if (!points.current) return
    points.current.rotation.y = state.clock.getElapsedTime() * 0.025
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#bae6fd" transparent opacity={0.72} />
    </points>
  )
}

export default function Hero3D() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 5]} intensity={1.3} />
        <pointLight position={[-3, -2, 3]} intensity={1.4} color="#60a5fa" />
        <StarField />
        <LaptopShape />
      </Canvas>
    </div>
  )
}
