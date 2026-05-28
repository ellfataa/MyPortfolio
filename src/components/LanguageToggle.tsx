"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"id" | "en">("id");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium dark:border-slate-700"
    >
      {language === "id" ? "ID" : "EN"}
    </button>
  );
}