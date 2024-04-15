import { personalData } from "@/utils/data/personal-data";
import AboutSection from "../components/homepage/about";
import Blog from "../components/homepage/blog";
import ContactSection from "../components/homepage/contact";
import Education from "../components/homepage/education";
import SoftSkills from "../components/homepage/softSkills";
import HeroSection from "../components/homepage/hero-section";
import Projects from "../components/homepage/experiences";
import Skills from "../components/homepage/skills";
import Certificates from "../components/homepage/certificate";
import Navbar from "../components/navbar";

export default async function Home({ params: { lng } }) {
  return (
    <>
      <Navbar lng={lng} />
      <HeroSection lng={lng} />
      <AboutSection lng={lng} />
      <SoftSkills />
      <Skills />
      <Projects lng={lng} />
      <Education lng={lng} />
      <Certificates lng={lng} />
      <Blog lng={lng} />
      <ContactSection lng={lng} />
    </>
  );
}
