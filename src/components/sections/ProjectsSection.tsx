"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ProjectTech = {
  name: string;
  iconSrc: string;
  iconAlt: string;
};

type Project = {
  title: string;
  period: string;
  company: string;
  role: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  visibility: "Private" | "Public";
  isInternal?: boolean;
  githubUrl?: string;
  technologies: ProjectTech[];
};

const projects: Project[] = [
  {
    title: "SiBapas PWT",
    period: "Jun 2026 - Jul 2026",
    company: "ELF Std - Freelance Project",
    role: "Full-Stack Engineer",
    description:
      "A machine learning-based prediction system for electricity consumption using ensemble regression models and feature engineering.",
    imageSrc: "/assets/projects/SIBAPAS.png",
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
    company: "Jenderal Soedirman University",
    role: "Full-Stack Engineer",
    description:
      "A modern personal portfolio website built with Next.js, Tailwind CSS, dark mode, responsive sections, and AI chatbot integration.",
    imageSrc: "/assets/projects/SYLVAIR.webp",
    imageAlt: "Sylvair Preview",
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

function getCurrentVisibleCards() {
  if (typeof window === "undefined") return 3;

  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;

  return 3;
}

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const maxIndex = Math.max(projects.length - visibleCards, 0);
  const totalDots = Math.max(projects.length - visibleCards + 1, 1);

  const scrollToProject = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;

      const safeIndex = Math.min(Math.max(index, 0), maxIndex);
      const container = scrollRef.current;
      const card = container.children[safeIndex] as HTMLElement | undefined;

      if (!card) return;

      container.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });

      setActiveIndex(safeIndex);
    },
    [maxIndex]
  );

  const scrollProjects = useCallback(
    (direction: "left" | "right") => {
      setActiveIndex((prev) => {
        const nextIndex =
          direction === "left"
            ? prev <= 0
              ? maxIndex
              : prev - 1
            : prev >= maxIndex
              ? 0
              : prev + 1;

        requestAnimationFrame(() => {
          scrollToProject(nextIndex);
        });

        return nextIndex;
      });
    },
    [maxIndex, scrollToProject]
  );

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      scrollProjects("right");
    }, 12000);
  }, [scrollProjects]);

  useEffect(() => {
    const updateVisibleCards = () => {
      const nextVisibleCards = getCurrentVisibleCards();

      setVisibleCards(nextVisibleCards);
      setActiveIndex((prev) =>
        Math.min(prev, Math.max(projects.length - nextVisibleCards, 0))
      );
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  useEffect(() => {
    scrollToProject(activeIndex);
  }, [activeIndex, visibleCards, scrollToProject]);

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoScroll]);

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 sm:py-6 md:py-10 lg:px-8"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl md:text-3xl">
          Projects
        </h2>

        <p className="mt-1 max-w-6xl text-sm leading-6 text-slate-600 dark:text-zinc-300 sm:text-base">
          A showcase of my work in web development and machine learning.
        </p>
      </div>

      <div className="relative lg:px-14">
        <button
          type="button"
          onClick={() => {
            scrollProjects("left");
            startAutoScroll();
          }}
          aria-label="Scroll projects left"
          className="absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-500 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-950 dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white lg:flex"
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="group min-w-full snap-start overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-zinc-800 dark:bg-white/4 dark:hover:border-zinc-700 dark:hover:bg-white/6 sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-0.7rem)]"
            >
              <div className="relative aspect-16/8 overflow-hidden bg-slate-100 dark:bg-zinc-900">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 31vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent opacity-80" />

                {project.isInternal && (
                  <div className="absolute right-3 top-3 rotate-45 rounded-md bg-amber-400 px-7 py-1 text-[9px] font-bold uppercase tracking-wider text-amber-950 shadow-sm">
                    Internal
                  </div>
                )}

                {/* Container Kanan Bawah untuk Visibility Badge dan Button Source */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
                  {/* Label Visibility (Public/Private) */}
                  <span className="inline-flex items-center rounded-full border border-amber-300/60 bg-amber-100/80 px-2.5 py-0.5 text-[10px] font-medium text-amber-700 backdrop-blur dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300">
                    {project.visibility}
                  </span>

                  {/* Tombol Source Link GitHub */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded bg-slate-800/95 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white shadow-sm transition hover:bg-slate-900 dark:bg-zinc-800/95 dark:hover:bg-zinc-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      Source
                    </a>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="line-clamp-1 text-sm font-bold tracking-tight text-slate-950 dark:text-white sm:text-base">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
                  {project.period}
                </p>

                <p className="mt-1 text-xs italic text-slate-500 dark:text-zinc-500">
                  {project.company}
                </p>

                <div className="mt-3">
                  <span className="rounded-md border border-sky-300 bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300">
                    {project.role}
                  </span>
                </div>

                <p className="mt-4 line-clamp-4 text-xs leading-6 text-slate-600 dark:text-zinc-300 sm:text-sm">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="relative flex h-10 w-10 items-center justify-center overflow-hidden"
                      title={technology.name}
                    >
                      <Image
                        src={technology.iconSrc}
                        alt={technology.iconAlt}
                        fill
                        className="object-contain p-1"
                        sizes="40px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            scrollProjects("right");
            startAutoScroll();
          }}
          aria-label="Scroll projects right"
          className="absolute right-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-500 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-950 dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white lg:flex"
        >
          ›
        </button>
      </div>

      <div className="mt-1 flex justify-center gap-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              scrollToProject(index);
              startAutoScroll();
            }}
            aria-label={`Go to project slide ${index + 1}`}
            className={`h-2 cursor-pointer rounded-full transition ${
              activeIndex === index
                ? "w-6 bg-slate-950 dark:bg-white"
                : "w-2 bg-slate-300 dark:bg-zinc-700"
            }`}
          />
        ))}
      </div>

      <a
        href="/projects"
        className="mt-6 inline-flex items-center gap-2 text-base font-medium text-slate-950 transition hover:gap-3 dark:text-white"
      >
        See All Projects <span>→</span>
      </a>
    </section>
  );
}