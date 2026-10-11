import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'BSPWM Dotfiles',
    nameEn: 'BSPWM Dotfiles',
    description:
      'Pacman/arcade-themed BSPWM dotfiles para Ubuntu/Debian con instalador automático de BSPWM, Polybar, Picom, Kitty, Rofi, Zsh + Powerlevel10k, scripts personalizados, wallpapers y Nerd Fonts.',
    descriptionEn:
      'Pacman/arcade-themed BSPWM dotfiles for Ubuntu/Debian featuring an automated installer for BSPWM, Polybar, Picom, Kitty, Rofi, Zsh + Powerlevel10k, plus custom scripts, wallpapers, and Nerd Fonts.',
    technologies: ['BSPWM', 'Polybar', 'Zsh', 'Bash'],
    demo: '#',
    github: 'https://github.com/Jhontabo/ubuntuBspwm',
  },
  {
    id: 2,
    name: 'InventoryManager',
    nameEn: 'InventoryManager',
    description:
      'Sistema integral de gestión de inventarios diseñado para laboratorios universitarios. Construido con Laravel y Filament, proporciona control eficiente de equipos, recursos, reservas y préstamos con control de acceso basado en roles y reportes detallados.',
    descriptionEn:
      'Comprehensive inventory management system designed for university laboratories. Built with Laravel and Filament, it provides efficient control over equipment, resources, bookings, and loans with role-based access control and detailed reporting.',
    technologies: ['Laravel', 'Filament', 'PHP', 'MySQL'],
    demo: '#',
    github: 'https://github.com/Jhontabo/InventoryManager',
  },
  {
    id: 3,
    name: 'Registro UCI',
    nameEn: 'ICU Registry',
    description:
      'Aplicación Flutter desarrollada para la unidad de cuidados intensivos (U.C.I.) del Hospital Departamental Universitario de Nariño.',
    descriptionEn:
      'Flutter application developed for the intensive care unit (ICU) of the Hospital Departamental Universitario de Nariño.',
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
];
