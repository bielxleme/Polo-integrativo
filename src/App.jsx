import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoPillars from './components/BentoPillars';
import AboutDoctor from './components/AboutDoctor';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-pattern-linen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BentoPillars />
        <AboutDoctor />
        <InstagramGallery />
        <Testimonials />
        <ContactLocation />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
