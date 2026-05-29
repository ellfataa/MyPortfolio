"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    title: "Belajar Penerapan Machine Learning untuk Flutter",
    issuer: "Dicoding Indonesia",
    date: "Sep 2025",
    imageSrc: "/assets/certificates/ml-flutter.jpg",
    imageAlt: "Belajar Penerapan Machine Learning untuk Flutter Certificate",
    pdfUrl: "/assets/certificates/pdf/ml-flutter.pdf",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Sep 2025",
    imageSrc: "/assets/certificates/dasar-ai.jpg",
    imageAlt: "Belajar Dasar AI Certificate",
    pdfUrl: "/assets/certificates/pdf/dasar-ai.pdf",
  },
  {
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    date: "Sep 2025",
    imageSrc: "/assets/certificates/solid.jpg",
    imageAlt: "Belajar Prinsip Pemrograman SOLID Certificate",
    pdfUrl: "/assets/certificates/pdf/solid.pdf",
  },
  {
    title: "Frontend Developer Internship",
    issuer: "Horus Technology",
    date: "Jul 2025",
    imageSrc: "/assets/certificates/frontend-internship.jpg",
    imageAlt: "Frontend Developer Internship Certificate",
    pdfUrl: "/assets/certificates/pdf/frontend-internship.pdf",
  },
  {
    title: "Machine Learning Fundamental",
    issuer: "Dicoding Indonesia",
    date: "2025",
    imageSrc: "/assets/certificates/machine-learning.jpg",
    imageAlt: "Machine Learning Fundamental Certificate",
    pdfUrl: "/assets/certificates/pdf/machine-learning.pdf",
  },
];

export default function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;

    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;

    return 3;
  };

  const getMaxIndex = () => {
    const visibleCards = getVisibleCards();
    return Math.max(certificates.length - visibleCards, 0);
  };

  const scrollToCertificate = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement | undefined;

    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const scrollCertificates = (direction: "left" | "right") => {
    const maxIndex = getMaxIndex();

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
  };

  const resetAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      scrollCertificates("right");
    }, 4000);
  };

  useEffect(() => {
    resetAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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
            resetAutoScroll();
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
              className="relative group min-w-full snap-start overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-zinc-800 dark:bg-white/4 dark:hover:border-zinc-700 dark:hover:bg-white/6 sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-0.7rem)]"
              aria-label={`Open certificate PDF: ${certificate.title}`}
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

              <div className="border-t border-slate-200 p-4 pb-10 dark:border-zinc-800">
                <h3 className="line-clamp-2 text-sm font-bold tracking-tight text-slate-950 dark:text-white sm:text-base">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-zinc-400 sm:text-sm">
                  {certificate.issuer}
                </p>

                <p className="absolute left-4 bottom-3 text-xs text-slate-400 dark:text-zinc-500 sm:text-xs">
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
            resetAutoScroll();
          }}
          aria-label="Scroll certificates right"
          className="absolute right-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-500 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-950 dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white lg:flex"
        >
          ›
        </button>
      </div>

      <div className="mt-1 flex justify-center gap-2">
        {Array.from({
          length: Math.max(certificates.length - getVisibleCards() + 1, 1),
        }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              scrollToCertificate(index);
              resetAutoScroll();
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