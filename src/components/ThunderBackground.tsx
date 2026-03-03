import { useEffect, useState } from "react";
import moon from "@/assets/moon.jpg";

export const ThunderBackground = () => {
  const [, setFlashPositions] = useState<Array<{ id: number; left: string; delay: string }>>([]);

  useEffect(() => {
    // Generate random lightning bolt positions
    const positions = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setFlashPositions(positions);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Realistic lightning background */}
      <div className="absolute inset-0">
        <img 
          src={moon} 
          alt=""
          role="presentation"
          className="w-full h-full object-cover opacity-20 animate-thunder-pulse"
          style={{ animationDuration: "5s" }}
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-brom-background via-background/98 to-background" />
      </div>


      {/* Floating electric particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full animate-spark-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            background: i % 2 === 0 
              ? "hsl(var(--electric-yellow))" 
              : "hsl(var(--lightning-blue))",
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 2 + 2}s`,
            opacity: Math.random() * 0.25 + 0.05,
          }}
        />
      ))}

      {/* Electric grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/4 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: "0s", animationDuration: "4s" }} />
      <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-secondary/4 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: "1.5s", animationDuration: "4.5s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/4 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: "3s", animationDuration: "4s" }} />
    </div>
  );
};