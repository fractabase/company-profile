import { useEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 3D Geometric definition of the Architectural Fractal Crystalline Polyhedron
const OUTER_R = 95;
const INNER_R = 46;

// 6 Vertices of Outer Octahedral Crystal Frame
const OUTER_VERTICES = [
  { x: 0, y: -OUTER_R, z: 0, label: "V0_TOP" },
  { x: 0, y: OUTER_R, z: 0, label: "V1_BTM" },
  { x: -OUTER_R, y: 0, z: 0, label: "V2_LFT" },
  { x: OUTER_R, y: 0, z: 0, label: "V3_RGT" },
  { x: 0, y: 0, z: OUTER_R, label: "V4_FNT" },
  { x: 0, y: 0, z: -OUTER_R, label: "V5_BCK" },
];

// 12 Edges of Outer Octahedron
const OUTER_EDGES = [
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 4],
  [4, 3],
  [3, 5],
  [5, 2],
];

// 8 Triangular Faces of Outer Octahedron
const OUTER_FACES = [
  [0, 3, 4],
  [0, 2, 4],
  [1, 3, 4],
  [1, 2, 4],
  [0, 3, 5],
  [0, 2, 5],
  [1, 3, 5],
  [1, 2, 5],
];

// 8 Vertices of Inner Crystalline Cube Core
const INNER_VERTICES = [
  { x: -INNER_R, y: -INNER_R, z: -INNER_R },
  { x: INNER_R, y: -INNER_R, z: -INNER_R },
  { x: INNER_R, y: INNER_R, z: -INNER_R },
  { x: -INNER_R, y: INNER_R, z: -INNER_R },
  { x: -INNER_R, y: -INNER_R, z: INNER_R },
  { x: INNER_R, y: -INNER_R, z: INNER_R },
  { x: INNER_R, y: INNER_R, z: INNER_R },
  { x: -INNER_R, y: INNER_R, z: INNER_R },
];

// 12 Edges of Inner Cube Core
const INNER_EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

