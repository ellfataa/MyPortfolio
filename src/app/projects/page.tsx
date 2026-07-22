"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import BottomDock from "@/components/layout/BottomDock";
import Footer from "@/components/layout/footer";
import Chatbot from "@/components/chatbot";

type ProjectCategory = "All" | "Web" | "Mobile" | "Machine Learning";

type ProjectTech = {
  name: string;
  iconSrc: string;
  iconAlt: string;
};

type Project = {
  title: string;
  period: string;
  category: Exclude<ProjectCategory, "All">;
  role: string;
  company: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  visibility: "Private" | "Public";
  isInternal?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  technologies: ProjectTech[];
};

const projects: Project[] = [
  {
    title: "SiBapas PWT",
    period: "Jun 2026 - Jul 2026",
    category: "Machine Learning",
    company: "ELF Std - Freelance Project",
    role: "Full-Stack Engineer",
    description:
      "A machine learning-based prediction system for electricity consumption using ensemble regression models and feature engineering.",
    imageSrc: "/assets/projects/SIBAPAS.jpeg",
    imageAlt: "SiBapas PWT Preview",
    visibility: "Private",
    isInternal: true,
    technologies: [
      {
        name: "Laravel",
        iconSrc: "/assets/skills/laravel.svg",
        iconAlt: "laravel Logo",
      },
      {
        name: "Tailwind CSS",
        iconSrc: "/assets/skills/tailwind.svg",
        iconAlt: "Tailwind CSS Logo",
      },
      {
        name: "MySQL",
        iconSrc: "/assets/skills/mysql.svg",
        iconAlt: "MySQL Logo",
      },
    ],
  },
  {
    title: "Best Intern DSS",
    period: "Dec 2025 - May 2026",
    category: "Machine Learning",
    company: "Thesis",
    role: "Full-Stack Engineer",
    description:
      "A smart decision support system that leverages integrated data-driven algorithms to evaluate intern performance and accurately rank top talents.",
    imageSrc: "/assets/projects/BEST-INTERN.webp",
    imageAlt: "Best Intern Preview",
    visibility: "Private",
    isInternal: true,
    technologies: [
      {
        name: "Laravel",
        iconSrc: "/assets/skills/laravel.svg",
        iconAlt: "Laravel Logo",
      },
      {
        name: "Python",
        iconSrc: "/assets/skills/python.svg",
        iconAlt: "Python Logo",
      },
      {
        name: "Tailwind CSS",
        iconSrc: "/assets/skills/tailwind.svg",
        iconAlt: "Tailwind CSS Logo",
      },
    ],
  },
  {
    title: "TelkomBiz Plan",
    period: "Dec 2025 - Feb 2026",
    category: "Web",
    company: "Telkom Indonesia - Internship",
    role: "Full-Stack Engineer",
    description:
      "An internal WBS for the Internal Audit team to manage, validate, and monitor whistleblowing reports end-to-end.",
    imageSrc: "/assets/projects/TELKOMBIZ.jpg",
    imageAlt: "TelkomBiz Plan Preview",
    visibility: "Private",
    isInternal: true,
    technologies: [
      {
        name: "Laravel",
        iconSrc: "/assets/skills/laravel.svg",
        iconAlt: "Laravel Logo",
      },
      {
        name: "Vue",
        iconSrc: "/assets/skills/vue.svg",
        iconAlt: "Vue Logo",
      },
    ],
  },
  {
    title: "Nautica",
    period: "Mar 2026 - Apr 2026",
    category: "Web",
    company: "ELF Std - Freelance Project",
    role: "Full-Stack Engineer",
    description:
      "Enhanced web-based ticketing system for monitoring SPBU shifts and operational issues with summaries and dashboards.",
    imageSrc: "/assets/projects/NAUTICA1.webp",
    imageAlt: "Nautica Preview",
    visibility: "Private",
    isInternal: true,
    technologies: [
      {
        name: "TypeScript",
        iconSrc: "/assets/skills/ts.svg",
        iconAlt: "TypeScript Logo",
      },
      {
        name: "Laravel",
        iconSrc: "/assets/skills/laravel.svg",
        iconAlt: "Laravel Logo",
      },
    ],
  },
  {
    title: "Webklik",
    period: "Oct 2026 - Mar 2026",
    category: "Web",
    company: "Wesclic - Internship",
    role: "System Analyst",
    description:
      "A modern personal portfolio website built with Next.js, Tailwind CSS, dark mode, responsive sections, and AI chatbot integration.",
    imageSrc: "/assets/projects/WEBKLIK.webp",
    imageAlt: "Webklik Preview",
    visibility: "Private",
    isInternal: true,
    technologies: [
      {
        name: "Laravel",
        iconSrc: "/assets/skills/laravel.svg",
        iconAlt: "Laravel Logo",
      },
      {
        name: "Next.js",
        iconSrc: "/assets/skills/next.svg",
        iconAlt: "Next.js Logo",
      },
      {
        name: "TypeScript",
        iconSrc: "/assets/skills/ts.svg",
        iconAlt: "TypeScript Logo",
      },
    ],
  },
  {
    title: "Warmindo Modies",
    period: "Feb 2026 - Mar 2026",
    category: "Web",
    company: "ELF Std - Freelance Project",
    role: "Frontend Engineer",
    description:
      "A modern personal portfolio website built with Next.js, Tailwind CSS, dark mode, responsive sections, and AI chatbot integration.",
    imageSrc: "/assets/projects/MODIES.webp",
    imageAlt: "Modies Preview",
    visibility: "Public",
    githubUrl: "https://github.com/ellfataa/warmindo-modies",
    technologies: [
      {
        name: "Next.js",
        iconSrc: "/assets/skills/next.svg",
        iconAlt: "Next.js Logo",
      },
      {
        name: "TypeScript",
        iconSrc: "/assets/skills/ts.svg",
        iconAlt: "TypeScript Logo",
      },
    ],
  },
  {
    title: "Anahata",
    period: "Mar 2025 - Mei 2025",
    category: "Web",
    company: "Jenderal Soedirman University",
    role: "Full-Stack Engineer",
    description:
      "A Web-based expert system using Naive Bayes to calculate chest disease probabilities from user-reported symptoms.",
    imageSrc: "/assets/projects/ANAHATA.webp",
    imageAlt: "Anahata Preview",
    visibility: "Public",
    githubUrl: "https://github.com/ellfataa/SistemPakar-PenyakitDada",
    technologies: [
      {
        name: "Golang",
        iconSrc: "/assets/skills/golang.svg",
        iconAlt: "Golang Logo",
      },
      {
        name: "Tailwind CSS",
        iconSrc: "/assets/skills/tailwind.svg",
        iconAlt: "Tailwind CSS Logo",
      },
      {
        name: "PostgreSQL",
        iconSrc: "/assets/skills/postgre.svg",
        iconAlt: "PostgreSQL Logo",
      },
    ],
  },
  {
    title: "Sylvair",
    period: "Sept 2024 - Okt 2024",
    category: "Machine Learning",
    company: "Jenderal Soedirman University",
    role: "Full-Stack Engineer",
    description:
      "A modern personal portfolio website built with Next.js, Tailwind CSS, dark mode, responsive sections, and AI chatbot integration.",
    imageSrc: "/assets/projects/SYLVAIR.webp",
    imageAlt: "SylvairPreview",
    visibility: "Public",
    githubUrl: "https://github.com/ellfataa/Sylvair",
    technologies: [
      {
        name: "Python",
        iconSrc: "/assets/skills/python.svg",
        iconAlt: "Python Logo",
      },
      {
        name: "Streamlit",
        iconSrc: "/assets/skills/streamlit.svg",
        iconAlt: "Streamlit Logo",
      },
    ],
  },
  {
    title: "DemonWard",
    period: "Mar 2024 - Mei 2024",
    category: "Web",
    company: "Jenderal Soedirman University",
    role: "Frontend Engineer",
    description:
      "A Web-based expert system using Naive Bayes to calculate chest disease probabilities from user-reported symptoms.",
    imageSrc: "/assets/projects/DEMONWARD.webp",
    imageAlt: "DemonWard Preview",
    visibility: "Public",
    githubUrl: "https://github.com/ellfataa/FE-DemonWard",
    technologies: [
      {
        name: "HTML",
        iconSrc: "/assets/skills/html.svg",
        iconAlt: "HTML Logo",
      },
      {
        name: "CSS",
        iconSrc: "/assets/skills/css.svg",
        iconAlt: "CSS Logo",
      },
    ],
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Web",
  "Mobile",
  "Machine Learning",
];

function SearchIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function ArrowIcon() {
  return <span className="text-sm leading-none">↗</span>;
}

function GitHubIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.role.toLowerCase().includes(query) ||
        project.company.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) =>
          tech.name.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getCategoryCount = (category: ProjectCategory) => {
    if (category === "All") return projects.length;

    return projects.filter((project) => project.category === category).length;
  };

  return (
    <main className="relative min-h-screen overflow-hidden pb-2 transition-colors duration-300">
      <div className="animated-blue-orb" />

      <div className="relative z-10">
        <header className="border-b border-slate-200/80 bg-white/50 px-4 py-4 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/30 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500">
            <a
              href="/"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >
              LUTHFI.DEV
            </a>
            <span>/</span>
            <span className="text-slate-950 dark:text-white">Projects</span>
          </div>
        </header>

        <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
              Check out my latest work
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base md:text-lg">
              From mobile applications to enterprise-scale web platforms,
              <br />
              discover some of the key projects I&apos;ve worked on.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-fit max-w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur [-ms-overflow-style:none] scrollbar-none dark:border-zinc-800 dark:bg-white/4 [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max items-center gap-1">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition duration-300 sm:px-4 ${
                        isActive
                          ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                          : "text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-zinc-400 dark:hover:bg-white/8 dark:hover:text-white"
                      }`}
                    >
                      <span>{category}</span>

                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                          isActive
                            ? "bg-white/15 text-current dark:bg-black/10"
                            : "bg-slate-100 text-slate-400 dark:bg-white/8 dark:text-zinc-500"
                        }`}
                      >
                        {getCategoryCount(category)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-400 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-500 sm:max-w-md lg:max-w-sm">
              <SearchIcon />

              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by project name, role, tech, or company..."
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-zinc-500"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-zinc-800 dark:bg-white/4 dark:hover:border-zinc-700 dark:hover:bg-white/6"
              >
                <div className="relative aspect-16/8 overflow-hidden bg-slate-100 dark:bg-zinc-900">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent opacity-80" />

                  {project.isInternal && (
                    <div className="absolute right-3 top-3 rotate-45 rounded-md bg-amber-400 px-7 py-1 text-[9px] font-bold uppercase tracking-wider text-amber-950 shadow-sm">
                      Internal
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5">
                    <span className="inline-flex items-center rounded-full border border-amber-300/60 bg-amber-100/80 px-2.5 py-0.5 text-[10px] font-medium text-amber-700 backdrop-blur dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300">
                      {project.visibility}
                    </span>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-black/75 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur transition hover:bg-black"
                      >
                        <GitHubIcon />
                        Source
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-black/75 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur transition hover:bg-black"
                      >
                        ▶ Demo
                      </a>
                    )}

                    {project.downloadUrl && (
                      <a
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-black/75 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur transition hover:bg-black"
                      >
                        <DownloadIcon />
                        Download
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="line-clamp-1 text-base font-bold tracking-tight text-slate-950 dark:text-white">
                        {project.title}
                      </h2>

                      <p className="mt-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
                        {project.period}
                      </p>
                    </div>

                    <ArrowIcon />
                  </div>

                  <p className="mt-2 text-xs italic text-slate-500 dark:text-zinc-500">
                    {project.company}
                  </p>

                  <div className="mt-4">
                    <span className="rounded-md border border-sky-300 bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300">
                      {project.role}
                    </span>
                  </div>

                  <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-600 dark:text-zinc-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <div
                        key={technology.name}
                        title={technology.name}
                        className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                      >
                        <Image
                          src={technology.iconSrc}
                          alt={technology.iconAlt}
                          fill
                          className="object-contain p-1.5"
                          sizes="32px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 px-6 py-12 text-center shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-white/4">
              <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
                No projects found. Try another keyword or category.
              </p>
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/ellfataa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
            >
              More on my GitHub
              <GitHubIcon />
            </a>
          </div>
        </section>

        <Footer />
      </div>

      <BottomDock />
      <Chatbot />
    </main>
  );
}