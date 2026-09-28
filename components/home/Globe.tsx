"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.24,
  dark: 1,
  diffuse: 2,
  mapSamples: 20000,
  mapBrightness: 5.99,
  baseColor: [110 / 255, 50 / 255, 150 / 255] as [number, number, number],
  markerColor: [0, 0, 0] as [number, number, number],
  glowColor: [79 / 255, 61 / 255, 112 / 255] as [number, number, number],
  markers: [],
  speed: 0.2,
  scale: 0.925,
  opacity: 1,
};

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: ReturnType<typeof createGlobe> | null = null;
    let width = canvas.offsetWidth;

    const onResize = () => {
      if (canvas && globe) {
        width = canvas.offsetWidth;
        globe.destroy();
        globe = createGlobe(canvas, {
          ...GLOBE_CONFIG,
          width: width * 2,
          height: width * 2,
        });
      }
    };

    globe = createGlobe(canvas, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
    });

    // cobe v2 dropped onRender — animate phi via update() on each frame
    let raf = 0;
    const tick = () => {
      if (!pointerInteracting.current) phiRef.current += 0.002;
      globe?.update({
        phi: phiRef.current + pointerInteractionMovement.current,
        width: width * 2,
        height: width * 2,
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      globe?.destroy();
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 800,
        aspectRatio: "1 / 1",
        margin: "0 auto",
        WebkitMaskImage:
          "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 70%)",
        maskImage:
          "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 70%)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          cursor: "grab",
          userSelect: "none",
        }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            pointerInteractionMovement.current = e.clientX - pointerInteracting.current;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            pointerInteractionMovement.current =
              e.touches[0].clientX - pointerInteracting.current;
          }
        }}
      />
    </div>
  );
}