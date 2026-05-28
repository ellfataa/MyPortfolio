export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for opportunities
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-zinc-500">
            Portfolio Website
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-slate-950 to-slate-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-500">
              Luthfi Emillulfata.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">
            Fresh graduate Teknik Informatika yang tertarik pada frontend
            development, web development, AI integration, machine learning, dan
            pengembangan aplikasi modern yang responsive.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
              <p className="text-xl font-bold text-slate-950 dark:text-white">
                10+
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">
                Skills
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
              <p className="text-xl font-bold text-slate-950 dark:text-white">
                3+
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">
                Projects
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
              <p className="text-xl font-bold text-slate-950 dark:text-white">
                AI
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">
                Assistant
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/60 via-indigo-100/60 to-purple-200/60 blur-2xl dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-purple-900/30" />

          <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 dark:shadow-black/40">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700">
              <div className="flex h-full items-center justify-center px-8 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-slate-900 shadow-sm dark:bg-black dark:text-white">
                    LE
                  </div>
                  <p className="text-sm font-medium text-slate-600 dark:text-zinc-300">
                    Replace this area with your profile photo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-black">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500">
                Current Focus
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-zinc-300">
                Building responsive portfolio with Next.js, Tailwind CSS, and
                Gemini AI chatbot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}