"use client";

import { ExternalLink, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Portfolio() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
  const [showInProgress, setShowInProgress] = useState(false);

  const projects = [
    {
      titleKey: t.project1Title,
      descKey: t.project1Desc,
      tags: ["React", "Tailwind", "Templates"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iDrpuVRCnT49WJpHdPOU7A8qVyvJPQ.png",
      link: "https://designhub.sahebelcode.xyz",
    },
    {
      titleKey: t.project2Title,
      descKey: t.project2Desc,
      tags: ["Next.js", "Education", "Arabic"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0SxnPxTqjEHjSoMtS2nASzxaX8xjnF.png",
      link: "https://mr-mohamedelsayed.sahebelcode.xyz",
    },
    {
      titleKey: t.project3Title,
      descKey: t.project3Desc,
      tags: ["Responsive", "Portfolio", "Personal Brand"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dAurNF68uDoZs6NCVOxQd73zmnjykT.png",
      link: "https://mohamedtamer.sahebelcode.xyz",
    },
    {
      titleKey: t.project4Title,
      descKey: t.project4Desc,
      tags: ["Next.js", "Renewable Energy", "Interactive"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ntBJrDWavQbI5uvqZHYdEDC7HOcnQx.png",
      link: "https://solara.sahebelcode.xyz",
    },
    {
      titleKey: t.project5Title,
      descKey: t.project5Desc,
      tags: ["Arabic", "Community", "Opportunities"],
      image: "/warreni-preview.png",
      link: "https://warreni.sahebelcode.xyz",
      inProgress: true,
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary dark:bg-slate-900/30 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-slate-100 mb-4">
            {t.portfolioTitle}
          </h2>
          <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
            {t.portfolioSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card text-card-foreground rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-emerald-500/20 transition-all duration-300 flex flex-col hover:-translate-y-2 border-border hover:border-primary/50 animate-slide-up-fade"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Preview Image */}
              <div className="h-48 relative overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.titleKey}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground dark:text-slate-100 mb-2 group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {project.titleKey}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground dark:text-slate-400 text-sm mb-4 flex-grow group-hover:text-foreground dark:group-hover:text-slate-200 transition-colors duration-300">
                  {project.descKey}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary dark:bg-slate-800 text-primary dark:text-emerald-400 px-3 py-1 rounded-full font-medium group-hover:bg-primary/10 dark:group-hover:bg-emerald-500/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.inProgress ? (
                    <button
                      type="button"
                      onClick={() => setShowInProgress(true)}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary dark:bg-slate-800 hover:bg-secondary/80 dark:hover:bg-slate-700 text-primary dark:text-emerald-400 px-4 py-2 rounded-lg font-semibold transition-all text-sm group-hover:scale-105 transform cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.projectPreview}
                    </button>
                  ) : (
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary dark:bg-slate-800 hover:bg-secondary/80 dark:hover:bg-slate-700 text-primary dark:text-emerald-400 px-4 py-2 rounded-lg font-semibold transition-all text-sm group-hover:scale-105 transform cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.projectPreview}
                    </a>
                  )}
                  <a
                    href="https://wa.me/+201055891861"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-primary dark:bg-emerald-500 hover:bg-primary/90 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm group-hover:scale-105 transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.requestProject}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showInProgress && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 px-4" role="dialog" aria-modal="true" aria-labelledby="project-progress-title" onClick={() => setShowInProgress(false)}>
            <div className="relative w-full max-w-md rounded-2xl bg-card p-8 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => setShowInProgress(false)} aria-label={t.close} className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ExternalLink className="h-7 w-7" />
              </div>
              <h3 id="project-progress-title" className="mb-3 text-2xl font-bold text-foreground">{t.projectInProgressTitle}</h3>
              <p className="text-muted-foreground">{t.projectInProgressDesc}</p>
              <button type="button" onClick={() => setShowInProgress(false)} className="mt-6 rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground hover:bg-primary/90">{t.close}</button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <button className="inline-flex items-center gap-2 bg-primary dark:bg-emerald-500 hover:bg-primary/90 dark:hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-emerald-500/30 hover:scale-105 transform">
            {language === "en" ? "View All Projects" : "عرض جميع المشاريع"}
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
