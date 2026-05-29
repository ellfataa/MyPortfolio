import BottomDock from "@/components/layout/BottomDock";
import Footer from "@/components/layout/footer";

import Chatbot from "@/components/chatbot";

import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

function SectionDivider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="h-px w-full rounded-full bg-slate-200 dark:bg-zinc-800" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-2 transition-colors duration-300">
      <div className="animated-blue-orb" />

      <div className="relative z-10">
        <HeroSection />
        <SectionDivider />

        <ExperienceSection />
        <SectionDivider />

        <EducationSection />
        <SectionDivider />

        <SkillsSection />
        <SectionDivider />

        <ProjectsSection />
        <SectionDivider />

        <CertificatesSection />
        <SectionDivider />

        <ContactSection />

        <Footer />
      </div>

      <BottomDock />
      <Chatbot />
    </main>
  );
}