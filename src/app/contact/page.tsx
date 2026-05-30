"use client";

import { useState } from "react";

import BottomDock from "@/components/layout/BottomDock";
import Footer from "@/components/layout/footer";
import Chatbot from "@/components/chatbot";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const MAX_MESSAGE_LENGTH = 5000;

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
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

function LocationIcon() {
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SendIcon() {
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
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
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
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: keyof ContactForm, value: string) => {
    if (field === "message" && value.length > MAX_MESSAGE_LENGTH) return;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:luthfi.efata@gmail.com?subject=${subject}&body=${body}`;
  };

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

            <span className="text-slate-950 dark:text-white">Contact</span>
          </div>
        </header>

        <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 lg:grid-cols-[0.95fr_0.85fr] lg:gap-14 lg:px-8">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-950 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-white/4 dark:text-white">
              <MailIcon className="h-6 w-6" />
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
              Get in touch
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to bring your visions to life.
            </p>

            <div className="mt-12 space-y-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500">
                  Email
                </p>

                <a
                  href="mailto:luthfi.efata@gmail.com"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-slate-600 dark:text-white dark:hover:text-zinc-300 sm:text-base"
                >
                  <MailIcon className="h-4 w-4" />
                  luthfi.efata@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500">
                  Location
                </p>

                <p className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-slate-950 dark:text-white sm:text-base">
                  <LocationIcon />
                  Yogyakarta
                </p>
              </div>
            </div>

            <div className="my-12 h-px w-full max-w-lg bg-slate-200 dark:bg-zinc-800" />

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500">
                Socials
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-500 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-md dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-white/6 dark:hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-white/4 sm:p-6 lg:ml-auto"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[36px_36px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />

            <div className="relative z-10 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Your name"
                  required
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  placeholder="your@email.com"
                  required
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  value={form.message}
                  onChange={(event) =>
                    handleChange("message", event.target.value)
                  }
                  placeholder="Type your message here..."
                  required
                  rows={6}
                  className="mt-3 min-h-36 w-full resize-none rounded-2xl border border-slate-200 bg-white/70 px-5 py-3.5 text-sm leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600"
                />

                <p className="mt-2 text-right text-xs text-slate-400 dark:text-zinc-500">
                  {form.message.length}/{MAX_MESSAGE_LENGTH}
                </p>
              </div>

              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md dark:bg-white dark:text-slate-950 dark:hover:bg-zinc-200"
              >
                <SendIcon />
                Send Message
              </button>
            </div>
          </form>
        </section>

        <Footer />
      </div>

      <BottomDock />
      <Chatbot />
    </main>
  );
}