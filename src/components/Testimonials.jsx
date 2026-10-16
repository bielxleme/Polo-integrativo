import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'O olhar integrativo da Dra. Gabriella transformou a qualidade de vida do nosso cãozinho idoso. Ele voltou a ter disposição, sem dores e com um acompanhamento cheio de carinho.',
      author: 'Tutora de Paciente Sênior',
      pet: 'Acompanhamento Integrativo & Longevidade • Itápolis - SP',
    },
    {
      quote:
        'Ambiente extremamente calmo e acolhedor. Minha gatinha sempre ficava estressada em consultas, mas no Polo Veterinário foi tratada com uma paciência e delicadeza ímpares.',
      author: 'Tutora de Felino',
      pet: 'Clínica Geral & Cuidado Humanizado • Itápolis - SP',
    },
    {
      quote:
        'Explicação detalhada, diagnóstico certeiro e um cuidado pós-consulta que nunca tínhamos visto antes. Confiamos de olhos fechados na Dra. Gabriella.',
      author: 'Família Tutora',
      pet: 'Medicina Preventiva & Integrativa • Região de Itápolis',
    },
  ];

  return (
    <section id="depoimentos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-champagne-300/30 text-terracotta-700 text-xs font-semibold uppercase tracking-[0.2em]">
            Confiança & Prova Social
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-terracotta-900">
            O que dizem as famílias que confiam seus melhores amigos a nós
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-3xl p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-champagne-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-champagne-400/40" />
                </div>
                <p className="font-serif italic text-xl text-terracotta-900/90 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-champagne-400/20">
                <p className="font-semibold text-sm text-terracotta-900">
                  {item.author}
                </p>
                <p className="text-xs text-sage-600 mt-0.5">{item.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
