"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "id";

type TranslationKey =
  | "contact.heading"
  | "contact.description"
  | "contact.available"
  | "contact.button"
  | "footer.about"
  | "footer.projects"
  | "footer.certificates"
  | "footer.contact"
  | "footer.rights"
  | "chatbot.title"
  | "chatbot.subtitle"
  | "chatbot.greeting"
  | "chatbot.placeholder"
  | "chatbot.limitReached"
  | "chatbot.suggestion.projects"
  | "chatbot.suggestion.stack"
  | "chatbot.suggestion.flutter";

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "contact.heading": "Let's Work Together",
    "contact.description":
      "Let's connect and explore new projects, creative ideas, or opportunities to turn your vision into impactful digital solutions.",
    "contact.available": "Available for new opportunities",
    "contact.button": "Get in Touch",

    "footer.about": "About",
    "footer.projects": "Projects",
    "footer.certificates": "Certificates",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",

    "chatbot.title": "Luthfi AI",
    "chatbot.subtitle": "Portfolio assistant",
    "chatbot.greeting":
      "Hi there! I'm Luthfi's AI assistant. Ask me anything about his skills, experience, projects, or education. You have 3 questions per session.",
    "chatbot.placeholder": "Ask something...",
    "chatbot.limitReached":
      "The daily question limit has been reached. Please try again tomorrow.",
    "chatbot.suggestion.projects": "What projects has he built?",
    "chatbot.suggestion.stack": "What is his tech stack?",
    "chatbot.suggestion.flutter": "Tell me about his Flutter projects",
  },

  id: {
    "contact.heading": "Mari Bekerja Sama",
    "contact.description":
      "Mari berdiskusi tentang proyek baru, ide kreatif, atau peluang untuk mewujudkan visimu menjadi solusi digital yang berdampak.",
    "contact.available": "Terbuka untuk peluang baru",
    "contact.button": "Hubungi Saya",

    "footer.about": "Tentang",
    "footer.projects": "Proyek",
    "footer.certificates": "Sertifikat",
    "footer.contact": "Kontak",
    "footer.rights": "Seluruh hak cipta dilindungi.",

    "chatbot.title": "Luthfi AI",
    "chatbot.subtitle": "Asisten portfolio",
    "chatbot.greeting":
      "Halo! Saya asisten AI Luthfi. Kamu bisa bertanya tentang skill, pengalaman, proyek, atau pendidikannya. Kamu memiliki 3 pertanyaan per sesi.",
    "chatbot.placeholder": "Tanyakan sesuatu...",
    "chatbot.limitReached":
      "Batas pertanyaan hari ini sudah habis. Silakan coba lagi besok.",
    "chatbot.suggestion.projects": "Proyek apa saja yang pernah dibuat?",
    "chatbot.suggestion.stack": "Apa tech stack yang digunakan?",
    "chatbot.suggestion.flutter": "Ceritakan project Flutter-nya",
  },
};

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedLanguage === "id" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const nextLanguage = prev === "en" ? "id" : "en";
      localStorage.setItem("language", nextLanguage);
      return nextLanguage;
    });
  };

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: (key: TranslationKey) => translations[language][key],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}