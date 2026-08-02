"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

// Import useLanguage dari LanguageProvider
import { useLanguage } from "@/components/providers/LanguageProvider";

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const infoLinks = [
  { label: "Purwokerto", href: null, icon: <LocationIcon /> },
  { label: "luthfi.efata@gmail.com", href: "mailto:luthfi.efata@gmail.com", icon: <MailIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luthfi-emillulfata/", icon: <LinkedinIcon /> },
  { label: "GitHub", href: "https://github.com/ellfataa", icon: <GithubIcon /> },
];

const typingTexts = ["Software Engineer"];

function InfoLink({ label, href, icon }: { label: string; href: string | null; icon: ReactNode }) {
  const className = "group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white";
  const content = (
    <>
      <span className="transition duration-300 group-hover:scale-110">{icon}</span>
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-slate-950 transition-all duration-300 group-hover:w-full dark:bg-white" />
      </span>
    </>
  );

  if (!href) return <div className={className}>{content}</div>;

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={className}>
      {content}
    </a>
  );
}

function TypewriterText() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const typingSpeed = isDeleting ? 45 : 95;
    const pauseTime = 1200;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentText.length) {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        return;
      }
      if (!isDeleting && displayedText.length === currentText.length) {
        setIsDeleting(true);
        return;
      }
      if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
        return;
      }
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }, !isDeleting && displayedText.length === currentText.length ? pauseTime : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <p className="mt-4 min-h-8 text-lg font-semibold text-slate-950 dark:text-zinc-200 sm:text-xl md:text-2xl">
      <span className="bg-linear-to-r from-slate-700 to-slate-400 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-500">
        {displayedText}
      </span>
      <span className="ml-1 inline-block animate-pulse text-slate-400 dark:text-zinc-500">|</span>
    </p>
  );
}

export default function HeroSection() {
  // Panggil useLanguage dan ambil fungsi t
  const { t } = useLanguage();

  return (
    <section id="hero" className="mx-auto flex min-h-[82vh] w-full max-w-6xl items-center px-4 py-6 sm:px-6 sm:py-10 md:py-14 lg:px-8">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.55fr_0.45fr] xl:grid-cols-[1.6fr_0.4fr]">
        <div className="order-2 w-full max-w-5xl text-center lg:order-1 lg:text-left">
          {/* Menerapkan terjemahan pada sub-heading */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-zinc-500">
            {t("hero.portfolio")}
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:mx-0 lg:text-6xl xl:whitespace-nowrap xl:text-7xl">
            <span className="bg-linear-to-r from-slate-950 via-slate-700 to-slate-500 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-zinc-500">
              LUTHFI EMILLULFATA
            </span>
          </h1>

          <TypewriterText />

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start">
            {infoLinks.map((item) => (
              <InfoLink key={item.label} label={item.label} href={item.href} icon={item.icon} />
            ))}
          </div>

          {/* Menerapkan terjemahan pada Deskripsi Profil */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg lg:mx-0">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              {t("hero.contactBtn")}
            </a>

            <a
              href="/assets/cv/CV - Luthfi Emillulfata.pdf"
              download
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              {t("hero.downloadBtn")}
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-64 rotate-3 transition duration-500 hover:rotate-0 sm:w-[18rem] md:w-[20rem] lg:w-88 xl:w-92">
            <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-blue-200/35 via-indigo-100/25 to-purple-200/35 blur-2xl dark:from-blue-500/8 dark:via-indigo-500/5 dark:to-purple-500/8" />
            <div className="relative scale-[0.8] transition duration-500">
              <div className="relative overflow-hidden rounded-4xl bg-white/25 p-px shadow-2xl shadow-slate-950/10 dark:bg-white/3 dark:shadow-black/35">
                <div className="relative aspect-4/5 overflow-hidden rounded-4xl border-4 border-white bg-transparent dark:border-zinc-900">
                  <Image
                    src="/assets/profil/luthfata.png"
                    alt="Luthfi Emillulfata"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 368px"
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