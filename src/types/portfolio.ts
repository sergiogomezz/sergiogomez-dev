export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  focusAreas: string[];
  links: LinkItem[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  type: string;
  dates: string;
  summary: string;
  highlights: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  details: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type LanguageItem = {
  language: string;
  level: string;
};

export type AwardItem = {
  title: string;
  detail: string;
};
