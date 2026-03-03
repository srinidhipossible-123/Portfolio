import { ArrowRight, ExternalLink, Github, Zap, User, Users, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import llbImg from "@/assets/llb.png";
import dataImg from "@/assets/data.png";
import bioImg from "@/assets/bio.png";
import civilImg from "@/assets/civil.png";
import leadImg from "@/assets/lead.png";
import portImg from "@/assets/port.png";

const projects = [
  {
    title: "G M School of Law — GM University",
    description:
      "Official academic web platform for the School of Law at GM University. The website acts as a central digital hub for law students, faculty, legal professionals, and prospective applicants.",
    tech: ["HTML5", "CSS3", "JavaScript", "University CMS", "Responsive UI"],
    image: llbImg,
    role: "Full-Stack Web Developer",
    year: "2024–2025",
    impact: "Live Production System",
    demo: "https://gmu.ac.in/LLb/",
    code: "",
    mode: "industry",
  },
  {
    title: "GMU DS & IoT Department Website",
    description:
      "Official institutional website for the Department of Data Science & IoT at GM University, hosted on the university domain and used by students, faculty, applicants, and industry partners.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Accessibility"],
    image: dataImg,
    role: "Full-Stack Web Developer (Team Project)",
    year: "2024–2025",
    impact: "Live on GM University official domain",
    demo: "https://gmu.ac.in/data_science/",
    code: "",
    mode: "industry",
  },
  {
    title: "GMU Biotechnology Department Website",
    description:
      "Official academic website for the Department of Biotechnology at GM University, providing programs, research, faculty, labs, student projects, and achievements on the university’s main portal.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Accessibility"],
    image: bioImg,
    role: "Full-Stack Web Developer (Industry Collaboration)",
    year: "2024–2025",
    impact: "Live production site on GM University portal",
    demo: "https://gmu.ac.in/biotech/",
    code: "",
    mode: "industry",
  },
  {
    title: "GMU Civil Engineering Department Website",
    description:
      "Official academic website for the Department of Civil Engineering at GM University, centralizing programs, labs, faculty, infrastructure, and student achievements for real-world academic use.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI", "Accessibility"],
    image: civilImg,
    role: "Full-Stack Web Developer (Industry Collaboration)",
    year: "2024–2025",
    impact: "Live production portal for Civil Engineering department",
    demo: "https://civil-dept.netlify.app/",
    code: "https://github.com/srinidhipossible-123/civil-department.git",
    mode: "industry",
  },
  {
    title: "Ignitron 2K25 – General Championship Leaderboard System",
    description:
      "Real-time, event-grade web application developed in collaboration with the IGNITRON 2K25 Tech Fest at GM University. Centralized score tracking platform.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Vercel"],
    image: leadImg,
    role: "Full-Stack Developer",
    year: "2025",
    impact: "Used by Ignitron 2K25 organizers",
    demo: "https://ignitron-leaderboard.vercel.app/",
    code: "https://github.com/srinidhipossible-123/IgnitronLeaderboard.git",
    mode: "industry",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An NLP-powered web application that automatically evaluates resumes, extracts skills, and generates intelligent scoring and improvement recommendations for job seekers and recruiters.",
    tech: ["Python", "Flask", "NLP", "Scikit-Learn", "HTML5", "CSS3", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    role: "Sole Developer",
    year: "2024",
    impact: "Automated Resume Screening",
    demo: "#",
    code: "#",
    mode: "personal",
  },
  {
    title: "Portfolio Website",
    description:
      "This responsive portfolio website featuring modern animations, optimized performance, and seamless user experience across all devices.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Framer Motion"],
    image: portImg,
    role: "Designer & Developer",
    year: "2025",
    impact: "100 Lighthouse score",
    demo: "#",
    code: "#",
    mode: "personal",
  },
];

const modes = [
  { id: "all", label: "All Projects", emoji: "✨", display: "All Projects", count: projects.length },
  { 
    id: "personal", 
    label: "👤 Personal", 
    display: "Personal", 
    subtitle: "self-driven passion", 
    count: projects.filter(p => p.mode === "personal").length
  },
  { 
    id: "collaborative", 
    label: "🤝 Collaborative", 
    display: "Collaborative", 
    subtitle: "teamwork & communication", 
    count: projects.filter(p => p.mode === "collaborative").length
  },
  { 
    id: "academics", 
    label: "🎓 Academics (PBL)", 
    display: "Academics", 
    subtitle: "curriculum & fundamentals", 
    count: projects.filter(p => p.mode === "academics").length
  },
  { 
    id: "industry", 
    label: "🏭 Industry Collab", 
    display: "Industry", 
    subtitle: "real-world exposure", 
    count: projects.filter(p => p.mode === "industry").length
  },
];

const modeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  personal: User,
  collaborative: Users,
  academics: GraduationCap,
  industry: Briefcase,
};

export const ProjectsSection = () => {
  const [activeMode, setActiveMode] = useState("all");
  const navigate = useNavigate();
  
  const filteredProjects = activeMode === "all" 
    ? projects 
    : projects.filter(project => project.mode === activeMode);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background overlays for better text contrast */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/70 to-background/30" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-secondary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Zap className="w-6 h-6 animate-lightning-flash" />
              <span className="text-sm uppercase tracking-wider font-semibold">
                Projects
              </span>
              <Zap className="w-6 h-6 animate-lightning-flash" />
            </div>

            <div className="inline-block px-6 py-5 rounded-2xl bg-background/60 backdrop-blur-md border border-primary/20 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
              <h2 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
                <span className="text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  MY LIGHTNING
                </span>
                <br />
                <span className="text-primary text-glow">PROJECTS</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                A curated selection of production builds, experiments, and case studies showcasing technical expertise and business impact.
              </p>
              <div className="mt-4 text-center">
                <a href="/case-studies" className="text-primary hover:underline inline-flex items-center gap-2">
                  View detailed case studies <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Mode Filter Buttons - Clean Design */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`
                    relative group px-5 py-3 rounded-xl font-medium transition-all duration-300
                    ${activeMode === mode.id 
                      ? 'bg-linear-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/50 shadow-[0_0_25px_rgba(139,92,246,0.4)]' 
                      : 'bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                    }
                    hover:-translate-y-1 active:scale-95 overflow-hidden
                  `}
                >
                  {/* Background glow effect for active */}
                  {activeMode === mode.id && (
                    <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-primary/10 to-transparent" />
                  )}
                  
                  {/* Subtle hover effect */}
                  <div className={`
                    absolute inset-0 bg-linear-to-br from-primary/0 via-primary/5 to-transparent
                    transition-opacity duration-300 opacity-0 group-hover:opacity-100
                    ${activeMode === mode.id ? 'opacity-100' : ''}
                  `} />
                  
                  <div className="relative flex flex-col items-center min-w-[140px]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`
                        font-semibold text-sm transition-all duration-300
                        ${activeMode === mode.id 
                          ? 'text-primary drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]' 
                          : 'text-foreground/80 group-hover:text-foreground'
                        }
                      `}>
                        {mode.label}
                      </span>
                    </div>
                    
                    {/* Subtitle with count */}
                    <div className="flex items-center gap-1.5">
                      <span className={`
                        text-xs transition-all duration-300
                        ${activeMode === mode.id 
                          ? 'text-primary/80' 
                          : 'text-foreground/60 group-hover:text-foreground/70'
                        }
                      `}>
                        {mode.subtitle}
                      </span>
                      <span className={`
                        text-xs font-bold px-1.5 py-0.5 rounded-full transition-all duration-300
                        ${activeMode === mode.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary/80 group-hover:bg-primary/20'
                        }
                      `}>
                        {mode.count}
                      </span>
                    </div>
                  </div>
                  
                  {/* Active indicator glow */}
                  {activeMode === mode.id && (
                    <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-primary/40 via-transparent to-primary/40 animate-pulse blur-sm" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group bg-card/80 backdrop-blur-lg border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden border-glow cursor-pointer animate-fade-in hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(139,92,246,0.35)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Mode Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <div className={`
                    flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-sm border transition-all duration-300
                    ${activeMode === project.mode 
                      ? 'bg-primary/20 border-primary/50 text-primary shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                      : 'bg-background/80 border-primary/30 text-foreground/80'
                    }
                  `}>
                    {(() => {
                      const Icon = modeIcons[project.mode];
                      return Icon ? <Icon className="w-3.5 h-3.5" /> : null;
                    })()}
                    <span className="text-xs font-medium ml-1">
                      {modes.find(m => m.id === project.mode)?.display}
                    </span>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-[0.5deg]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-60" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-primary text-primary bg-background/90 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-secondary text-secondary bg-background/90 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 relative">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-glow transition-all duration-300 drop-shadow-[0_0_10px_rgba(139,92,246,0)] group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                    {project.title}
                  </h3>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {project.role && (
                      <span className="px-2.5 py-1 text-[11px] font-medium rounded-full border border-primary/40 text-primary/90 bg-primary/5">
                        {project.role}
                      </span>
                    )}
                    {project.year && (
                      <span className="px-2.5 py-1 text-[11px] font-medium rounded-full border border-secondary/30 text-secondary/90 bg-secondary/5">
                        {project.year}
                      </span>
                    )}
                    {project.impact && (
                      <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full text-foreground/80 bg-card/70 border border-primary/20">
                        {project.impact}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium bg-primary/10 text-primary border border-primary/30 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                    onClick={() => navigate(`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
