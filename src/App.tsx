import React from 'react';
import Hero from './components/sections/hero/Hero';
import Experience from './components/sections/experience/Experience';
import Skills from './components/sections/skills/Skills';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { cvData } from './data/cv-data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{cvData.name}</h2>
          <p className="text-slate-500 max-w-sm">
            Especialista en Administración y Recursos Humanos comprometido con la excelencia operativa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${cvData.contact.email}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Mail size={16} className="text-blue-600" />
                  {cvData.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${cvData.contact.phone.replace(/-/g, '')}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Phone size={16} className="text-blue-600" />
                  {cvData.contact.phone}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${cvData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors">
                  <MessageCircle size={16} className="text-green-500" />
                  Enviar WhatsApp
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Ubicación</h3>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin size={16} className="text-blue-600" />
              {cvData.contact.address}
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Bruno Tecay. Todos los derechos reservados.</p>
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

export default App
