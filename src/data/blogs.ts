export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  // Detail page content
  content?: string;
  designFlowDiagram?: string; // URL or path to diagram image
  videoDemo?: string; // URL to video (YouTube, Vimeo, etc.)
  githubLink?: string; // GitHub repository URL
};

export const blogs: Blog[] = [
  {
    slug: "building-scalable-react-app",
    title: "Building a Scalable React Application with Modern Patterns",
    excerpt: "Learn how to architect a React application that scales from startup to enterprise. We'll explore component composition, state management, and performance optimization techniques.",
    author: "Srinidhi S Joshi",
    date: "2024-01-15",
    category: "Frontend",
    tags: ["React", "TypeScript", "Architecture"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    readTime: "8 min read",
    content: "Full blog content here...",
    designFlowDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/react-scalable-app"
  },
  {
    slug: "ml-powered-web-app",
    title: "Integrating Machine Learning into Web Applications",
    excerpt: "Discover how to seamlessly integrate ML models into your web stack. From TensorFlow.js to API endpoints, we'll cover practical implementation strategies.",
    author: "Srinidhi S Joshi",
    date: "2024-02-20",
    category: "Machine Learning",
    tags: ["ML", "TensorFlow", "Web Development"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    readTime: "12 min read",
    content: "Full blog content here...",
    designFlowDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/ml-web-app"
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization: From Zero to Hero",
    excerpt: "A comprehensive guide to optimizing web application performance. Learn about code splitting, lazy loading, caching strategies, and more.",
    author: "Srinidhi S Joshi",
    date: "2024-03-10",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Vitals"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    readTime: "10 min read",
    content: "Full blog content here...",
    designFlowDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/performance-optimization"
  },
  {
    slug: "fullstack-architecture",
    title: "Modern Full-Stack Architecture Patterns",
    excerpt: "Exploring the best practices for building robust full-stack applications. We'll dive into microservices, API design, database strategies, and deployment.",
    author: "Srinidhi S Joshi",
    date: "2024-04-05",
    category: "Backend",
    tags: ["Full-Stack", "Architecture", "Node.js"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    readTime: "15 min read",
    content: "Full blog content here...",
    designFlowDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/fullstack-architecture"
  }
];

