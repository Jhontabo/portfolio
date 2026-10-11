import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 2,
    name: 'InventoryManager',
    nameEn: 'InventoryManager',
    description:
      'Sistema integral de gestión de inventarios diseñado para los laboratorios de la Universidad Mariana. Construido con Laravel y Filament, proporciona control eficiente de equipos, recursos, reservas y préstamos con control de acceso basado en roles, autenticación con Google mediante el correo institucional y reportes detallados. Este proyecto nos permitió representar a la universidad a nivel nacional en semilleros de investigación.',
    descriptionEn:
      'Comprehensive inventory management system designed for Universidad Mariana laboratories. Built with Laravel and Filament, it provides efficient control over equipment, resources, bookings, and loans with role-based access control, Google authentication via institutional email, and detailed reporting. This project allowed us to represent the university nationally in research seedbeds.',
    technologies: ['Laravel', 'Filament', 'PHP', 'MySQL', 'Google'],
    demo: '#',
    github: 'https://github.com/Jhontabo/InventoryManager',
    imageUrl: '/inventory-manager.webp',
  },
  {
    id: 3,
    name: 'Registro UCI',
    nameEn: 'ICU Registry',
    description:
      'Aplicación Flutter desarrollada para la unidad de cuidados intensivos (U.C.I.) del Hospital Departamental Universitario de Nariño, enfocada principalmente en la sábana de enfermería UCI. Permite el registro y la gestión de pacientes con autenticación segura mediante Firebase, facilitando el trabajo del personal médico con una interfaz rápida y sencilla.',
    descriptionEn:
      'Flutter application developed for the intensive care unit (ICU) of the Hospital Departamental Universitario de Nariño, focused mainly on the ICU nursing flowsheet. It enables patient registration and management with secure Firebase authentication, helping medical staff with a fast, simple interface.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    demo: '#',
    github: 'https://github.com/Jhontabo/Registro-UCI',
    imageUrl: '/registro-uci.webp',
  },
  {
    id: 4,
    name: 'BiteBox',
    nameEn: 'BiteBox',
    description: 'Proyecto web para la gestión de un restaurante.',
    descriptionEn: 'Web project for restaurant management.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    demo: '#',
    github: 'https://github.com/Jhontabo/bitebox',
  },
  {
    id: 1,
    name: 'BSPWM Dotfiles',
    nameEn: 'BSPWM Dotfiles',
    description:
      'Script automatizado para distros basadas en Debian que instala BSPWM de manera fácil: BSPWM, Polybar, Picom, Kitty, Rofi, Zsh + Powerlevel10k, scripts personalizados, wallpapers y Nerd Fonts con temática Pacman/arcade.',
    descriptionEn:
      'Automated script for Debian-based distros that installs BSPWM the easy way: BSPWM, Polybar, Picom, Kitty, Rofi, Zsh + Powerlevel10k, custom scripts, wallpapers and Nerd Fonts with a Pacman/arcade theme.',
    technologies: ['BSPWM', 'Polybar', 'Zsh', 'Bash'],
    demo: '#',
    github: 'https://github.com/Jhontabo/ubuntuBspwm',
    imageUrl: '/bspwm-dotfiles.webp',
  },
];
