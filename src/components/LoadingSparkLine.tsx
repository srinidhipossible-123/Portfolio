import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const LoadingSparkLine = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/30">
      <div
        className="h-full thunder-gradient transition-all duration-300 ease-out shadow-[0_0_10px_hsl(51_100%_50%_/_0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

