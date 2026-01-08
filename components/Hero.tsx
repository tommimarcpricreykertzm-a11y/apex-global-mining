import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-corporate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_background.png"
          alt="Aerial view of open pit mine"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays - Adjusted for better image visibility while maintaining text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-900 via-corporate-900/70 to-corporate-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-corporate-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-0.5 w-12 bg-corporate-gold"></div>
            <span className="text-corporate-gold tracking-[0.3em] uppercase text-sm font-semibold">{t.hero_tag}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8 drop-shadow-lg">
            {t.hero_title_1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-gold to-white">{t.hero_title_2}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed drop-shadow-md">
            {t.hero_desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('operations')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-corporate-gold text-corporate-900 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center group shadow-lg"
            >
              {t.hero_btn_ops}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('investors')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-corporate-900 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              {t.hero_btn_inv}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs text-slate-400 tracking-widest uppercase mb-2 drop-shadow-md">{t.hero_scroll}</span>
        <div className="w-0.5 h-12 bg-slate-700/50 overflow-hidden relative backdrop-blur-sm">
          <motion.div
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute w-full h-1/2 bg-corporate-gold"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;