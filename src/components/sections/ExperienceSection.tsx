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
    company: "PT CAKRAWALA PUTRA MULYA",
    role: "IT & Administration Supervisor",
    period: "May 2026 - now",
    logoSrc: "/assets/experience/logos/cpm.jpg",
    logoAlt: "PT CAKRAWALA PUTRA MULYA Logo",
    details: [
      "Managed operational data through the company's information system by performing data entry, validation, and cross-checking to ensure data accuracy.",
      "Monitored inventory records and maintained synchronization between physical stock and system data to support efficient operations.",
      "Coordinated operational staff in customer service, inventory management, and product delivery to optimize daily workflows.",
      "Supported administrative processes while improving operational efficiency through accurate data management and system utilization.",
    ],
  },
  {
    company: "TELKOM INDONESIA",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 - Feb 2026",
    logoSrc: "/assets/experience/logos/idtelkom.jpg",
    logoAlt: "Telkom Indonesia Logo",
    details: [
      "Led the development of a Telkom product promotional website to support commercial and marketing initiatives.",
      "Maintained the company news portal with 20+ content uploads, ensuring up-to-date information dissemination.",
      "Verified and cross-referenced 1500+ customer product data entries for database accuracy and consistency.",
      "Executed network infrastructure audits and PMR assessments across Purwokerto, Banjarnegara, Cilacap, and Purbalingga branches.",
    ],
    images: [
      {
        src: "/assets/experience/telkom1.jpeg",
        title: "Government Partnership Meeting",
        shortDescription:
          "Attended a strategic partnership meeting between PT Telkom...",
        description:
          "Attended a strategic partnership meeting between PT Telkom Indonesia Purwokerto and the Banyumas Regency Government to support digital collaboration and public service innovation.",
      },
      {
        src: "/assets/experience/telkom2.jpg",
        title: "School Visit Program",
        shortDescription:
          "Supported a school visit program by welcoming students...",
        description:
          "Supported a school visit program by welcoming students from SMAN 1 Sumpiuh and introducing PT Telkom Indonesia's digital services, technology, and workplace environment."
      },
      {
        src: "/assets/experience/telkom3.jpeg",
        title: "Network Infrastructure Maintenance",
        shortDescription:
          "Participated in PMR activities at PT Telkom Majenang...",
        description:
          "Participated in PMR activities at PT Telkom Majenang by supporting network hardware maintenance, cleaning equipment, and assisting with hardware configuration to ensure reliable network operations."
      },
    ],
  },
  {
    company: "WESCLIC NEOTECH INDONESIA",
    role: "System Analyst Intern",
    period: "Aug 2025 - Dec 2025",
    logoSrc: "/assets/experience/logos/wesclic.jpg",
    logoAlt: "Wesclic Logo",
    details: [
      "Analyzed and documented system requirements for 5 concurrent projects across various business domains.",
      "Developed 30+ comprehensive system flow diagrams including use case, sequence, class diagrams, and ERDs.",
      "Created 4 Product Requirement Documents (PRD) and 5 Software Requirement Specifications (SRS) to guide development teams.",
      "Produced user manuals and technical documentation to support project implementation and end-user adoption.",
    ],
    images: [
      {
        src: "/assets/experience/1wesclic.jpeg",
        title: "Merawat Niat Program",
        shortDescription:
          "Participated in the 'Merawat Niat' program, a company...",
        description:
          "Participated in the 'Merawat Niat' program, a company initiative combining collective prayers and intern presentations to promote continuous learning, personal growth, and a positive workplace culture.",
      },
      {
        src: "/assets/experience/2wesclic.jpeg",
        title: "Graduation Documentation",
        shortDescription:
          "Celebrated the successful completion of the internship program...",
        description:
          "Celebrated the successful completion of the internship program alongside mentors and fellow interns, marking the achievements and professional growth gained throughout the internship period."
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
      "Built a customer registration portal with Laravel and Midtrans, covering 306 villages across 27 sub-districts.",
      "Created comprehensive system documentation including use case, sequence, activity, and class diagrams.",
      "Presented project progress and technical updates to field supervisors throughout the development lifecycle.",
    ],
    images: [
      {
        src: "/assets/experience/pdam1.jpg",
        title: "Morning Assembly",
        shortDescription:
          "Participated in the company's daily morning assembly...",
        description:
          "Participated in the company's daily morning assembly to receive operational updates, strengthen team coordination, and foster discipline and professionalism in the workplace."
      },
    ],
  },
  {
    company: "ELF Studio",
    role: "Freelancer",
    period: "Jan 2024 - now",
    logoSrc: "/assets/logo/logo.png",
    logoAlt: "ELF Studio Logo",
    details: [
      "Built scalable web and mobile solutions by transforming client ideas into modern, responsive, and user-centered digital products.",
      "Designed intuitive UI/UX and delivered end-to-end project execution, combining technical development, documentation, and effective client collaboration.",
    ],
    images: [
      {
        src: "/assets/experience/freelance1.jpeg",
        title: "System Documentation",
        shortDescription:
          "Created technical documentation by designing class diagrams...",
        description:
          "Created technical documentation by designing class diagrams to model system architecture and support efficient software development."
      },
      {
        src: "/assets/experience/freelance2.jpeg",
        title: "Dormitory Management System",
        shortDescription:
          "Developed a web-based dormitory management system...",
        description:
          "Developed a web-based dormitory management system, focusing on responsive interfaces and features to streamline administrative processes."
      },
      {
        src: "/assets/experience/freelance3.jpeg",
        title: "UI/UX Redesign Concept",
        shortDescription:
          "Designed a modern UI/UX redesign concept for an Indonesian esports team website...",
        description:
          "Designed a modern UI/UX redesign concept for an Indonesian esports team website, focusing on visual consistency and improved user experience."
      },
    ],
  },
  {
    company: "INFORMATICS LABORATORY",
    role: "Laboratory Assistant",
    period: "Aug 2023 - Apr 2026",
    logoSrc: "/assets/experience/logos/iflab.jpg",
    logoAlt: "Informatics Laboratory Logo",
    details: [
      "Instructed and mentored 110+ students across multiple shifts, delivering comprehensive hands-on guidance in Embedded Systems, Operating Systems, and Databases.",
      "Resolved 55+ technical issues covering system processes, memory management, and SQL queries, while demonstrating end-to-end practical assemblies for lab modules.",
      "Designed and evaluated 20+ assessment metrics, including practical assignments, quizzes, and a final IoT project, managing the end-to-end grading process to ensure student competency.",
    ],
    images: [
      {
        src: "/assets/experience/aslab-1.jpeg",
        title: "Laboratory Assistant Team",
        shortDescription:
          "Captured the completion of a practicum period alongside fellow laboratory assistants...",
        description:
          "Captured the completion of a practicum period alongside fellow laboratory assistants, reflecting teamwork, dedication, and commitment to supporting students' learning experiences."
      },
      {
        src: "/assets/experience/aslab-2.jpg",
        title: "Database Tutoring Session",
        shortDescription:
          "Invited by the Informatics Student Association (HMIF) to conduct a Database...",
        description:
          "Invited by the Informatics Student Association (HMIF) to conduct a Database tutoring session, helping students prepare for midterm and final examinations through concept explanations and problem-solving discussions."
      },
    ],
  },
  {
    company: "BEM UNSOED",
    role: "Data Analysis Division Staff",
    period: "Feb 2024 - Dec 2024",
    logoSrc: "/assets/experience/logos/bemu.jpg",
    logoAlt: "BEM UNSOED Logo",
    details: [
      "Conducted quantitative research and surveys to support executive ministries and deliver strategic insights for the university's student body.",
      "Spearheaded large-scale survey data processing for the Data Analysis Directorate, handling key initiatives such as 'Super Survey' (749 respondents) and 'Ekspektasi Mahasiswa Baru 2024' (1519 respondents).",
      "Analyzed raw survey data to create comprehensive PDF reports and collaborated on visual data presentations.",
    ],
    images: [
      {
        src: "/assets/experience/bem1.jpg",
        title: "Research and Data Ministry Team",
        shortDescription:
          "Captured the completion of organizational responsibilities...",
        description:
          "Captured the completion of organizational responsibilities alongside members of the Research and Data Ministry, reflecting teamwork, commitment, and successful execution of departmental programs."
      },
      {
        src: "/assets/experience/bem2.jpg",
        title: "BEM Certificate",
        shortDescription:
          "Received a certificate of appreciation for serving as a member of the Research and Data Ministry...",
        description:
          "Received a certificate of appreciation for serving as a member of the Research and Data Ministry, recognizing contributions to organizational programs and student leadership."
      },
    ],
  },
  {
    company: "HMIF UNSOED",
    role: "Education Division Staff",
    period: "Mar 2024 - Dec 2024",
    logoSrc: "/assets/experience/logos/hmifunsoed.png",
    logoAlt: "HMIF UNSOED Logo",
    details: [
      "Enhanced student academic potential through structured programs, including the 'Mahasiswa Berprestasi' initiative.",
      "Led the 'Simpul Pintar' Question Bank program, organizing 74 study materials and 148 exam questions for academic assessments.",
      "Built 2 centralized data repositories utilizing Excel PivotTables to streamline internship and vendor management systems.",
    ],
    images: [
      {
        src: "/assets/experience/hmif1.jpg",
        title: "HMIF Studio Portrait",
        shortDescription:
          "Captured alongside fellow HMIF members to commemorate organizational...",
        description:
          "Captured alongside fellow HMIF members to commemorate organizational commitment, collaboration, and the successful completion of annual programs and activities."
      },
      {
        src: "/assets/experience/hmif2.jpeg",
        title: "Education Division Team",
        shortDescription:
          "Captured with the Education Division team after successfully organizing academic...",
        description:
          "Captured with the Education Division team after successfully organizing academic programs and initiatives to support student learning and development."
      },
      {
        src: "/assets/experience/hmif3.jpg",
        title: "HMIF Certificate",
        shortDescription:
          "Received a certificate of appreciation for active contributions as a member of HMIF...",
        description:
          "Received a certificate of appreciation for active contributions as a member of HMIF, recognizing dedication to organizational activities and student development."
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
                      <div className="mt-5">
                        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] scrollbar-none dark:scheme-dark sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
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
                              className="group/image relative min-w-[82%] snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:border-zinc-800 dark:bg-zinc-950 sm:min-w-0"
                            >
                              <div className="relative aspect-16/8.5 overflow-hidden">
                                <Image
                                  src={image.src}
                                  alt={image.title}
                                  fill
                                  className="object-cover transition duration-500 group-hover/image:scale-105"
                                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
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