export const HalftoneGradientShader = {
  uniforms: {
    tDiffuse: { value: null },
    width: { value: 1 },
    height: { value: 1 },
    frequency: { value: 80 },
    dotScale: { value: 1 },
    angle: { value: 0 },
    colorStart: { value: { x: 1, y: 1, z: 1 } },
    colorEnd: { value: { x: 1 / 255, y: 65 / 255, z: 213 / 255 } },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float width;
    uniform float height;
    uniform float frequency;
    uniform float dotScale;
    uniform float angle;
    uniform vec3 colorStart;
    uniform vec3 colorEnd;

    varying vec2 vUv;

    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      float sceneAlpha = tex.a;

      if (sceneAlpha < 0.01) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        return;
      }

      float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
      lum = pow(lum, 0.55);

      vec2 uv = vUv - 0.5;
      float c = cos(angle);
      float s = sin(angle);
      vec2 q = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c) + 0.5;

      vec2 cellCoord = q * frequency;
      vec2 cellUv = fract(cellCoord);
      float dist = distance(cellUv, vec2(0.5));

      float maxRadius = 0.5 * dotScale;
      float radius = maxRadius * (1.0 - lum);

      float delta = 0.02 * dotScale;
      float inDot = 1.0 - smoothstep(radius - delta, radius + delta, dist);

      // dark (lum=0) → colorEnd (#0141D5), bright (lum=1) → colorStart (#FFFFFF).
      vec3 dotColor = mix(colorEnd, colorStart, lum);
      vec3 col = mix(colorEnd, dotColor, inDot);

      float isWhite = step(0.99, col.r) * step(0.99, col.g) * step(0.99, col.b);
      float alpha = inDot * (1.0 - isWhite) * smoothstep(0.01, 0.05, sceneAlpha);

      gl_FragColor = vec4(col, alpha);
    }
  `,
};
