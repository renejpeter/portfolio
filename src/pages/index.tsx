import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import IntroSection from "@/components/sections/IntroSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <article id="home">
      <IntroSection />
      <AboutSection />
      <SkillSection />
      <ContactSection />
    </article>
  );
}
