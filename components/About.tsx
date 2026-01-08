import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-corporate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-0.5 w-8 bg-corporate-gold"></div>
              <span className="text-corporate-gold tracking-[0.2em] uppercase text-sm font-semibold">{t.about_tag}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              {t.about_title}
            </h2>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>{t.about_desc_1}</p>
              <p>{t.about_desc_2}</p>
            </div>

            <div className="mt-10 p-6 bg-slate-800/50 border-l-4 border-corporate-gold rounded-r-lg">
              <Quote className="w-8 h-8 text-corporate-gold mb-4 opacity-50" />
              <p className="text-xl font-serif italic text-white mb-4">
                "{t.about_ceo_quote}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-600 mr-3 overflow-hidden">
                  <img src="/images/ceo_portrait.png" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.about_ceo_name}</div>
                  <div className="text-corporate-gold text-xs uppercase tracking-wider">{t.about_ceo_title}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/about_machinery.png"
                alt="Construction and Mining Machinery"
                className="rounded-lg w-full h-64 object-cover transform translate-y-8 shadow-2xl"
              />
              <img
                src="/images/about_hq.png"
                alt="Modern Corporate Headquarters"
                className="rounded-lg w-full h-64 object-cover shadow-2xl"
              />
              <img
                src="/images/about_mine_layers.png"
                alt="Open Pit Mine Layers"
                className="rounded-lg w-full h-64 object-cover transform translate-y-8 shadow-2xl"
              />
              <img
                src="/images/about_engineers.png"
                alt="Engineers at Work"
                className="rounded-lg w-full h-64 object-cover shadow-2xl"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-corporate-gold/5 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;