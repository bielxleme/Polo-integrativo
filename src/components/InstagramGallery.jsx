import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function InstagramGallery() {
  const photos = SITE_CONFIG.instagramPhotos || [];

  return (
    <section id="instagram" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-champagne-300/30 text-terracotta-700 text-xs font-semibold uppercase tracking-[0.2em]">
              Nosso dia a dia
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-terracotta-900">
              Acompanhe o Polo no Instagram
            </h2>
            <p className="text-sage-700">
              Pacientes, bastidores e dicas de cuidado integrativo.
            </p>
          </div>
          <a
            href={SITE_CONFIG.instagramClinicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-full bg-terracotta-700 text-white font-medium hover:bg-terracotta-800 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            {SITE_CONFIG.instagramClinicHandle}
          </a>
        </div>

        {photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {photos.map((photo, idx) => (
              <a
                key={photo.src}
                href={photo.link || SITE_CONFIG.instagramClinicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl bg-linen-200"
              >
                <img
                  src={photo.src}
                  alt={photo.alt || `Publicação ${idx + 1} do Instagram do Polo Veterinário`}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.closest("a").style.display = "none"; }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-terracotta-900/0 group-hover:bg-terracotta-900/40 transition-colors flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <a
            href={SITE_CONFIG.instagramClinicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl border-2 border-dashed border-champagne-400/50 p-12 text-center hover:bg-linen-100 transition-colors"
          >
            <Instagram className="w-10 h-10 mx-auto text-terracotta-700 mb-3" />
            <p className="font-serif text-xl text-terracotta-900">Veja nossas publicações no Instagram</p>
          </a>
        )}
      </div>
    </section>
  );
}
