import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Process from "@/components/sections/Process";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <FeaturedProjects />

      <Services />

      <WhyChooseMe />

      <Process />
    </main>
  );
}
