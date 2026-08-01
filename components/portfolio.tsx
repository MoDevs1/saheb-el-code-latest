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
      tags: ["React", "Tailwind", "eCommerce"],
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      link: "https://project1.com",
    },
    {
      titleKey: t.project2Title,
      descKey: t.project2Desc,
      tags: ["Next.js", "Database", "Analytics"],
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      link: "https://project1.com",
    },
    {
      titleKey: t.project3Title,
      descKey: t.project3Desc,
      tags: ["Landing Page", "Conversion", "GSAP"],
      image: "bg-gradient-to-br from-green-400 to-green-600",
      link: "https://project1.com",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.portfolioTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.portfolioSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-2 animate-slide-up-fade"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image Placeholder */}
              <div
                className={`${project.image} h-48 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.titleKey}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow group-hover:text-foreground transition-colors duration-300">
                  {project.descKey}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary text-primary px-3 py-1 rounded-full font-medium group-hover:bg-primary/10 transition-colors duration-300"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-primary px-4 py-2 rounded-lg font-semibold transition-all text-sm group-hover:scale-105 transform cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.projectPreview}
                  </a>
                  <a
                    href="https://wa.me/+201055891861"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm group-hover:scale-105 transform"
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
          <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transform">
            {language === "en" ? "View All Projects" : "عرض جميع المشاريع"}
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
