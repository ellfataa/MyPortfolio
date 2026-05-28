import BottomDock from "@/components/layout/BottomDock";
import Footer from "@/components/layout/footer";

import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-32 transition-colors duration-300">
    <div className="animated-blue-orb" />

    <div className="relative z-10">
      <HeroSection />

      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="h-px w-full rounded-full bg-slate-200 dark:bg-zinc-800" />
      </div>

      <ExperienceSection />

      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="h-px w-full rounded-full bg-slate-200 dark:bg-zinc-800" />
      </div>

      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />

      <Footer />
    </div>

    <BottomDock />
    <Chatbot />
  </main>
  );
}