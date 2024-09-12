import React, { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

const StillTexture = ({ texturePath }: { texturePath: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  const { size, viewport } = useThree();
  const [planeSize, setPlaneSize] = useState<[number, number]>([1, 1]);

  useEffect(() => {
    // Handle texture size
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(texturePath, (texture) => {
      const aspectRatio = texture.image.width / texture.image.height;
      const canvasWidth = viewport.width;
      const canvasHeight = viewport.height;

      let width = canvasWidth;
      let height = width / aspectRatio;

      if (height > canvasHeight) {
        height = canvasHeight;
        width = height * aspectRatio;
      }
      setPlaneSize([width, height]);
    });
  }, [texturePath, size, viewport]);

  return (
    <Plane
      ref={meshRef}
      args={[planeSize[0] * 0.95, planeSize[1] * 0.95, 32, 32]}
      position={[
        viewport.width / 2 - planeSize[0] / 2,
        viewport.height / 2 - planeSize[1] / 2,
        0,
      ]}
    >
      <meshStandardMaterial attach="material" transparent>
        <primitive
          attach="map"
          object={new THREE.TextureLoader().load(texturePath)}
        />
      </meshStandardMaterial>
    </Plane>
  );
};

export default StillTexture;
