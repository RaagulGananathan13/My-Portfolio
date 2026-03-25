export const HERO_CONTENT = `Final-year IT undergraduate & Software Engineer building full-stack web applications, AI-powered systems, and production-deployed solutions. Currently contributing to ERP platforms, educational tech, and federated medical AI research — turning complex problems into clean, scalable code.
`;

export const ABOUT_TEXT = `I am passionate about solving complex problems and building efficient, scalable software solutions that create a meaningful impact. My expertise lies in full-stack web development using the MERN stack, where I have worked on dynamic, user-centric applications, as well as in AI/ML research. In addition to my development experience, I am proficient in core programming languages such as Java, Python, and SQL, which allow me to build robust and optimized systems. I am continuously striving to expand my technical horizon through hands-on work with AWS, Docker, Spring Boot, FastAPI, and SAP ERP domain knowledge. As a politically correct, nonchalant individual, I approach challenges with a calm and logical mindset, ensuring effective collaboration and a focus on results. Outside of my professional endeavors, I explore my creative side through cinematography and acting, which not only fuel my artistic interests but also enhance my storytelling and teamwork abilities. This combination of technical expertise, passion for learning, and creative pursuits defines me as a well-rounded professional dedicated to both personal and professional growth.`;

export const EXPERIENCES = [
  {
    year: "Aug 2025 - Present",
    role: "Software Engineer (Part Time)",
    company: "Fexten Solutions (Pvt) Ltd",
    description: `Resolved production bugs across live ERP modules ensuring system stability. Designed and implemented backend database schemas to support business operations. Developed server-side logic and frontend UI components across POS, Inventory Management, HCM/Payroll, and Accounting & Finance modules. Wrote and maintained test scripts to validate module functionality and ensure code quality. Gained hands-on ERP domain knowledge across core business operations.`,
    technologies: ["JavaScript", "ERP", "POS", "Inventory", "HCM/Payroll", "Accounting & Finance", "SQL", "Testing"],
  },
  {
    year: "Oct 2025 - Present",
    role: "Intern Software Engineer",
    company: "Techorin",
    description: `Contributed to the development of the Genius Bees Educational Platform as an intern, working across frontend using JavaScript. Responsibilities included building UI pages, developing server-side logic, designing database schemas, and contributing to the admin panel for content and user management.`,
    technologies: ["JavaScript", "Frontend", "Server-side", "Database Design", "Admin Panel"],
  },
  {
    year: "Feb 2025 - Sept 2025",
    role: "Intern Full Stack Developer",
    company: "Sri Lanka Telecom PLC",
    description: `NCPA Complaint Portal Revamp - Revamped the NCPA complaint portal using the MERN stack, developing frontend components, backend modules, and contributing to BRD preparation. Digital Identity Hub (MYSLT) - Built backend RESTful APIs following TM Forum standards, contributed to biometric login, Google Passkeys, and multi-device session tracking features.`,
    technologies: ["MERN", "RESTful APIs", "TM Forum", "Biometric Login", "Google Passkeys", "Session Tracking"],
  },
  {
    year: "Aug 2024 - Jan 2025 ",
    role: "Full Stack Development Internship Trainee",
    company: "Pantech.AI",
    description: `GenAI-based web applications have been developed using Python. Various frameworks and libraries, including Angular, React, Vue, Flask, and Django, have been utilized. Additionally, expertise in CI/CD pipelines has been demonstrated, with applications successfully deployed on platforms such as Heroku.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Python", "Angular", "Vue.js", "Docker"],
  },
  
];

const getProjectImage = (fileName) =>
  new URL(`../assets/projects/${fileName}`, import.meta.url).href;

export const PROJECTS = [
  {
      title: "FedMed - Federated Multi-Modal Medical AI",
    description:
        "Privacy-preserving federated learning system diagnosing 10 diseases across 2 hospitals using MIMIC-IV data. Custom DW-FedAvg algorithm with 5-channel multi-modal architecture fusing labs, X-rays (ResNet-50), and clinical notes (BioClinicalBERT). Achieves 0.89 AUROC.",
      images: [getProjectImage("FM1.png"), getProjectImage("FM2.png")],
      tags: ["Python", "PyTorch", "MIMIC-IV", "BioClinicalBERT", "ResNet-50", "CUDA"],
      link: "#",
      github: "#",
      badge: "Research in Progress",
      featured: true,
  },
  {
      title: "Watson-News - Candy E-commerce (UK Client)",
    description:
        "Full-stack e-commerce platform for a UK candy retailer with multilingual UI (EN/FR via i18next), Firebase Google OAuth, custom OTP email-verification, promotions engine, wishlist, cart and checkout, and role-based admin dashboard.",
      images: [
        getProjectImage("C1.png"),
        getProjectImage("C2.png"),
        getProjectImage("C3.png"),
        getProjectImage("C4.png"),
        getProjectImage("C5.png"),
        getProjectImage("C6.png"),
        getProjectImage("C7.png"),
      ],
      tags: ["React 18", "Redux Toolkit", "Node.js", "MySQL", "Firebase", "i18next"],
      link: "#",
      github: "https://github.com/Dilukshan285/Watson-News",
      badge: "Client - In Progress",
      featured: true,
  },
  {
      title: "Employee Promotion Prediction and HR System",
    description:
        "Full-stack MERN HR Management System with ML-powered promotion prediction. Features face-recognition login, attendance tracking, leave management, payroll processing, admin dashboards, and area-of-responsibility management. Integrated Flask ML backend using scikit-learn (94% accuracy) with competency-based assessment, development gap analysis, and professional recommendations.",
      images: [getProjectImage("HR1.png"), getProjectImage("HR2.png")],
      tags: ["React.js", "Node.js", "MongoDB", "Flask", "scikit-learn", "Face Recognition", "JWT"],
      link: "#",
      github: "https://github.com/Dilukshan285/Employee_promotion_prediction",
      badge: "Academic",
      featured: true,
  },
  {
      title: "ShopsTime - UK Supermarket Payroll Portal",
    description:
        "Production-deployed multi-shop payroll system for a UK supermarket client. Employee and shift management with UK timezone-aware auto status updates, automated payroll calculation, per-employee Excel exports, and full audit-logging middleware.",
      images: [
        getProjectImage("Wages1.png"),
        getProjectImage("Wages2.png"),
        getProjectImage("Wages3.png"),
      ],
      tags: ["React.js", "Node.js", "MySQL", "ExcelJS", "JWT", "Audit Middleware"],
      link: "https://shopstime.co.uk",
      github: "https://github.com/Dilukshan285/Wages",
      badge: "Live Production",
      featured: true,
  },
  {
      title: "Car Service Management System",
    description:
        "Full-stack vehicle service centre platform with multi-role access (Admin, Manager, Employee, Customer). Appointment booking, analytics dashboard, product store with cart and checkout, OTP verification, Firebase OAuth, and Sharp/Multer image processing.",
      images: [
        getProjectImage("R1.png"),
        getProjectImage("R2.png"),
        getProjectImage("R3.png"),
        getProjectImage("R4.png"),
        getProjectImage("R6.png"),
      ],
      tags: ["React 19", "Redux", "MongoDB", "Firebase", "JWT", "Sharp/Multer"],
      link: "#",
      github: "https://github.com/Dilukshan285/Car-Service-Management-System",
      badge: "Academic",
  },
  {
      title: "ElectroWave - Electronics E-commerce",
    description:
        "MERN electronics store with JWT auth, admin product and order management, cart and checkout. Full DevOps: GitHub Actions pipeline runs ESLint, Jest unit tests, and Cypress E2E on every push with automated Vercel deployment.",
      images: [
        getProjectImage("E1.png"),
        getProjectImage("E2v2.png"),
        getProjectImage("E3.png"),
        getProjectImage("E4.png"),
        getProjectImage("E5.png"),
      ],
      tags: ["React.js", "MongoDB", "Jest", "Cypress", "GitHub Actions", "Vercel"],
      link: "#",
      github: "https://github.com/Dilukshan285/Electro",
      badge: "Academic",
  },
  {
      title: "UniScraper - AI Course Recommendation Engine",
    description:
        "Intelligent course recommendation for 11 Sri Lankan universities. Custom HTML extractors, SBERT semantic search with cosine similarity, sklearn eligibility predictor, and FastAPI backend with MongoDB Atlas.",
      images: [
        getProjectImage("U1.png"),
        getProjectImage("U2.png"),
        getProjectImage("U3.png"),
        getProjectImage("U4.png"),
        getProjectImage("U5.png"),
        getProjectImage("U6.png"),
      ],
      tags: ["Python", "FastAPI", "SBERT", "scikit-learn", "BeautifulSoup", "MongoDB Atlas"],
      link: "#",
      github: "#",
      badge: "Academic",
    },
    {
      title: "Haritha Hub - Plant E-commerce",
      description:
        "Full-stack plant marketplace with Redux Toolkit state management, role-based JWT auth, Multer/Sharp image pipeline, video tutorials, and animated UI with Framer Motion.",
      images: [getProjectImage("Haritha1.png"), getProjectImage("Haritha2.png")],
      tags: ["React 19", "Redux Toolkit", "MongoDB", "Framer Motion", "Sharp", "Multer"],
      link: "#",
      github: "https://github.com/Dilukshan285/Haritha_Hub",
      badge: "Academic",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    images: [getProjectImage("project-3.jpg")],
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Task Master - Individual Project",
    description:
      "I developed two individual mobile apps using Kotlin in Android Studio: a booking app and a task management app. Both featured Figma-designed UIs, implemented MVVM architecture, integrated SQLite and Firebase, and included functionalities like vibration sensors and multi-language support.",
    images: [getProjectImage("project-4.jpg")],
    technologies: ["Kotlin", "SQlite", "Android Studio", "Jetpack Compose"],
  },
  {
    title: "Leaf Disease Detection Using OpenCV for Early Agricultural Intervention - Individual Project",
    description:
      "The leaf disease detection project using OpenCV employs image processing to identify and classify diseases on plant leaves. It captures images of leaves, processes them to detect disease-related patterns, and uses OpenCV for tasks like image enhancement, segmentation, feature extraction, and classification.",
    images: [getProjectImage("project-5.jpg")],
    technologies: ["OpenCV", "Python", "NumPy"],
  },
];

export const CONTACT = {
  address: "Wellawatte, Colombo, Sri Lanka. ",
  phoneNo: "+94 77 521 4895 ",
  email: "raagul.gana@gmail.com",
};
