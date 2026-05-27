import Chatbot from "@/components/chatbot";

const projects = [
  {
    title: "Website Portfolio",
    description:
      "Website portfolio responsive menggunakan Next.js, Tailwind CSS, dan chatbot AI Gemini.",
    tech: ["Next.js", "Tailwind", "Gemini AI"],
  },
  {
    title: "Sistem Prediksi Konsumsi Listrik",
    description:
      "Sistem machine learning untuk memprediksi konsumsi listrik menggunakan beberapa model regresi.",
    tech: ["Python", "Machine Learning", "Regression"],
  },
  {
    title: "Aplikasi Web Magang",
    description:
      "Project website yang dikembangkan saat magang dengan integrasi frontend dan backend.",
    tech: ["React", "API", "Ngrok"],
  },
];

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Machine Learning",
  "Firebase",
  "Laravel",
  "GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-bold">Luthfi Portfolio</h1>

          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-slate-500">
              About
            </a>
            <a href="#skills" className="hover:text-slate-500">
              Skills
            </a>
            <a href="#projects" className="hover:text-slate-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Informatics Engineering Graduate
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m Luthfi. I build modern web experiences.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            Saya adalah fresh graduate Teknik Informatika yang memiliki minat
            pada pengembangan web, frontend engineering, dan implementasi AI
            sederhana untuk aplikasi modern.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-slate-700"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-300 px-6 py-3 text-center text-sm font-semibold hover:bg-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-200 to-slate-400" />
          <p className="mt-4 text-center text-sm text-slate-500">
            Replace this area with your profile photo.
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Saya memiliki ketertarikan pada pengembangan aplikasi web yang
            clean, responsive, dan user-friendly. Saya juga terbiasa mempelajari
            teknologi baru seperti integrasi AI, machine learning, dan deployment
            aplikasi ke cloud platform.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 pb-40">
        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Tertarik berdiskusi atau melihat project saya lebih lanjut? Silakan
            hubungi saya melalui email atau LinkedIn.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:luthfimillul@gmail.com"
              className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="rounded-xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Chatbot />
    </main>
  );
}