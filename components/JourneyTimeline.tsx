"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, Stethoscope } from "lucide-react";
import { journeyTimeline, personalInfo } from "@/lib/data";
import { useLocale } from "./LocaleProvider";

function GithubIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function JourneyTimeline() {
  const { locale, t } = useLocale();
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const icons = [GraduationCap, Stethoscope, CalendarDays];
  const branchColors = ["#00a8f4", "#a855f7", "#00e5d0"];

  return (
    <section id="journey" className="py-12 overflow-hidden scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            <span className="hypr-gradient-text-purple font-black">{t.journey.title}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-400">{t.journey.subtitle}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded mt-6" />
        </motion.div>

        <div className="relative">
          {/* Central trunk */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400/50 via-purple-500/50 to-cyan-400/50 hidden md:block" />

          <div className="space-y-6 md:space-y-10">
            {journeyTimeline.map((item, index) => {
              const Icon = icons[index % icons.length];
              const color = branchColors[index % branchColors.length];
              const isLeft = index % 2 === 0;
              const isExpanded = !!expanded[item.id];

              const DesktopCard = () => (
                <div
                  className="tiling-window p-5 w-full max-w-sm"
                  style={{
                    borderColor: `${color}60`,
                    boxShadow: `0 0 25px ${color}25`,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-sm sm:text-base font-mono px-3 py-1 border rounded-md"
                      style={{ color, borderColor: `${color}30`, backgroundColor: `${color}10` }}
                    >
                      {locale === "en" ? item.dateEn : item.dateEs}
                    </span>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                      <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {locale === "en" ? item.titleEn : item.titleEs}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    {locale === "en" ? item.descriptionEn : item.descriptionEs}
                  </p>
                  {(item.linkType === "github" || item.link) && (
                    <div className="pt-2 border-t border-white/5">
                      <a
                        href={item.link || personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-mono text-cyan-300 hover:text-cyan-200 transition-colors"
                      >
                        <GithubIcon size={18} />
                        <span>[view_repo]</span>
                      </a>
                    </div>
                  )}
                </div>
              );

              const MobileBubble = () => (
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  onClick={() => !isExpanded && setExpanded((prev) => ({ ...prev, [item.id]: true }))}
                  className="cursor-pointer select-none"
                >
                  {isExpanded ? (
                    <div
                      className="tiling-window p-4"
                      style={{
                        borderColor: `${color}60`,
                        boxShadow: `0 0 25px ${color}25`,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-sm sm:text-base font-mono px-3 py-1 border rounded-md"
                          style={{ color, borderColor: `${color}30`, backgroundColor: `${color}10` }}
                        >
                          {locale === "en" ? item.dateEn : item.dateEs}
                        </span>
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1.5">
                        {locale === "en" ? item.titleEn : item.titleEs}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                        {locale === "en" ? item.descriptionEn : item.descriptionEs}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5">
                        {(item.linkType === "github" || item.link) && (
                          <a
                            href={item.link || personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-mono text-cyan-300 hover:text-cyan-200 transition-colors"
                          >
                            <GithubIcon size={18} />
                            <span>[view_repo]</span>
                          </a>
                        )}
                        <div />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpanded((prev) => ({ ...prev, [item.id]: false }));
                          }}
                          className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                          [close]
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="group w-44 h-44 sm:w-56 sm:h-56 rounded-full flex flex-col items-center justify-center p-3 sm:p-6 text-center border-2 transition-all duration-500 hover:scale-105 bg-[#0b0c10]/90 cursor-pointer"
                      style={{
                        borderColor: `${color}60`,
                        boxShadow: `0 0 15px ${color}15, 0 4px 20px rgba(0,0,0,0.4)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = color;
                        e.currentTarget.style.boxShadow = `0 0 25px ${color}50, 0 0 50px ${color}25`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${color}60`;
                        e.currentTarget.style.boxShadow = `0 0 15px ${color}15, 0 4px 20px rgba(0,0,0,0.4)`;
                      }}
                    >
                      <div
                        className="p-2 rounded-full border mb-2 flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                        style={{ borderColor: `${color}30`, backgroundColor: `${color}10` }}
                      >
                        <Icon size={20} style={{ color }} />
                      </div>
                      <span
                        className="text-base font-bold font-mono mb-1 transition-all duration-400"
                        style={{ color }}
                      >
                        {locale === "en" ? item.dateEn : item.dateEs}
                      </span>
                      <h3 className="text-sm font-semibold text-zinc-200 mb-3 leading-tight line-clamp-2 max-w-[15ch]">
                        {locale === "en" ? item.titleEn : item.titleEs}
                      </h3>
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest font-semibold transition-all duration-400 group-hover:tracking-[0.15em]"
                        style={{ color }}
                      >
                        {locale === "en" ? "Read more" : "Leer más"}
                      </span>
                    </div>
                  )}
                </motion.div>
              );

              return (
                <div key={item.id} className="relative">
                  {/* Desktop */}
                  <div className="hidden md:flex items-center justify-center">
                    {isLeft ? (
                      <>
                        <div className="flex-[0_0_calc(50%-32px)] flex justify-end pr-8">
                          <DesktopCard />
                        </div>
                        <div className="shrink-0 w-12 flex justify-center relative z-10">
                          <div
                            className="w-3 h-3 rounded-full border-2 bg-[#040406]"
                            style={{ borderColor: color, boxShadow: `0 0 10px ${color}80` }}
                          />
                        </div>
                        <div className="flex-[0_0_calc(50%-32px)]" />
                      </>
                    ) : (
                      <>
                        <div className="flex-[0_0_calc(50%-32px)]" />
                        <div className="shrink-0 w-12 flex justify-center relative z-10">
                          <div
                            className="w-3 h-3 rounded-full border-2 bg-[#040406]"
                            style={{ borderColor: color, boxShadow: `0 0 10px ${color}80` }}
                          />
                        </div>
                        <div className="flex-[0_0_calc(50%-32px)] flex justify-start pl-8">
                          <DesktopCard />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="flex md:hidden flex-col items-center">
                    {index > 0 && (
                      <div
                        className="w-0.5 h-8 mb-4"
                        style={{ background: `linear-gradient(to bottom, ${color}30, ${color}70)` }}
                      />
                    )}
                    <MobileBubble />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
