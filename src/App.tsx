import React from 'react';
import Hero from './components/sections/hero/Hero';
import Experience from './components/sections/experience/Experience';
import Skills from './components/sections/skills/Skills';
import { Mail, Phone } from 'lucide-react';
import { cvData } from './data/cv-data';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto border-t border-slate-300/30 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-900 mb-1">{cvData.name}</h2>
            <p className="text-slate-500 text-sm">
              Contador Público Nacional & Especialista en Recursos Humanos
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-blue-500" />
              {cvData.contact.email}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-blue-500" />
              {cvData.contact.phone}
            </span>
          </div>
        </div>
        
        <div className="mt-12 text-center text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
          © {new Date().getFullYear()} Bruno Tecay • Portafolio Profesional de Alto Impacto
        </div>
      </div>
    </footer>
  );
};

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset para la navbar fija
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navegación Fija e Innovadora */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold group-hover:rotate-6 transition-transform">
              BT
            </div>
            <span className="font-bold text-slate-900 tracking-tight hidden sm:block">Bruno Tecay</span>
          </div>
          
          <div className="flex gap-1 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
            <button 
              onClick={() => scrollToSection('profile')}
              className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all"
            >
              Perfil
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all"
            >
              Experiencia
            </button>
            <button 
              onClick={() => scrollToSection('formation')}
              className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all"
            >
              Formación
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Skills />
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
