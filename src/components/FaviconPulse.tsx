import { useEffect } from "react";

export const FaviconPulse = () => {
  useEffect(() => {
    const updateFavicon = (opacity: number) => {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (!link) return;

      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Create a simple lightning bolt icon
      ctx.fillStyle = `rgba(255, 204, 0, ${opacity})`;
      ctx.beginPath();
      ctx.moveTo(16, 4);
      ctx.lineTo(10, 16);
      ctx.lineTo(14, 16);
      ctx.lineTo(8, 28);
      ctx.lineTo(16, 20);
      ctx.lineTo(12, 20);
      ctx.lineTo(22, 16);
      ctx.lineTo(18, 16);
      ctx.lineTo(24, 4);
      ctx.closePath();
      ctx.fill();

      // Add glow effect
      ctx.shadowColor = `rgba(255, 204, 0, ${opacity * 0.8})`;
      ctx.shadowBlur = 8;
      ctx.fill();

      link.href = canvas.toDataURL();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden, restore normal favicon
        updateFavicon(1);
      } else {
        // Tab regains focus, pulse animation
        let opacity = 1;
        const pulse = setInterval(() => {
          opacity = opacity === 1 ? 0.3 : 1;
          updateFavicon(opacity);
          setTimeout(() => {
            clearInterval(pulse);
            updateFavicon(1); // Restore normal
          }, 2000); // Pulse for 2 seconds
        }, 200);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleVisibilityChange);
    };
  }, []);

  return null;
};

