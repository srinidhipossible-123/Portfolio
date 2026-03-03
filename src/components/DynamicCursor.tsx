import { useEffect, useRef } from "react";

export const DynamicCursor = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let rafId = 0;

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const loop = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      if (ref.current) {
        ref.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    rafId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move as any);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="cursor-glow" aria-hidden />;
};


