"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  pdfUrl: string;
};

const certificates: Certificate[] = [
  {
    title: "Certificate for Embedded System Programming Lab Assistant",
    issuer: "UNSOED Informatics Laboratory",
    date: "Jun 2026",
    imageSrc: "/assets/sertifikat/PrakPST.jpeg",
    imageAlt: "Certificate for Embedded System Programming Lab Assistant",
    pdfUrl: "https://drive.google.com/file/d/1kCb9AfcIQ62Du0w8U6idfKNSWbaovdaM/view?usp=drive_link",
  },
  {
    title: "GAMMAFEST Data Science Participants",
    issuer: "IPB University",
    date: "May 2025",
    imageSrc: "/assets/sertifikat/GammaFest.jpg",
    imageAlt: "GAMMAFEST Data Science Participants Certificate",
    pdfUrl: "https://drive.google.com/file/d/1Xi_HMK2tNGkpRPs1fH13rxm_8yEjDQZV/view?usp=sharing",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "Apr 2025",
    imageSrc: "/assets/sertifikat/dataAnalysis.jpg",
    imageAlt: "Data Analysis with Python Certificate",
    pdfUrl: "https://courses.cognitiveclass.ai/certificates/cfb1d38b2dd944a49b84e6a700978f4f",
  },
  {
    title: "Big Data 101",
    issuer: "IBM",
    date: "Apr 2025",
    imageSrc: "/assets/sertifikat/bigData.jpg",
    imageAlt: "Big Data 101 Certificate",
    pdfUrl: "https://courses.cognitiveclass.ai/certificates/5b29d1c5fd044cbcbcd06257b06d2808",
  },
  {
    title: "Intro to Data Analytics",
    issuer: "RevoU Indonesia",
    date: "Mar 2025",
    imageSrc: "/assets/sertifikat/dataAnalysisREVOU.jpg",
    imageAlt: "Intro to Data Analytics Certificate",
    pdfUrl: "https://drive.google.com/file/d/1cSh03RWk4Z_AfjAUE75BvEdQPykn6M2O/view?usp=sharing",
  },
  {
    title: "Google Analytics for Beginners",
    issuer: "Google",
    date: "Agu 2023",
    imageSrc: "/assets/sertifikat/GAnalytics.jpg",
    imageAlt: "Google Analytics for Beginners Certificate",
    pdfUrl: "https://drive.google.com/file/d/1xx0DpWSrNOlAD2yHVSjvqrAMt57F_lMM/view?usp=sharing",
  },
  {
    title: "Database Course Tutor",
    issuer: "HMIF UNSOED",
    date: "May 2023",
    imageSrc: "/assets/sertifikat/tentorBD.jpg",
    imageAlt: "Database Course Tutor Certificate",
    pdfUrl: "https://drive.google.com/file/d/1exKE12IzUGqa4IYbKDTF_TAJwwTmYNfN/view?usp=sharing",
  },
  {
    title: "National Level Mathematics Olympiad Gold Medal",
    issuer: "UNIVERSITY.ID",
    date: "Jan 2022",
    imageSrc: "/assets/sertifikat/EmasUniversity.jpg",
    imageAlt: "National Level Mathematics Olympiad Gold Medal Certificate",
    pdfUrl: "https://drive.google.com/file/d/1WxMJQPE0Xvzo_f241RNiQcW4Q2LkSqfl/view?usp=sharing",
  },
  {
    title: "National Level Mathematics Olympiad Silver Medal",
    issuer: "Yapresindo",
    date: "Oct 2021",
    imageSrc: "/assets/sertifikat/PerakOSAN.jpg",
    imageAlt: "National Level Mathematics Olympiad Silver Medal Certificate",
    pdfUrl: "https://drive.google.com/file/d/1iVbzrVDkROzeJ55sd2kyB7B__Fpsz2Ri/view?usp=sharing",
  },
];

function getCurrentVisibleCards() {
  if (typeof window === "undefined") return 3;

  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;

  return 3;
}

export default function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const maxIndex = Math.max(certificates.length - visibleCards, 0);
  const totalDots = Math.max(certificates.length - visibleCards + 1, 1);

  const scrollToCertificate = useCallback(
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

  const scrollCertificates = useCallback(
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
          scrollToCertificate(nextIndex);
        });

        return nextIndex;
      });
    },
    [maxIndex, scrollToCertificate]
  );

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      scrollCertificates("right");
    }, 4000);
  }, [scrollCertificates]);

  useEffect(() => {
    const updateVisibleCards = () => {
      const nextVisibleCards = getCurrentVisibleCards();

      setVisibleCards(nextVisibleCards);
      setActiveIndex((prev) =>
        Math.min(prev, Math.max(certificates.length - nextVisibleCards, 0))
      );
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  useEffect(() => {
    scrollToCertificate(activeIndex);
  }, [activeIndex, visibleCards, scrollToCertificate]);

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
      id="certificates"
      className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 sm:py-6 md:py-10 lg:px-8"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl md:text-3xl">
          Certificates
        </h2>

        <p className="mt-1 max-w-6xl text-sm leading-6 text-slate-600 dark:text-zinc-300 sm:text-base">
          Highlights from my continuous learning journey and professional
          growth.
        </p>
      </div>

      <div className="relative lg:px-14">
        <button
          type="button"
          onClick={() => {
            scrollCertificates("left");
            startAutoScroll();
          }}
          aria-label="Scroll certificates left"
          className="absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-500 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-950 dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white lg:flex"
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {certificates.map((certificate) => (
            <a
              key={certificate.title}
              href={certificate.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open certificate: ${certificate.title}`}
              className="group relative min-w-full snap-start overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-zinc-800 dark:bg-white/4 dark:hover:border-zinc-700 dark:hover:bg-white/6 sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-0.7rem)]"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-zinc-900">
                <Image
                  src={certificate.imageSrc}
                  alt={certificate.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 31vw"
                />
              </div>

              <div className="relative border-t border-slate-200 p-4 pb-10 dark:border-zinc-800">
                <h3 className="line-clamp-2 text-sm font-bold tracking-tight text-slate-950 dark:text-white sm:text-base">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-zinc-400 sm:text-sm">
                  {certificate.issuer}
                </p>

                <p className="absolute bottom-3 left-4 text-xs text-slate-400 dark:text-zinc-500">
                  {certificate.date}
                </p>
              </div>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            scrollCertificates("right");
            startAutoScroll();
          }}
          aria-label="Scroll certificates right"
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
              scrollToCertificate(index);
              startAutoScroll();
            }}
            aria-label={`Go to certificate slide ${index + 1}`}
            className={`h-2 cursor-pointer rounded-full transition ${
              activeIndex === index
                ? "w-6 bg-slate-950 dark:bg-white"
                : "w-2 bg-slate-300 dark:bg-zinc-700"
            }`}
          />
        ))}
      </div>

      <a
        href="/certificates"
        className="mt-6 inline-flex items-center gap-2 text-base font-medium text-slate-950 transition hover:gap-3 dark:text-white"
      >
        See All Certificates <span>→</span>
      </a>
    </section>
  );
}