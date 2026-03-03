// pages/projectdetails.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Home, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink,
  Github,
  Calendar,
  User,
  Target,
  Code,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import llbImg from "@/assets/llb.png";
import dataImg from "@/assets/data.png";
import bioImg from "@/assets/bio.png";
import civilImg from "@/assets/civil.png";
import leadImg from "@/assets/lead.png";
import portImg from "@/assets/port.png";

// Extended project data with detailed pages
const detailedProjects = [
  {
    title: "G M School of Law — GM University",
    description: "Official academic web platform for the School of Law at GM University. The website acts as a central digital hub for law students, faculty, legal professionals, and prospective applicants.",
    tech: ["HTML5", "CSS3", "JavaScript", "University CMS", "Responsive UI"],
    image: llbImg,
    role: "Full-Stack Web Developer",
    year: "2024–2025",
    impact: "Live Production System",
    demo: "https://gmu.ac.in/LLb/",
    code: "",
    mode: "industry",
    pages: [
      {
        title: "Project Overview & Objectives",
        content: "The G M School of Law Website is the official academic web platform for the School of Law at GM University. It serves as a central digital hub for law students, faculty, legal professionals, and prospective applicants by providing structured information about law programs, faculty expertise, academic resources, and admissions. The project establishes a professional digital identity for the School of Law, ensuring clear, accessible, and organized academic information aligned with GM University’s branding standards.",
        subpoints: [
          "Establish a professional digital identity for the School of Law",
          "Provide clear and organized academic information",
          "Improve student access to law-specific resources",
          "Highlight faculty expertise, moot courts, and legal activities",
          "Align with GM University’s official web and branding standards"
        ]
      },
      {
        title: "Key Functional Modules",
        content: "The platform features a high-impact homepage with a message from the Head of School and quick navigation. It includes detailed academic program pages (LLB, BA LLB, BBA LLB) with curriculum structures and career pathways. The faculty directory showcases profiles of professors and legal scholars. A dedicated Student & Academic Resources section provides calendars, course details, and notices, while the Activities & Achievements module highlights moot court competitions and legal aid clinics.",
        subpoints: [
          "Law School Homepage: High-impact hero banner, message from Head of School",
          "Academic Programs: Detailed pages for LLB, BA LLB, BBA LLB",
          "Faculty Directory: Profiles of law professors and legal scholars",
          "Student & Academic Resources: Academic calendar, course details, notices",
          "Activities & Achievements: Moot court competitions, legal aid clinics"
        ]
      },
      {
        title: "Technology Stack & Contributions",
        content: "Built using HTML5, CSS3, and JavaScript within the University CMS environment. I was responsible for designing a professional legal-academic UI, implementing responsive design for all devices, structuring content for readability, and coordinating with GM University IT for deployment and quality assurance.",
        subpoints: [
          "Designing Legal-Academic UI: Professional layouts suitable for law institutions",
          "Web Development: Responsive design for desktop and mobile",
          "Content Structuring: Organized programs, faculty, and legal activities",
          "Deployment & QA: Coordinated with GM University IT for smooth publishing"
        ]
      },
      {
        title: "Real-World Impact",
        content: "The website is a mission-critical digital platform used daily by law students, faculty, and applicants. It supports admissions, facilitates academic communication, and significantly improves the professional visibility of the GM School of Law.",
        subpoints: [
          "Used by law students, faculty, and applicants daily",
          "Supports admissions and academic communication",
          "Improves professional visibility of GM School of Law",
          "Functions as a mission-critical digital platform for legal education"
        ]
      }
    ]
  },
  {
    title: "Ignitron 2K25 – General Championship Leaderboard System",
    description: "Real-time, event-grade web application developed in collaboration with the IGNITRON 2K25 Tech Fest at GM University. Centralized score tracking platform.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Vercel"],
    image: leadImg,
    role: "Full-Stack Developer",
    year: "2025",
    impact: "Used by Ignitron 2K25 organizers",
    demo: "https://ignitron-leaderboard.vercel.app/",
    code: "https://github.com/srinidhipossible-123/IgnitronLeaderboard.git",
    mode: "industry",
    pages: [
      {
        title: "Project Overview & Objectives",
        content: "The Ignitron 2K25 Leaderboard is a real-time, centralized scoring system developed for the General Championship of the Ignitron 2K25 Tech Fest. The project replaced manual scorekeeping with a digital, automated platform that tracked scores across multiple events, calculated rankings instantly, and displayed live results to participants and the audience.",
        subpoints: [
          "Centralized scoring system for multiple tech fest events",
          "Real-time ranking updates for instant transparency",
          "Public-facing leaderboard for audience engagement",
          "Admin interface for organizers to input and manage scores"
        ]
      },
      {
        title: "Key Features & Architecture",
        content: "The application features a public leaderboard with live updates, an admin dashboard for secure score entry, and dynamic filtering by event categories. Built with React and Next.js for the frontend and MongoDB for the backend, it ensures low-latency updates and high availability during the event.",
        subpoints: [
          "Live Leaderboard: Real-time score display with auto-refresh",
          "Admin Dashboard: Secure login for event coordinators",
          "Event Categorization: Filter scores by specific events or overall championship",
          "Responsive Design: Optimized for mobile viewing by participants"
        ]
      },
      {
        title: "Tech Stack & Impact",
        content: "Built using the MERN stack (MongoDB, Express, React, Node.js) with Next.js for server-side rendering and Vercel for deployment. The system successfully handled traffic during the fest, eliminating manual calculation errors and providing a professional, engaging experience for all attendees.",
        subpoints: [
          "Next.js & React: High-performance frontend with SSR",
          "MongoDB: Flexible schema for varying event scoring structures",
          "Vercel Deployment: Scalable hosting with zero downtime",
          "Impact: Used live for the entire duration of Ignitron 2K25"
        ]
      }
    ]
  },
  {
    title: "GMU Civil Engineering Department Website",
    description: "Official academic web portal for the Department of Civil Engineering at GM University, providing a centralized digital gateway for programs, labs, faculty, infrastructure, and student achievements.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI", "Accessibility", "SEO"],
    image: civilImg,
    role: "Full-Stack Web Developer (Industry Collaboration)",
    year: "2024–2025",
    impact: "Live institutional site on GM University production server",
    demo: "https://civil-dept.netlify.app/",
    code: "https://github.com/srinidhipossible-123/civil-department.git",
    mode: "industry",
    pages: [
      {
        title: "Project Overview & Objectives",
        content:
          "The Civil Engineering Department Website was developed as the official academic portal for the Department of Civil Engineering at GM University. It serves as a digital gateway for students, faculty, industry partners, and applicants, presenting academic programs, infrastructure, faculty expertise, research activities, and student achievements in a structured and user-friendly format. This project supports GM University’s broader digital transformation by giving the department a clear, professional online identity.",
        subpoints: [
          "Acts as the official web presence for the Civil Engineering Department at GM University",
          "Centralizes academic information, labs, research, and achievements into a single portal",
          "Improves information accessibility for students, parents, faculty, and external visitors",
          "Aligns with the university’s goal of modern, transparent digital communication"
        ]
      },
      {
        title: "Key Features & Information Architecture",
        content:
          "The site is organized into modules that map directly to real academic needs—from high-level department vision to detailed program structure and laboratory infrastructure. Each section is designed for clarity, responsiveness, and fast navigation across desktop and mobile devices.",
        subpoints: [
          "Department homepage with vision, mission, highlights, and quick access links",
          "Academic programs section for B.Tech in Civil Engineering with program structure, course outcomes, lab exposure, and industry relevance",
          "Faculty directory covering HOD, professors, and assistant professors with designation, specialization, and academic expertise",
          "Laboratories & infrastructure pages for Surveying, Structural, Geotechnical, Environmental, and Transportation labs",
          "Student resources such as academic documents, syllabi, department notices, and learning material links",
          "Achievements & activities showcasing student projects, competitions, internships, workshops, seminars, and placement highlights"
        ]
      },
      {
        title: "Tech Stack, Contributions & Real-World Impact",
        content:
          "As a full-stack web developer, I focused on building a clean, responsive, and maintainable site that integrates smoothly with GM University’s official web ecosystem. Beyond UI development, I helped structure academic content, optimize user flows, and support deployment on the university’s production server.",
        subpoints: [
          "Implemented responsive layouts with HTML, CSS, and JavaScript for compatibility across desktop and mobile browsers",
          "Designed a professional, intuitive UI with clear navigation and emphasis on readability",
          "Architected content structure for programs, faculty, labs, resources, and achievements based on departmental inputs",
          "Collaborated with university IT to integrate the site into GMU’s server/CMS infrastructure and verify stability before launch",
          "Improved day-to-day usability for students and faculty by centralizing curriculum, infrastructure, and achievement information",
          "Supports admission inquiries, academic transparency, and external visibility for industry and accreditation bodies"
        ]
      }
    ]
  },
  {
    title: "GMU DS & IoT Department Website",
    description: "Official institutional website for the Department of Data Science & Internet of Things (DS & IoT) at GM University, Davangere, serving as the primary digital hub for students, faculty, applicants, and industry partners.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Accessibility", "SEO"],
    image: dataImg,
    role: "Full-Stack Web Developer (Team of 2)",
    year: "2024–2025",
    impact: "Live production deployment on GM University domain",
    demo: "https://gmu.ac.in/data_science/",
    code: "",
    mode: "industry",
    pages: [
      {
        title: "Project Overview & Purpose",
        content:
          "The DS & IoT Department Website is an institutional platform created to digitally represent the Department of Data Science & Internet of Things at GM University, Davangere. It acts as a central, always-available source of truth for students, faculty, prospective applicants, and industry partners—covering programs, vision/mission, faculty, achievements, placements, research, and student projects. The department previously lacked a focused digital presence, so this project was initiated to build a responsive, informative, and maintainable website directly on the official GM University domain.",
        subpoints: [
          "Designed as the official web presence for the DS & IoT department under GM University",
          "Addresses the lack of a dedicated departmental portal for programs, updates, and resources",
          "Communicates the department’s identity, vision, mission, and academic strengths",
          "Provides a central, authoritative hub for students, faculty, and external stakeholders"
        ]
      },
      {
        title: "Features & Information Architecture",
        content:
          "The website is structured around clear, user-focused sections that map to real academic and institutional needs. From admissions and programs to research, placements, and student achievements, each page is organized for quick discovery and readability on both desktop and mobile devices.",
        subpoints: [
          "Home / Landing page highlighting vision, key stats, and quick access to important sections",
          "About the Department with vision, mission, objectives, and center-of-excellence positioning",
          "Programs section for B.Tech, M.Tech, and related offerings in AI, ML, and Data Science",
          "Faculty Directory presenting profiles, specializations, and research interests",
          "Student Corner with learning resources, labs, documents, and self-paced material",
          "Gallery and Events showcasing hackathons, workshops, industry visits, and campus life",
          "Achievements and Placements modules for student and faculty milestones, recruiters, and packages",
          "Contact & Connect section with location, phone, email, and inquiry pathways"
        ]
      },
      {
        title: "Tech Stack, Role & Real-World Impact",
        content:
          "As a full-stack web developer on a two-person team, I handled end-to-end frontend development, content structuring, deployment coordination, and real-world optimization. The stack is intentionally pragmatic and aligned with the university’s hosting/CMS constraints, while still prioritizing responsiveness, accessibility, and maintainability.",
        subpoints: [
          "Implemented responsive layouts using HTML5, CSS3, and JavaScript tailored to GMU’s CMS/hosting environment",
          "Collaborated with department admins and faculty to gather, structure, and integrate academic and administrative content",
          "Applied UX and accessibility best practices to improve readability, navigation, and mobile usability for students",
          "Coordinated with the university IT team to deploy and integrate the site on the official GM University domain",
          "Performed cross-browser testing and basic SEO optimization for faster loads and better discoverability",
          "Site is actively used in production by students, faculty, applicants, and industry partners, and updated for events and achievements"
        ]
      }
    ]
  },
  {
    title: "GMU Biotechnology Department Website",
    description: "Official academic website for the Department of Biotechnology at GM University, Davangere, acting as the primary digital interface for students, faculty, industry partners, and prospective applicants.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Accessibility", "SEO"],
    image: bioImg,
    role: "Full-Stack Web Developer (Industry Collaboration)",
    year: "2024–2025",
    impact: "Live production deployment on GM University portal",
    demo: "https://gmu.ac.in/biotech/",
    code: "",
    mode: "industry",
    pages: [
      {
        title: "Project Overview & Objectives",
        content:
          "The Biotechnology Department Website is an institutional web platform built for the Department of Biotechnology at GM University, Davangere. It functions as the official online presence for the department—showcasing academic programs, research strengths, faculty expertise, labs, student work, and department activities. Before this project, there was no single, structured place where students, faculty, and external visitors could discover everything about the department in one view.",
        subpoints: [
          "Acts as the primary digital interface for the Biotechnology department on the official GM University domain",
          "Communicates academic offerings, research areas, and opportunities for students and collaborators",
          "Replaces fragmented or missing online information with a single, well-structured portal",
          "Designed to support current students, faculty, industry partners, and prospective candidates"
        ]
      },
      {
        title: "Information Architecture & Key Modules",
        content:
          "The site is organized into clear sections that mirror how real users look for information: from high-level overview to detailed academic content. Each module is focused on usability and clarity, making it simple to navigate whether you are a student, parent, or external collaborator.",
        subpoints: [
          "Home and landing experience featuring department name, hero content, and CTAs to core pages",
          "HOD’s message highlighting the department’s mission, vision, and academic philosophy",
          "Department overview with vision, mission, and focus areas like genetic engineering, bioinformatics, molecular biology, and environmental biotechnology",
          "Academic programs section explaining B.Tech in Biotechnology, curriculum focus, labs, internships, and industry exposure",
          "Faculty directory listing HOD, professors, and teaching staff with their roles and expertise",
          "Research and innovation highlights covering research areas, labs, publications, and ongoing projects",
          "Student corner showcasing projects and initiatives such as biowaste management, eco-friendly products, soil microbiology, and biogas optimization",
          "Quick access links to important academic resources, contact details, and downloadable materials"
        ]
      },
      {
        title: "Tech Stack, Role & Real-World Impact",
        content:
          "As a full-stack web developer for this collaboration, I focused on building a responsive, accessible, and maintainable site aligned with the university’s hosting and CMS constraints. The goal was to deliver a production-grade departmental website that works reliably for day-to-day academic use while being easy for the department to maintain over time.",
        subpoints: [
          "Implemented responsive frontend layouts using HTML5, CSS3, and JavaScript tailored to GMU’s infrastructure",
          "Collaborated with department stakeholders to gather, structure, and integrate academic content, research, and faculty information",
          "Optimized UX and navigation flows so that students, faculty, and visitors can quickly find programs, research, and contact details",
          "Coordinated with the university IT/web team to deploy and host the site on the official GM University portal",
          "Performed cross-browser and multi-device testing to ensure consistent performance and accessibility",
          "Site is live and actively used by academic users, acting as a reference point for research, student achievements, and departmental communication"
        ]
      }
    ]
  },
  {
    title: "Ignitron 2K25 – General Championship Leaderboard System",
    description: "Real-time, event-grade web application developed in collaboration with the IGNITRON 2K25 Tech Fest at GM University. Centralized score tracking platform.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Vercel"],
    image: leadImg,
    role: "Full-Stack Developer",
    year: "2025",
    impact: "Used by Ignitron 2K25 organizers",
    demo: "https://ignitron-leaderboard.vercel.app/",
    code: "https://github.com/srinidhipossible-123/IgnitronLeaderboard.git",
    mode: "industry",
    pages: [
      {
        title: "Project Overview & Objectives",
        content: "The Ignitron 2K25 General Championship Leaderboard System is a real-time, event-grade web application developed in collaboration with the IGNITRON 2K25 Tech Fest at GM University. The platform was designed to digitally track, manage, and display team and participant scores across multiple competitive technical and non-technical events conducted during the fest. This leaderboard replaced manual scoreboards with a centralized, transparent, and live scoring system, accessible to organizers, judges, and participants.",
        subpoints: [
          "Provide a centralized score tracking platform",
          "Ensure fair, transparent, and real-time ranking",
          "Support multiple events and teams",
          "Eliminate manual score handling and errors",
          "Create a public-facing leaderboard for live audience engagement"
        ]
      },
      {
        title: "Core Functional Modules",
        content: "The system features a General Championship Leaderboard that displays team rankings based on cumulative points and updates live. Event-Wise Scoring supports multiple events where judges can submit scores. Real-Time Updates use a MongoDB-based backend to sync scores instantly. Team & Performance Visualization improves audience engagement, while Admin/Organizer Controls ensure secure score management.",
        subpoints: [
          "General Championship Leaderboard: Auto-sorting team rankings",
          "Event-Wise Scoring: Supports multiple technical and non-technical events",
          "Real-Time Updates: Instant reflection of score changes without refresh",
          "Team & Performance Visualization: Shows points, rank, and status",
          "Admin / Organizer Controls: Secure management of teams and scores"
        ]
      },
      {
        title: "Technology Stack & Contributions",
        content: "Built using React/Next.js for the frontend and Node.js/MongoDB for the backend, deployed on Vercel. As a Full-Stack Developer, I designed the clean, responsive Leaderboard UI, built the MongoDB backend with schemas for teams/events/scores, implemented live ranking logic, and ensured scalable deployment for heavy fest traffic.",
        subpoints: [
          "Designed the Leaderboard UI: Clean, responsive scoreboard",
          "Built the MongoDB Backend: CRUD APIs and schemas for data",
          "Implemented Live Ranking Logic: Auto-recalculation and aggregation",
          "Deployed to Production: Hosted on Vercel for scalability",
          "Collaborated with Event Organizers: Digitized manual scoring processes"
        ]
      },
      {
        title: "Real-World Impact",
        content: "This project was a live operational system used by Ignitron 2K25 organizers during the fest. It eliminated score disputes, increased fairness and transparency, and engaged the audience with real-time updates.",
        subpoints: [
          "Used by Ignitron 2K25 organizers during live fest",
          "Displayed publicly for participants, judges, and audience",
          "Eliminated score disputes",
          "Increased fairness, transparency, and engagement"
        ]
      }
    ]
  },

  {
    title: "Portfolio Website",
    description: "Responsive portfolio with modern animations, optimized performance, and seamless UX.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Framer Motion", "Three.js"],
    image: portImg,
    role: "Designer & Developer",
    year: "2025",
    impact: "100 Lighthouse score",
    demo: "#",
    code: "#",
    mode: "personal",
    pages: [
      {
        title: "Design Philosophy",
        content: "Created a portfolio that balances aesthetics with performance. Focused on smooth animations, responsive design, and optimal user experience across all devices.",
        subpoints: [
          "Mobile-first responsive design",
          "Smooth animations with Framer Motion",
          "Dark/light theme support",
          "Accessibility-first approach"
        ]
      },
      {
        title: "Technical Excellence",
        content: "Achieved perfect Lighthouse scores through code splitting, image optimization, and efficient rendering techniques.",
        subpoints: [
          "Code splitting with React.lazy",
          "Image optimization with WebP format",
          "Efficient bundle splitting",
          "Progressive Web App capabilities"
        ]
      },
      {
        title: "Performance Results",
        content: "Achieved perfect 100 scores across all Lighthouse metrics. Optimized for Core Web Vitals and excellent SEO performance.",
        subpoints: [
          "Lighthouse Performance: 100",
          "Lighthouse Accessibility: 100",
          "Lighthouse Best Practices: 100",
          "Lighthouse SEO: 100"
        ]
      }
    ]
  }
];

