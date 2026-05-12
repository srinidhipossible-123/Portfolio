import { useEffect, useState } from "react";
import professionalThunderLogo from "@/assets/professional-thunder-logo.jpeg";
import zenitsuVideo from "@/assets/zenitsu.mp4";

interface ThunderSplashProps {
  onComplete: () => void;
}

export const ThunderSplash = ({ onComplete }: ThunderSplashProps) => {
  const [phase, setPhase] = useState<"storm" | "logo" | "fade">("storm");
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    // Cinematic thunder flashes
    [700, 1900, 3200].forEach((t) =>
      setTimeout(() => {
        setFlash(true);
        setTimeout(() => setFlash(false), 120);
      }, t)
    );

    const t1 = setTimeout(() => setPhase("logo"), 1200);
    const t2 = setTimeout(() => setPhase("fade"), 5500);
    const t3 = setTimeout(onComplete, 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 bg-black ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 🌩 Zenitsu Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110"
        >
          <source src={zenitsuVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      {/* ⚡ Thunder Flash */}
      <div
        className={`absolute inset-0 bg-primary/20 transition-opacity duration-150 mix-blend-screen pointer-events-none ${
          flash ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Skip */}
      <button
        onClick={() => {
          setPhase("fade");
          setTimeout(onComplete, 300);
        }}
        className="absolute bottom-6 right-6 z-20 px-4 py-2 rounded-md bg-black/60 border border-primary/30 text-sm text-white hover:bg-black/80 transition"
      >
        Skip
      </button>

      {/* 🎯 Center Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <div
          className={`transition-all duration-1000 ${
            phase === "logo"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <div className="w-44 h-44 mx-auto rounded-full border border-primary/40 shadow-[0_0_40px_rgba(139,92,246,0.5)] overflow-hidden">
            <img
              src={professionalThunderLogo}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Divider */}
          <div className="mt-8 w-20 h-px mx-auto bg-primary/40" />

          {/* Quote */}
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light tracking-wide">
            Building ideas with precision and power.
          </p>
        </div>
      </div>
    </div>
  );
};
