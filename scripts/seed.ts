import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(process.cwd(), ".env.local") });
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(url, key);

async function seed() {
  console.log("Seeding personal_info...");
  const { error: e1 } = await supabase.from("personal_info").upsert({
    id: "00000000-0000-0000-0000-000000000001",
    name: "Jhon Tajumbina",
    title: "Full-Stack Developer | React · Express · Laravel",
    email: "jhon.tajumbina@email.com",
    linkedin: "https://www.linkedin.com/in/jhon-tajumbina-8917922a3",
    github: "https://github.com/Jhontabo",
    bio_es: "Soy Jhon Tajumbina, desarrollador Full-Stack con sede en Pasto, Colombia. He trabajado en una amplia gama de proyectos, desde aplicaciones móviles para unidades de cuidados intensivos hasta sistemas de gestión de inventarios para laboratorios universitarios, con un enfoque en crear interfaces limpias y funcionales que no solo se ven bien, sino que también brindan una experiencia de usuario fluida.",
    bio_en: "I'm Jhon Tajumbina, a Full-Stack Developer based in Pasto, Colombia. I have worked on a wide range of projects, from mobile applications for intensive care units to inventory management systems for university laboratories, with a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.",
    cv_url: "/cv.pdf",
  });
  if (e1) console.error("personal_info:", e1.message);

  console.log("Seeding projects...");
  const { error: e2 } = await supabase.from("projects").upsert([
    {
      name: "BSPWM Dotfiles", name_en: "BSPWM Dotfiles",
      description: "Pacman/arcade-themed BSPWM dotfiles para Ubuntu/Debian con instalador automático de BSPWM, Polybar, Picom, Kitty, Rofi, Zsh + Powerlevel10k, scripts personalizados, wallpapers y Nerd Fonts.",
      description_en: "Pacman/arcade-themed BSPWM dotfiles for Ubuntu/Debian featuring an automated installer for BSPWM, Polybar, Picom, Kitty, Rofi, Zsh + Powerlevel10k, plus custom scripts, wallpapers, and Nerd Fonts.",
      technologies: ["BSPWM", "Polybar", "Zsh", "Bash"], demo: "#", github: "https://github.com/Jhontabo/ubuntuBspwm", sort_order: 1,
    },
    {
      name: "InventoryManager", name_en: "InventoryManager",
      description: "Sistema integral de gestión de inventarios diseñado para laboratorios universitarios. Construido con Laravel y Filament, proporciona control eficiente de equipos, recursos, reservas y préstamos con control de acceso basado en roles y reportes detallados.",
      description_en: "Comprehensive inventory management system designed for university laboratories. Built with Laravel and Filament, it provides efficient control over equipment, resources, bookings, and loans with role-based access control and detailed reporting.",
      technologies: ["Laravel", "Filament", "PHP", "MySQL"], demo: "https://inventorymanager-production-900a.up.railway.app/admin/login", github: "https://github.com/Jhontabo/InventoryManager", sort_order: 2,
    },
    {
      name: "Registro UCI", name_en: "ICU Registry",
      description: "Aplicación Flutter desarrollada para la unidad de cuidados intensivos (U.C.I.) del Hospital Departamental Universitario de Nariño.",
      description_en: "Flutter application developed for the intensive care unit (ICU) of the Hospital Departamental Universitario de Nariño.",
      technologies: ["Flutter", "Dart"], demo: "#", github: "https://github.com/Jhontabo/Registro-UCI", sort_order: 3,
    },
    {
      name: "BiteBox", name_en: "BiteBox",
      description: "Proyecto web para la gestión de un restaurante.",
      description_en: "Web project for restaurant management.",
      technologies: ["React", "Node.js", "Tailwind CSS"], demo: "#", github: "https://github.com/Jhontabo/bitebox", sort_order: 4,
    },
  ]);
  if (e2) console.error("projects:", e2.message);

  console.log("Seeding certificates...");
  const { error: e3 } = await supabase.from("certificates").upsert([
    { name: "Fundamentos de Ingeniería de Software", name_en: "Software Engineering Fundamentals", issuer: "Platzi", date: "", description: "Fundamentos de ingeniería de software, metodologías de desarrollo, y mejores prácticas para la construcción de sistemas de software.", description_en: "Foundations of software engineering, development methodologies, and best practices for building software systems.", link: "https://drive.google.com/file/d/1uRp9XQsNpzLzEe4x0h6vGzWOOSwLkYg-/view", sort_order: 1 },
    { name: "Algoritmos y Diagramas de Flujo", name_en: "Algorithms and Flowcharts", issuer: "Platzi", date: "", description: "Fundamentos de algoritmos, diagramas de flujo y lógica de programación.", description_en: "Fundamentals of algorithms, flowcharts, and programming logic.", link: "https://drive.google.com/file/d/1bQn9GvEEYcbpoDFkV8Z7ypb7lgL4I8JG/view", sort_order: 2 },
    { name: "Manejo de Datos, Estructuras y Funciones", name_en: "Data Handling, Structures and Functions", issuer: "Platzi", date: "", description: "Manejo de datos, estructuras de datos y funciones en programación.", description_en: "Data handling, data structures, and functions in programming.", link: "https://drive.google.com/file/d/193eI8SHPKmAfkap4JljYG92l68_WBw_7/view", sort_order: 3 },
    { name: "Prompt Engineering con ChatGPT", name_en: "Prompt Engineering with ChatGPT", issuer: "Platzi", date: "", description: "Técnicas de ingeniería de prompts para optimizar interacciones con ChatGPT.", description_en: "Prompt engineering techniques to optimize interactions with ChatGPT.", link: "https://drive.google.com/file/d/1Ccu849dqNb6JWRW5DP2OMbJZHmN2L4jl/view", sort_order: 4 },
    { name: "Pensamiento Computacional con Python", name_en: "Computational Thinking with Python", issuer: "Platzi", date: "", description: "Desarrollo de pensamiento computacional aplicado con Python.", description_en: "Applied computational thinking development with Python.", link: "https://drive.google.com/file/d/1sTohddxFpetf0n2odyFUmWuSM7HmGExp/view", sort_order: 5 },
    { name: "Fundamentos de Python", name_en: "Python Fundamentals", issuer: "Platzi", date: "", description: "Fundamentos del lenguaje Python, sintaxis y estructuras básicas.", description_en: "Python language fundamentals, syntax, and basic structures.", link: "https://drive.google.com/file/d/1iipUKTE1-FuOsiTO12cIoSQD5VOfmePx/view", sort_order: 6 },
    { name: "Introducción a la Terminal y Línea de Comandos", name_en: "Introduction to the Terminal and Command Line", issuer: "Platzi", date: "", description: "Uso de la terminal, comandos básicos y navegación por el sistema de archivos.", description_en: "Terminal usage, basic commands, and file system navigation.", link: "https://drive.google.com/file/d/1XauTADGUwiFcQXsBoXgqDSTcq7_FeRkm/view", sort_order: 7 },
    { name: "NDG Linux Essentials", name_en: "NDG Linux Essentials", issuer: "Cisco Networking Academy", date: "", description: "Curso Linux Essentials de Cisco Networking Academy, fundamentos del sistema operativo Linux.", description_en: "Cisco Networking Academy Linux Essentials course, Linux OS fundamentals.", link: "https://drive.google.com/file/d/1jR9lv1E1Za22wFuZoPCT9AOx2uTygtsU/view", sort_order: 8 },
  ]);
  if (e3) console.error("certificates:", e3.message);

  console.log("Seeding skills...");
  const skillsData = [
    { name: "JavaScript", icon: "javascript", category: "languages", sort_order: 1 },
    { name: "TypeScript", icon: "typescript", category: "languages", sort_order: 2 },
    { name: "PHP", icon: "php", category: "languages", sort_order: 3 },
    { name: "Python", icon: "python", category: "languages", sort_order: 4 },
    { name: "Dart", icon: "dart", category: "languages", sort_order: 5 },
    { name: "React", icon: "react", category: "frontend", sort_order: 1 },
    { name: "Next.js", icon: "nextjs", category: "frontend", sort_order: 2 },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend", sort_order: 3 },
    { name: "HTML5", icon: "html5", category: "frontend", sort_order: 4 },
    { name: "CSS3", icon: "css3", category: "frontend", sort_order: 5 },
    { name: "Express.js", icon: "express", category: "backend", sort_order: 1 },
    { name: "Laravel", icon: "laravel", category: "backend", sort_order: 2 },
    { name: "Node.js", icon: "nodedotjs", category: "backend", sort_order: 3 },
    { name: "MySQL/MariaDB", icon: "mysql", category: "backend", sort_order: 4 },
    { name: "JWT", icon: "jwt", category: "backend", sort_order: 5 },
    { name: "Flutter", icon: "flutter", category: "mobile", sort_order: 1 },
    { name: "Dart", icon: "dart", category: "mobile", sort_order: 2 },
    { name: "Android", icon: "android", category: "mobile", sort_order: 3 },
    { name: "Git", icon: "git", category: "tools", sort_order: 1 },
    { name: "GitHub", icon: "github", category: "tools", sort_order: 2 },
    { name: "Linux", icon: "linux", category: "tools", sort_order: 3 },
    { name: "Bash", icon: "bash", category: "tools", sort_order: 4 },
    { name: "Neovim", icon: "neovim", category: "tools", sort_order: 5 },
    { name: "AWS", icon: "aws", category: "tools", sort_order: 6 },
    { name: "WSL", icon: "windows", category: "tools", sort_order: 7 },
  ];
  const { error: e4 } = await supabase.from("skills").upsert(skillsData);
  if (e4) console.error("skills:", e4.message);

  console.log("Seeding journey_entries...");
  const { error: e5 } = await supabase.from("journey_entries").upsert([
    { date_es: "2021", date_en: "2021", title_es: "Inicio en la Universidad Mariana", title_en: "Started at Universidad Mariana", description_es: "Comencé Ingeniería de Sistemas en la Universidad Mariana, enfocado en construir bases sólidas en software y redes.", description_en: "Started Systems Engineering at Universidad Mariana, focused on building strong foundations in software and networking.", sort_order: 1 },
    { date_es: "Febrero - Mayo 2025", date_en: "February - May 2025", title_es: "Prácticas en hospital como desarrollador Flutter", title_en: "Hospital internship as Flutter developer", description_es: "Desarrollé una aplicación de enfermería con Flutter para apoyar procesos clínicos y flujo operativo del equipo de salud.", description_en: "Built a nursing app with Flutter to support clinical processes and operational workflows for healthcare teams.", link_type: "github", link: "https://github.com/Jhontabo/Registro-UCI", sort_order: 2 },
    { date_es: "Mayo 2025", date_en: "May 2025", title_es: "Encuentro Departamental de Semilleros de Investigación", title_en: "Departmental Research Seedbed Meeting", description_es: "Presentación del trabajo de grado 'Sistema de Información para la Gestión de los Laboratorios de la Universidad Mariana' en el Encuentro Departamental de Semilleros de Investigación.", description_en: "Presentation of the thesis 'Information System for Laboratory Management at Universidad Mariana' at the Departmental Research Seedbed Meeting.", sort_order: 3 },
    { date_es: "Octubre 2025", date_en: "October 2025", title_es: "Encuentro Departamental de Semilleros de Investigación", title_en: "Departmental Research Seedbed Meeting", description_es: "Segunda presentación del trabajo de grado 'Sistema de Información para la Gestión de los Laboratorios de la Universidad Mariana' en el Encuentro Departamental de Semilleros de Investigación.", description_en: "Second presentation of the thesis 'Information System for Laboratory Management at Universidad Mariana' at the Departmental Research Seedbed Meeting.", sort_order: 4 },
    { date_es: "Agosto 2025 - Abril 2026", date_en: "August 2025 - April 2026", title_es: "Auxiliar de crédito en Cofinal", title_en: "Credit assistant at Cofinal", description_es: "Trabajé en el área de créditos, apoyando en procesos administrativos y financieros. Además, ayudaba a mis compañeros con problemas técnicos, soporte en Excel y optimización de tareas cotidianas.", description_en: "Worked in the credit area, supporting administrative and financial processes. I also helped colleagues with technical issues, Excel support, and optimization of daily tasks.", sort_order: 5 },
    { date_es: "Junio 2026", date_en: "June 2026", title_es: "Grado como Ingeniero de Sistemas", title_en: "Systems Engineering degree", description_es: "Recibí el título universitario como Ingeniero de Sistemas, cerrando mi ciclo académico con enfoque en desarrollo full-stack y experiencia aplicada en proyectos reales.", description_en: "Received my university degree as a Systems Engineer, closing my academic cycle with a focus on full-stack development and applied experience in real projects.", sort_order: 6 },
  ]);
  if (e5) console.error("journey:", e5.message);

  console.log("Seeding admin_users...");
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";
  const passwordHash = bcrypt.hashSync(adminPassword, 10);
  const { error: e6 } = await supabase.from("admin_users").upsert({
    id: "00000000-0000-0000-0000-000000000002",
    username: "admin",
    password_hash: passwordHash,
  });
  if (e6) console.error("admin_users:", e6.message);

  console.log("Seed completo!");
}

seed();
