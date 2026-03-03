import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Home } from "lucide-react";
import { ThunderBackground } from "@/components/ThunderBackground";

const NotFound = () => {
  const location = useLocation();
  const [showCrack, setShowCrack] = useState(true);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    // Lightning crack animation
    setTimeout(() => setShowCrack(false), 600);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <ThunderBackground />
      
      <div className="relative z-10 text-center px-4 animate-fade-in">
        {/* Lightning crack effect */}
        {showCrack && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-8xl font-bold text-primary text-glow animate-thunder-crack">
              ⚡
            </div>
          </div>
        )}

        {/* 404 Content */}
        <div className={`transition-opacity duration-500 ${showCrack ? "opacity-0" : "opacity-100"}`}>
          <h1 className="text-8xl md:text-9xl font-bold mb-4 text-glow animate-fade-in">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            LIGHTNING STRUCK
            <br />
            <span className="text-primary">THE WRONG PATH</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            The page you're looking for doesn't exist. Let's get you back on track with the power of thunder!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 border-glow group shadow-lg"
            >
              <Link to="/">
                <Zap className="mr-2 w-5 h-5 group-hover:animate-lightning-flash" />
                Return to Power ⚡
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary/10"
            >
              <Link to="/">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
