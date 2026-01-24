export const siteConfig = {
  // Personal Information
  name: "Brian Hufnus",
  title: "Fullstack Engineer and Cloud Expert",
  bio: "I'm an experienced developer specializing in React, Java Spring Boot, SQL/NoSQL, and modern web technologies. I build scalable cloud-based applications with AWS and Kubernetes while adhering to clean code and best practices.",
  email: "your.email@example.com",
  
  // Social Links
  social: {
    github: "https://github.com/bhufnus",
    linkedin: "https://www.linkedin.com/in/brian-hufnus-761007127/",
    email: "mailto:your.email@example.com",
  },
  
  // Navigation
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  
  // Experience Timeline
  experience: [
    {
      title: "Associate Software Engineer",
      company: "Northwestern Mutual",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Next.js, and Node.js.",
    },
    {
      title: "Fullstack Developer",
      company: "Startup Y",
      period: "2020 - 2022",
      description: "Built and maintained multiple client-facing applications with React and Express.",
    },
    {
      title: "Frontend Developer",
      company: "Agency Z",
      period: "2018 - 2020",
      description: "Developed responsive web interfaces and collaborated with design teams.",
    },
  ],
  
  // Education
  education: [
    {
      degree: "Bachelor of Science in Biology",
      school: "Loyola University Chicago",
      period: "2014 - 2018",
    },
  ],
  
  // Skills
  skills: {

    frontend: [
      { name: "React", level: 85 },
      { name: "Javascript/Typescript", level: 90 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Redux", level: 80 },
    ],
    backend: [
      { name: "Express", level: 88 },
      { name: "Java Spring Boot", level: 88 },
      { name: "MongoDB", level: 99 },
      { name: "PostgreSQL", level: 90 },
    ],
    tools: [
      { name: "Git", level: 99 },
      { name: "Docker", level: 99 },
      { name: "AWS", level: 96 },
    ],
    core: [
      { name: "Machine Learning with Python", level: 65 },
      { name: "Cybersecurity", level: 35 },
      { name: "Financial Markets", level: 25 },

    ],
  },
  
  // Projects
  projects: [
    {
      id: 1,
      title: "./memory",
      description: "A fun memory game built with React and Javascript with live leaderboard results stored in FirebaseDb. How many levels can you beat?",
      image: "/reactmemorygame.png",
      tech: ["React", "Javascript", "Node.js", "FirebaseDb"],
      github: "https://github.com/TAB-Games/ReactMemoryGame",
      demo: "https://tab-games.github.io/ReactMemoryGame/",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tech: ["React", "TypeScript", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://taskmanager-demo.vercel.app",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/yourusername/social-dashboard",
      demo: "https://dashboard-demo.vercel.app",
      category: "frontend",
    },
    {
      id: 4,
      title: "REST API Service",
      description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      github: "https://github.com/yourusername/api-service",
      demo: "https://api-docs.vercel.app",
      category: "backend",
    },
  ],
  
  // SEO
  seo: {
    title: "Your Name - Fullstack JavaScript Engineer",
    description: "Portfolio of a fullstack JavaScript developer specializing in React, Node.js, and modern web technologies.",
    url: "https://yourportfolio.vercel.app",
    image: "https://yourportfolio.vercel.app/og-image.jpg",
  },
};
