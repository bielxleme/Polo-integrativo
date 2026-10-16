import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Medicina Integrativa', href: '#especialidades' },
    { name: 'A Clínica & A Veterinária', href: '#sobre' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-champagne-400/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-champagne-400/60 shadow-md transition-transform duration-500 group-hover:scale-105 bg-terracotta-700 flex items-center justify-center">
            <img
              src={SITE_CONFIG.media.logo}
              alt={SITE_CONFIG.businessName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="font-serif text-lg font-semibold text-[#F5E6D3] select-none">
              GR
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-terracotta-900 leading-tight">
              Polo Veterinário Integrativo
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-sage-600 font-medium">
              Dra. Gabriella Radavelli
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-terracotta-900/80 hover:text-sage-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-champagne-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-600 text-white text-sm font-medium shadow-md hover:bg-sage-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-champagne-400/30"
          >
            <span>🐾 Agendar Consulta</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-linen-100 text-terracotta-900 hover:bg-linen-200 transition-colors"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-champagne-400/30 px-6 pt-4 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-base font-medium text-terracotta-900 border-b border-linen-200/60"
            >
              {link.name}
            </a>
          ))}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-sage-600 text-white font-semibold shadow-md"
          >
            🐾 Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
