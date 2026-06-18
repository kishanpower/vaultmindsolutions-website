import SEO from "../components/seo/SEO";
import Hero from "../sections/home/Hero";
import TechStack from "../sections/home/TechStack";
import TrustedBy from "../sections/home/TrustedBy";
import Services from "../sections/home/Services";
import WhyChoose from "../sections/home/WhyChoose";
import Process from "../sections/home/Process";
import Stats from "../sections/home/Stats";
import Portfolio from "../sections/home/Portfolio";
import CTA from "../sections/home/CTA";
import Testimonials from "../sections/home/Testimonials";

export default function Home() {
  return (
    <>
      <SEO
        title="VaultMind Solutions | Custom Software, AI & Automation Solutions"
        description="VaultMind Solutions delivers custom software development, AI-powered applications, business automation, web platforms and enterprise solutions for growing businesses."
        url="https://www.vaultmindsolutions.com"
      />

      <Hero />
      <Stats />
      <TrustedBy />
      <TechStack />
      <Services />
      <WhyChoose />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      

    </>
  );
}
