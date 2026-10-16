import React from 'react';
import { Instagram, Phone, MapPin, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-linen-100 border-t border-champagne-400/30 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-champagne-400/25">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={SITE_CONFIG.media.logo}
                alt={SITE_CONFIG.businessName}
                className="w-12 h-12 rounded-full object-cover border border-champagne-400"
              />
              <div>
                <h4 className="font-serif text-xl font-semibold text-terracotta-900">
                  {SITE_CONFIG.businessName}
                </h4>
                <p className="text-xs text-sage-600 uppercase tracking-widest">
                  {SITE_CONFIG.doctorName}
                </p>
              </div>
            </div>
            <p className="text-sm text-terracotta-900/75 max-w-sm leading-relaxed">
              Medicina Veterinária Integrativa, unindo a clínica convencional de
              excelência com terapias integrativas e complementares para promover
              qualidade de vida, longevidade e saúde plena aos pets.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h5 className="font-serif text-lg font-semibold text-terracotta-900">
              Navegação Rápida
            </h5>
            <ul className="space-y-2 text-sm text-terracotta-900/75">
              <li><a href="#inicio" className="hover:text-sage-600">Início</a></li>
              <li><a href="#especialidades" className="hover:text-sage-600">Medicina Integrativa</a></li>
              <li><a href="#sobre" className="hover:text-sage-600">A Clínica & A Veterinária</a></li>
              <li><a href="#depoimentos" className="hover:text-sage-600">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-sage-600">Contato</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="font-serif text-lg font-semibold text-terracotta-900">
              Canais Oficiais
            </h5>
            <div className="space-y-2 text-sm text-terracotta-900/80">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-terracotta-500" />
                <span>{SITE_CONFIG.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sage-600" />
                <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp: {SITE_CONFIG.whatsappDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-terracotta-500" />
                <a href={SITE_CONFIG.instagramClinicUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {SITE_CONFIG.instagramClinicHandle}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-sage-600" />
                <a href={SITE_CONFIG.instagramDoctorUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {SITE_CONFIG.instagramDoctorHandle}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-terracotta-900/60">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.businessName}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com excelência digital e amor aos animais</span>
            <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}
