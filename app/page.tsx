import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <Hero />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Services */}
      <Services />

      {/* Why Choose Me */}
      <WhyChooseMe />

      {/* My Process */}
      <Process />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
