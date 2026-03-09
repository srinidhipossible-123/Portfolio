import moon from "@/assets/moon.jpg";

export const ThunderBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={moon}
        alt=""
        role="presentation"
        className="w-full h-full object-cover opacity-20"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
    </div>
    {/* Minimal particles for theme (reduced for scroll performance) */}
    {[0, 1, 2, 3].map((i) => (
      <div
        key={`p-${i}`}
        className="absolute rounded-full w-1 h-1 bg-primary/10"
        style={{
          left: `${20 + i * 25}%`,
          top: `${30 + (i % 2) * 40}%`,
          animation: "spark-float 4s ease-in-out infinite",
          animationDelay: `${i * 0.5}s`,
        }}
      />
    ))}
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/4 rounded-full blur-2xl" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/4 rounded-full blur-2xl" />
  </div>
);