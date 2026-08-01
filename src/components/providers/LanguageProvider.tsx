"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Language = "en" | "id";

type TranslationKey =
  | "dock.about"
  | "dock.projects"
  | "dock.certificates"
  | "dock.contact"
  | "dock.aiChat"
  | "dock.language"
  | "dock.theme"
  | "hero.portfolio"
  | "hero.description"
  | "hero.contactBtn"
  | "hero.downloadBtn"
  | "experience.title"
  | "education.title"
  | "skills.title"
  | "skills.subtitle"
  | "projects.title"
  | "projects.subtitle"
  | "projects.seeAll"
  | "certificates.title"
  | "certificates.subtitle"
  | "certificates.seeAll"
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
    "dock.about": "About",
    "dock.projects": "Projects",
    "dock.certificates": "Certificates",
    "dock.contact": "Contact",
    "dock.aiChat": "AI Chat",
    "dock.language": "Language",
    "dock.theme": "Theme",

    "hero.portfolio": "Portfolio",
    "hero.description":
      "Software Engineer with a Computer Science background and a strong interest in Full-Stack Development, System Analysis, and Data Analysis. Experienced in designing and developing scalable web applications, translating business requirements into practical digital solutions, and collaborating within Agile teams to deliver reliable, secure, and user-centered software.",
    "hero.contactBtn": "Contact Me",
    "hero.downloadBtn": "Download CV",

    "experience.title": "Experience",
    
    "education.title": "Education",

    "skills.title": "Skills",
    "skills.subtitle": "A collection of technologies, programming languages, frameworks, and platforms that support me in developing digital solutions.",
    
    "projects.title": "Projects",
    "projects.subtitle": "A showcase of my work in scalable software and intelligent systems.",
    "projects.seeAll": "See All Projects",

    "certificates.title": "Certificates",
    "certificates.subtitle": "Highlights from my continuous learning journey and professional growth.",
    "certificates.seeAll": "See All Certificates",

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
      "Hi there! I'm Luthfi's AI assistant. Ask me anything about his skills, experience, projects, or education.",
    "chatbot.placeholder": "Ask something...",
    "chatbot.limitReached":
      "The daily question limit has been reached. Please try again tomorrow.",
    "chatbot.suggestion.projects": "What projects has he built?",
    "chatbot.suggestion.stack": "What is his tech stack?",
    "chatbot.suggestion.flutter": "Tell me about his Flutter projects",
  },

  id: {
    "dock.about": "Tentang",
    "dock.projects": "Proyek",
    "dock.certificates": "Sertifikat",
    "dock.contact": "Kontak",
    "dock.aiChat": "Chat AI",
    "dock.language": "Bahasa",
    "dock.theme": "Tema",

    "hero.portfolio": "Portofolio",
    "hero.description":
      "Software Engineer dengan latar belakang Ilmu Komputer dan ketertarikan kuat pada Full-Stack Development, Analisis Sistem, dan Analisis Data. Berpengalaman dalam merancang dan mengembangkan aplikasi web yang scalable, menerjemahkan kebutuhan bisnis menjadi solusi digital praktis, serta berkolaborasi dalam tim Agile untuk menghasilkan perangkat lunak yang andal, aman, dan berpusat pada pengguna.",
    "hero.contactBtn": "Hubungi Saya",
    "hero.downloadBtn": "Unduh CV",

    "experience.title": "Pengalaman",
    
    "education.title": "Pendidikan",

    "skills.title": "Keahlian",
    "skills.subtitle": "Kumpulan teknologi, bahasa pemrograman, framework, dan platform yang mendukung saya dalam mengembangkan solusi digital.",
    
    "projects.title": "Proyek",
    "projects.subtitle": "Kumpulan karya saya di bidang perangkat lunak terukur dan sistem cerdas.",
    "projects.seeAll": "Lihat Semua Proyek",

    "certificates.title": "Sertifikat",
    "certificates.subtitle": "Sorotan dari perjalanan belajar dan pertumbuhan profesional saya.",
    "certificates.seeAll": "Lihat Semua Sertifikat",

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
      "Halo! Saya asisten AI Luthfi. Kamu bisa bertanya tentang skill, pengalaman, proyek, atau pendidikannya.",
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

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const nextLanguage = prev === "en" ? "id" : "en";
      localStorage.setItem("language", nextLanguage);
      return nextLanguage;
    });
  }, []);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: (key: TranslationKey) => translations[language][key],
    }),
    [language, toggleLanguage]
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