export const personalInfo = {
  name: "Jhon Tajumbina",
  title: "Full-Stack Developer | React · Express · Laravel",
  email: "jhon.tajumbina@email.com",
  linkedin: "https://www.linkedin.com/in/jhon-tajumbina-8917922a3",
  github: "https://github.com/Jhontabo",
  bioEs: "Soy Jhon Tajumbina, desarrollador Full-Stack con sede en Pasto, Colombia. He trabajado en una amplia gama de proyectos, desde aplicaciones móviles para unidades de cuidados intensivos hasta sistemas de gestión de inventarios para laboratorios universitarios, con un enfoque en crear interfaces limpias y funcionales que no solo se ven bien, sino que también brindan una experiencia de usuario fluida. Actualmente también me desempeño como pitcher de marketing digital en Valencia One, gestionando campañas de Meta Ads para impulsar resultados de clientes.",
  bioEn: "I'm Jhon Tajumbina, a Full-Stack Developer based in Pasto, Colombia. I have worked on a wide range of projects, from mobile applications for intensive care units to inventory management systems for university laboratories, with a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience. I'm also currently working as a digital marketing pitcher at Valencia One, managing Meta Ads campaigns to drive client results.",
};

export const projects = [
  {
    id: 1,
    name: "BSPWM Dotfiles",
    nameEn: "BSPWM Dotfiles",
    description: "Pacman/arcade-themed BSPWM dotfiles para Ubuntu/Debian con instalador automático de BSPWM, Polybar, Picom, Kitty, Rofi, Zsh + Powerlevel10k, scripts personalizados, wallpapers y Nerd Fonts.",
    descriptionEn: "Pacman/arcade-themed BSPWM dotfiles for Ubuntu/Debian featuring an automated installer for BSPWM, Polybar, Picom, Kitty, Rofi, Zsh + Powerlevel10k, plus custom scripts, wallpapers, and Nerd Fonts.",
    technologies: ["BSPWM", "Polybar", "Zsh", "Bash"],
    demo: "#",
    github: "https://github.com/Jhontabo/ubuntuBspwm",
  },
  {
    id: 2,
    name: "InventoryManager",
    nameEn: "InventoryManager",
    description: "Sistema integral de gestión de inventarios diseñado para laboratorios universitarios. Construido con Laravel y Filament, proporciona control eficiente de equipos, recursos, reservas y préstamos con control de acceso basado en roles y reportes detallados.",
    descriptionEn: "Comprehensive inventory management system designed for university laboratories. Built with Laravel and Filament, it provides efficient control over equipment, resources, bookings, and loans with role-based access control and detailed reporting.",
    technologies: ["Laravel", "Filament", "PHP", "MySQL"],
    demo: "https://inventorymanager-production-900a.up.railway.app/admin/login",
    github: "https://github.com/Jhontabo/InventoryManager",
  },
  {
    id: 3,
    name: "Registro UCI",
    nameEn: "ICU Registry",
    description: "Aplicación Flutter desarrollada para la unidad de cuidados intensivos (U.C.I.) del Hospital Departamental Universitario de Nariño.",
    descriptionEn: "Flutter application developed for the intensive care unit (ICU) of the Hospital Departamental Universitario de Nariño.",
    technologies: ["Flutter", "Dart"],
    demo: "#",
    github: "https://github.com/Jhontabo/Registro-UCI",
  },
  {
    id: 4,
    name: "BiteBox",
    nameEn: "BiteBox",
    description: "Proyecto web para la gestión de un restaurante.",
    descriptionEn: "Web project for restaurant management.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    demo: "#",
    github: "https://github.com/Jhontabo/bitebox",
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "PHP", icon: "php" },
    { name: "Python", icon: "python" },
    { name: "Dart", icon: "dart" },
  ],
  frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
  ],
  backend: [
    { name: "Express.js", icon: "express" },
    { name: "Laravel", icon: "laravel" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "MySQL/MariaDB", icon: "mysql" },
    { name: "JWT", icon: "jwt" },
  ],
  mobile: [
    { name: "Flutter", icon: "flutter" },
    { name: "Dart", icon: "dart" },
    { name: "Android", icon: "android" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Linux", icon: "linux" },
    { name: "Bash", icon: "bash" },
    { name: "Neovim", icon: "neovim" },
    { name: "AWS", icon: "aws" },
    { name: "WSL", icon: "windows" },
  ],
  marketing: [
    { name: "Meta Ads", icon: "meta" },
    { name: "Facebook Ads", icon: "facebook" },
    { name: "Instagram Ads", icon: "instagram" },
    { name: "TikTok Ads", icon: "tiktok" },
    { name: "Google Ads", icon: "googleads" },
  ],
};

