"use client";

import { Zap, MessageCircle, Palette, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function WhyUs() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: Zap,
      titleKey: t.featureFastTitle,
      descKey: t.featureFastDesc,
    },
    {
      icon: MessageCircle,
      titleKey: t.featureSupportTitle,
      descKey: t.featureSupportDesc,
    },
    {
      icon: Palette,
      titleKey: t.featureModernTitle,
      descKey: t.featureModernDesc,
    },
    {
      icon: Wrench,
      titleKey: t.featureResponsiveTitle,
      descKey: t.featureResponsiveDesc,
    },
  ];

  const benefits = [t.benefitSecure, t.benefitSeo, t.benefitScalable];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-[#0B0F17] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-slate-100 mb-4">
            {t.whyUsTitle}
          </h2>
          <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
            {t.whyUsSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-6 animate-slide-up-fade group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary dark:text-emerald-400 group-hover:text-white transition-colors duration-300 group-hover:animate-float" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground dark:text-slate-100 mb-2 group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.titleKey}
                  </h3>
                  <p className="text-muted-foreground dark:text-slate-400 leading-relaxed group-hover:text-foreground dark:group-hover:text-slate-200 transition-colors duration-300">
                    {feature.descKey}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-white dark:from-slate-900/60 dark:to-slate-800/40 border border-border dark:border-slate-800 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-foreground dark:text-slate-100 mb-6">
            {language === "en" ? "Additional Benefits" : "مميزات إضافية"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-4 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 animate-slide-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-bold text-primary dark:text-emerald-400 mb-2 group-hover:text-primary/80 dark:group-hover:text-emerald-300 transition-colors duration-300">
                  {benefit}
                </h4>
                <p className="text-muted-foreground dark:text-slate-400 text-sm group-hover:text-foreground dark:group-hover:text-slate-200 transition-colors duration-300">
                  {language === "en"
                    ? benefit === benefits[0]
                      ? "Enterprise-grade security and reliability"
                      : benefit === benefits[1]
                        ? "Optimized for search engines"
                        : "Growing with your business"
                    : benefit === benefits[0]
                      ? "أمان من الدرجة الأولى وموثوقية عالية"
                      : benefit === benefits[1]
                        ? "محسّن تماماً لمحركات البحث"
                        : "حلول قابلة للتطوير مع نموك"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
