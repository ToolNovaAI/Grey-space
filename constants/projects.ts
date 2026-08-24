import {
  Sparkles,
  Globe,
  Briefcase,
  Megaphone,
  Bike,
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

    title: "Grey Space",

    slug: "grey-space",

    category: "Personal Portfolio",

    description:
      "A premium personal portfolio and digital growth website showcasing website development, SEO, Google Ads, Meta Ads, AI automation and digital marketing expertise.",

    liveUrl: "https://grey-space.vercel.app",

    githubUrl: "#",

    featured: true,

    icon: Globe,

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
    ],

    highlights: [
      "Premium UI/UX",
      "Responsive",
      "Animations",
      "SEO Ready",
      "Digital Growth",
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

  {
    id: 4,

    title: "The Media Buddy",

    slug: "the-media-buddy",

    category: "Digital Marketing & Technology",

    description:
      "A modern digital marketing and technology website designed to showcase web development, SEO, advertising, automation and digital growth solutions for businesses.",

    liveUrl:
      "https://the-media-buddy.vercel.app",

    githubUrl: "#",

    featured: true,

    icon: Megaphone,

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Digital Marketing",
      "Vercel",
    ],

    highlights: [
      "Premium UI/UX",
      "Digital Marketing",
      "SEO Ready",
      "Responsive",
      "Business Growth",
    ],

    gradient:
      "from-violet-500 via-fuchsia-500 to-pink-500",
  },

  {
    id: 5,

    title: "Moto旅",

    slug: "mototabi",

    category: "Motorcycle Magazine",

    description:
      "A premium Japanese motorcycle magazine website featuring motorcycle reviews, touring destinations, maintenance content, news and an editorial-focused digital experience.",

    liveUrl:
      "https://motover.vercel.app/index.html",

    githubUrl: "#",

    featured: true,

    icon: Bike,

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "SEO",
    ],

    highlights: [
      "Japanese UX",
      "Editorial Design",
      "Responsive",
      "Motorcycle Content",
      "Premium Experience",
    ],

    gradient:
      "from-orange-500 via-red-500 to-rose-600",
  },

  {
    id: 6,

    title: "Pet Care",

    slug: "pet-care",

    category: "Pet Care Website",

    description:
      "A premium Japanese pet care website designed for pet owners, featuring pet wellness, training, care information and a modern editorial experience with a clean Japanese-inspired UI.",

    liveUrl:
      "https://pet-care-in.vercel.app",

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
      "Japanese UX",
      "Premium UI/UX",
      "Pet Care",
      "Responsive",
      "SEO Ready",
    ],

    gradient:
      "from-pink-500 via-rose-500 to-orange-400",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);