export const certificates = [
  {
    id: 1,
    name: "Fundamentos de Ingeniería de Software",
    nameEn: "Software Engineering Fundamentals",
    issuer: "Platzi",
    date: "",
    description: "Fundamentos de ingeniería de software, metodologías de desarrollo, y mejores prácticas para la construcción de sistemas de software.",
    descriptionEn: "Foundations of software engineering, development methodologies, and best practices for building software systems.",
    link: "https://drive.google.com/file/d/1uRp9XQsNpzLzEe4x0h6vGzWOOSwLkYg-/view",
  },
  {
    id: 2,
    name: "Algoritmos y Diagramas de Flujo",
    nameEn: "Algorithms and Flowcharts",
    issuer: "Platzi",
    date: "",
    description: "Fundamentos de algoritmos, diagramas de flujo y lógica de programación.",
    descriptionEn: "Fundamentals of algorithms, flowcharts, and programming logic.",
    link: "https://drive.google.com/file/d/1bQn9GvEEYcbpoDFkV8Z7ypb7lgL4I8JG/view",
  },
  {
    id: 3,
    name: "Manejo de Datos, Estructuras y Funciones",
    nameEn: "Data Handling, Structures and Functions",
    issuer: "Platzi",
    date: "",
    description: "Manejo de datos, estructuras de datos y funciones en programación.",
    descriptionEn: "Data handling, data structures, and functions in programming.",
    link: "https://drive.google.com/file/d/193eI8SHPKmAfkap4JljYG92l68_WBw_7/view",
  },
  {
    id: 4,
    name: "Prompt Engineering con ChatGPT",
    nameEn: "Prompt Engineering with ChatGPT",
    issuer: "Platzi",
    date: "",
    description: "Técnicas de ingeniería de prompts para optimizar interacciones con ChatGPT.",
    descriptionEn: "Prompt engineering techniques to optimize interactions with ChatGPT.",
    link: "https://drive.google.com/file/d/1Ccu849dqNb6JWRW5DP2OMbJZHmN2L4jl/view",
  },
  {
    id: 5,
    name: "Pensamiento Computacional con Python",
    nameEn: "Computational Thinking with Python",
    issuer: "Platzi",
    date: "",
    description: "Desarrollo de pensamiento computacional aplicado con Python.",
    descriptionEn: "Applied computational thinking development with Python.",
    link: "https://drive.google.com/file/d/1sTohddxFpetf0n2odyFUmWuSM7HmGExp/view",
  },
  {
    id: 6,
    name: "Fundamentos de Python",
    nameEn: "Python Fundamentals",
    issuer: "Platzi",
    date: "",
    description: "Fundamentos del lenguaje Python, sintaxis y estructuras básicas.",
    descriptionEn: "Python language fundamentals, syntax, and basic structures.",
    link: "https://drive.google.com/file/d/1iipUKTE1-FuOsiTO12cIoSQD5VOfmePx/view",
  },
  {
    id: 7,
    name: "Introducción a la Terminal y Línea de Comandos",
    nameEn: "Introduction to the Terminal and Command Line",
    issuer: "Platzi",
    date: "",
    description: "Uso de la terminal, comandos básicos y navegación por el sistema de archivos.",
    descriptionEn: "Terminal usage, basic commands, and file system navigation.",
    link: "https://drive.google.com/file/d/1XauTADGUwiFcQXsBoXgqDSTcq7_FeRkm/view",
  },
  {
    id: 8,
    name: "NDG Linux Essentials",
    nameEn: "NDG Linux Essentials",
    issuer: "Cisco Networking Academy",
    date: "",
    description: "Curso Linux Essentials de Cisco Networking Academy, fundamentos del sistema operativo Linux.",
    descriptionEn: "Cisco Networking Academy Linux Essentials course, Linux OS fundamentals.",
    link: "https://drive.google.com/file/d/1jR9lv1E1Za22wFuZoPCT9AOx2uTygtsU/view",
  },
];

