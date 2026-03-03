import { CaseStudy } from "./case-studies";
import dataImg from "@/assets/data.png";
import bioImg from "@/assets/bio.png";
import civilImg from "@/assets/civil.png";
import leadImg from "@/assets/lead.png";

export type CaseStudy = {
  slug: string;
  title: string;
  period: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  outcomes: string[];
  metrics: string[];
  screenshots: string[];
  demo?: string;
  repo?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "gmu-ds-iot-department-website",
    title: "GMU DS & IoT Department Website",
    period: "2024–2025",
    role: "Full-Stack Web Developer (Team Project)",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Accessibility", "SEO"],
    problem:
      "The Department of Data Science & IoT at GM University needed an official, centralized web presence to showcase programs, faculty, achievements, and resources on the university domain.",
    solution:
      "Designed and implemented a responsive, accessibility-conscious departmental website integrated into the GM University ecosystem. Structured content for programs, vision/mission, faculty, research, placements, student projects, and achievements, aligning with real institutional workflows.",
    outcomes: [
      "Became the primary digital interface for the DS & IoT department at GM University",
      "Provides clear navigation for students, faculty, applicants, and industry partners",
      "Content is actively maintained for events, hackathons, placements, and achievements"
    ],
    metrics: [
      "Live production deployment on the official GM University domain",
      "Used regularly by students and faculty for curriculum, resources, and updates",
      "Acts as an institutional reference point for external visitors and collaborators"
    ],
    screenshots: [
      dataImg,
    ],
    demo: "https://gmu.ac.in/data_science/",
  },
  {
    slug: "gmu-biotechnology-department-website",
    title: "GMU Biotechnology Department Website",
    period: "2024–2025",
    role: "Full-Stack Web Developer",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Accessibility", "SEO"],
    problem:
      "The Department of Biotechnology at GM University needed a dedicated, up-to-date web presence on the official university portal to showcase programs, research, faculty, labs, and student achievements in one place.",
    solution:
      "Designed and implemented a responsive, intuitive departmental website aligned with GMU’s digital ecosystem, featuring clear navigation for programs, research, faculty, labs, student projects, and quick-access resources on the main university domain.",
    outcomes: [
      "Became the official online interface for the Biotechnology department on the GMU portal",
      "Improved discoverability of academic programs, labs, and research initiatives for students and visitors",
      "Showcases student projects and departmental activities, strengthening academic branding"
    ],
    metrics: [
      "Live production site hosted on the official GM University portal",
      "Used regularly by students, faculty, and prospective applicants to access departmental information",
      "Supports ongoing updates for research, events, and student achievements"
    ],
    screenshots: [
      bioImg,
    ],
    demo: "https://gmu.ac.in/biotech/",
  },
  {
    slug: "gmu-civil-engineering-department-website",
    title: "GMU Civil Engineering Department Website",
    period: "2024–2025",
    role: "Full-Stack Web Developer",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI", "Accessibility", "SEO"],
    problem:
      "The Department of Civil Engineering at GM University needed a centralized, professional web presence on the official portal to present programs, labs, faculty, infrastructure, and student achievements in one structured place.",
    solution:
      "Developed a responsive institutional website that aligns with GMU’s web ecosystem, organizing the department’s homepage, B.Tech Civil Engineering program details, faculty directory, laboratories & infrastructure, student resources, and achievements into an accessible, easy-to-navigate portal.",
    outcomes: [
      "Provides a single source of truth for curriculum, faculty, labs, and departmental activities",
      "Used by students, faculty, and visitors for day-to-day academic reference and communication",
      "Strengthens the department’s visibility for industry partners, applicants, and accreditation bodies"
    ],
    metrics: [
      "Deployed on GM University’s production web server as an official departmental site",
      "Supports ongoing academic updates, notices, and student achievement highlights",
      "Improves discoverability of Civil Engineering programs and infrastructure through a structured digital presence"
    ],
    screenshots: [
      civilImg,
    ],
    demo: "https://civil-dept.netlify.app/",
    repo: "https://github.com/srinidhipossible-123/civil-department.git",
  },
  {
    slug: "ignitron-2k25-leaderboard",
    title: "Ignitron 2K25 Leaderboard",
    period: "2025",
    role: "Full-Stack Developer",
    stack: ["React", "Next.js", "MongoDB", "Vercel"],
    problem: "Tech fest organizers needed a centralized, real-time system to track scores across multiple events and display live rankings to participants and audience, replacing manual methods.",
    solution: "Built a responsive, real-time leaderboard application with a MongoDB backend for instant score updates, automated ranking logic, and a public-facing display for live engagement.",
    outcomes: [
      "Eliminated manual scoring errors and disputes",
      "Provided real-time transparency for participants and audience",
      "Streamlined event management for organizers"
    ],
    metrics: [
      "Used live during Ignitron 2K25",
      "Zero downtime during fest traffic",
      "Instant score reflection"
    ],
    screenshots: [
      leadImg,
    ],
    demo: "https://ignitron-leaderboard.vercel.app/",
    repo: "https://github.com/srinidhipossible-123/IgnitronLeaderboard.git",
  },
];


