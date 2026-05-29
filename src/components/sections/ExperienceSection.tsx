"use client";

import Image from "next/image";
import { useState } from "react";

type ExperienceImage = {
  src: string;
  title: string;
  shortDescription: string;
  description: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  logoSrc: string;
  logoAlt: string;
  details: string[];
  images?: ExperienceImage[];
};

const experiences: Experience[] = [
  {
    company: "TELKOM INDONESIA",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 - Feb 2026",
    logoSrc: "/assets/experience/logos/idtelkom.jpg",
    logoAlt: "Telkom Indonesia Logo",
    details: [
      "Develop enterprise-level web applications by translating business requirements into scalable and maintainable digital solutions.",
      "Collaborate with cross-functional teams in an Agile environment to deliver secure, reliable, and user-focused application features.",
      "Work with modern frontend and backend technologies to support system development, integration, and continuous improvement.",
    ],
    images: [
      {
        src: "/assets/experience/telkom-1.jpg",
        title: "Enterprise Application Development",
        shortDescription:
          "Development documentation related to enterprise application features...",
        description:
          "Development documentation related to enterprise web application features, system integration, and continuous improvement during my internship experience.",
      },
      {
        src: "/assets/experience/telkom-2.jpg",
        title: "Team Collaboration",
        shortDescription:
          "Collaboration process with cross-functional teams in an Agile workflow...",
        description:
          "Collaboration process with cross-functional teams in an Agile workflow to deliver secure, reliable, and user-focused digital solutions.",
      },
    ],
  },
  {
    company: "WESCLIC",
    role: "System Analyst Intern",
    period: "Aug 2025 - Dec 2025",
    logoSrc: "/assets/experience/logos/wesclic.jpg",
    logoAlt: "Wesclic Logo",
    details: [
      "Participated in system analysis activities by identifying requirements, documenting workflows, and supporting feature planning.",
      "Collaborated with development teams to translate user needs into structured system requirements and functional documentation.",
    ],
    images: [
      {
        src: "/assets/experience/wesclic-1.png",
        title: "System Requirement Analysis",
        shortDescription:
          "Requirement analysis process for understanding user and system needs...",
        description:
          "Requirement analysis process for identifying user needs, documenting workflows, and preparing structured functional documentation for the development team.",
      },
    ],
  },
  {
    company: "PDAM BANYUMAS",
    role: "Full-Stack Developer Intern",
    period: "Jul 2024 - Aug 2024",
    logoSrc: "/assets/experience/logos/pdambms.jpg",
    logoAlt: "PDAM Banyumas Logo",
    details: [
      "Developed responsive web application features and helped build user-focused interfaces for internal operational needs.",
      "Implemented frontend and backend functionality while maintaining readable, scalable, and maintainable code structure.",
      "Worked with stakeholders to understand requirements and support digital transformation through practical web-based solutions.",
    ],
    images: [
      {
        src: "/assets/experience/pdam-1.png",
        title: "Internal Web Application",
        shortDescription:
          "Web application development for supporting internal operational needs...",
        description:
          "Web application development for supporting internal operational needs, including responsive interface implementation and backend functionality.",
      },
    ],
  },
  {
    company: "INFORMATICS LABORATORY",
    role: "Practicum Assistant",
    period: "Aug 2023 - Jun 2026",
    logoSrc: "/assets/experience/logos/iflab.jpg",
    logoAlt: "Informatics Laboratory Logo",
    details: [
      "Assisted practicum activities by guiding students in understanding technical materials and completing practical assignments.",
      "Supported laboratory learning sessions, prepared practicum materials, and helped evaluate student work.",
      "Collaborated with other assistants to ensure practicum activities ran effectively and aligned with learning objectives.",
    ],
    images: [
      {
        src: "/assets/experience/informatics-1.png",
        title: "Practicum Assistance",
        shortDescription:
          "Supporting students during practicum learning activities...",
        description:
          "Supporting students during practicum learning activities by helping them understand technical concepts, solve practical problems, and complete assignments.",
      },
      {
        src: "/assets/experience/informatics-2.png",
        title: "Learning Support",
        shortDescription:
          "Assisting laboratory sessions and supporting academic activities...",
        description:
          "Assisting laboratory sessions and supporting academic activities through preparation, guidance, and evaluation of practicum materials.",
      },
      {
        src: "/assets/experience/informatics-3.png",
        title: "Technical Guidance",
        shortDescription:
          "Providing technical guidance during hands-on practicum sessions...",
        description:
          "Providing technical guidance during hands-on practicum sessions and helping improve student understanding through direct assistance.",
      },
    ],
  },
  {
    company: "BEM UNSOED",
    role: "Data Analyst Staff",
    period: "Feb 2024 - Dec 2024",
    logoSrc: "/assets/experience/logos/bemu.jpg",
    logoAlt: "BEM UNSOED Logo",
    details: [
      "Managed and analyzed organizational data to support decision-making, reporting, and internal evaluation.",
      "Prepared structured data insights and contributed to documentation for organizational programs and activities.",
    ],
    images: [
      {
        src: "/assets/experience/bem-1.png",
        title: "Organizational Data Analysis",
        shortDescription:
          "Data analysis activities for organizational reporting and evaluation...",
        description:
          "Data analysis activities used to support organizational decision-making, internal evaluation, and structured reporting for programs and activities.",
      },
      {
        src: "/assets/experience/bem-2.png",
        title: "Program Evaluation",
        shortDescription:
          "Supporting internal evaluation using structured data insights...",
        description:
          "Supporting internal evaluation using structured data insights to help improve organizational programs and decision-making processes.",
      },
      {
        src: "/assets/experience/bem-3.png",
        title: "Reporting Documentation",
        shortDescription:
          "Preparation of documentation and data-based organizational reports...",
        description:
          "Preparation of documentation and data-based organizational reports to support accountability and program evaluation.",
      },
    ],
  },
  {
    company: "HMIF UNSOED",
    role: "Education Staff",
    period: "Mar 2024 - Dec 2024",
    logoSrc: "/assets/experience/logos/hmifunsoed.png",
    logoAlt: "HMIF UNSOED Logo",
    details: [
      "Supported educational programs, academic activities, and student development initiatives within the Informatics student association.",
      "Collaborated with team members to organize learning-related activities and improve student engagement.",
    ],
    images: [
      {
        src: "/assets/experience/hmif-1.png",
        title: "Education Program",
        shortDescription:
          "Supporting educational programs within the Informatics student association...",
        description:
          "Supporting educational programs and academic initiatives within the Informatics student association to improve student learning engagement.",
      },
      {
        src: "/assets/experience/hmif-2.png",
        title: "Student Development",
        shortDescription:
          "Student development activities focused on learning and engagement...",
        description:
          "Student development activities focused on improving engagement, academic growth, and participation in educational initiatives.",
      },
      {
        src: "/assets/experience/hmif-3.png",
        title: "Academic Activity",
        shortDescription:
          "Collaboration in organizing learning-related academic activities...",
        description:
          "Collaboration in organizing learning-related academic activities for Informatics students through planning, coordination, and execution.",
      },
    ],
  },
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [selectedImage, setSelectedImage] = useState<{
    company: string;
    image: ExperienceImage;
  } | null>(null);

  const toggleExperience = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 sm:py-6 md:py-10 lg:px-8"
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
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white/85 shadow-sm backdrop-blur transition duration-300 group-hover:-translate-y-0.5 group-hover:border-slate-300 dark:border-zinc-800 dark:bg-white/4 dark:group-hover:border-zinc-700">
                    <Image
                      src={experience.logoSrc}
                      alt={experience.logoAlt}
                      fill
                      className="rounded-full object-contain p-1.5"
                      sizes="48px"
                    />
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
                  <div className="ml-0 mt-3 sm:ml-16">
                    <ul className="space-y-2 text-xs leading-6 text-slate-600 dark:text-zinc-300 sm:text-sm">
                      {experience.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-zinc-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {experience.images && experience.images.length > 0 && (
                      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {experience.images.map((image) => (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() =>
                              setSelectedImage({
                                company: experience.company,
                                image,
                              })
                            }
                            aria-label={`Open ${image.title} image`}
                            className="group/image relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:border-zinc-800 dark:bg-zinc-950"
                          >
                            <div className="relative aspect-16/8.5 overflow-hidden">
                              <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className="object-cover transition duration-500 group-hover/image:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />

                              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />

                              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                                <h4 className="line-clamp-1 text-sm font-bold tracking-tight text-white sm:text-base">
                                  {image.title}
                                </h4>

                                <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/80 sm:text-sm">
                                  {image.shortDescription}
                                </p>
                              </div>
                            </div>
                          </button>
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 lg:grid-cols-[1.5fr_1fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-65 bg-slate-100 dark:bg-zinc-900 sm:min-h-105 lg:min-h-140">
              <Image
                src={selectedImage.image.src}
                alt={selectedImage.image.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <div className="relative flex flex-col overflow-y-auto p-6 sm:p-8 lg:p-10">
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-500 shadow-sm transition hover:bg-slate-100 hover:text-slate-950 dark:border-zinc-800 dark:bg-white/6 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="Close image popup"
              >
                ×
              </button>

              <div className="pr-12">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-500">
                  {selectedImage.company}
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                  {selectedImage.image.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base">
                  {selectedImage.image.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}