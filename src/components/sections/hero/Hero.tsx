import React from 'react';
import { cvData } from '../../../data/cv-data';
import { MapPin, Phone, Mail, FileText, User, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="profile" className="pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Bento Bloque Principal: Perfil */}
        <div className="md:col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Contenedor Foto de Perfil */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-50 rounded-3xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
              <img 
                src="/profile.png" 
                alt={cvData.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Bruno+Tecay&background=1e3a8a&color=fff&size=200";
                }}
              />
            </div>
            
            <div className="flex-1">
              <div className="mb-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{cvData.name}</h1>
                <p className="text-xl text-blue-600 font-semibold mt-1">{cvData.title}</p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                {cvData.profile}
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium">
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

        {/* Bento Bloque: Contacto Rápido */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-slate-900 p-8 rounded-3xl shadow-lg text-white">
            <h2 className="text-xl font-bold mb-6">Contacto Directo</h2>
            <div className="space-y-3">
              <a 
                href={`https://wa.me/${cvData.contact.whatsapp}?text=Hola%20Bruno,%20vi%20tu%20perfil%20profesional...`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-green-600/20 border border-green-600/30 rounded-2xl hover:bg-green-600/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-green-500" />
                  <span className="font-medium">WhatsApp</span>
                </div>
                <div className="text-xs bg-green-600 text-white px-2 py-1 rounded-lg">Online</div>
              </a>

              <a 
                href={`tel:${cvData.contact.phone.replace(/-/g, '')}`} 
                className="flex items-center gap-3 p-3 bg-blue-600/10 border border-blue-600/20 rounded-2xl hover:bg-blue-600/20 transition-all"
              >
                <Phone size={20} className="text-blue-500" />
                <span className="font-medium">Llamar Ahora</span>
              </a>

              <a 
                href={`mailto:${cvData.contact.email}`} 
                className="flex items-center gap-3 p-3 bg-slate-800 border border-slate-700 rounded-2xl hover:bg-slate-700 transition-all"
              >
                <Mail size={20} className="text-slate-400" />
                <span className="font-medium">Enviar Email</span>
              </a>
            </div>
          </div>

          <div className="bg-blue-600 p-8 rounded-3xl shadow-lg text-white relative overflow-hidden group">
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
