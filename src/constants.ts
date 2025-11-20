import { 
  Code2, 
  Brain, 
  Database, 
  Terminal, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail 
} from 'lucide-react';
import type { SkillCategory, ExperienceItem, Project, SocialLink } from './types';

export const HERO_CONTENT = {
  name: "Solomon Asefa",
  role: "Software Engineer",
  headline: "Building Intelligent Solutions for the Real World.",
  subheadline: "I bridge the gap between complex AI theories and impactful production software. Specializing in national-scale applications and digital innovation.",
  email: "birukmaru12@gmail.com" // Placeholder
};

export const ABOUT_CONTENT = {
  description1: "I am a passionate Software Engineer specializing in the Artificial Intelligence stream. My journey is defined by a relentless pursuit of innovation—turning raw data into actionable intelligence and complex problems into elegant software solutions.",
  description2: "With experience ranging from individual contributions to leading development for national-level projects in Ethiopia, I bring a blend of technical expertise and strategic thinking. I thrive in collaborative environments where code meets creativity to solve genuine human problems."
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Scikit-learn", "Data Analysis"],
    icon: Brain
  },
  {
    category: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3", "Framer Motion"],
    icon: Code2
  },
  {
    category: "Backend & Architecture",
    skills: ["Node.js", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Docker", "Microservices"],
    icon: Database
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Linux", "AWS", "Google Cloud", "CI/CD", "Jira", "Agile Methodologies"],
    icon: Terminal
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Software Engineer",
    company: "Ethiopian Press Agency",
    period: "2023 - Present",
    description: "Leading the digital transformation of one of the nation's oldest media houses.",
    achievements: [
      "Developed and deployed national-level applications serving thousands of daily users.",
      "Integrated AI-driven content categorization systems to streamline news delivery.",
      "Collaborated with cross-functional teams to modernize legacy infrastructure."
    ]
  },
  {
    id: "exp2",
    role: "Full Stack Developer (Intern to Junior)",
    company: "Tech Solutions Ltd",
    period: "2021 - 2023",
    description: "Worked on diverse web development projects in an agile environment.",
    achievements: [
      "Contributed to the backend architecture of a high-traffic e-commerce platform.",
      "Optimized database queries reducing load times by 40%.",
      "Mentored junior interns in React and Python best practices."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj1",
    title: "EPA Digital News Platform",
    description: "A comprehensive digital news distribution system for the Ethiopian Press Agency. Features real-time updates, multimedia support, and an AI-powered recommendation engine.",
    techStack: ["React", "Node.js", "PostgreSQL", "AI/ML Integration"],
    imageUrl: "https://picsum.photos/800/600?grayscale",
    isFeatured: true
  },
  {
    id: "proj2",
    title: "Amharic Sentiment Analyzer",
    description: "An NLP model designed to analyze and categorize sentiment in Amharic text, aiding in social listening and automated moderation.",
    techStack: ["Python", "PyTorch", "NLP", "FastAPI"],
    imageUrl: "https://picsum.photos/800/601?grayscale"
  },
  {
    id: "proj3",
    title: "Smart Traffic Management System",
    description: "A computer vision prototype for detecting traffic congestion and optimizing signal timings in real-time.",
    techStack: ["OpenCV", "YOLO", "Python"],
    imageUrl: "https://picsum.photos/800/602?grayscale"
  },
  {
    id: "proj4",
    title: "Portfolio V1",
    description: "The first iteration of my personal brand website, focusing on minimalism and performance.",
    techStack: ["HTML", "SASS", "JavaScript"],
    imageUrl: "https://picsum.photos/800/603?grayscale"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com",
    icon: Github
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin
  },
  {
    platform: "Twitter",
    url: "https://twitter.com",
    icon: Twitter
  },
  {
    platform: "Email",
    url: `mailto:${HERO_CONTENT.email}`,
    icon: Mail
  }
];
