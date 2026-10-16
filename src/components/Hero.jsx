import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Decorative Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-sage-100/70 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-champagne-300/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            {/* Location & Luxury Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-50 border border-sage-500/20 text-sage-700 text-xs sm:text-sm font-medium shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Medicina Veterinária Integrativa • {SITE_CONFIG.city}</span>
            </div>

            {/* Fluid Text Reveal Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-terracotta-900 leading-[1.12] tracking-tight">
              O cuidado que seu melhor amigo merece,{' '}
              <span className="italic font-normal text-sage-600 underline decoration-champagne-400/60 decoration-1 underline-offset-8">
                unindo ciência e bem-estar.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-terracotta-900/75 leading-relaxed max-w-2xl font-light">
              Medicina veterinária integrativa de excelência em Itápolis - SP.
              Tratamentos humanizados focados na qualidade de vida e longevidade
              do seu pet.
            </p>

            {/* Refined CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-sage-600 text-white font-medium text-base shadow-lg shadow-sage-600/20 hover:bg-sage-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>💬 Falar no WhatsApp</span>
              </a>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/80 hover:bg-white text-terracotta-900 font-medium text-base border border-champagne-400/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-champagne-500" />
                <span>✨ Conhecer a Abordagem Integrativa</span>
              </a>
            </div>

            {/* Trust Micro-metrics */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-champagne-400/30">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-sage-600 shrink-0" />
                <span className="text-xs sm:text-sm text-terracotta-900/80 font-medium">
                  Diagnóstico Completo & Individualizado
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-terracotta-500 shrink-0" />
                <span className="text-xs sm:text-sm text-terracotta-900/80 font-medium">
                  Manejo Cat & Dog Friendly sem Estresse
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-champagne-500 shrink-0" />
                <span className="text-xs sm:text-sm text-terracotta-900/80 font-medium">
                  Foco em Longevidade e Prevenção
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Visual Composition with Official Monogram Seal */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Arch Image Frame */}
              <div className="relative rounded-t-[140px] rounded-b-3xl overflow-hidden border-4 border-white shadow-2xl aspect-[4/5] bg-linen-100">
                <img
                  src={SITE_CONFIG.media.heroPet}
                  alt="Cuidado veterinário humanizado e integrativo"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terracotta-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif italic text-lg">
                    "Enxergamos cada paciente como um ser único, integrando corpo, mente e ambiente."
                  </p>
                  <p className="text-xs uppercase tracking-widest text-champagne-300 mt-1">
                    {SITE_CONFIG.doctorName}
                  </p>
                </div>
              </div>

              {/* Floating Official GR Monogram Medallion */}
              <div className="animate-float-slow absolute -top-6 -left-6 sm:-left-8 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1.5 bg-white/90 backdrop-blur-md shadow-xl border border-champagne-400/40">
                <img
                  src={SITE_CONFIG.media.logo}
                  alt="Monograma GR - Polo Veterinário Integrativo Gabriella Radavelli"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Floating Cat & Dog Care Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 luxury-card rounded-2xl p-4 max-w-[230px] shadow-xl">
                <div className="flex items-center gap-3">
                  <img
                    src={SITE_CONFIG.media.heroDetail}
                    alt="Cuidado felino e canino"
                    className="w-12 h-12 rounded-xl object-cover border border-champagne-400/40"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sage-600">
                      Cuidado Integral
                    </p>
                    <p className="font-serif text-sm font-semibold text-terracotta-900">
                      Cães & Gatos em todas as fases da vida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
