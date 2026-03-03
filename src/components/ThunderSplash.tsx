import { useEffect, useState } from "react";
import realisticLightning from "@/assets/realistic-lightning.png";
import professionalThunderLogo from "@/assets/professional-thunder-logo.jpeg";

interface ThunderSplashProps {
  onComplete: () => void;
}

export const ThunderSplash = ({ onComplete }: ThunderSplashProps) => {
  const [phase, setPhase] = useState<"storm" | "logo" | "fade">("storm");
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    // Cinematic thunder flashes
    [700, 1900].forEach((t) =>
      setTimeout(() => {
        setFlash(true);
        setTimeout(() => setFlash(false), 120);
      }, t)
    );

    const t1 = setTimeout(() => setPhase("logo"), 900);
    const t2 = setTimeout(() => setPhase("fade"), 3600);
    const t3 = setTimeout(onComplete, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 🌩 Storm Background */}
      <div className="absolute inset-0">
        <img
          src={realisticLightning}
          alt=""
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* ⚡ Thunder Flash */}
      <div
        className={`absolute inset-0 bg-primary/30 transition-opacity duration-150 ${
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
