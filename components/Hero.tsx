"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useLocale } from "./LocaleProvider";
import { personalInfo } from "@/lib/data";

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const { t, locale } = useLocale();
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = locale === "en" ? t.hero.roles : t.hero.roles;

  useEffect(() => {
    const current = roles[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIdx((prev) => (prev + 1) % roles.length);
      }, 400);
    } else {
      timeout = setTimeout(
        () => {
          setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
        },
        deleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, idx, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden dot-grid scroll-mt-24"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse duration-[10000ms]" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Name, Role, Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-[1.05]">
              Jhon <br />
              <span className="hypr-gradient-text font-black">Tajumbina</span>
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-400 mb-6 font-medium font-mono min-h-[2rem]">
              <span className="text-purple-400">&gt; </span>
              <span>{text}</span>
              <span className="animate-pulse text-cyan-400 ml-0.5">▊</span>
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 max-w-xl">
              {locale === "en" ? personalInfo.bioEn : personalInfo.bioEs}
            </p>

            {/* Glowing Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <motion.a
                href="#portfolio"
                className="flex items-center gap-2 glow-btn-cyan px-6 py-3 rounded-xl font-medium text-sm transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.viewProjects}
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 border border-white/10 hover:border-purple-500/40 text-zinc-300 hover:text-white px-6 py-3 rounded-xl font-medium text-sm transition-all bg-white/5 backdrop-blur-sm"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                {t.hero.downloadCV}
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/10 hover:border-cyan-500/40 text-zinc-300 hover:text-white px-6 py-3 rounded-xl font-medium text-sm transition-all bg-white/5 backdrop-blur-sm"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                whileTap={{ scale: 0.98 }}
              >
                <LinkedinIcon size={16} />
                {t.hero.contactMe}
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 max-w-full rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.15)] bg-zinc-900">
              <Image
                src="/images/jhon.png"
                alt="Jhon Tajumbina"
                width={320}
                height={320}
                className="w-full h-full object-cover object-[center_10%]"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
