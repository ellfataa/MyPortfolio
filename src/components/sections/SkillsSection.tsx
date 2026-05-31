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
        iconSrc: "/assets/skills/ts.svg",
        iconAlt: "TypeScript Logo",
      },
      {
        name: "JavaScript",
        iconSrc: "/assets/skills/js.svg",
        iconAlt: "JavaScript Logo",
      },
      {
        name: "Python",
        iconSrc: "/assets/skills/python.svg",
        iconAlt: "Python Logo",
      },
      {
        name: "PHP",
        iconSrc: "/assets/skills/php.svg",
        iconAlt: "PHP Logo",
      },
      {
        name: "Golang",
        iconSrc: "/assets/skills/golang.svg",
        iconAlt: "Golang Logo",
      },
      {
        name: "C#",
        iconSrc: "/assets/skills/csharp.svg",
        iconAlt: "C# Logo",
      },
      {
        name: "Java",
        iconSrc: "/assets/skills/java.svg",
        iconAlt: "Java Logo",
      },
      {
        name: "Dart",
        iconSrc: "/assets/skills/dart.svg",
        iconAlt: "Dart Logo",
      },
      {
        name: "C",
        iconSrc: "/assets/skills/C.svg",
        iconAlt: "C Logo",
      },
      {
        name: "Bash",
        iconSrc: "/assets/skills/bash.svg",
        iconAlt: "Bash Logo",
      },
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
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React.js",
        iconSrc: "/assets/skills/react.svg",
        iconAlt: "React Logo",
      },
      {
        name: "Next.js",
        iconSrc: "/assets/skills/next.svg",
        iconAlt: "Next.js Logo",
      },
      {
        name: "Vue.js",
        iconSrc: "/assets/skills/vue.svg",
        iconAlt: "Vue.js Logo",
      },
      {
        name: "Laravel",
        iconSrc: "/assets/skills/laravel.svg",
        iconAlt: "Laravel Logo",
      },
      {
        name: "Flutter",
        iconSrc: "/assets/skills/flutter.svg",
        iconAlt: "Flutter Logo",
      },
      {
        name: "Flask",
        iconSrc: "/assets/skills/flask.svg",
        iconAlt: "Flask Logo",
      },
      {
        name: "Tailwind CSS",
        iconSrc: "/assets/skills/tailwind.svg",
        iconAlt: "Tailwind CSS Logo",
      },
      {
        name: "Bootstrap",
        iconSrc: "/assets/skills/bootstrap.svg",
        iconAlt: "Bootstrap Logo",
      },
      {
        name: ".NET",
        iconSrc: "/assets/skills/net.svg",
        iconAlt: ".NET Logo",
      },
      {
        name: "Streamlit",
        iconSrc: "/assets/skills/streamlit.svg",
        iconAlt: "Streamlit Logo",
      },
    ],
  },
  {
    title: "Databases & ORM",
    skills: [
      {
        name: "MySQL",
        iconSrc: "/assets/skills/mysql.svg",
        iconAlt: "MySQL Logo",
      },
      {
        name: "PostgreSQL",
        iconSrc: "/assets/skills/postgre.svg",
        iconAlt: "PostgreSQL Logo",
      },
      {
        name: "Supabase",
        iconSrc: "/assets/skills/supabase.svg",
        iconAlt: "Supabase Logo",
      },
      {
        name: "Firebase",
        iconSrc: "/assets/skills/firebase.svg",
        iconAlt: "Firebase Logo",
      },
    ],
  },
  {
    title: "Other Tools & Platforms",
    skills: [
      {
        name: "Node.js",
        iconSrc: "/assets/skills/node.svg",
        iconAlt: "Node.js Logo",
      },
      {
        name: "Git",
        iconSrc: "/assets/skills/git.svg",
        iconAlt: "Git Logo",
      },
      {
        name: "GitHub",
        iconSrc: "/assets/skills/github.svg",
        iconAlt: "GitHub Logo",
      },
      {
        name: "Vercel",
        iconSrc: "/assets/skills/vercel.svg",
        iconAlt: "Vercel Logo",
      },
      {
        name: "Google Colab",
        iconSrc: "/assets/skills/gcolab.png",
        iconAlt: "Google Colab Logo",
      },
      {
        name: "Postman",
        iconSrc: "/assets/skills/postman.svg",
        iconAlt: "Postman Logo",
      },
      {
        name: "VS Code",
        iconSrc: "/assets/skills/vscode.svg",
        iconAlt: "VS Code Logo",
      },
      {
        name: "Figma",
        iconSrc: "/assets/skills/figma.svg",
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

                  <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 opacity-0 shadow-sm transition duration-300 group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
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