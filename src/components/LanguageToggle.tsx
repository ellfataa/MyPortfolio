"use client";

// Sesuaikan path import ini jika lokasi LanguageProvider Anda berbeda
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {language === "id" ? "ID" : "EN"}
    </button>
  );
}