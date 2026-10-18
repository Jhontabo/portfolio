import type { ImageMetadata } from 'astro';

export interface Project {
  id: number;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  technologies: string[];
  demo: string;
  github: string;
  image?: ImageMetadata;
  imageAlt?: string;
}

export type SkillCategory = 'languages' | 'frontend' | 'backend' | 'mobile' | 'tools' | 'marketing';

export interface Skill {
  name: string;
  icon: string;
}

export type SkillsByCategory = Record<SkillCategory, Skill[]>;

export interface Certificate {
  id: number;
  name: string;
  nameEn: string;
  issuer: string;
  link: string;
}

export type JourneyCategory = 'education' | 'work' | 'research' | 'marketing';

export interface JourneyEntry {
  id: number;
  category: JourneyCategory;
  dateEs: string;
  dateEn: string;
  year: string;
  titleEs: string;
  titleEn: string;
  shortEs: string;
  shortEn: string;
  descriptionEs: string;
  descriptionEn: string;
  current?: boolean;
  linkType?: 'github';
  link?: string;
}
