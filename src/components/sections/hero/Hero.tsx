import React from 'react';
import { cvData } from '../../../data/cv-data';
import { MapPin, Phone, Mail, FileText, User, MessageCircle, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="profile" className="pt-24 pb-12 px-6 print:pt-0 print:pb-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 print:flex print:flex-col">
        {/* Bloque Principal: Perfil */}
        <div className="md:col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between print:shadow-none print:border-none print:p-0">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-left print:flex-row print:gap-6">
            {/* Foto de Perfil */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-50 rounded-3xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0 mx-auto md:mx-0 print:w-28 print:h-28 print:shadow-none print:border-none print:rounded-2xl">
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
              <div className="mb-4 print:mb-2">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight print:text-3xl">{cvData.name}</h1>
                <p className="text-xl text-blue-600 font-semibold mt-1 print:text-lg">{cvData.title}</p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed print:text-sm print:leading-normal">
                {cvData.profile}
              </p>
            </div>
          </div>
          
          {/* Tags de Perfil */}
          <div className="mt-8 flex flex-wrap justify-start gap-4 print:mt-4 print:gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium print:bg-transparent print:p-0 print:text-xs">
              <MapPin size={16} className="text-blue-500 print:text-slate-400" />
              Tucumán, AR
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium print:bg-transparent print:p-0 print:text-xs">
              <User size={16} className="text-blue-500 print:text-slate-400" />
              Contador Público
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium print:bg-transparent print:p-0 print:text-xs">
              <FileText size={16} className="text-blue-500 print:text-slate-400" />
              Especialista RRHH
            </div>
          </div>
        </div>

        {/* Bloque de Contacto: SIEMPRE VISIBLE */}
        <div className="md:col-span-4 space-y-6 print:mt-4 print:space-y-4">
          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white print:bg-white print:text-slate-900 print:p-0 print:shadow-none print:border-t print:border-slate-100 print:pt-4">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 print:text-lg print:mb-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full print:hidden" />
              Contacto y Ubicación
            </h2>
            
            <div className="space-y-4 print:grid print:grid-cols-2 print:gap-4 print:space-y-0">
              <a href={`mailto:${cvData.contact.email}`} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all print:bg-transparent print:border-none print:p-0">
                <Mail size={20} className="text-blue-400 print:text-blue-600" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden print:block">Email</span>
                  <span className="font-medium text-sm">{cvData.contact.email}</span>
                </div>
              </a>

              <a href={`tel:${cvData.contact.phone.replace(/-/g, '')}`} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all print:bg-transparent print:border-none print:p-0">
                <Phone size={20} className="text-blue-400 print:text-blue-600" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden print:block">Teléfono</span>
                  <span className="font-medium text-sm">{cvData.contact.phone}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-2xl print:bg-transparent print:border-none print:p-0 print:col-span-2">
                <MapPin size={20} className="text-blue-400 print:text-blue-600 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold hidden print:block">Dirección</span>
                  <span className="font-medium text-sm leading-snug">{cvData.contact.address}</span>
                </div>
              </div>

              <a href={`https://wa.me/${cvData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-green-600/10 border border-green-600/20 rounded-2xl hover:bg-green-600/20 transition-all print:hidden">
                <MessageCircle size={20} className="text-green-500" />
                <span className="font-medium text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-blue-600 p-8 rounded-3xl shadow-lg text-white relative overflow-hidden print:hidden">
            <div className="relative z-10">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-blue-100 opacity-80 text-sm">Años de experiencia combinada</div>
            </div>
            <Briefcase size={80} className="absolute -right-4 -bottom-4 text-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
