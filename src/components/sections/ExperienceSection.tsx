"use client";

import Image from "next/image";
import { useState } from "react";

type Experience = {
  company: string;
  role: string;
  period: string;
  logoText: string;
  details: string[];
  images?: string[];
};

const experiences: Experience[] = [
  {
    company: "TELKOM INDONESIA",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 - Feb 2026",
    logoText: "TI",
    details: [
      "Develop enterprise-level web applications by translating business requirements into scalable and maintainable digital solutions.",
      "Collaborate with cross-functional teams in an Agile environment to deliver secure, reliable, and user-focused application features.",
      "Work with modern frontend and backend technologies to support system development, integration, and continuous improvement.",
    ],
    images: [
      "/assets/experience/telkom-1.png",
      "/assets/experience/telkom-2.png",
    ],
  },
  {
    company: "WESCLIC",
    role: "System Analyst Intern",
    period: "Aug 2025 - Dec 2025",
    logoText: "WC",
    details: [
      "Participated in system analysis activities by identifying requirements, documenting workflows, and supporting feature planning.",
      "Collaborated with development teams to translate user needs into structured system requirements and functional documentation.",
    ],
    images: [
      "/assets/experience/wesclic-1.png",
      "/assets/experience/wesclic-2.png",
      "/assets/experience/wesclic-3.png",
    ],
  },
  {
    company: "PDAM BANYUMAS",
    role: "Full-Stack Developer Intern",
    period: "Jul 2024 - Aug 2024",
    logoText: "PD",
    details: [
      "Developed responsive web application features and helped build user-focused interfaces for internal operational needs.",
      "Implemented frontend and backend functionality while maintaining readable, scalable, and maintainable code structure.",
      "Worked with stakeholders to understand requirements and support digital transformation through practical web-based solutions.",
    ],
    images: [
      "/assets/experience/pdam-1.png",
      "/assets/experience/pdam-2.png",
      "/assets/experience/pdam-3.png",
    ],
  },
  {
    company: "BEM UNSOED",
    role: "Data Analyst Staff",
    period: "Feb 2024 - Dec 2024",
    logoText: "BU",
    details: [
      "Managed and analyzed organizational data to support decision-making, reporting, and internal evaluation.",
      "Prepared structured data insights and contributed to documentation for organizational programs and activities.",
    ],
    images: [
      "/assets/experience/bem-1.png",
      "/assets/experience/bem-2.png",
      "/assets/experience/bem-3.png",
    ],
  },
  {
    company: "HMIF UNSOED",
    role: "Education Staff",
    period: "Mar 2024 - Dec 2024",
    logoText: "HU",
    details: [
      "Supported educational programs, academic activities, and student development initiatives within the Informatics student association.",
      "Collaborated with team members to organize learning-related activities and improve student engagement.",
    ],
    images: [
      "/assets/experience/hmif-1.png",
      "/assets/experience/hmif-2.png",
      "/assets/experience/hmif-3.png",
    ],
  },
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleExperience = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10 md:py-14 lg:px-8"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl md:text-3xl">
          Experience
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={experience.company} className="group">
              <button
                type="button"
                onClick={() => toggleExperience(index)}
                className="flex w-full cursor-pointer flex-col gap-4 text-left transition duration-300 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-xs font-bold text-slate-500 shadow-sm backdrop-blur transition duration-300 group-hover:-translate-y-0.5 group-hover:border-slate-300 group-hover:text-slate-950 dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-400 dark:group-hover:border-zinc-700 dark:group-hover:text-white">
                    {experience.logoText}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1">
                      <h3 className="text-base font-bold tracking-tight text-slate-950 dark:text-white sm:text-lg">
                        {experience.company}
                      </h3>

                      <span className="inline-flex h-6 w-6 items-center justify-center text-sm text-slate-400 transition duration-300 group-hover:text-slate-700 dark:text-zinc-500 dark:group-hover:text-zinc-200">
                        {isOpen ? "ʌ" : "v"}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-500 dark:text-zinc-400 sm:text-sm">
                      {experience.role}
                    </p>
                  </div>
                </div>

                <div className="ml-16 w-fit rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-500 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-400 sm:ml-0">
                  {experience.period}
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-0 mt-5 sm:ml-16">
                    <ul className="space-y-4 text-sm leading-6 text-slate-600 dark:text-zinc-300 sm:text-base">
                      {experience.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-zinc-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {experience.images && experience.images.length > 0 && (
                      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {experience.images.map((image, imageIndex) => (
                          <div
                            key={image}
                            className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-white/3"
                          >
                            <Image
                              src={image}
                              alt={`${experience.company} documentation ${imageIndex + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}