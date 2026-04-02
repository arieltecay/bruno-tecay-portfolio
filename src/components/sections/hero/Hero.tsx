import React from 'react';
import { cvData } from '../../../data/cv-data';
import { MapPin, Phone, Mail, FileText, User, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="profile" className="pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-left">
            {/* Contenedor Foto de Perfil - Centrado en móvil via mx-auto */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-50 rounded-3xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0 mx-auto md:mx-0">
              <img 
                src="/profile.png" 
                alt={cvData.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Bruno+Tecay&background=1e3a8a&color=fff&size=200";
                }}
              />
            </div>

            <div className="flex-1 w-full">
              <div className="mb-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{cvData.name}</h1>
                <p className="text-xl text-blue-600 font-semibold mt-1">{cvData.title}</p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                {cvData.profile}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-start gap-4">            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium">
              <MapPin size={16} />
              Tucumán, AR
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium">
              <User size={16} />
              Contador Público
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium">
              <FileText size={16} />
              Especialista RRHH
            </div>
          </div>
        </div>

        {/* Bento Bloque: Contacto Rápido y Ubicación */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-slate-900/95 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/5 text-white">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Contacto Directo
            </h2>
            <div className="space-y-3 mb-8">
              <a 
                href={`https://wa.me/${cvData.contact.whatsapp}?text=Hola%20Bruno,%20vi%20tu%20perfil%20profesional...`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-green-600/10 border border-green-600/20 rounded-2xl hover:bg-green-600/20 transition-all group"
              >
                <div className="flex items-center gap-3 text-green-500 group-hover:text-green-400 transition-colors">
                  <MessageCircle size={20} />
                  <span className="font-semibold">WhatsApp</span>
                </div>
                <div className="text-[10px] bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Online</div>
              </a>

              <a 
                href={`tel:${cvData.contact.phone.replace(/-/g, '')}`} 
                className="flex items-center gap-3 p-3 bg-blue-600/10 border border-blue-600/20 rounded-2xl hover:bg-blue-600/20 transition-all text-blue-400 hover:text-blue-300"
              >
                <Phone size={20} />
                <span className="font-semibold">Llamar Ahora</span>
              </a>

              <a 
                href={`mailto:${cvData.contact.email}`} 
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-slate-300 hover:text-white"
              >
                <Mail size={20} />
                <span className="font-semibold">Enviar Email</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-start gap-3 text-slate-400 group cursor-default">
                <MapPin size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <span className="block font-bold text-white mb-1 uppercase text-[10px] tracking-widest">Ubicación</span>
                  <span className="leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{cvData.contact.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl shadow-lg text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="text-3xl font-bold mb-1 group-hover:scale-110 transition-transform origin-left">15+</div>
              <div className="text-blue-100 opacity-80">Años de experiencia combinada</div>
            </div>
            <Briefcase size={80} className="absolute -right-4 -bottom-4 text-white/10 group-hover:rotate-12 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Re-importing Briefcase as it was used in the new string but might be missing from the original imports
import { Briefcase } from 'lucide-react';

export default Hero;
