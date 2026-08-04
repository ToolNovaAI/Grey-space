import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Process from "@/components/sections/Process";
import Technologies from "@/components/sections/Technologies";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Services */}
      <Services />

      {/* Why Choose Me */}
      <WhyChooseMe />

      {/* Work Process */}
      <Process />

      {/* Technology Stack */}
      <Technologies />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
