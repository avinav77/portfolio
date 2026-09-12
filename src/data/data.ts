export const portfolioData = {
 personal: {
  name: "Avinav Johari",
  role: "Software Engineer",

  tagline:
    "Building modern web applications with a focus on clean architecture, problem solving, and great user experiences.",

  location: "India",
  email: "avinavjohari7@gmail.com",

  github: "https://github.com/avinav77",
  linkedin: "https://www.linkedin.com/in/avinav-j-756a98295/",
  resume: "https://drive.google.com/file/d/1bLqpuTeBgRP20QGHicfpLApk8UswVurz/view?usp=drive_link",

  image: "/images/profile.jpg",

  highlights: [
    "React",
    "Node.js",
    "Express",
    "C#",
    ".NET",
    "Angular",
  ],
},
  experience: [
    {
      company: "Veersa Technologies",
      role: "Software Engineering Intern",
      duration: "2026 — Present",
      description:
        "Working on health based production applications and contributing to full-stack development.",
      technologies: ["C#", ".NET", "Angular"],
    },
  ],

  skills: {
    languages: ["C++", "C#", "JavaScript", "TypeScript"],

    frontend: [
      "React",
      "Angular",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
    ],

    databases: [
      "SQL Server",
      "MongoDb"
    ],

    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
    ],

    concepts: [
      "Data Structures & Algorithms",
      "REST APIs",
      "JWT Authentication",
      "Object-Oriented Programming",
      "System Design",
    ],
  },

 projects: [
  {
    name: "Careflow- An AI Powered Doctor Consultation Platform",
    shortName: "Careflow",
    description:
      "CareFlow provides real-time queue predictions so patients can estimate their waiting time before visiting a doctor. It also supports video consultations for remote appointments and uses symptom-based doctor recommendations to help patients find an appropriate specialist.",
    technologies: ["React", "Node.js", "Express","Machine Learning"],
    liveUrl: "https://careflow-1-cfpe.onrender.com",
    githubUrl: "https://github.com/yourusername/project-one",
    featured: true,
  },

  {
    name: "EventSphere",
    shortName: "Event",
    description:
      "EventSphere allows users to discover and manage events, authenticate securely, and book event seats through a REST-based backend. The system uses JWT authentication with refresh tokens, SQL Server for persistent data, and handles concurrent booking scenarios using optimistic concurrency control to prevent multiple users from successfully booking the same limited seat.",
    technologies: ["Angular", "ASP.NET Core", "C#", "SQL Server","TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/eventsphere",
    featured: false,
  },

  {
    name: "Campus Marketplace",
    shortName: "PROJECT 03",
    description:
      "A campus-focused marketplace that enables students to buy, sell, and discover products within their college community. The platform provides a convenient way for students to list items, browse available products, and connect with potential buyers.",
    technologies: ["React", "JavaScript", "Node.js"],
    liveUrl: "https://campusx-1-1p65.onrender.com/",
    githubUrl: "https://github.com/avinav77/mern-campus-marketplace",
    featured: false,
  },
],
};