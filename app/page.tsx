import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <FeaturedProjects />
    </main>
  );
}
