import { Zap, Code2, Database, Rocket, Cloud, Brain, GraduationCap, School, BookOpen, Award } from "lucide-react";

type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  icon: any;
  level?: number; // Optional for academic
  subtitle?: string; // Additional info like institution
};

const technicalTimeline: TimelineEntry[] = [
  {
    year: "2023-24",
    title: "Frontend Foundation",
    description: "First year of engineering - HTML, CSS, JavaScript",
    icon: Code2,
    level: 70,
  },
  {
    year: "Late 2024",
    title: "Modern Web Dev",
    description: "React, TypeScript, Vite, Tailwind CSS, Bootstrap, Git & GitHub",
    icon: Code2,
    level: 80,
  },
  {
    year: "Early 2025",
    title: "Backend & Databases",
    description: "Python (FastAPI, Flask) and SQL Databases",
    icon: Database,
    level: 75,
  },
  {
    year: "Late 2025",
    title: "ML & Algorithms",
    description: "Machine Learning, Algorithms, and API Development",
    icon: Brain,
    level: 70,
  },
];

const academicTimeline: TimelineEntry[] = [
  {
    year: "2023-24",
    title: "B.Tech First Year",
    description: "Sem 1 (8.63 SGPA) & Sem 2 (8.78 SGPA). Core: C, Python, Data Structures, DBMS.",
    subtitle: "GM University",
    icon: School,
    level: 87,
  },
  {
    year: "2024-25",
    title: "B.Tech Second Year",
    description: "Sem 3 (8.94 SGPA) & Sem 4 (8.94 SGPA). Core: Algorithms, OOP, OS, Machine Learning.",
    subtitle: "GM University",
    icon: BookOpen,
    level: 89,
  },
  {
    year: "2025-26",
    title: "B.Tech Third Year",
    description: "Sem 5 (8.50 SGPA). Specialization: Advanced ML, Cloud Computing, Data Visualization.",
    subtitle: "GM University",
    icon: GraduationCap,
    level: 85,
  },
];

interface TechStackTimelineProps {
  mode?: "technical" | "academic";
}

export const TechStackTimeline = ({ mode = "technical" }: TechStackTimelineProps) => {
  const data = mode === "technical" ? technicalTimeline : academicTimeline;

  return (
    <div className="relative py-12">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2 hidden md:block" />
      
      <div className="relative space-y-12 max-w-4xl mx-auto">
        {data.map((entry, index) => {
          const Icon = entry.icon;
          const isLeft = index % 2 === 0;
          
          return (
            <div
              key={entry.year}
              className={`relative flex items-center gap-8 animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Year badge - centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 hidden md:flex shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <span className="text-xs font-bold text-primary text-center leading-tight px-1">{entry.year}</span>
              </div>
              
              {/* Content - alternating sides */}
              <div className={`w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'} order-2 md:order-${isLeft ? '1' : '2'}`}>
                <div className="bg-card/80 backdrop-blur-lg border border-primary/20 rounded-xl p-6 border-glow hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                  <div className={`flex items-center gap-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-glow transition-colors">
                        {entry.title}
                      </h3>
                      {entry.subtitle && (
                        <span className="text-xs text-primary/80 font-medium">{entry.subtitle}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{entry.description}</p>
                  
                  {entry.level !== undefined && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground">{mode === "academic" ? "Score/CGPA" : "Proficiency"}</span>
                        <span className="text-xs font-semibold text-primary">{entry.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full thunder-gradient transition-all duration-1000"
                          style={{ width: `${entry.level}%`, transitionDelay: `${index * 0.1}s` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Mobile year badge */}
              <div className={`w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 md:hidden order-1 ${isLeft ? 'order-1' : 'order-3'} shrink-0`}>
                <span className="text-[10px] font-bold text-primary text-center leading-tight px-1">{entry.year}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