export default function ProjectDetails() {
  const { projectTitle } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  
  // Find the project by title
  const project = detailedProjects.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === projectTitle
  );
  
  // If no project found, redirect to home
  useEffect(() => {
    // Ensure the user lands at the top of the page when opening a project
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
          <p className="text-muted-foreground mb-4">Redirecting to home...</p>
          <Button onClick={() => navigate('/')}>
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>
        </div>
      </div>
    );
  }
  
  const totalPages = project.pages.length;
  const currentPageData = project.pages[currentPage];
  
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToHome = () => {
    navigate('/');
  };
  
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background/95 to-secondary/10">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with Navigation */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <div className="h-4 w-px bg-border" />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goToHome}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-foreground">{project.title}</span>
              </h1>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
            
            <div className="flex items-center gap-3">
              {project.code && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.code, '_blank')}
                  className="border-primary/30 hover:border-primary/60"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              )}
              {project.demo && (
                <Button
                  size="sm"
                  onClick={() => window.open(project.demo, '_blank')}
                  className="bg-primary hover:bg-primary/90"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
          
          {/* Project Metadata */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30">
              <User className="w-3 h-3" />
              <span className="text-sm font-medium">{project.role}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/30">
              <Calendar className="w-3 h-3" />
              <span className="text-sm font-medium">{project.year}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/30">
              <Target className="w-3 h-3" />
              <span className="text-sm font-medium">{project.impact}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/30">
              <Zap className="w-3 h-3" />
              <span className="text-sm font-medium">{project.mode}</span>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-background/80 border border-border rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <Code className="w-3 h-3" />
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="bg-card/80 backdrop-blur-lg border-primary/20 overflow-hidden border-glow">
              {/* Page Navigation */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{currentPageData.title}</h2>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPage(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentPage
                              ? 'bg-primary w-8'
                              : 'bg-primary/30 hover:bg-primary/50'
                          }`}
                          aria-label={`Go to page ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Page {currentPage + 1} of {totalPages}
                  </div>
                </div>
              </div>
              
              {/* Page Content */}
              <div className="p-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg mb-6 leading-relaxed">{currentPageData.content}</p>
                  
                  <div className="space-y-3">
                    {currentPageData.subpoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                        <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <ArrowUpRight className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Page Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="gap-2 border-primary/30 hover:border-primary/60"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <Button
                    key={idx}
                    variant={idx === currentPage ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentPage(idx)}
                    className={`w-8 h-8 p-0 ${
                      idx === currentPage
                        ? 'bg-primary hover:bg-primary/90'
                        : 'hover:bg-primary/10'
                    }`}
                  >
                    {idx + 1}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="gap-2 border-primary/30 hover:border-primary/60"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Image */}
            <Card className="bg-card/80 backdrop-blur-lg border-primary/20 overflow-hidden border-glow">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Project Preview</h3>
                <p className="text-sm text-muted-foreground">
                  Click the Live Demo button to explore the working application
                </p>
              </div>
            </Card>
            
            {/* Project Pages Summary */}
            <Card className="bg-card/80 backdrop-blur-lg border-primary/20 p-6 border-glow">
              <h3 className="font-semibold mb-4">Project Documentation</h3>
              <div className="space-y-2">
                {project.pages.map((page, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      idx === currentPage
                        ? 'bg-primary/20 border border-primary/40'
                        : 'hover:bg-primary/10 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          idx === currentPage
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {idx + 1}
                        </div>
                        <span className={`font-medium ${
                          idx === currentPage ? 'text-primary' : 'text-foreground'
                        }`}>
                          {page.title}
                        </span>
                      </div>
                      {idx === currentPage && (
                        <ChevronRight className="w-4 h-4 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </Card>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={goBack}
                className="w-full border-primary/30 hover:border-primary/60"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={goToHome}
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
