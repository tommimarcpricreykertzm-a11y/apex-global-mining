import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { id: 1, value: "35+", label: t.stats_years },
    { id: 2, value: "12", label: t.stats_ops },
    { id: 3, value: "450k", label: t.stats_copper },
    { id: 4, value: "95%", label: t.stats_water },
  ];

  return (
    <div className="bg-corporate-900 border-b border-slate-800 relative z-20 -mt-20 sm:-mt-24 mx-4 sm:mx-8 md:mx-auto max-w-7xl glass-panel">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700/50">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="p-8 text-center group hover:bg-slate-800/50 transition-colors duration-300 cursor-default"
          >
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-corporate-gold mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</h3>
            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;