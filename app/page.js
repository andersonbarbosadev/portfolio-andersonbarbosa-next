import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import SoftSkills from "./components/homepage/softSkills";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/experiences";
import Skills from "./components/homepage/skills";
import Certificates from "./components/homepage/certificate";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SoftSkills />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Blog />
      <ContactSection />
    </>
  );
}
