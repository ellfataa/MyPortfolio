import BottomDock from "@/components/layout/BottomDock";
import Footer from "@/components/layout/footer";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fafc] pb-32 text-slate-950 transition-colors duration-300 dark:bg-black dark:text-white">

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />

      <Footer />
      <BottomDock />
      <Chatbot />
      
    </main>
  );
}