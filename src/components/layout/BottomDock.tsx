"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

import {
  Award,
  Bot,
  FolderGit2,
  Languages,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

const dockItems = [
  {
    label: "About",
    href: "/#hero",
    icon: User,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderGit2,
  },
  {
    label: "Certificates",
    href: "/certificates",
    icon: Award,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function BottomDock() {
  const [darkMode, setDarkMode] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const handleChatbotStateChange = (event: Event) => {
      const chatbotEvent = event as CustomEvent<{ isOpen: boolean }>;

      setIsChatbotOpen(chatbotEvent.detail.isOpen);
    };

    window.addEventListener("chatbot-state-change", handleChatbotStateChange);

    return () => {
      window.removeEventListener(
        "chatbot-state-change",
        handleChatbotStateChange
      );
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const nextTheme = !prev;

      if (nextTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return nextTheme;
    });
  };

  const toggleChatbot = () => {
    window.dispatchEvent(new Event("toggle-chatbot"));
  };

  const dockButtonClass =
    "relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-2xl text-slate-500 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:bg-slate-100 hover:text-slate-950 active:translate-y-0 active:scale-95 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white sm:h-10 sm:w-10 md:h-11 md:w-11";

  const renderTooltip = (label: string) => {
    if (hoveredItem !== label) return null;

    return (
      <span className="pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-medium text-slate-700 shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 md:block">
        {label}
      </span>
    );
  };

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-5 z-60 justify-center px-3 sm:bottom-6 md:bottom-8 ${
        isChatbotOpen ? "hidden md:flex" : "flex"
      }`}
    >
      <div className="pointer-events-auto flex w-fit max-w-[calc(100vw-1.5rem)] items-center justify-center rounded-[1.7rem] border border-slate-200/80 bg-white/90 px-2.5 py-2 shadow-[0_14px_45px_rgba(15,23,42,0.13)] backdrop-blur-xl dark:border-zinc-800/90 dark:bg-black/90 dark:shadow-[0_14px_45px_rgba(0,0,0,0.48)] sm:px-3 sm:py-2.5">
        <div className="flex items-center gap-1 sm:gap-2">
          {dockItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                className={dockButtonClass}
              >
                {renderTooltip(item.label)}

                <Icon
                  size={18}
                  strokeWidth={1.9}
                  className="md:h-5 md:w-5"
                />
              </a>
            );
          })}
        </div>

        <div className="mx-2 h-7 w-px bg-slate-200 dark:bg-zinc-800 md:h-8" />

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={toggleChatbot}
            title="AI Chat"
            aria-label="AI Chat"
            onMouseEnter={() => setHoveredItem("AI Chat")}
            onMouseLeave={() => setHoveredItem(null)}
            className={dockButtonClass}
          >
            {renderTooltip("AI Chat")}

            <Bot
              size={18}
              strokeWidth={1.9}
              className="md:h-5 md:w-5"
            />
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            title="Change Language"
            aria-label="Change Language"
            onMouseEnter={() => setHoveredItem("Language")}
            onMouseLeave={() => setHoveredItem(null)}
            className={dockButtonClass}
          >
            {renderTooltip("Language")}

            <Languages
              size={18}
              strokeWidth={1.9}
              className="md:h-5 md:w-5"
            />

            <span className="absolute -right-1 -top-1 rounded-full bg-slate-950 px-1.5 py-0.5 text-[8px] font-bold leading-none text-white dark:bg-white dark:text-black">
              {language.toUpperCase()}
            </span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            title="Change Theme"
            aria-label="Change Theme"
            onMouseEnter={() => setHoveredItem("Theme")}
            onMouseLeave={() => setHoveredItem(null)}
            className={dockButtonClass}
          >
            {renderTooltip("Theme")}

            {darkMode ? (
              <Sun
                size={18}
                strokeWidth={1.9}
                className="md:h-5 md:w-5"
              />
            ) : (
              <Moon
                size={18}
                strokeWidth={1.9}
                className="md:h-5 md:w-5"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}