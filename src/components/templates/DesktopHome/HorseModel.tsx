import { useEffect, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import type { Group } from "three";
import {
  Box3,
  DataTexture,
  Mesh,
  MeshToonMaterial,
  NearestFilter,
  RedFormat,
  Vector3,
} from "three";
import { cloudinary3dUrl } from "../../../lib/cloudinary";

export type HorseModelProps = {
  objPath?: string;
  color?: string;
  roughness?: number;
  metalness?: number;
  scale?: number;
  rotationSpeed?: number;
};

export function HorseModel({
  objPath = "/horse.obj",
  color = "#444444",
  roughness = 0.7,
  metalness = 0.1,
  scale = 2.3,
  rotationSpeed = 0.5,
}: HorseModelProps) {
  const resolvedPath = cloudinary3dUrl(objPath);
  const horse = useLoader(OBJLoader, resolvedPath) as Group;

  const material = useMemo(() => {
    const steps = 3;
    const data = new Uint8Array(steps);
    for (let i = 0; i < steps; i++) {
      data[i] = Math.round((i / (steps - 1)) * 255);
    }
    const gradientMap = new DataTexture(data, steps, 1, RedFormat);
    gradientMap.minFilter = NearestFilter;
    gradientMap.magFilter = NearestFilter;
    gradientMap.needsUpdate = true;

    return new MeshToonMaterial({ color, gradientMap });
  }, [color]);

  useEffect(() => {
    horse.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = material;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [horse, material]);

  useEffect(() => {
    const box = new Box3().setFromObject(horse);
    const center = new Vector3();
    box.getCenter(center);
    horse.position.sub(center);
  }, [horse]);

  useFrame((_, delta) => {
    horse.rotation.y += rotationSpeed * delta;
  });

  return (
    <primitive
      object={horse}
      scale={scale}
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
}
