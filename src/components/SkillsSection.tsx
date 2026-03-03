import { Zap } from "lucide-react";
import { useState } from "react";
import { TechStackTimeline } from "@/components/TechStackTimeline";

export const SkillsSection = () => {
  const [timelineMode, setTimelineMode] = useState<"technical" | "academic">("technical");

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Electric sparks in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/30 rounded-full animate-electric-rotate" />
        <div className="absolute bottom-1/3 right-20 w-32 h-32 border border-secondary/20 rounded-full animate-electric-rotate" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Zap className="w-6 h-6 animate-lightning-flash" />
            <span className="text-sm uppercase tracking-wider font-semibold">Skills</span>
            <Zap className="w-6 h-6 animate-lightning-flash" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">TECHNICAL</span>
            <br />
            <span className="text-primary">EXPERTISE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Timeline View */}
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setTimelineMode("technical")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${timelineMode === "technical" ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.3)] scale-105" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              Technical Journey
            </button>
            <button
              onClick={() => setTimelineMode("academic")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${timelineMode === "academic" ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.3)] scale-105" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              Academic Journey
            </button>
          </div>
          <TechStackTimeline mode={timelineMode} />
        </div>
      </div>
    </section>
  );
};