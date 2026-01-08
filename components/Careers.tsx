import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, MapPin } from 'lucide-react';

const Careers: React.FC = () => {
  const { t } = useLanguage();

  const jobs = [
    { title: t.careers_job_1, location: t.careers_loc_1, type: 'Full-time' },
    { title: t.careers_job_2, location: t.careers_loc_2, type: 'Full-time' },
    { title: t.careers_job_3, location: t.careers_loc_3, type: 'Hybrid' },
  ];

  return (
    <section id="careers" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h4 className="text-corporate-gold tracking-[0.2em] uppercase text-sm font-semibold mb-3">{t.careers_tag}</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{t.careers_title}</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t.careers_desc}
            </p>
          </div>
          <button className="hidden md:flex mt-6 md:mt-0 px-6 py-3 border border-corporate-gold text-corporate-gold hover:bg-corporate-gold hover:text-corporate-900 transition-colors font-bold uppercase tracking-widest text-sm items-center">
            {t.careers_view_all} <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-800 p-8 border border-slate-700 hover:border-corporate-gold group cursor-pointer transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded uppercase tracking-wider">{job.type}</span>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-corporate-gold group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-corporate-gold transition-colors">{job.title}</h3>
              <div className="flex items-center text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mr-1.5" />
                {job.location}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <span className="text-white text-sm font-medium border-b border-transparent group-hover:border-corporate-gold pb-0.5 transition-colors">
                  {t.careers_apply}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
           <button className="px-6 py-3 border border-corporate-gold text-corporate-gold hover:bg-corporate-gold hover:text-corporate-900 transition-colors font-bold uppercase tracking-widest text-sm inline-flex items-center">
            {t.careers_view_all} <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;