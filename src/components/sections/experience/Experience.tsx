import React, { useState } from 'react';
import { cvData, Experience as ExperienceType } from '../../../data/cv-data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar, MapPin } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ExperienceItem: React.FC<{ item: ExperienceType }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-4 transition-all hover:shadow-md">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
            <Briefcase size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{item.position}</h3>
            <p className="text-blue-600 font-medium">{item.company}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end text-sm text-slate-500">
            <div className="flex items-center gap-1 font-semibold">
              <Calendar size={14} />
              {item.period}
            </div>
            <span>{item.duration}</span>
          </div>
          <div className={cn("p-2 rounded-full transition-transform", isExpanded && "rotate-180 bg-slate-100")}>
            <ChevronDown size={20} className="text-slate-400" />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0 border-t border-slate-50">
              <div className="mt-4 space-y-4">
                {item.location && (
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={14} />
                    {item.location}
                  </div>
                )}
                <ul className="space-y-3">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Trayectoria Profesional</h2>
          <div className="h-px flex-1 bg-slate-100 mx-8 hidden md:block"></div>
        </div>
        
        <div className="space-y-4">
          {cvData.experience.map((exp) => (
            <ExperienceItem key={exp.id} item={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
