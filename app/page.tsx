import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <About />

      <FeaturedProjects />

      <Services />

      <WhyChooseMe />

      <Process />

      <Testimonials />
    </main>
  );
}
