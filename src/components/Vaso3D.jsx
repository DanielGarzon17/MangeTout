import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function VasoModel({ scale = 1, ...props }) {
  const group = useRef();
  // useFrame(() => {
  //   if (group.current) {
  //     group.current.rotation.y += 0.01;
  //   }
  // });
  const { scene } = useGLTF("/capuchino_assasino_3d_model_free/scene.gltf");
  // Eliminar proyección de sombras
  // scene.traverse((obj) => {
  //   if (obj.isMesh) {
  //     obj.castShadow = true;
  //     obj.receiveShadow = true;
  //   }
  // });
  return <primitive ref={group} object={scene} scale={scale} {...props} />;
}

const Vaso3D = ({ height = 500, scale = 0.4 }) => (
  <div style={{ width: "100%", height, background: "none", borderRadius: 24, overflow: "visible", margin: "0 auto" }}>
    <Canvas
      camera={{ position: [0, 2.2, 7], fov: 35 }}
      gl={{ alpha: true, preserveDrawingBuffer: true }}
      style={{ background: "none" }}
      // shadows
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0); // fondo transparente
        // gl.shadowMap.enabled = true;
        // gl.shadowMap.type = 2; // PCFSoftShadowMap
      }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight
        position={[0, 10, 10]}
        intensity={1.5}
        // castShadow
        // shadow-mapSize-width={1024}
        // shadow-mapSize-height={1024}
        // shadow-bias={-0.0005}
      />
      <pointLight position={[0, 5, 2]} intensity={1.2} color="#ffffff" />
      {/* Sombra eliminada */}
      <Suspense fallback={null}>
        <VasoModel scale={scale} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  </div>
);

export default Vaso3D; 