import { useEffect, useState } from "react";
import { ThunderBackground } from "./ThunderBackground";

interface LoaderProps {
  onComplete?: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5s
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Complete after fade out (total 3s)
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <ThunderBackground />
      
      <div className="relative z-10 loader">
        <span className="loader-bracket">&lt;</span>
        <span className="loader-text">LOADING</span>
        <span className="loader-bracket">/&gt;</span>
      </div>
    </div>
  );
};

export default Loader;
