export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24">
      <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Let&apos;s Work Together
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-slate-300">
          Tertarik berdiskusi atau melihat project saya lebih lanjut? Silakan
          hubungi saya melalui email, GitHub, atau LinkedIn.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:luthfimillul@gmail.com"
            className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900"
          >
            Email Me
          </a>

          <a
            href="https://github.com/luthfimillul"
            target="_blank"
            className="rounded-xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="rounded-xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}