import {
  Sparkles,
  Globe,
  Briefcase,
} from "lucide-react";

export const projects = [
  {
    id: 1,

    title: "ToolNovaAI",

    slug: "toolnovaai",

    category: "AI Workspace",

    description:
      "A premium AI-powered SEO, GEO & AEO workspace featuring professional productivity tools, modern UI, advanced text utilities and scalable architecture.",

    liveUrl: "https://toolnovaai.vercel.app",

    githubUrl: "https://github.com/ToolNovaAI/toolnovaai",

    featured: true,

    icon: Sparkles,

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI",
      "SEO",
      "Vercel",
    ],

    highlights: [
      "Premium SaaS UI",
      "AI Workspace",
      "Modern Dashboard",
      "Responsive",
      "Fast Performance",
    ],

    gradient:
      "from-blue-500 via-violet-500 to-cyan-500",
  },

  {
    id: 2,

    title: "Grey Portfolio",

    slug: "grey-portfolio",

    category: "Personal Portfolio",

    description:
      "Modern portfolio showcasing website development, UI/UX design, automation, SEO and digital marketing expertise with premium design.",

    liveUrl: "https://grey-zen.github.io",

    githubUrl: "#",

    featured: true,

    icon: Globe,

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "SEO",
    ],

    highlights: [
      "Modern UI",
      "Responsive",
      "Portfolio",
      "Animations",
    ],

    gradient:
      "from-cyan-500 via-blue-500 to-indigo-500",
  },

  {
    id: 3,

    title: "Rishabh Workspace",

    slug: "rishabh-workspace",

    category: "Business Website",

    description:
      "Professional business website presenting web development, automation, hosting, SEO, Google Ads and digital marketing services.",

    liveUrl:
      "https://rishabhworkspace.wordpress.com",

    githubUrl: "#",

    featured: true,

    icon: Briefcase,

    technologies: [
      "WordPress",
      "SEO",
      "Google Ads",
      "Hosting",
      "Automation",
    ],

    highlights: [
      "Business Website",
      "Digital Marketing",
      "Lead Generation",
      "Professional",
    ],

    gradient:
      "from-emerald-500 via-green-500 to-teal-500",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);
