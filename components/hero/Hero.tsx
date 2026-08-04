import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <HeroBackground />

      <div className="container-custom relative z-10">

        <HeroContent />

        <HeroStats />

      </div>

    </section>
  );
}
