"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Server, Wrench, Smartphone, Code2, Megaphone, ChevronDown } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiJsonwebtokens,
  SiFlutter,
  SiDart,
  SiAndroid,
  SiGit,
  SiGithub,
  SiLinux,
  SiGnubash,
  SiNeovim,
  SiPhp,
  SiPython,
  SiHtml5,
  SiCss,
  SiMeta,
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiGoogleads,
} from "react-icons/si";
import { FaAws, FaWindows } from "react-icons/fa6";
import { skills } from "@/lib/data";
import { useLocale } from "./LocaleProvider";

const skillIcons: Record<string, { Icon: IconType; color?: string }> = {
  react: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, color: "#EDEDED" },
  tailwindcss: { Icon: SiTailwindcss, color: "#38BDF8" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  express: { Icon: SiExpress, color: "#EDEDED" },
  laravel: { Icon: SiLaravel, color: "#FF2D20" },
  nodedotjs: { Icon: SiNodedotjs, color: "#5FA04E" },
  mysql: { Icon: SiMysql, color: "#4479A1" },
  jwt: { Icon: SiJsonwebtokens, color: "#FB015B" },
  flutter: { Icon: SiFlutter, color: "#47C5FB" },
  dart: { Icon: SiDart, color: "#0175C2" },
  android: { Icon: SiAndroid, color: "#3DDC84" },
  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: "#EDEDED" },
  linux: { Icon: SiLinux, color: "#FCC624" },
  bash: { Icon: SiGnubash, color: "#4EAA25" },
  neovim: { Icon: SiNeovim, color: "#57A143" },
  php: { Icon: SiPhp, color: "#777BB4" },
  python: { Icon: SiPython, color: "#3776AB" },
  html5: { Icon: SiHtml5, color: "#E34F26" },
  css3: { Icon: SiCss, color: "#663399" },
  aws: { Icon: FaAws, color: "#FF9900" },
  windows: { Icon: FaWindows, color: "#0078D4" },
  meta: { Icon: SiMeta, color: "#0081FB" },
  facebook: { Icon: SiFacebook, color: "#1877F2" },
  instagram: { Icon: SiInstagram, color: "#E4405F" },
  tiktok: { Icon: SiTiktok, color: "#FE2C55" },
  googleads: { Icon: SiGoogleads, color: "#4285F4" },
};

const categoryIcons = {
  languages: Code2,
  frontend: Terminal,
  backend: Server,
  mobile: Smartphone,
  tools: Wrench,
  marketing: Megaphone,
};

const VISIBLE_COUNT = 4;

export default function Skills() {
  const { t } = useLocale();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const categoryLabels = {
    languages: t.skills.languages,
    frontend: t.skills.frontend,
    backend: t.skills.backend,
    mobile: t.skills.mobile,
    tools: t.skills.tools,
    marketing: t.skills.marketing,
  };

  return (
    <section id="skills" className="py-20 bg-zinc-900/50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], catIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const isExpanded = !!expanded[category];
            const visibleSkills = isExpanded ? skillList : skillList.slice(0, VISIBLE_COUNT);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Icon className="text-emerald-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                </div>

                <div className="space-y-3 flex-1">
                  {visibleSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.1 + index * 0.05,
                      }}
                      className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-zinc-900/80">
                        {(() => {
                          const entry = skillIcons[skill.icon];
                          if (!entry) return null;
                          const { Icon, color } = entry;
                          return <Icon size={20} style={color ? { color } : undefined} />;
                        })()}
                      </span>
                      <span className="text-zinc-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>

                {skillList.length > VISIBLE_COUNT && (
                  <button
                    onClick={() => setExpanded((prev) => ({ ...prev, [category]: !isExpanded }))}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 text-sm font-medium text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-colors"
                  >
                    {isExpanded ? t.skills.showLess : t.skills.showMore}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
