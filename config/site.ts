export const siteConfig = {
  // Personal Information
  name: "Brian Hufnus",
  title: "Fullstack Engineer and Cloud Expert",
  bio: "I'm an experienced fullstack developer specializing in React, Java Spring Boot, and SQL/NoSQL databases. I build scalable cloud-based microservices with AWS and Kubernetes while adhering to clean code and best practices.",
  email: "your.email@example.com",

  // Social Links
  social: {
    github: "https://github.com/bhufnus",
    linkedin: "https://www.linkedin.com/in/brian-hufnus-761007127/",
    email: "mailto:your.email@example.com"
  },

  // Navigation
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ],

  // Experience Timeline (details shown on hover)
  experience: [
    {
      title: "Associate Software Engineer",
      company: "Northwestern Mutual",
      period: "2022 - Present",
      description:
        "Leading fullstack development of scalable web applications using React, Java Spring Boot, and Node.js; all deployed to the cloud via AWS",
      details: {
        highlights: [
          "Developed robust, REST-compliant backend APIs supporting full CRUD functionality",
          "Facilitated sprint planning sessions, daily stand-ups, and sprint retrospectives to drive team alignment and continuous improvement",
          "Architected and delivered full-stack features for internal tools used across the enterprise.",
          "Collaborated with product and design to ship accessible, performant UIs with React and TypeScript.",
          "Improved reliability and observability with automated tests and monitoring.",
          "Configured and maintained CI/CD pipelines via GitLab"
        ],
        technologies: [
          "React",
          "Redis",
          "Kafka",
          "Java Spring Boot",
          "Node.js",
          "TypeScript",
          "AWS",
          "Terraform",
          "Kubernetes",
          "GitLab",
          "Jira",
          "SQL",
          "MongoDb"
        ]
      }
    },
    {
      title: "Dev10 Software Developer Trainee",
      icon: "mdi:certificate",
      company: "Genesis10",
      period: "2022 - 2022",
      description:
        "Chosen for highly selective, paid Dev10 SWE training program - less than 5% of applicants are hired",
      details: {
        highlights: [
          "Training in Java Cloud (Java, JavaScript, React, AWS, CSS and HTML)",
          "Developed a complete fullstack web application called PeppsTalk - a social study aid where users can create and share flashcards"
        ],
        technologies: [
          "React",
          "Node.js",
          "MySQL",
          "Java",
          "Docker",
          "AWS",
          "JavaScript",
          "HTML/CSS"
        ]
      }
    },
    {
      title: "Certified Pharmacy Technician",
      icon: "mdi:mortar-pestle",
      company: "CVS Pharmacy",
      period: "2016 - 2019",
      description:
        "Counseled patients on new medications, processed & filled new prescriptions, resolved insurance issues, and maintained an organized inventory in a fast-paced retail pharmacy setting.",
      details: {
        highlights: [
          "Assisted with prescription pickup and provided usage instructions",
          "Counseled patients on proper medication use, dosing, and potential interactions",
          "Resolved third-party insurance discrepancies with payers",
          "Managed prescription filing and drug inventory (stock rotation, expiration checks)",
          "Processed new prescriptions and insurance information at drop-off",
          "Filled prescriptions accurately and in a timely manner"
        ],
        technologies: [
          "Point-of-Sale (POS)",
          "Stock Rotation & Inventory",
          "Third-Party Payer Resolution",
          "Insurance Billing",
          "Pharmacy Operations",
          "Prescription Processing"
        ]
      }
    }
  ],

  // Education (details shown on hover)
  education: [
    {
      degree: "Doctor of Pharmacy Candidate",
      school: "Midwestern University School of Pharmacy",
      period: "2018 - 2019",
      details: {
        highlights: [
          "Successfully completed the first-year curriculum, achieving a high GPA while mastering foundational pharmaceutical sciences and practice skills.",
          "Participated in Introductory Pharmacy Practice Experiences (IPPE), applying classroom knowledge to real-world pharmacy settings and developing patient care skills",
          "Research and lab experience; strong foundation in logical reasoning and documentation.",
          "Pivoted into software development through self-study and bootcamp-style learning."
        ],
        technologies: [
          "Patient counseling",
          "Lab techniques",
          "Data analysis",
          "Scientific writing"
        ]
      }
    },
    {
      degree: "Bachelor of Science in Biology",
      school: "Loyola University Chicago",
      period: "2014 - 2018",
      details: {
        highlights: [
          "Relevant coursework in statistics, data analysis, and scientific computing in Python and R.",
          "Research and lab experience; strong foundation in logical reasoning and documentation."
        ],
        technologies: [
          "Bioinformatics",
          "Python",
          "R",
          "Lab techniques",
          "Data analysis",
          "Scientific writing"
        ]
      }
    }
  ],

  // Certificates & Courses (same layout as Experience & Education)
  certificates: [
    {
      category: "Cybersecurity",
      items: [
        {
          title: "Google Cybersecurity Professional Certificate(v.2)",
          issuer: "Coursera",
          date: "Feb 2, 2026",
          image: "/google-cybersecurity-professional-certificate-v-2.png"
        }
      ]
    },
    {
      category: "Machine Learning",
      items: [
        {
          title: "Machine Learning Specialization",
          issuer: "Coursera",
          date: "Nov 4, 2025",
          image:
            "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SFLM8VCB00W7/CERTIFICATE_LANDING_PAGE~SFLM8VCB00W7.jpeg"
        },
        {
          title: "Advanced Learning Algorithms",
          issuer: "Coursera",
          date: "2025",
          image:
            "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ENE84YURNSHF/CERTIFICATE_LANDING_PAGE~ENE84YURNSHF.jpeg"
        },
        {
          title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
          issuer: "Coursera",
          date: "2025",
          image:
            "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DSR82Y5RZK8I/CERTIFICATE_LANDING_PAGE~DSR82Y5RZK8I.jpeg"
        },
        {
          title: "Supervised Machine Learning: Regression and Classification",
          issuer: "Coursera",
          date: "2025",
          image:
            "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~IE2NU1UPR9LV/CERTIFICATE_LANDING_PAGE~IE2NU1UPR9LV.jpeg"
        }
      ]
    }
  ],

  // Skills
  skills: {
    frontend: [
      { name: "React", level: 85 },
      { name: "Javascript/Typescript", level: 90 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Redux", level: 80 }
    ],
    backend: [
      { name: "Express", level: 88 },
      { name: "Java Spring Boot", level: 88 },
      { name: "MongoDB", level: 99 },
      { name: "PostgreSQL", level: 90 }
    ],
    tools: [
      { name: "Git", level: 99 },
      { name: "Docker", level: 99 },
      { name: "AWS", level: 96 }
    ],
    core: [
      { name: "Machine Learning with Python", level: 65 },
      { name: "Cybersecurity", level: 35 },
      { name: "Financial Markets", level: 25 }
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "./memory",
      description:
        "A fun memory game built with React and Javascript with live leaderboard results stored in FirebaseDb. How many levels can you beat?",
      image: "/reactmemorygame.png",
      tech: ["React", "Javascript", "Node.js", "FirebaseDb"],
      github: "https://github.com/TAB-Games/ReactMemoryGame",
      demo: "https://tab-games.github.io/ReactMemoryGame/",
      category: "frontend"
    },
    {
      id: 2,
      title: "PeppsTalk: A Social Flashcard App",
      description:
        "Create flashcards and share them with your classmates, or download a deck already made by one of our many students!",
      image: "/peppstalk.png",
      tech: [
        "React",
        "Java Spring Boot",
        "MySQL",
        "AWS RDS",
        "JWT authentication",
        "Docker"
      ],
      // github: "https://github.com/yourusername/social-dashboard",
      // demo: "https://dashboard-demo.vercel.app",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Handwriting Recognition with Myo Armband",
      description:
        "A Machine Learning proof-of-concept for recognizing handwritten letters (A, B, C) while wearing the Myo armband, which records quaternions and EMG signals.",
      image: "/myo.jpg",
      tech: [
        "Python",
        "numpy",
        "tensorflow[and-cuda]",
        "scikit-learn",
        "matplotlib",
        "scipy"
      ],
      github: "https://github.com/bhufnus/myo-handwriting-recognition",
      // demo: "https://taskmanager-demo.vercel.app",
      category: "fullstack"
    },

    {
      id: 4,
      title: "REST API Service",
      description:
        "Scalable REST API with authentication, rate limiting, and comprehensive documentation.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      github: "https://github.com/yourusername/api-service",
      demo: "https://api-docs.vercel.app",
      category: "backend"
    }
  ],

  // SEO
  seo: {
    title: "Your Name - Fullstack JavaScript Engineer",
    description:
      "Portfolio of a fullstack JavaScript developer specializing in React, Node.js, and modern web technologies.",
    url: "https://yourportfolio.vercel.app",
    image: "https://yourportfolio.vercel.app/og-image.jpg"
  }
};
