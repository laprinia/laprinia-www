"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import * as THREE from "three";
import { HalftoneGradientShader } from "./halftoneShader";

export type HalftoneEffectProps = {
  frequency?: number;
  dotScale?: number;
  angle?: number;
  colorStart?: string;
  colorEnd?: string;
};

const hexToVec3 = (hex: string): THREE.Vector3 => {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  return new THREE.Vector3(r, g, b);
};

export function HalftoneEffect({
  frequency = 80,
  dotScale = 1,
  angle = 0,
  colorStart = "#FFFFFF",
  colorEnd = "#0141D5",
}: {
  frequency: number;
  dotScale: number;
  angle: number;
  colorStart: string;
  colorEnd: string;
}) {
  const { gl, scene, camera, size } = useThree();
  const composerRef = useRef<EffectComposer | null>(null);
  const passRef = useRef<ShaderPass | null>(null);
  const renderTargetRef = useRef<THREE.WebGLRenderTarget | null>(null);

  useEffect(() => {
    const uniforms = THREE.UniformsUtils.clone(HalftoneGradientShader.uniforms);
    uniforms.width.value = size.width;
    uniforms.height.value = size.height;
    uniforms.colorStart.value = hexToVec3(colorStart);
    uniforms.colorEnd.value = hexToVec3(colorEnd);

    const pixelRatio = gl.getPixelRatio();
    const rt = new THREE.WebGLRenderTarget(
      size.width * pixelRatio,
      size.height * pixelRatio,
      { type: THREE.HalfFloatType, format: THREE.RGBAFormat },
    );
    renderTargetRef.current = rt;

    const composer = new EffectComposer(gl, rt);
    composer.addPass(new RenderPass(scene, camera));

    const halftonePass = new ShaderPass({
      uniforms,
      vertexShader: HalftoneGradientShader.vertexShader,
      fragmentShader: HalftoneGradientShader.fragmentShader,
    });
    halftonePass.material.transparent = true;
    halftonePass.material.depthWrite = false;
    halftonePass.renderToScreen = true;
    composer.addPass(halftonePass);

    composerRef.current = composer;
    passRef.current = halftonePass;

    return () => {
      composer.dispose();
      rt.dispose();
      composerRef.current = null;
      passRef.current = null;
      renderTargetRef.current = null;
    };
  }, [gl, scene, camera]);

  useEffect(() => {
    const composer = composerRef.current;
    const rt = renderTargetRef.current;
    if (!composer || !rt) return;
    const pixelRatio = gl.getPixelRatio();
    rt.setSize(size.width * pixelRatio, size.height * pixelRatio);
    composer.setSize(size.width, size.height);
    composer.setPixelRatio(pixelRatio);
    const pass = passRef.current;
    if (pass?.uniforms) {
      pass.uniforms.width.value = size.width;
      pass.uniforms.height.value = size.height;
    }
  }, [size, gl]);

  useEffect(() => {
    const pass = passRef.current;
    if (!pass?.uniforms) return;
    pass.uniforms.frequency.value = frequency;
    pass.uniforms.dotScale.value = dotScale;
    pass.uniforms.angle.value = angle;
    if (pass.uniforms.colorStart?.value)
      pass.uniforms.colorStart.value.copy(hexToVec3(colorStart));
    if (pass.uniforms.colorEnd?.value)
      pass.uniforms.colorEnd.value.copy(hexToVec3(colorEnd));
  }, [frequency, dotScale, angle, colorStart, colorEnd]);

  useFrame(() => {
    const composer = composerRef.current;
    if (!composer) return;
    gl.setClearColor(0x000000, 0);
    gl.clear(true, true, true);
    composer.render();
  }, 1);

  return null;
}