export const journeyTimeline = [
  {
    id: 1,
    dateEs: "2021",
    dateEn: "2021",
    titleEs: "Inicio en la Universidad Mariana",
    titleEn: "Started at Universidad Mariana",
    descriptionEs:
      "Comencé Ingeniería de Sistemas en la Universidad Mariana, enfocado en construir bases sólidas en software y redes.",
    descriptionEn:
      "Started Systems Engineering at Universidad Mariana, focused on building strong foundations in software and networking.",
  },
  {
    id: 2,
    dateEs: "Febrero - Mayo 2025",
    dateEn: "February - May 2025",
    titleEs: "Prácticas en hospital como desarrollador Flutter",
    titleEn: "Hospital internship as Flutter developer",
    descriptionEs:
      "Desarrollé una aplicación de enfermería con Flutter para apoyar procesos clínicos y flujo operativo del equipo de salud.",
    descriptionEn:
      "Built a nursing app with Flutter to support clinical processes and operational workflows for healthcare teams.",
    linkType: "github",
    link: "https://github.com/Jhontabo/Registro-UCI",
  },
  {
    id: 3,
    dateEs: "Mayo 2025",
    dateEn: "May 2025",
    titleEs: "Encuentro Departamental de Semilleros de Investigación",
    titleEn: "Departmental Research Seedbed Meeting",
    descriptionEs:
      "Presentación del trabajo de grado 'Sistema de Información para la Gestión de los Laboratorios de la Universidad Mariana' en el Encuentro Departamental de Semilleros de Investigación.",
    descriptionEn:
      "Presentation of the thesis 'Information System for Laboratory Management at Universidad Mariana' at the Departmental Research Seedbed Meeting.",
  },
  {
    id: 4,
    dateEs: "Octubre 2025",
    dateEn: "October 2025",
    titleEs: "Encuentro Departamental de Semilleros de Investigación",
    titleEn: "Departmental Research Seedbed Meeting",
    descriptionEs:
      "Segunda presentación del trabajo de grado 'Sistema de Información para la Gestión de los Laboratorios de la Universidad Mariana' en el Encuentro Departamental de Semilleros de Investigación.",
    descriptionEn:
      "Second presentation of the thesis 'Information System for Laboratory Management at Universidad Mariana' at the Departmental Research Seedbed Meeting.",
  },
  {
    id: 5,
    dateEs: "Agosto 2025 - Abril 2026",
    dateEn: "August 2025 - April 2026",
    titleEs: "Auxiliar de crédito en Cofinal",
    titleEn: "Credit assistant at Cofinal",
    descriptionEs:
      "Trabajé en el área de créditos, apoyando en procesos administrativos y financieros. Además, ayudaba a mis compañeros con problemas técnicos, soporte en Excel y optimización de tareas cotidianas.",
    descriptionEn:
      "Worked in the credit area, supporting administrative and financial processes. I also helped colleagues with technical issues, Excel support, and optimization of daily tasks.",
  },
  {
    id: 6,
    dateEs: "Junio 2026",
    dateEn: "June 2026",
    titleEs: "Grado como Ingeniero de Sistemas",
    titleEn: "Systems Engineering degree",
    descriptionEs:
      "Recibí el título universitario como Ingeniero de Sistemas, cerrando mi ciclo académico con enfoque en desarrollo full-stack y experiencia aplicada en proyectos reales.",
    descriptionEn:
      "Received my university degree as a Systems Engineer, closing my academic cycle with a focus on full-stack development and applied experience in real projects.",
  },
  {
    id: 7,
    dateEs: "Septiembre 2026",
    dateEn: "September 2026",
    titleEs: "Pitcher de marketing con Meta Ads en Valencia One",
    titleEn: "Marketing pitcher with Meta Ads at Valencia One",
    descriptionEs:
      "Ingresé en Valencia One como pitcher de marketing, gestionando campañas publicitarias de Meta Ads (Facebook e Instagram) para impulsar clientes y resultados.",
    descriptionEn:
      "Joined Valencia One as a marketing pitcher, managing Meta Ads campaigns (Facebook and Instagram) to drive client growth and results.",
  },
];

export const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Portafolio", href: "#portfolio" },
];
