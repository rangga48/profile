"use client";

import { useEffect, useState } from "react";
import { CV_CONFIG } from "@/config/cv";
import PageLayout from "@/components/templates/PageLayout";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"en" | "id">("en");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const toggleLanguage = () => {
    const next = lang === "en" ? "id" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = `/cv/${CV_CONFIG.file}`;
    link.download = CV_CONFIG.downloadAs;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ranggaputra681@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+62 813 8358 5869");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    const savedLang = localStorage.getItem("lang") as "en" | "id";
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  if (!isClient) return null;

  return (
    <PageLayout
      lang={lang}
      isDark={isDark}
      menuOpen={menuOpen}
      copiedEmail={copiedEmail}
      copiedPhone={copiedPhone}
      onToggleLang={toggleLanguage}
      onToggleDark={toggleDark}
      onToggleMenu={() => setMenuOpen((prev) => !prev)}
      onCloseMenu={() => setMenuOpen(false)}
      onDownloadCV={handleDownloadCV}
      onCopyEmail={handleCopyEmail}
      onCopyPhone={handleCopyPhone}
    />
  );
}
