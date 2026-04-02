import React from 'react';
import { cvData } from '../../../data/cv-data';
import { CheckCircle2, GraduationCap, Languages } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="formation" className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bloque: Educación */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Formación Académica</h2>
          </div>
          
          <div className="space-y-8">
            {cvData.education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-50">
                <div className="absolute top-0 -left-1.5 w-3 h-3 bg-blue-600 rounded-full" />
                <h3 className="text-lg font-bold text-slate-900 leading-snug">{edu.degree}</h3>
                <p className="text-blue-600 text-sm font-medium mt-1">{edu.institution}</p>
                {edu.period && <p className="text-slate-400 text-xs mt-1">{edu.period}</p>}
                {edu.details && <p className="text-slate-500 text-sm mt-2 italic">{edu.details}</p>}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                <Languages size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Idiomas</h3>
            </div>
            {cvData.languages.map((lang, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
                <div>
                  <span className="font-bold text-slate-900">{lang.language}</span>
                  <span className="text-slate-400 ml-2">• {lang.institution}</span>
                </div>
                <span className="text-blue-600 font-medium text-sm">Competencia Profesional</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque: Aptitudes */}
        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400">
              <CheckCircle2 size={24} />
            </div>
            <h2 className="text-2xl font-bold">Habilidades & Aptitudes</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cvData.aptitudes.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors group">
                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform" />
                <span className="text-slate-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-600 rounded-3xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Visión Estratégica</h3>
              <p className="text-blue-100 text-sm leading-relaxed opacity-90">
                Capacidad probada para integrar la visión contable con la gestión humana, optimizando la rentabilidad organizacional.
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
              <CheckCircle2 size={120} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
