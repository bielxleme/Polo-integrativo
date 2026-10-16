export const SITE_CONFIG = {
  businessName: 'Polo Veterinário Integrativo Gabriella Radavelli',
  shortName: 'Polo Veterinário Integrativo',
  doctorName: 'Dra. Gabriella Radavelli',
  doctorRole: 'Médica Veterinária • Responsável Técnica',
  city: 'Itápolis - SP',
  address: 'Centro — Itápolis, SP',
  whatsappNumber: '5516997345344',
  whatsappDisplay: '(16) 99734-5344',
  whatsappUrl:
    'https://wa.me/5516997345344?text=Ol%C3%A1%2C%20Dra.%20Gabriella!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20ou%20receber%20orienta%C3%A7%C3%B5es.',
  instagramClinicUrl: 'https://www.instagram.com/poloveterinarioradavelli/',
  instagramClinicHandle: '@poloveterinarioradavelli',
  instagramDoctorUrl: 'https://www.instagram.com/dra.gabriellaradavelli/',
  instagramDoctorHandle: '@dra.gabriellaradavelli',
  media: {
    logo: '/logo-gr.jpg',
    heroPet:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=85',
    heroDetail:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85',
    doctorPortrait:
      'https://instagram.frao5-1.fna.fbcdn.net/v/t51.82787-15/846207147_18132831910811708_8360258290582124310_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&_nc_map=urlgen_bucketless&ig_cache_key=NDAwNzI4NjY2MjgxMTIzODA2NTE4MTMyODMxOTA3ODExNzA4.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjEyMTUuc2RyLnZpZGVvX3VzZXJfdXBsb2FkZWRfdGh1bWJuYWlsLkMzIn0%3D&_nc_ohc=w0wbBqPgg84Q7kNvwGj8DKi&_nc_oc=AdoNPvshKss7QwsIe-ulnaIQCCC_vIr6jHIFrpqx5T5SMHVKyqrNryPWfltnUbqo2uL8FbcPRAIpiigmRlcyPY_s&_nc_zt=23&_nc_ht=instagram.frao5-1.fna&_nc_gid=BM2hwSG3LJt-s4LB28dgmA&_nc_ss=7c6a8&oh=00_AQMMndQvmm5pKcAzN3OHjh_RiB4mNtRpdQ5xgrAHrbuZ5Q&oe=6AD8311D',
    integrativeCare:
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=900&q=85',
  },
  // Fotos do Instagram: salve as imagens em public/instagram/ com estes nomes.
  // Fotos que não existirem na pasta somem sozinhas da galeria.
  instagramPhotos: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    src: `/instagram/foto${n}.jpg`,
  })),
};
