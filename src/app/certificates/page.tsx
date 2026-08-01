"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import BottomDock from "@/components/layout/BottomDock";
import Footer from "@/components/layout/footer";
import Chatbot from "@/components/chatbot";

type CertificateCategory = "All" | "Web" | "Mobile" | "Data" | "Others";

type Certificate = {
  title: string;
  issuer: string;
  issuedDate: string;
  category: Exclude<CertificateCategory, "All">;
  imageSrc: string;
  imageAlt: string;
  credentialUrl: string;
  skills: string[];
};

const certificates: Certificate[] = [
  {
    title: "Certificate for Embedded System Programming Lab Assistant",
    issuer: "UNSOED Informatics Laboratory",
    issuedDate: "Jun 2026",
    category: "Others",
    imageSrc: "/assets/sertifikat/PrakPST.jpeg",
    imageAlt: "Certificate for Embedded System Programming Lab Assistant",
    credentialUrl: "https://drive.google.com/file/d/1kCb9AfcIQ62Du0w8U6idfKNSWbaovdaM/view?usp=drive_link",
    skills: ["Embedded Systems", "Laboratory Assistant", "C/C++"],
  },
  {
    title: "GAMMAFEST Data Science Participants",
    issuer: "IPB University",
    issuedDate: "May 2025",
    category: "Others",
    imageSrc: "/assets/sertifikat/GammaFest.jpg",
    imageAlt: "GAMMAFEST Data Science Participants Certificate",
    credentialUrl: "https://drive.google.com/file/d/1Xi_HMK2tNGkpRPs1fH13rxm_8yEjDQZV/view?usp=sharing",
    skills: ["Data Science", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    issuedDate: "Apr 2025",
    category: "Data",
    imageSrc: "/assets/sertifikat/dataAnalysis.jpg",
    imageAlt: "Data Analysis with Python Certificate",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/cfb1d38b2dd944a49b84e6a700978f4f",
    skills: ["Python", "Data Analysis", "Pandas"],
  },
  {
    title: "Big Data 101",
    issuer: "IBM",
    issuedDate: "Apr 2025",
    category: "Data",
    imageSrc: "/assets/sertifikat/bigData.jpg",
    imageAlt: "Big Data 101 Certificate",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/5b29d1c5fd044cbcbcd06257b06d2808",
    skills: ["Big Data", "Hadoop", "Data Engineering"],
  },
  {
    title: "Intro to Data Analytics",
    issuer: "RevoU Indonesia",
    issuedDate: "Mar 2025",
    category: "Data",
    imageSrc: "/assets/sertifikat/dataAnalysisREVOU.jpg",
    imageAlt: "Intro to Data Analytics Certificate",
    credentialUrl: "https://drive.google.com/file/d/1cSh03RWk4Z_AfjAUE75BvEdQPykn6M2O/view?usp=sharing",
    skills: ["Data Analytics", "SQL", "Tableau"],
  },
  {
    title: "Google Analytics for Beginners",
    issuer: "Google",
    issuedDate: "Agu 2023",
    category: "Web",
    imageSrc: "/assets/sertifikat/GAnalytics.jpg",
    imageAlt: "Google Analytics for Beginners Certificate",
    credentialUrl: "https://drive.google.com/file/d/1xx0DpWSrNOlAD2yHVSjvqrAMt57F_lMM/view?usp=sharing",
    skills: ["Google Analytics", "Web Analytics", "SEO"],
  },
  {
    title: "Database Course Tutor",
    issuer: "HMIF UNSOED",
    issuedDate: "May 2023",
    category: "Web",
    imageSrc: "/assets/sertifikat/tentorBD.jpg",
    imageAlt: "Database Course Tutor Certificate",
    credentialUrl: "https://drive.google.com/file/d/1exKE12IzUGqa4IYbKDTF_TAJwwTmYNfN/view?usp=sharing",
    skills: ["Database Management", "SQL", "Mentoring"],
  },
  {
    title: "National Level Mathematics Olympiad Gold Medal",
    issuer: "UNIVERSITY.ID",
    issuedDate: "Jan 2022",
    category: "Others",
    imageSrc: "/assets/sertifikat/EmasUniversity.jpg",
    imageAlt: "National Level Mathematics Olympiad Gold Medal Certificate",
    credentialUrl: "https://drive.google.com/file/d/1WxMJQPE0Xvzo_f241RNiQcW4Q2LkSqfl/view?usp=sharing",
    skills: ["Mathematics", "Problem Solving", "Analytical Thinking"],
  },
  {
    title: "National Level Mathematics Olympiad Silver Medal",
    issuer: "Yapresindo",
    issuedDate: "Oct 2021",
    category: "Others",
    imageSrc: "/assets/sertifikat/PerakOSAN.jpg",
    imageAlt: "National Level Mathematics Olympiad Silver Medal Certificate",
    credentialUrl: "https://drive.google.com/file/d/1iVbzrVDkROzeJ55sd2kyB7B__Fpsz2Ri/view?usp=sharing",
    skills: ["Mathematics", "Problem Solving", "Analytical Thinking"],
  },
];

const categories: CertificateCategory[] = [
  "All",
  "Web",
  "Mobile",
  "Data",
  "Others",
];

const INITIAL_VISIBLE_COUNT = 9;

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

function ExpandIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  );
}

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] =
    useState<CertificateCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const filteredCertificates = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return certificates.filter((certificate) => {
      const matchesCategory =
        activeCategory === "All" || certificate.category === activeCategory;

      const matchesSearch =
        !query ||
        certificate.title.toLowerCase().includes(query) ||
        certificate.issuer.toLowerCase().includes(query) ||
        certificate.category.toLowerCase().includes(query) ||
        certificate.skills.some((skill) => skill.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visibleCertificates = filteredCertificates.slice(0, visibleCount);
  const hasMoreCertificates = visibleCount < filteredCertificates.length;

  const getCategoryCount = (category: CertificateCategory) => {
    if (category === "All") return certificates.length;

    return certificates.filter(
      (certificate) => certificate.category === category
    ).length;
  };

  const handleCategoryChange = (category: CertificateCategory) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  useEffect(() => {
    if (!selectedCertificate) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedCertificate]);

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

            <span className="text-slate-950 dark:text-white">
              Certificates
            </span>
          </div>
        </header>

        <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
              Certifications & Achievements
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-zinc-300 sm:text-base md:text-lg">
              A glimpse into my ongoing journey of growth, <br /> learning, and
              professional development.
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
                      onClick={() => handleCategoryChange(category)}
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
                onChange={(event) => handleSearchChange(event.target.value)}
                placeholder="Search by title, issuer, skill, or credential..."
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-zinc-500"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleCertificates.map((certificate) => (
              <button
                key={certificate.title}
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                aria-label={`Open certificate detail: ${certificate.title}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/85 text-left shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-zinc-800 dark:bg-white/4 dark:hover:border-zinc-700 dark:hover:bg-white/6"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-zinc-900">
                  <Image
                    src={certificate.imageSrc}
                    alt={certificate.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-0 transition duration-300 group-hover:bg-black/35 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black/80 px-5 py-3 text-sm font-bold text-white shadow-lg backdrop-blur">
                      <ExpandIcon />
                      Expand Image
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="line-clamp-2 text-base font-bold tracking-tight text-slate-950 dark:text-white">
                    {certificate.title}
                  </h2>

                  <p className="mt-3 text-sm font-medium text-slate-500 dark:text-zinc-400">
                    {certificate.issuer}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {filteredCertificates.length === 0 && (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 px-6 py-12 text-center shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-white/4">
              <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
                No certificates found. Try another keyword or category.
              </p>
            </div>
          )}

          {hasMoreCertificates && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
              >
                Load More Certificates
              </button>
            </div>
          )}
        </section>

        <Footer />
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-90 flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-4xl border border-slate-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-16/8 overflow-hidden bg-slate-100 dark:bg-zinc-900">
              <Image
                src={selectedCertificate.imageSrc}
                alt={selectedCertificate.imageAlt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close certificate detail"
                className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/70 text-xl text-white shadow-lg backdrop-blur transition hover:bg-black"
              >
                ×
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                    {selectedCertificate.title}
                  </h2>

                  <p className="mt-3 text-base font-medium text-slate-600 dark:text-zinc-300">
                    {selectedCertificate.issuer}
                  </p>
                </div>

                <a
                  href={selectedCertificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-zinc-200"
                >
                  View Credential
                </a>
              </div>

              <div className="my-7 h-px w-full bg-slate-200 dark:bg-zinc-800" />

              <div className="grid gap-6 md:grid-cols-[0.6fr_1.4fr]">
                <div>
                  <p className="text-sm font-bold text-slate-950 dark:text-white">
                    Issued:
                    <span className="ml-2 font-medium text-slate-500 dark:text-zinc-400">
                      {selectedCertificate.issuedDate}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {selectedCertificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomDock />
      <Chatbot />
    </main>
  );
}