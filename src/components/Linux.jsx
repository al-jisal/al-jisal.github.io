import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/linux.glb')
  console.log(nodes, materials); 

  return (
    <Float floatIntensity={1}>
      <group scale={0.04} {...props} dispose={null} rotation={[Math.PI / 2, Math.PI, -Math.PI]}>
        <mesh
          geometry={nodes['Tux-printable001_black001_0'].geometry}
          material={materials['black.001']}
        />
        <mesh
          geometry={nodes['Tux-printable001_orange001_0'].geometry}
          material={materials['orange.001']}
        />
        <mesh
          geometry={nodes['Tux-printable001_white001_0'].geometry}
          material={materials['white.001']}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')
export default ReactLogo;