const highlights = [
  "Frontend Development",
  "Web Development",
  "AI Integration",
  "Machine Learning",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-4xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 sm:p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-zinc-500">
            About
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            About Me
          </h2>

          <p className="mt-5 leading-8 text-slate-600 dark:text-zinc-300">
            Saya adalah fresh graduate Teknik Informatika dari Universitas
            Jenderal Soedirman yang memiliki ketertarikan pada pengembangan web
            modern, desain antarmuka yang responsive, integrasi AI, dan
            penerapan machine learning.
          </p>
        </div>

        <div className="rounded-4xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 sm:p-8">
          <h3 className="text-xl font-bold text-slate-950 dark:text-white">
            What I Do
          </h3>

          <p className="mt-4 leading-8 text-slate-600 dark:text-zinc-300">
            Saya terbiasa membangun tampilan website yang clean, mudah
            digunakan, dan dapat beradaptasi di berbagai ukuran layar. Selain
            itu, saya juga tertarik mengembangkan fitur interaktif seperti
            chatbot AI untuk meningkatkan pengalaman pengguna.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:border-zinc-800 dark:bg-black dark:text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}