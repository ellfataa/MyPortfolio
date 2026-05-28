import Image from "next/image";
import type { ReactNode } from "react";

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const infoLinks = [
  {
    label: "Purwokerto",
    href: null,
    icon: <LocationIcon />,
  },
  {
    label: "Email",
    href: "mailto:luthfi.efata@gmail.com",
    icon: <MailIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luthfi-emillulfata/",
    icon: <LinkedinIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/ellfataa",
    icon: <GithubIcon />,
  },
];

function InfoPill({
  label,
  href,
  icon,
}: {
  label: string;
  href: string | null;
  icon: ReactNode;
}) {
  const className =
    "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3.5 py-2 text-sm text-slate-500 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-950 dark:border-zinc-800 dark:bg-white/5 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-white/10 dark:hover:text-white";

  if (!href) {
    return (
      <div className={className}>
        {icon}
        <span>{label}</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={className}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[84vh] w-full max-w-6xl items-center px-4 pb-16 pt-10 sm:px-6 sm:pt-14 md:pt-16 lg:px-8"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-zinc-500">
            Portfolio
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
            <span className="bg-linear-to-r from-slate-950 via-slate-700 to-slate-500 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-zinc-500">
              Luthfi Emillulfata
            </span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            {infoLinks.map((item) => (
              <InfoPill
                key={item.label}
                label={item.label}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg lg:mx-0">
            Driven Informatics graduate with expertise spanning full-stack
            development and machine learning. Skilled in translating complex
            requirements into efficient, scalable software solutions while
            combining analytical thinking with user-centric web design.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Contact Me
            </a>

            <a
              href="/assets/cv/cv-luthfi.pdf"
              download
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-68 rotate-2 transition duration-500 hover:rotate-0 sm:w-[20rem] md:w-88 lg:w-[24rem]">
                <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-blue-200/40 via-indigo-100/30 to-purple-200/40 blur-2xl dark:from-blue-500/10 dark:via-indigo-500/5 dark:to-purple-500/10" />

                <div className="relative scale-90 transition duration-500">
                <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/40 p-px shadow-2xl shadow-slate-950/10 dark:border-white/10 dark:bg-white/10 dark:shadow-black/40">
                    <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-transparent">
                    <Image
                        src="/assets/profil/luthfata.png"
                        alt="Luthfi Emillulfata"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 272px, (max-width: 768px) 320px, (max-width: 1024px) 352px, 384px"
                    />
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}