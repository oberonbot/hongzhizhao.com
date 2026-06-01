'use client';

import { useEffect, useRef, useState } from 'react';
import { usePalette } from '@/context/palette-context';
import { BackgroundPalette } from '@/lib/types';
import { cn } from '@/lib/utils';

const vertexShaderSource = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_top;
uniform vec3 u_bottom;
uniform vec3 u_accent;
uniform vec3 u_shadow;
uniform float u_grain;
uniform float u_noise_pixel_size;
varying vec2 v_uv;

mat2 rotate2d(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  float a = dot(hash(i + vec2(0.0, 0.0)) * 2.0 - 1.0, f - vec2(0.0, 0.0));
  float b = dot(hash(i + vec2(1.0, 0.0)) * 2.0 - 1.0, f - vec2(1.0, 0.0));
  float c = dot(hash(i + vec2(0.0, 1.0)) * 2.0 - 1.0, f - vec2(0.0, 1.0));
  float d = dot(hash(i + vec2(1.0, 1.0)) * 2.0 - 1.0, f - vec2(1.0, 1.0));

  return 0.5 + 0.5 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float filmGrainNoise(vec2 uv) {
  return length(hash(uv));
}

float gaussian(float z, float mean, float variance) {
  return (1.0 / (variance * sqrt(6.28318))) *
    exp(-(((z - mean) * (z - mean)) / (2.0 * variance * variance)));
}

void main() {
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = uv - 0.5;
  vec2 warped = p;

  float t = u_time * 0.5;
  float degree = noise(vec2(t * 0.05, warped.x * warped.y));

  warped.y /= aspect;
  warped *= rotate2d((degree - 0.5) * 12.56636 + 3.14159);
  warped.y *= aspect;

  float frequency = 5.0;
  float amplitude = 30.0;
  float speed = t * 2.0;
  warped.x += sin(warped.y * frequency + speed) / amplitude;
  warped.y += sin(warped.x * frequency * 1.5 + speed) / (amplitude * 0.5);

  vec3 layer1 = mix(
    u_accent,
    u_shadow,
    smoothstep(-0.3, 0.2, (warped * rotate2d(-0.0872665)).x)
  );
  vec3 layer2 = mix(
    u_bottom,
    u_top,
    smoothstep(-0.3, 0.2, (warped * rotate2d(-0.0872665)).x)
  );
  vec3 color = mix(layer1, layer2, smoothstep(0.5, -0.3, warped.y));

  vec2 glowUv = p;
  glowUv.x *= aspect;
  float glow = smoothstep(0.68, 0.0, length(glowUv - vec2(-0.12, 0.12)));
  color = mix(color, mix(color, u_top, 0.45), glow * 0.36);

  color -= filmGrainNoise(uv) * u_grain * 1.35;

  vec2 grainPixel = floor(gl_FragCoord.xy / u_noise_pixel_size);
  float grainFrame = floor(u_time * 9.0) / 9.0;
  float seed = dot(grainPixel, vec2(12.9898, 78.233));
  float grainNoise = fract(sin(seed) * 43758.5453 + grainFrame * 0.23);
  grainNoise = gaussian(grainNoise, 0.0, 0.25);

  vec3 grain = vec3(grainNoise) * (1.0 - color);
  color += grain * u_grain * 0.72;

  gl_FragColor = vec4(color, 0.94);
}
`;

const NOISE_PIXEL_SIZE = 1.35;
const PALETTE_LERP_AMOUNT = 0.035;
const MOTION_SPEED = 1.75;

function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string
) {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGLRenderingContext) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  const program = gl.createProgram();

  if (!program) {
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function lerp(current: number, target: number, amount: number) {
  return current + (target - current) * amount;
}

function toRgb(color: [number, number, number]) {
  return color.map((value) => Math.round(value * 255)).join(' ');
}

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { gradientPalette } = usePalette();
  const [isReady, setIsReady] = useState(false);
  const targetPaletteRef = useRef(gradientPalette);
  const isReadyRef = useRef(false);

  useEffect(() => {
    targetPaletteRef.current = gradientPalette;
  }, [gradientPalette]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl', {
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });

    if (!canvas || !gl) {
      return;
    }

    const program = createProgram(gl);

    if (!program) {
      return;
    }

    const positionBuffer = gl.createBuffer();
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const uniforms = {
      time: gl.getUniformLocation(program, 'u_time'),
      resolution: gl.getUniformLocation(program, 'u_resolution'),
      top: gl.getUniformLocation(program, 'u_top'),
      bottom: gl.getUniformLocation(program, 'u_bottom'),
      accent: gl.getUniformLocation(program, 'u_accent'),
      shadow: gl.getUniformLocation(program, 'u_shadow'),
      grain: gl.getUniformLocation(program, 'u_grain'),
      noisePixelSize: gl.getUniformLocation(program, 'u_noise_pixel_size'),
    };

    if (!positionBuffer || positionLocation < 0) {
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    let frame = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const initialPalette = targetPaletteRef.current;
    const palette: Pick<
      BackgroundPalette,
      'top' | 'bottom' | 'accent' | 'shadow' | 'grain'
    > = {
      top: [...initialPalette.top],
      bottom: [...initialPalette.bottom],
      accent: [...initialPalette.accent],
      shadow: [...initialPalette.shadow],
      grain: initialPalette.grain,
    };

    let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(window.innerWidth * pixelRatio);
      const height = Math.floor(window.innerHeight * pixelRatio);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const draw = (time: number) => {
      resize();
      const targetPalette = targetPaletteRef.current;

      for (const key of ['top', 'bottom', 'accent', 'shadow'] as const) {
        palette[key] = palette[key].map((value, index) =>
          lerp(value, targetPalette[key][index], PALETTE_LERP_AMOUNT)
        ) as [number, number, number];
      }
      palette.grain = lerp(
        palette.grain,
        targetPalette.grain,
        PALETTE_LERP_AMOUNT
      );

      gl.useProgram(program);
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      const seconds = reduceMotion.matches ? 0 : time * 0.001 * MOTION_SPEED;

      gl.uniform1f(uniforms.time, seconds);
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform3fv(uniforms.top, palette.top);
      gl.uniform3fv(uniforms.bottom, palette.bottom);
      gl.uniform3fv(uniforms.accent, palette.accent);
      gl.uniform3fv(uniforms.shadow, palette.shadow);
      gl.uniform1f(uniforms.grain, palette.grain);
      gl.uniform1f(uniforms.noisePixelSize, NOISE_PIXEL_SIZE * pixelRatio);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!isReadyRef.current) {
        isReadyRef.current = true;
        setIsReady(true);
      }

      frame = window.requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className={cn(
        'pointer-events-none fixed inset-0 z-0 h-dvh min-h-dvh w-full transition-opacity duration-700 ease-in',
        isReady ? 'opacity-90 dark:opacity-70' : 'opacity-0'
      )}
      style={{
        background: `
          radial-gradient(ellipse at 38% 24%, rgb(${toRgb(
            gradientPalette.top
          )} / 0.95), transparent 42%),
          radial-gradient(ellipse at 72% 18%, rgb(${toRgb(
            gradientPalette.accent
          )} / 0.72), transparent 46%),
          linear-gradient(135deg, rgb(${toRgb(
            gradientPalette.bottom
          )}), rgb(${toRgb(gradientPalette.shadow)}))
        `,
      }}
    />
  );
}
