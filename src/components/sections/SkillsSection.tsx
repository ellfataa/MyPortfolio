import Image from "next/image";

type Skill = {
  name: string;
  iconSrc: string;
  iconAlt: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "TypeScript",
        iconSrc: "/assets/skills/typescript.png",
        iconAlt: "TypeScript Logo",
      },
      {
        name: "JavaScript",
        iconSrc: "/assets/skills/javascript.png",
        iconAlt: "JavaScript Logo",
      },
      {
        name: "Python",
        iconSrc: "/assets/skills/python.png",
        iconAlt: "Python Logo",
      },
      {
        name: "PHP",
        iconSrc: "/assets/skills/php.png",
        iconAlt: "PHP Logo",
      },
      {
        name: "Java",
        iconSrc: "/assets/skills/java.png",
        iconAlt: "Java Logo",
      },
      {
        name: "C++",
        iconSrc: "/assets/skills/cpp.png",
        iconAlt: "C++ Logo",
      },
      {
        name: "HTML",
        iconSrc: "/assets/skills/html.png",
        iconAlt: "HTML Logo",
      },
      {
        name: "CSS",
        iconSrc: "/assets/skills/css.png",
        iconAlt: "CSS Logo",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React.js",
        iconSrc: "/assets/skills/react.png",
        iconAlt: "React Logo",
      },
      {
        name: "Next.js",
        iconSrc: "/assets/skills/nextjs.png",
        iconAlt: "Next.js Logo",
      },
      {
        name: "Vue.js",
        iconSrc: "/assets/skills/vue.png",
        iconAlt: "Vue.js Logo",
      },
      {
        name: "Nuxt.js",
        iconSrc: "/assets/skills/nuxt.png",
        iconAlt: "Nuxt.js Logo",
      },
      {
        name: "Laravel",
        iconSrc: "/assets/skills/laravel.png",
        iconAlt: "Laravel Logo",
      },
      {
        name: "Express.js",
        iconSrc: "/assets/skills/express.png",
        iconAlt: "Express.js Logo",
      },
      {
        name: "Flutter",
        iconSrc: "/assets/skills/flutter.png",
        iconAlt: "Flutter Logo",
      },
      {
        name: "Tailwind CSS",
        iconSrc: "/assets/skills/tailwind.png",
        iconAlt: "Tailwind CSS Logo",
      },
      {
        name: "Bootstrap",
        iconSrc: "/assets/skills/bootstrap.png",
        iconAlt: "Bootstrap Logo",
      },
    ],
  },
  {
    title: "Databases & ORM",
    skills: [
      {
        name: "PostgreSQL",
        iconSrc: "/assets/skills/postgresql.png",
        iconAlt: "PostgreSQL Logo",
      },
      {
        name: "MySQL",
        iconSrc: "/assets/skills/mysql.png",
        iconAlt: "MySQL Logo",
      },
      {
        name: "MongoDB",
        iconSrc: "/assets/skills/mongodb.png",
        iconAlt: "MongoDB Logo",
      },
      {
        name: "Supabase",
        iconSrc: "/assets/skills/supabase.png",
        iconAlt: "Supabase Logo",
      },
      {
        name: "Firebase",
        iconSrc: "/assets/skills/firebase.png",
        iconAlt: "Firebase Logo",
      },
      {
        name: "Prisma",
        iconSrc: "/assets/skills/prisma.png",
        iconAlt: "Prisma Logo",
      },
    ],
  },
  {
    title: "Other Tools & Platforms",
    skills: [
      {
        name: "Node.js",
        iconSrc: "/assets/skills/nodejs.png",
        iconAlt: "Node.js Logo",
      },
      {
        name: "Git",
        iconSrc: "/assets/skills/git.png",
        iconAlt: "Git Logo",
      },
      {
        name: "GitHub",
        iconSrc: "/assets/skills/github.png",
        iconAlt: "GitHub Logo",
      },
      {
        name: "Docker",
        iconSrc: "/assets/skills/docker.png",
        iconAlt: "Docker Logo",
      },
      {
        name: "Vercel",
        iconSrc: "/assets/skills/vercel.png",
        iconAlt: "Vercel Logo",
      },
      {
        name: "Google Cloud",
        iconSrc: "/assets/skills/gcp.png",
        iconAlt: "Google Cloud Logo",
      },
      {
        name: "Postman",
        iconSrc: "/assets/skills/postman.png",
        iconAlt: "Postman Logo",
      },
      {
        name: "VS Code",
        iconSrc: "/assets/skills/vscode.png",
        iconAlt: "VS Code Logo",
      },
      {
        name: "Figma",
        iconSrc: "/assets/skills/figma.png",
        iconAlt: "Figma Logo",
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 sm:py-6 md:py-10 lg:px-8"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl md:text-3xl">
          Skills
        </h2>

        <p className="mt-1 max-w-6xl text-sm leading-6 text-slate-600 dark:text-zinc-300 sm:text-base">
          A collection of technologies, programming languages, frameworks, and 
          platforms that support me in developing digital solutions.
        </p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <article key={category.title}>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500 sm:text-sm">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group relative">
                  <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-md dark:border-zinc-800 dark:bg-white/4 dark:group-hover:border-zinc-700 dark:group-hover:bg-white/6 sm:h-14 sm:w-14">
                    <Image
                      src={skill.iconSrc}
                      alt={skill.iconAlt}
                      fill
                      className="object-contain p-2.5"
                      sizes="56px"
                    />
                  </div>

                  <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 opacity-0 shadow-sm transition duration-300 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}