import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function ContactLocation() {
  return (
    <section id="contato" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-terracotta-900 text-[#F5E6D3] p-8 sm:p-12 lg:p-16 shadow-2xl border border-champagne-400/30 relative overflow-hidden">
          {/* Subtle Decorative Glow */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-terracotta-400/20 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-champagne-300 text-xs font-semibold uppercase tracking-[0.2em]">
                Agendamentos & Contato
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Proporcione um atendimento integrativo e acolhedor ao seu pet
              </h2>

              <p className="text-base sm:text-lg text-[#F5E6D3]/80 font-light max-w-2xl">
                Entre em contato pelo nosso WhatsApp oficial para agendar consultas,
                conhecer nossas terapias integrativas ou tirar dúvidas diretamente com
                nossa equipe em Itápolis - SP.
              </p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-champagne-300 text-xs uppercase tracking-widest font-semibold">
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp Oficial</span>
                  </div>
                  <p className="font-serif text-2xl font-semibold text-white">
                    {SITE_CONFIG.whatsappDisplay}
                  </p>
                  <p className="text-xs text-[#F5E6D3]/70">
                    Marcação de consultas e orientações
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-champagne-300 text-xs uppercase tracking-widest font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>Localização</span>
                  </div>
                  <p className="font-serif text-2xl font-semibold text-white">
                    {SITE_CONFIG.city}
                  </p>
                  <p className="text-xs text-[#F5E6D3]/70">
                    Atendimento com hora marcada e conforto
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-4">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sage-500 hover:bg-sage-600 text-white font-semibold text-base shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar pelo WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Social Channels Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#FAF7F2] text-terracotta-900 p-8 shadow-xl space-y-6 border border-champagne-400/40">
                <div className="flex items-center gap-4">
                  <img
                    src={SITE_CONFIG.media.logo}
                    alt="Monograma GR"
                    className="w-16 h-16 rounded-2xl object-cover border border-champagne-400/50"
                  />
                  <div>
                    <h3 className="font-serif text-xl font-semibold">
                      Acompanhe no Instagram
                    </h3>
                    <p className="text-xs text-terracotta-900/70">
                      Rotina clínica, conteúdos educativos e casos reais
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Instagram Clínica */}
                  <a
                    href={SITE_CONFIG.instagramClinicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-linen-100 hover:bg-sage-50 border border-champagne-400/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-terracotta-700 text-[#F5E6D3] flex items-center justify-center">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-sage-600 font-semibold">
                          Instagram da Clínica
                        </p>
                        <p className="font-semibold text-sm text-terracotta-900">
                          {SITE_CONFIG.instagramClinicHandle}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-terracotta-500 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Instagram Dra. Gabriella */}
                  <a
                    href={SITE_CONFIG.instagramDoctorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-linen-100 hover:bg-sage-50 border border-champagne-400/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sage-600 text-white flex items-center justify-center">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-sage-600 font-semibold">
                          Instagram da Veterinária
                        </p>
                        <p className="font-semibold text-sm text-terracotta-900">
                          {SITE_CONFIG.instagramDoctorHandle}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-terracotta-500 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
