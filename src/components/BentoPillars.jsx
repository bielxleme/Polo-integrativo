import React from 'react';
import {
  Stethoscope,
  Sparkles,
  HeartPulse,
  Leaf,
  Activity,
  ShieldPlus,
  ArrowUpRight,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function BentoPillars() {
  const pillars = [
    {
      id: 'clinica-geral',
      badge: 'Pilar 01 • Excelência Científica',
      title: 'Clínica Geral & Diagnóstico Preciso',
      description:
        'Atendimento completo e dedicado. Investigação clínica minuciosa, exames laboratoriais e check-ups personalizados para identificar a causa raiz de cada sintoma com segurança e precisão.',
      highlights: [
        'Consultas sem pressa e escuta ativa ao tutor',
        'Check-up preventivo individualizado',
        'Protocolos clínicos atualizados',
      ],
      icon: Stethoscope,
      colSpan: 'lg:col-span-6',
      accent: 'from-sage-500/15 via-transparent to-transparent',
    },
    {
      id: 'medicina-integrativa',
      badge: 'Pilar 02 • Visão Holística',
      title: 'Medicina Integrativa',
      description:
        'Terapias que complementam o tratamento convencional com foco holístico. Redução de dores crônicas, fortalecimento imunológico, reabilitação e equilíbrio físico e emocional do seu pet.',
      highlights: [
        'Controle da dor e reabilitação funcional',
        'Terapias naturais e bioestimulação',
        'Suporte a pacientes idosos ou crônicos',
      ],
      icon: Leaf,
      colSpan: 'lg:col-span-6',
      accent: 'from-champagne-400/20 via-transparent to-transparent',
    },
    {
      id: 'cuidado-humanizado',
      badge: 'Pilar 03 • Longevidade & Afeto',
      title: 'Cuidado Humanizado & Preventivo',
      description:
        'Acompanhamento em todas as fases da vida do pet — do filhote ao paciente sênior. Ambiente acolhedor pensado para reduzir o medo e transformar a ida ao veterinário em uma experiência tranquila.',
      highlights: [
        'Acompanhamento nutricional e preventivo',
        'Medicina da longevidade para pets idosos',
        'Orientação contínua e próxima à família',
      ],
      icon: HeartPulse,
      colSpan: 'lg:col-span-12',
      accent: 'from-terracotta-400/15 via-transparent to-transparent',
    },
  ];

  const integrativeModalities = [
    { icon: Sparkles, label: 'Terapias Complementares' },
    { icon: Activity, label: 'Reabilitação & Dor Crônica' },
    { icon: ShieldPlus, label: 'Imunidade & Longevidade' },
    { icon: Leaf, label: 'Equilíbrio Físico e Emocional' },
  ];

  return (
    <section id="especialidades" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold uppercase tracking-[0.2em]">
            Pilares & Especialidades
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-terracotta-900">
            Onde a medicina clássica encontra a sensibilidade integrativa
          </h2>
          <p className="text-base sm:text-lg text-terracotta-900/75 font-light">
            Unimos o rigor diagnóstico da clínica convencional às terapias integrativas
            para proporcionar mais anos de vida com plenitude, conforto e alegria ao seu pet.
          </p>
        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`${pillar.colSpan} group relative rounded-3xl p-8 sm:p-10 luxury-card transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Hover Gradient Spotlight */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-600">
                        {pillar.badge}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-linen-100 border border-champagne-400/40 flex items-center justify-center text-terracotta-700 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-terracotta-900">
                      {pillar.title}
                    </h3>

                    <p className="text-terracotta-900/75 leading-relaxed text-base">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-champagne-400/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
                      {pillar.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-terracotta-900/85 bg-linen-50/90 px-3.5 py-2 rounded-xl border border-champagne-400/20"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sage-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {pillar.id === 'cuidado-humanizado' && (
                      <a
                        href={SITE_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta-700 text-[#F5E6D3] text-xs uppercase tracking-widest font-semibold hover:bg-terracotta-900 transition-colors"
                      >
                        <span>Solicitar Avaliação</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrative Ribbon */}
        <div className="mt-10 rounded-3xl bg-terracotta-900 text-[#F5E6D3] p-6 sm:p-8 shadow-xl border border-champagne-400/30">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {integrativeModalities.map((mod) => {
              const ModIcon = mod.icon;
              return (
                <div key={mod.label} className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-champagne-300 shrink-0">
                    <ModIcon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-base sm:text-lg font-medium">
                    {mod.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
