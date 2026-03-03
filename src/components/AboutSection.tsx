import { Zap, Sparkles, Target, Trophy, Cpu, Brain } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profilePlaceholder from "@/assets/sri.jpeg";
import realisticLightning from "@/assets/realistic-lightning.png";

/* ---------------- Scroll Animation Hook ---------------- */
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

/* ---------------- Feature Pill Component ---------------- */
type FeaturePillProps = {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  color?: "primary" | "secondary";
};

const FeaturePill = ({ icon: Icon, text, color = "primary" }: FeaturePillProps) => (
  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full 
    ${color === 'primary' 
      ? 'bg-primary/10 border border-primary/30 text-primary' 
      : 'bg-secondary/10 border border-secondary/30 text-secondary'
    } backdrop-blur-sm`}>
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

/* ---------------- Achievement Badge ---------------- */
type AchievementBadgeProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  color: string;
};

const AchievementBadge = ({ icon: Icon, title, subtitle, color }: AchievementBadgeProps) => (
  <div className="flex items-start gap-3 p-4 rounded-lg bg-linear-to-br from-background to-card border border-primary/10">
    <div className={`p-2 rounded-lg ${color} bg-opacity-20`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="font-semibold text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
    </div>
  </div>
);

/* ---------------- About Section ---------------- */
export const AboutSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Enhanced Background with Gradient Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-background via-primary/5 to-background" />
        <img
          src={realisticLightning}
          alt="Lightning background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12] scale-110"
        />
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* ---------- Section Header with Enhanced Typography ---------- */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-primary/50" />
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm uppercase tracking-widest font-semibold text-primary">
                  About Me
                </span>
                <Zap className="w-4 h-4 text-primary animate-pulse" />
              </div>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-primary/50" />
            </div>
          </div>

          {/* ---------- Main Content Grid ---------- */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* ---------- Profile Card ---------- */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="relative group">
                  {/* Glow Effect Container */}
                  <div className="absolute -inset-4 bg-linear-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Profile Image Container */}
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Animated Border Ring */}
                    <div className="absolute -inset-1 bg-linear-to-r from-primary via-secondary to-primary rounded-full opacity-30 animate-spin-slow" />
                    
                    {/* Main Profile Circle */}
                    <div className="relative w-full h-full rounded-full 
                      bg-linear-to-br from-card via-background to-card 
                      p-1 backdrop-blur-xl border border-primary/30
                      shadow-2xl shadow-primary/5">
                      <img
                        src={profilePlaceholder}
                        alt="Srinidhi S Joshi"
                        className="w-full h-full rounded-full object-cover border-4 border-background"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="mt-8 text-center space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground bg-clip-text bg-linear-to-r from-primary to-secondary">
                      Srinidhi S Joshi
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Data Science & Full Stack Developer
                    </p>
                  </div>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    <FeaturePill icon={Cpu} text="Machine Learning" />
                    <FeaturePill icon={Brain} text="AI & LLMs" color="secondary" />
                    <FeaturePill icon={Sparkles} text="Full Stack" />
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- About Content ---------- */}
            <div className="lg:col-span-2">
              <div
                ref={ref}
                className={`relative bg-linear-to-br from-card/80 via-background/80 to-card/80 
                backdrop-blur-xl rounded-2xl border border-primary/20 
                p-8 md:p-10 shadow-2xl shadow-primary/5
                transition-all duration-1000 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-primary/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-primary/20 rounded-br-2xl" />
                
                <div className="space-y-8">
                  {/* Introduction */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">
                        Professional Journey
                      </h3>
                    </div>
                    
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p className="text-foreground/90">
                        I'm a passionate <span className="font-semibold text-primary">Data Science student</span> with a 
                        strong interest in <span className="font-semibold text-secondary">Full Stack Development</span> and 
                        <span className="font-semibold text-primary"> Machine Learning</span>. My journey is focused on creating 
                        intelligent systems that bridge data insights with practical applications.
                      </p>
                      
                      <p className="text-foreground/90">
                        I specialize in building <span className="font-semibold text-primary">scalable, user-focused applications</span> 
                        by combining modern web technologies with data-driven architecture. My approach emphasizes 
                        clean code, robust infrastructure, and intuitive user experiences.
                      </p>
                      
                      <p className="text-foreground/90">
                        Currently exploring <span className="font-semibold text-secondary">Agentic AI systems</span> and 
                        <span className="font-semibold text-primary"> large language models</span>, with a focus on 
                        creating practical implementations that solve real-world challenges.
                      </p>
                    </div>
                  </div>

                  {/* Key Focus Areas */}
                  <div className="pt-8 border-t border-primary/10">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="w-5 h-5 text-primary" />
                      <h4 className="text-xl font-bold text-foreground">
                        Current Focus & Expertise
                      </h4>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-linear-to-br from-primary/5 via-transparent to-primary/5 border border-primary/10">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 rounded-lg bg-primary/20">
                            <Cpu className="w-4 h-4 text-primary" />
                          </div>
                          <h5 className="font-semibold text-foreground">Technical Stack</h5>
                        </div>
                        <ul className="space-y-2 text-sm text-foreground/80">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>LLMs & Agentic AI Systems</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span>Machine Learning & Deep Learning</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Full Stack Development</span>
                          </li>
                          {/* <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span>Cloud & Scalable Architecture</span>
                          </li> */}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-linear-to-br from-secondary/5 via-transparent to-secondary/5 border border-secondary/10">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 rounded-lg bg-secondary/20">
                            <Trophy className="w-4 h-4 text-secondary" />
                          </div>
                          <h5 className="font-semibold text-foreground">Achievements</h5>
                        </div>
                        <div className="space-y-3">
                          <AchievementBadge
                            icon={Trophy}
                            title="SIH Finalist 2024"
                            subtitle="National Level Finalist"
                            color="text-primary"
                          />
                          <AchievementBadge
                            icon={Trophy}
                            title="eRaksha Hackathon 2026"
                            subtitle="2nd Runner Up"
                            color="text-secondary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Philosophy */}
                  {/* <div className="pt-8 border-t border-primary/10">
                    <p className="text-lg italic text-center text-foreground/80 bg-linear-to-r from-primary/5 via-transparent to-primary/5 py-4 rounded-xl">
                      "Transforming complex data into intuitive solutions through 
                      <span className="font-semibold text-primary"> innovative engineering</span> and 
                      <span className="font-semibold text-secondary"> creative problem-solving</span>"
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to tailwind.config.js */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};