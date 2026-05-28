const projects = [
  {
    title: "Website Portfolio",
    description:
      "Website portfolio responsive menggunakan Next.js, Tailwind CSS, dan chatbot AI Gemini.",
    tech: ["Next.js", "Tailwind CSS", "Gemini AI"],
  },
  {
    title: "Sistem Prediksi Konsumsi Listrik",
    description:
      "Sistem machine learning untuk memprediksi konsumsi listrik menggunakan beberapa model regresi.",
    tech: ["Python", "Machine Learning", "Regression"],
  },
  {
    title: "Aplikasi Web saat Magang",
    description:
      "Pengembangan aplikasi web dengan pengalaman menggunakan ngrok untuk kebutuhan testing atau tunneling.",
    tech: ["Web Development", "API", "Ngrok"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-500">
        Projects
      </p>

      <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}