import {
  Sparkles,
  Globe,
  Briefcase,
  LayoutDashboard,
  Bot,
  ShoppingBag,
} from "lucide-react";

export const projects = [
  {
    id: 1,

    title: "ToolNovaAI",

    slug: "toolnovaai",

    category: "AI Workspace",

    description:
      "A premium all-in-one workspace for SEO, GEO & AEO featuring AI-powered productivity tools, modern UI, and a scalable Next.js architecture.",

    image: "/projects/toolnovaai.webp",

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
      "Responsive",
      "Modern Dashboard",
    ],

    gradient: "from-blue-500 via-violet-500 to-cyan-500",
  },

  {
    id: 2,

    title: "Grey Portfolio",

    slug: "grey-portfolio",

    category: "Personal Brand",

    description:
      "Modern personal portfolio showcasing website development, digital marketing, automation and creative work.",

    image: "/projects/portfolio.webp",

    liveUrl: "#",

    githubUrl: "#",

    featured: true,

    icon: Globe,

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    highlights: [
      "Glass UI",
      "Animations",
      "SEO Ready",
      "Responsive",
    ],

    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },

  {
    id: 3,

    title: "Business Website",

    slug: "business-website",

    category: "Corporate Website",

    description:
      "A high-converting business website designed for performance, lead generation and long-term scalability.",

    image: "/projects/business.webp",

    liveUrl: "#",

    githubUrl: "#",

    featured: true,

    icon: Briefcase,

    technologies: [
      "Next.js",
      "SEO",
      "Performance",
      "Analytics",
    ],

    highlights: [
      "Lead Generation",
      "Fast",
      "Mobile First",
      "Premium Design",
    ],

    gradient: "from-emerald-500 via-green-500 to-teal-500",
  },

  {
    id: 4,

    title: "Admin Dashboard",

    slug: "admin-dashboard",

    category: "Dashboard",

    description:
      "A modern analytics dashboard with beautiful charts, reporting tools and business insights.",

    image: "/projects/dashboard.webp",

    liveUrl: "#",

    githubUrl: "#",

    featured: false,

    icon: LayoutDashboard,

    technologies: [
      "React",
      "Dashboard",
      "Charts",
      "Analytics",
    ],

    highlights: [
      "Modern UI",
      "Charts",
      "Admin Panel",
    ],

    gradient: "from-orange-500 via-red-500 to-pink-500",
  },

  {
    id: 5,

    title: "AI Automation",

    slug: "automation",

    category: "Automation",

    description:
      "Custom workflow automation using AI, APIs and integrations to save time and improve business efficiency.",

    image: "/projects/automation.webp",

    liveUrl: "#",

    githubUrl: "#",

    featured: false,

    icon: Bot,

    technologies: [
      "AI",
      "Automation",
      "APIs",
      "OpenAI",
    ],

    highlights: [
      "Workflow",
      "AI",
      "Automation",
    ],

    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
  },

  {
    id: 6,

    title: "E-Commerce Store",

    slug: "ecommerce",

    category: "Online Store",

    description:
      "Fast and conversion-focused eCommerce website with premium shopping experience and SEO optimization.",

    image: "/projects/ecommerce.webp",

    liveUrl: "#",

    githubUrl: "#",

    featured: false,

    icon: ShoppingBag,

    technologies: [
      "Next.js",
      "E-Commerce",
      "Stripe",
      "SEO",
    ],

    highlights: [
      "Fast Checkout",
      "Mobile Friendly",
      "SEO",
    ],

    gradient: "from-pink-500 via-rose-500 to-orange-500",
  },
];
