import React, { useEffect, useState } from 'react';

export const ThunderCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number, y: number, id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrail((prev) => [...prev.slice(-15), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Glowing Point */}
      <div 
        className="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] blur-[2px] transition-transform duration-75 ease-out shadow-[0_0_15px_var(--electric-yellow)]"
        style={{ 
          left: position.x - 8, 
          top: position.y - 8,
          transform: 'translate3d(0,0,0)'
        }} 
      />
      
      {/* Lightning Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-1 h-1 bg-secondary rounded-full pointer-events-none z-[9998] blur-[1px]"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            opacity: index / trail.length,
            scale: index / trail.length,
            transition: 'opacity 0.3s ease-out'
          }}
        />
      ))}

      {/* Outer Glow Ring */}
      <div 
        className="fixed w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9999] transition-all duration-150 ease-out"
        style={{ 
          left: position.x - 16, 
          top: position.y - 16,
          scale: '1.2'
        }} 
      />
    </>
  );
};
