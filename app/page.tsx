import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <FeaturedProjects />

      <Services />
    </main>
  );
}
