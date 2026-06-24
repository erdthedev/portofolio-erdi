import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, RoundedBox, Stars } from '@react-three/drei'

function LaptopShape() {
  return (
    <Float speed={1.7} rotationIntensity={0.65} floatIntensity={0.8}>
      <group rotation={[0.12, -0.45, 0]}>
        <RoundedBox args={[3.2, 2, 0.12]} radius={0.08} position={[0, 0.45, 0]}>
          <meshStandardMaterial color="#101827" metalness={0.4} roughness={0.35} />
        </RoundedBox>
        <RoundedBox args={[2.75, 1.55, 0.05]} radius={0.04} position={[0, 0.45, 0.08]}>
          <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.28} />
        </RoundedBox>
        <RoundedBox args={[3.55, 0.18, 1.9]} radius={0.08} position={[0, -0.68, 0.75]} rotation={[1.1, 0, 0]}>
          <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.3} />
        </RoundedBox>
        <mesh position={[0, -0.5, 1.05]}>
          <torusGeometry args={[0.58, 0.018, 12, 80]} />
          <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={0.65} />
        </mesh>
      </group>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 5]} intensity={1.3} />
        <pointLight position={[-3, -2, 3]} intensity={1.4} color="#60a5fa" />
        <Stars radius={30} depth={18} count={850} factor={4} saturation={0} fade speed={0.55} />
        <LaptopShape />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.65} />
      </Canvas>
    </div>
  )
}
