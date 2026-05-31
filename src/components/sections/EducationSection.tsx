"use client";

import Image from "next/image";
import { useEffect ,useState } from "react";

type EducationImage = {
  src: string;
  title: string;
  shortDescription: string;
  description: string;
};

type Education = {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  logoSrc: string;
  logoAlt: string;
  details: string[];
  images?: EducationImage[];
};

const educations: Education[] = [
  {
    institution: "UNIVERSITAS JENDERAL SOEDIRMAN",
    degree: "Bachelor of Informatics",
    period: "Aug 2022 - Jun 2026",
    gpa: "GPA: 3.87 / 4.00 (Cum Laude)",
    logoSrc: "/assets/education/logos/unsoed.png",
    logoAlt: "Universitas Jenderal Soedirman Logo",
    details: [
      "Relevant coursework: Software Engineering, Web Development, Mobile Development, Database Systems, Computer Networks, Operating Systems, Data Mining, Machine Learning, Artificial Intelligence, and UI/UX Design.",
      "Final Thesis: Electricity Consumption Prediction System using Ensemble Machine Learning and Advanced Feature Engineering.",
    ],
    images: [
      {
        src: "/assets/education/unsoed-1.jpg",
        title: "Academic Journey",
        shortDescription:
          "Documentation of academic activities during my Informatics study...",
        description:
          "Documentation of my academic journey as an Informatics student at Universitas Jenderal Soedirman, including learning activities, project development, and technical skill improvement.",
      },
      {
        src: "/assets/education/unsoed-2.jpg",
        title: "Campus Activity",
        shortDescription:
          "Learning and development activities in the university environment...",
        description:
          "Campus activities that supported my academic growth, collaboration, and practical understanding of software development and computer science topics.",
      },
      {
        src: "/assets/education/unsoed-3.jpg",
        title: "Graduation Preparation",
        shortDescription:
          "A memorable moment during the academic completion process...",
        description:
          "A memorable moment representing the academic completion process, personal growth, and learning journey throughout my Informatics study.",
      },
    ],
  },
];

export default function EducationSection() {
  const [selectedImage, setSelectedImage] = useState<{
    institution: string;
    image: EducationImage;
  } | null>(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  return (
    <section
      id="education"
      className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 sm:py-6 md:py-10 lg:px-8"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl md:text-3xl">
          Education
        </h2>
      </div>

      <div className="space-y-6">
        {educations.map((education) => (
          <article key={education.institution}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-white/4">
                  <Image
                    src={education.logoSrc}
                    alt={education.logoAlt}
                    fill
                    className="rounded-full object-contain p-1.5"
                    sizes="48px"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold tracking-tight text-slate-950 dark:text-white sm:text-lg">
                    {education.institution}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 dark:text-zinc-400 sm:text-sm">
                    {education.degree}
                  </p>

                  <p className="mt-3 text-sm font-medium tracking-tight text-slate-950 dark:text-white sm:text-base">
                    {education.gpa}
                  </p>
                </div>
              </div>

              <div className="ml-16 w-fit rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-500 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-400 sm:ml-0">
                {education.period}
              </div>
            </div>

            <div className="ml-0 mt-2 sm:ml-16">
              <ul className="space-y-2 text-xs leading-6 text-slate-600 dark:text-zinc-300 sm:text-sm">
                {education.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-zinc-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {education.images && education.images.length > 0 && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {education.images.map((image) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() =>
                        setSelectedImage({
                          institution: education.institution,
                          image,
                        })
                      }
                      aria-label={`Open ${image.title} image`}
                      className="group/image relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:border-zinc-800 dark:bg-zinc-950"
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
          </article>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm"
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
                  {selectedImage.institution}
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