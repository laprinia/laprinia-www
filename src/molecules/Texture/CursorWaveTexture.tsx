import React, { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

const CursorWaveTexture = ({
  texturePath,
  isAutoAnimated = false,
  animationSpeed = 0.8,
}: {
  texturePath: string;
  isAutoAnimated?: boolean;
  animationSpeed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const targetIntensityRef = useRef(0);
  const canvasCenterRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const { size, viewport } = useThree();
  const [planeSize, setPlaneSize] = useState<[number, number]>([1, 1]);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(texturePath, (loadedTexture) => {
      loadedTexture.colorSpace = THREE.SRGBColorSpace;
      setTexture(loadedTexture);

      const aspectRatio =
        loadedTexture.image.width / loadedTexture.image.height;
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

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      canvasCenterRef.current = {
        x: size.width / 2,
        y: size.height / 2,
      };

      const distance = Math.sqrt(
        Math.pow(clientX - canvasCenterRef.current.x, 2) +
          Math.pow(clientY - canvasCenterRef.current.y, 2),
      );
      const maxDistance = Math.sqrt(
        Math.pow(viewport.width / 2, 2) + Math.pow(viewport.height / 2, 2),
      );

      const newTargetIntensity = (distance * 0.5) / maxDistance / 200;
      targetIntensityRef.current = Math.max(0.01, newTargetIntensity);
    };

    if (!isAutoAnimated) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      targetIntensityRef.current = animationSpeed;
    }

    return () => {
      if (!isAutoAnimated) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [texturePath, size, viewport, isAutoAnimated]);

  useFrame(() => {
    const mesh = meshRef.current;
    if (mesh && mesh.geometry) {
      const positions = mesh.geometry.attributes.position;
      const time = Date.now() * 0.001;

      for (let i = 0; i < positions.count; i++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positions, i);

        const waveX1 = 0.5 * Math.sin(vertex.x + time * 2);
        const waveX2 = 0.25 * Math.sin(vertex.x * 1.5 + time);
        const waveY1 = 0.25 * Math.sin(vertex.y * 2.5 + time * 2);

        vertex.z = targetIntensityRef.current * (waveX1 + waveX2 + waveY1);

        positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }

      positions.needsUpdate = true;
    }
  });

  if (!texture) {
    return null;
  }

  return (
    <Plane
      ref={meshRef}
      args={[planeSize[0] * 0.8, planeSize[1] * 0.95, 32, 32]}
      position={
        isAutoAnimated
          ? [0, 0, 0]
          : [
              viewport.width / 2 -
                planeSize[0] / 2 +
                planeSize[1] * (animationSpeed === 0.8 ? 0 : 0.15),
              -viewport.height / 2 + planeSize[1] / 2 + planeSize[1] * 0.0005,
              0,
            ]
      }
    >
      <meshStandardMaterial map={texture} transparent />
    </Plane>
  );
};

export default CursorWaveTexture;
