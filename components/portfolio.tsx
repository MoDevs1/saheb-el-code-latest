"use client";

import { ExternalLink, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Portfolio() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
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
      link: "https://alemni.sahebelcode.xyz",
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
              className="group bg-card text-card-foreground rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 flex flex-col hover:-translate-y-2 border-border hover:border-primary/50 animate-slide-up-fade"
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
                <h3 className="text-xl font-bold text-foreground dark:text-slate-100 mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">
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
                      className="text-xs bg-secondary dark:bg-slate-800 text-primary dark:text-blue-400 px-3 py-1 rounded-full font-medium group-hover:bg-primary/10 dark:group-hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary dark:bg-slate-800 hover:bg-secondary/80 dark:hover:bg-slate-700 text-primary dark:text-blue-400 px-4 py-2 rounded-lg font-semibold transition-all text-sm group-hover:scale-105 transform cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.projectPreview}
                  </a>
                  <a
                    href="https://wa.me/+201055891861"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-primary dark:bg-blue-500 hover:bg-primary/90 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm group-hover:scale-105 transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.requestProject}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <button className="inline-flex items-center gap-2 bg-primary dark:bg-blue-500 hover:bg-primary/90 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-blue-500/30 hover:scale-105 transform">
            {language === "en" ? "View All Projects" : "عرض جميع المشاريع"}
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
