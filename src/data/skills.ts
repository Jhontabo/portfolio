import type { SkillCategory, SkillsByCategory } from './types';

export const CATEGORY_ORDER: SkillCategory[] = [
  'languages',
  'frontend',
  'backend',
  'mobile',
  'tools',
  'marketing',
];

export const VISIBLE_SKILL_COUNT = 4;

export const skills: SkillsByCategory = {
  languages: [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'PHP', icon: 'php' },
    { name: 'Python', icon: 'python' },
    { name: 'Dart', icon: 'dart' },
  ],
  frontend: [
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
  ],
  backend: [
    { name: 'Express.js', icon: 'express' },
    { name: 'Laravel', icon: 'laravel' },
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'MySQL/MariaDB', icon: 'mysql' },
    { name: 'JWT', icon: 'jwt' },
  ],
  mobile: [
    { name: 'Flutter', icon: 'flutter' },
    { name: 'Dart', icon: 'dart' },
    { name: 'Android', icon: 'android' },
  ],
  tools: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Linux', icon: 'linux' },
    { name: 'Bash', icon: 'bash' },
    { name: 'Neovim', icon: 'neovim' },
    { name: 'AWS', icon: 'aws' },
    { name: 'WSL', icon: 'windows' },
  ],
  marketing: [
    { name: 'Meta Ads', icon: 'meta' },
    { name: 'Facebook Ads', icon: 'facebook' },
    { name: 'Instagram Ads', icon: 'instagram' },
    { name: 'TikTok Ads', icon: 'tiktok' },
    { name: 'Google Ads', icon: 'googleads' },
  ],
};
