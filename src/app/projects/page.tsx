import BottomDock from "@/components/layout/BottomDock";
import Footer from "@/components/layout/footer";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Chatbot from "@/components/chatbot";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fafc] pb-32 pt-10 text-slate-950 transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),linear-gradient(to_bottom,#ffffff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%),linear-gradient(to_bottom,#020617,#000000)]" />
      </div>

      <ProjectsSection />

      <Footer />
      <BottomDock />
      <Chatbot />
    </main>
  );
}