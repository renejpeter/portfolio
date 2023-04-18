import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import IntroSection from "@/components/sections/IntroSection";
import SkillSection from "@/components/sections/SkillSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Full-Stack Website Engineer - René Peter</title>
        <meta
          name="description"
          content="Building websites, dynamic web applications and integral APIs. Maintaining web infrastructure and solving critical business problems one line of code at a time."
        />
        <link rel="canonical" href="https://renepeter.xyz" />
      </Head>

      <article id="home">
        <IntroSection />
        <AboutSection />
        <SkillSection />
        <ContactSection />
      </article>
    </>
  );
}
