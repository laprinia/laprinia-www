import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { HorseModel } from "./HorseModel";
import { HalftoneEffect } from "./HalftoneEffect";
import type { HorseModelProps } from "./HorseModel";
import type { HalftoneEffectProps } from "./HalftoneEffect";

export function HorseCanvas({
  horse,
  halftone,
  ambientIntensity = 0.22,
  keyLightIntensity = 5.0,
  fillLightIntensity = 0.25,
}: {
  horse?: HorseModelProps;
  halftone?: HalftoneEffectProps;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
}) {
  return (
    <Canvas
      gl={{
        antialias: true,
        alpha: true,
        premultipliedAlpha: false,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      camera={{ position: [0, 0, 4], fov: 45 }}
    >
      <ambientLight intensity={ambientIntensity} />
      <directionalLight
        position={[2, 3, 4]}
        intensity={keyLightIntensity}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0005}
      />
      <directionalLight position={[-1, 1, 2]} intensity={fillLightIntensity} />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0} transparent />
      </mesh>
      <HorseModel {...horse} />
      <OrbitControls
        target={[0, 0, 0]}
        enableZoom
        enablePan
        minDistance={2}
        maxDistance={12}
      />
      <HalftoneEffect
        frequency={150}
        dotScale={1.0}
        angle={0}
        colorStart="#FFFFFF"
        colorEnd="#0141D5"
        {...halftone}
      />
    </Canvas>
  );
}
