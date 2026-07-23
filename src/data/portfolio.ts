import type {
  AwardItem,
  EducationItem,
  ExperienceItem,
  LanguageItem,
  Profile,
  ProjectItem,
  SkillGroup,
} from "@/types/portfolio";

export const profile: Profile = {
  name: "Sergio Gómez Martín",
  role: "AI / ML Engineer",
  location: "Madrid, Spain",
  summary:
    "AI / ML Engineer focused on applied AI systems, LLM agents, machine learning, deep learning, and data pipelines.",
  focusAreas: [
    "LLM agents",
    "Applied AI systems",
    "Machine learning",
    "Data pipelines",
  ],
  links: [
    {
      label: "Email",
      href: "mailto:sergio.gomez.martin10@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/sergio-gomez10",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/sergiogomezz",
      external: true,
    },
    {
      label: "CV",
      href: "/cv_sergiogomez.pdf",
      external: true,
    },
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Accenture AI",
    location: "Gijon, Spain",
    dates: "Jan 2025 - Present",
    highlights: [
      "Took technical ownership in a client-facing aerospace project.",
      "Developed PySpark ETL pipelines in Palantir to process more than 300 million asset-tracking events.",
      "Optimized compute usage by 40% compared with the previous version.",
      "Designed a LangGraph-based multi-agent system for a pharma client to support stock rebalancing across logistics centers through natural language.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Ikerlan",
    location: "San Sebastian, Spain",
    dates: "Aug 2023 - Aug 2024",
    highlights: [
      "Developed an AWS-based data storage system used to serve ML models in predictive maintenance use cases.",
      "Worked with more than 10 GB of real industrial data as part of a Computer Engineering BSc thesis.",
      "Designed a decision-support tool to evaluate whether internal research projects could become foundations for new startups.",
    ],
  },
  {
    role: "Data Scientist",
    company: "Excade",
    location: "Gijon, Spain",
    dates: "Jun 2022 - Sep 2022",
    highlights: [
      "Analyzed machinery expenses across more than 100 vehicles.",
      "Identified nearly EUR 100,000 in potential cost savings.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Elvex: Autonomous Architecture for Generation and Coordination of LLM Agents",
    type: "Master's thesis",
    dates: "2025 - Present",
    summary:
      "A multi-agent AI architecture that dynamically generates and coordinates specialized LLM agents to decompose and solve complex general-purpose tasks.",
    highlights: [
      "Designed a multi-agent AI architecture.",
      "Focused on dynamic generation and coordination of specialized LLM agents.",
      "Built around decomposition and solution of complex general-purpose tasks.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "MSc in Artificial Intelligence",
    institution: "Universidad Internacional de La Rioja (UNIR)",
    location: "Logrono, Spain",
    dates: "2024 - 2025",
    details: [
      "GPA: 9.7 / 10",
      "Relevant coursework: Natural Language Processing, Deep Learning, Computer Vision, Machine Learning, AI Agents.",
    ],
  },
  {
    degree: "BSc in Computer Engineering",
    institution: "Universidad del Pais Vasco (UPV)",
    location: "Vitoria, Spain",
    dates: "2019 - 2024",
    details: [
      "Final thesis grade: 9.6 / 10",
      "Exchange programs: Poznan University of Technology (Erasmus+) and Universidad Politecnica de Cataluna (SICUE).",
    ],
  },
  {
    degree: "BSc in Business Administration and Management",
    institution: "Universidad del Pais Vasco (UPV)",
    location: "Vitoria, Spain",
    dates: "2019 - 2024",
    details: ["Final thesis grade: 9.5 / 10"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "AI / ML",
    skills: ["Scikit-learn", "PyTorch", "OpenCV", "spaCy", "LangGraph"],
  },
  {
    title: "Data and Cloud",
    skills: ["AWS", "Spark", "Pandas", "Matplotlib"],
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code"],
  },
];

export const languages: LanguageItem[] = [
  { language: "Spanish", level: "Native" },
  { language: "English", level: "C1" },
  { language: "German", level: "B1" },
];

export const awards: AwardItem[] = [
  {
    title: "iGazte Program",
    detail:
      "Top 25 thesis project conducted with external entities among more than 2,000 UPV theses.",
  },
];

export const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
