import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Process from "@/components/sections/Process";
import Technologies from "@/components/sections/Technologies";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Hero />

      <About />

      <FeaturedProjects />

      <Services />

      <WhyChooseMe />

      <Process />

      <Technologies />

      <Testimonials />

      <FAQ />

      <ContactCTA />
    </main>
  );
}
