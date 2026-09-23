"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Folder,
} from "lucide-react";
import { projects as fallbackProjects } from "@/lib/data";
import { useLocale } from "./LocaleProvider";
import { getDriveImageUrl } from "@/lib/drive";

interface Project {
  id: string;
  name: string;
  name_en?: string;
  description: string;
  description_en?: string;
  technologies: string[];
  demo: string;
  github: string;
  image_url?: string;
}

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function PortfolioSection() {
  const { t, locale } = useLocale();
  const [projects, setProjects] = useState<Project[]>(fallbackProjects as unknown as Project[]);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => { if (data?.length) setProjects(data); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (modalImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [modalImage]);

  return (
    <section id="portfolio" className="py-16 sm:py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            <span className="hypr-gradient-text font-black">{t.portfolio.title}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 mb-8">
            {t.portfolio.subtitle}
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded mb-8" />
        </motion.div>

        {/* Projects Content */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="tiling-window hover:active-cyan flex flex-col group h-full"
            >
              {/* Window Header */}
              <div className="h-8 bg-zinc-950 px-4 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="window-dot bg-[#ff5f56] w-2 h-2 rounded-full" />
                  <span className="window-dot bg-[#ffbd2e] w-2 h-2 rounded-full" />
                  <span className="window-dot bg-[#27c93f] w-2 h-2 rounded-full" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">project_record_{project.id}.json</span>
                <div className="w-8" />
              </div>

              <div className="h-32 sm:h-40 bg-zinc-900/60 flex items-center justify-center relative overflow-hidden">
                {(() => {
                  const imgSrc = project.image_url ? getDriveImageUrl(project.image_url) : null;
                  return imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={project.name}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setModalImage({ src: imgSrc, alt: project.name })}
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent" />
                      <Folder className="w-10 h-10 text-zinc-600 group-hover:text-cyan-400 transition-colors duration-300" />
                    </>
                  );
                })()}
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {locale === "en" ? project.name_en ?? project.name : project.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                  {locale === "en" ? project.description_en ?? project.description : project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 bg-zinc-900 border border-white/5 text-zinc-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2 border-t border-white/5">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-base font-mono text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      <ExternalLink size={20} />
                      [live_demo]
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-base font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon size={20} />
                      [src_code]
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl leading-none"
            onClick={() => setModalImage(null)}
          >
            ×
          </button>
          <img
            src={modalImage.src}
            alt={modalImage.alt}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
