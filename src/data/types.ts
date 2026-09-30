export interface Project {
  id: number;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  technologies: string[];
  demo: string;
  github: string;
  imageUrl?: string;
}

export type SkillCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'tools'
  | 'marketing';

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
  date: string;
  description: string;
  descriptionEn: string;
  link: string;
}

export interface JourneyEntry {
  id: number;
  dateEs: string;
  dateEn: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  linkType?: 'github';
  link?: string;
}
