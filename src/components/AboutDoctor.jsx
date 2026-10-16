import React from 'react';
import { Award, Instagram, CheckCircle2, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function AboutDoctor() {
  const credentials = [
    'Atendimento pautado na Medicina Veterinária Integrativa e Preventiva',
    'Protocolos individualizados que respeitam a história e o temperamento de cada animal',
    'Integração segura entre diagnóstico clínico tradicional e terapias complementares',
    'Acolhimento transparente para que o tutor se sinta seguro em cada etapa do tratamento',
  ];

  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-b from-linen-100/70 via-[#FAF7F2] to-linen-100/50 border-y border-champagne-400/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl aspect-[4/5]">
              <img
                src={SITE_CONFIG.media.doctorPortrait}
                alt={SITE_CONFIG.doctorName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-champagne-400/30 backdrop-blur-md text-xs uppercase tracking-widest mb-2">
                  Responsável Técnica
                </span>
                <h3 className="font-serif text-2xl font-semibold">
                  {SITE_CONFIG.doctorName}
                </h3>
                <p className="text-xs text-linen-100/90 mt-0.5">
                  Polo Veterinário Integrativo • Itápolis - SP
                </p>
              </div>
            </div>

            {/* Official Brand Stamp */}
            <div className="mt-6 luxury-card rounded-2xl p-5 flex items-center gap-4">
              <img
                src={SITE_CONFIG.media.logo}
                alt="Logo GR"
                className="w-16 h-16 rounded-xl object-cover shrink-0 border border-champagne-400/40"
              />
              <div>
                <p className="font-serif text-lg font-semibold text-terracotta-900">
                  Amor, Ciência & Respeito à Vida
                </p>
                <p className="text-xs text-terracotta-900/75 leading-relaxed">
                  Um espaço idealizado em Itápolis para oferecer medicina veterinária
                  de alta performance com calor humano.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Authority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-500/10 text-terracotta-700 text-xs font-semibold uppercase tracking-[0.18em]">
              <Award className="w-4 h-4" />
              <span>A Clínica & A Veterinária</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-terracotta-900 leading-tight">
              Sobre a Dra. Gabriella Radavelli
            </h2>

            <p className="text-base sm:text-lg text-terracotta-900/80 leading-relaxed">
              À frente do <strong>Polo Veterinário Integrativo Gabriella Radavelli</strong>,
              a Dra. Gabriella construiu sua trajetória unindo rigor científico, constante
              capacitação profissional e uma profunda sensibilidade pelo bem-estar animal.
            </p>

            <p className="text-base text-terracotta-900/75 leading-relaxed">
              Sua abordagem nasce da certeza de que cada pet possui necessidades físicas,
              emocionais e comportamentais únicas. Ao integrar a medicina veterinária
              convencional com terapias complementares, o consultório tornou-se referência
              de confiança para os tutores de Itápolis e região que buscam longevidade,
              prevenção e alívio real para seus companheiros de quatro patas.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 pt-2">
              {credentials.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-terracotta-900/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Social & WhatsApp Links */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-sage-600 text-white text-sm font-medium shadow-md hover:bg-sage-700 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Avaliação com a Dra. Gabriella</span>
              </a>

              <a
                href={SITE_CONFIG.instagramDoctorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white border border-champagne-400/50 text-terracotta-900 text-sm font-medium hover:bg-linen-100 transition-all"
              >
                <Instagram className="w-4 h-4 text-terracotta-500" />
                <span>{SITE_CONFIG.instagramDoctorHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
