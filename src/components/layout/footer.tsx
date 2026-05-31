import Image from "next/image";

type FooterLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

function LogoIcon() {
  return (
    <div className="relative h-8 w-8 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
      <Image
        src="/assets/logo/logo.png"
        alt="Luthfi Dev Logo"
        fill
        className="rounded-full object-cover"
        sizes="32px"
      />
    </div>
  );
}

function GithubIcon() {
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

function LinkedinIcon() {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
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
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function MailIcon() {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const footerLinks: FooterLink[] = [
  {
    label: "About",
    href: "#hero",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Certificates",
    href: "/certificates",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/ellfataa",
    icon: <GithubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luthfi-emillulfata/",
    icon: <LinkedinIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: <InstagramIcon />,
  },
  {
    label: "Email",
    href: "mailto:luthfi.efata@gmail.com",
    icon: <MailIcon />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-slate-200/80 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:pb-10 lg:px-8">
        <div className="flex flex-col items-center">
          <a
            href="#hero"
            className="group inline-flex items-center gap-3 text-slate-950 transition duration-300 hover:-translate-y-0.5 dark:text-white"
            aria-label="Back to top"
          >
            <LogoIcon />

            <span className="text-sm font-bold sm:text-base">LUTHFI.DEV</span>
          </a>

          <nav className="mb-6 mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-slate-500 dark:text-zinc-400 sm:text-base">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500 dark:text-zinc-400">
            © 2026 Luthfi Emillulfata. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-500 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-md dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-white/6 dark:hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}