const Object3DSpace = () => {
  const containerRef = useRef(null);
  const crystalGroupRef = useRef(null);
  const [points, setPoints] = useState({
    outer: [],
    inner: [],
    faces: [],
  });

  const anglesRef = useRef({ ax: 0.3, ay: 0.4, az: 0.1 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animId;
    let isVisible = true;
    const fov = 400;
    const cx = 150;
    const cy = 150;

    // Pause animation loop when out of viewport using IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animId) {
          animId = requestAnimationFrame(renderLoop);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const project = (pt, ax, ay, az) => {
      // 3D rotation: Yaw (Y), Pitch (X), Roll (Z)
      const cosA = Math.cos(ax),
        sinA = Math.sin(ax);
      const cosB = Math.cos(ay),
        sinB = Math.sin(ay);
      const cosC = Math.cos(az),
        sinC = Math.sin(az);

      // Rotate around Y
      const x1 = pt.x * cosB + pt.z * sinB;
      const z1 = -pt.x * sinB + pt.z * cosB;

      // Rotate around X
      const y1 = pt.y * cosA - z1 * sinA;
      const z2 = pt.y * sinA + z1 * cosA;

      // Rotate around Z
      const x2 = x1 * cosC - y1 * sinC;
      const y2 = x1 * sinC + y1 * cosC;

      // Perspective scale factor
      const p = fov / (fov + z2 + 80);
      return {
        x: cx + x2 * p,
        y: cy + y2 * p,
        z: z2,
        scale: p,
      };
    };

    const renderLoop = () => {
      if (!isVisible) {
        animId = null;
        return;
      }

      anglesRef.current.ax += 0.007;
      anglesRef.current.ay += 0.009;
      anglesRef.current.az += 0.004;

      const { ax, ay, az } = anglesRef.current;

      const projOuter = OUTER_VERTICES.map((v) => project(v, ax, ay, az));
      const projInner = INNER_VERTICES.map((v) => project(v, -ax * 1.1, -ay * 1.1, az * 0.9));

      // Calculate faces depth and normal for back-face culling / subtle lighting
      const faceData = OUTER_FACES.map((faceIndices) => {
        const [i0, i1, i2] = faceIndices;
        const p0 = projOuter[i0];
        const p1 = projOuter[i1];
        const p2 = projOuter[i2];
        const avgZ = (p0.z + p1.z + p2.z) / 3;

        // Cross product for facing direction
        const cross = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);

        return {
          path: `M ${p0.x} ${p0.y} L ${p1.x} ${p1.y} L ${p2.x} ${p2.y} Z`,
          avgZ,
          isFront: cross < 0,
        };
      });

      setPoints({
        outer: projOuter,
        inner: projInner,
        faces: faceData,
      });

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    return () => {
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 sm:-top-40 sm:left-8 -z-5 select-none overflow-hidden flex items-center"
    >
      <div ref={crystalGroupRef} className="relative w-75 h-75 flex items-center justify-center will-change-transform">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full overflow-visible animate-rotation"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Horizon Guide Circle */}
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="var(--primary-color)"
            strokeWidth="0.5"
            strokeDasharray="4 6"
            className="opacity-30"
          />

          {/* 1. Outer Octahedral Faces (Subtle Facet Fills for Solid 3D Feeling) */}
          {points.faces.map((f, fIdx) => (
            <path
              key={`face-${fIdx}`}
              d={f.path}
              fill="var(--primary-color)"
              fillOpacity={f.isFront ? 0.08 : 0.02}
              stroke="none"
            />
          ))}

          {/* 2. Inner Cube Core Edges (Secondary Violet var(--secondary-color)) */}
          {INNER_EDGES.map(([i, j], eIdx) => {
            const p1 = points.inner[i];
            const p2 = points.inner[j];
            if (!p1 || !p2) return null;
            return (
              <line
                key={`inner-edge-${eIdx}`}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="var(--secondary-color)"
                strokeWidth="1.2"
                strokeDasharray="2 2"
                className="opacity-60"
              />
            );
          })}

          {/* 3. Outer Octahedral Wireframe Edges (Primary Cyan var(--primary-color)) */}
          {OUTER_EDGES.map(([i, j], eIdx) => {
            const p1 = points.outer[i];
            const p2 = points.outer[j];
            if (!p1 || !p2) return null;
            return (
              <line
                key={`outer-edge-${eIdx}`}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="var(--primary-color)"
                strokeWidth="1.5"
                className="opacity-80"
              />
            );
          })}

          {/* 4. Rays Connecting Outer Apex to Inner Core */}
          {points.outer.slice(0, 4).map((pOuter, rIdx) => {
            const pInner = points.inner[rIdx];
            if (!pOuter || !pInner) return null;
            return (
              <line
                key={`ray-${rIdx}`}
                x1={pOuter.x}
                y1={pOuter.y}
                x2={pInner.x}
                y2={pInner.y}
                stroke="var(--tertiary-color)"
                strokeWidth="0.8"
                className="opacity-40"
              />
            );
          })}

          {/* 5. Inner Core Node Vertices */}
          {points.inner.map((p, vIdx) => (
            <circle
              key={`inner-v-${vIdx}`}
              cx={p.x}
              cy={p.y}
              r={1.8 * (p.scale || 1)}
              fill="var(--secondary-color)"
              className="opacity-80"
            />
          ))}

          {/* 6. Outer Apex Node Vertices (Glowing Cyan) */}
          {points.outer.map((p, vIdx) => (
            <g key={`outer-v-${vIdx}`}>
              <circle cx={p.x} cy={p.y} r={3.5 * (p.scale || 1)} fill="var(--primary-color)" className="opacity-90" />
              <circle cx={p.x} cy={p.y} r={1.5 * (p.scale || 1)} fill="#ffffff" />
            </g>
          ))}

          {/* 7. Central Coordinate Nucleus (Solid Amber var(--tertiary-color)) */}
          <circle cx="150" cy="150" r="3.5" fill="var(--tertiary-color)" className="opacity-90" />
        </svg>

        {/* Micro Telemetry Coordinate Overlay */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-2 font-mono text-[9px] text-primary/70 tracking-widest uppercase whitespace-nowrap">
          ARCH_CORE // 3D_VECTOR_PRISM
        </div>
      </div>
    </div>
  );
};

export default memo(Object3DSpace);
