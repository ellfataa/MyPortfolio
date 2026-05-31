"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { useState } from "react";
import type { MouseEvent } from "react";

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function ContactSection() {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const { t } = useLanguage();

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({
      x: 50,
      y: 50,
    });
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 sm:py-6 md:py-10 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative min-h-105 overflow-hidden rounded-4xl border border-slate-200 bg-white/80 px-6 py-10 text-center shadow-sm backdrop-blur transition duration-300 dark:border-zinc-800 dark:bg-zinc-950 sm:min-h-115 sm:px-8 sm:py-12 md:min-h-125 md:px-10 md:py-14"
        >
          <div
            className="pointer-events-none absolute h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-fuchsia-300/70 via-violet-300/55 to-indigo-300/50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-fuchsia-500/45 dark:via-violet-500/35 dark:to-indigo-500/30"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          />

          <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl dark:bg-blue-500/10" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl dark:bg-indigo-500/10" />

          <div className="relative z-10 mx-auto flex min-h-85 max-w-2xl flex-col items-center justify-center sm:min-h-92.5 md:min-h-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition duration-300 group-hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
              <MailIcon />
            </div>

            <h2 className="mt-7 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl md:text-4xl">
              {t("contact.heading")}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base">
              {t("contact.description")}
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              {t("contact.available")}
            </div>

            <a
              href="mailto:luthfi.efata@gmail.com"
              className="animated-button-border mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
            >
              {t("contact.button")} <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}