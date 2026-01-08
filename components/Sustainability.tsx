import React from 'react';
import { Leaf, Droplets, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SustainabilityMetric } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Sustainability: React.FC = () => {
  const { t } = useLanguage();

  const metrics: SustainabilityMetric[] = [
    {
      label: t.sus_metric_carbon_label,
      value: "2040",
      description: t.sus_metric_carbon_desc,
      icon: "leaf"
    },
    {
      label: t.sus_metric_water_label,
      value: "92%",
      description: t.sus_metric_water_desc,
      icon: "water"
    },
    {
      label: t.sus_metric_comm_label,
      value: "$45M",
      description: t.sus_metric_comm_desc,
      icon: "users"
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-corporate-900 relative overflow-hidden">
      {/* Decorative SVG Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#d4af37" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.2C93.5,8.8,82.2,21.9,71.6,33.5C61,45.1,51.1,55.2,39.6,63.2C28.1,71.2,15.1,77.1,1.1,75.2C-12.9,73.3,-26.9,63.6,-39.7,53.8C-52.5,44,-64.1,34.1,-71.4,21.4C-78.7,8.7,-81.7,-6.8,-77.3,-21C-72.9,-35.2,-61.1,-48.1,-48.2,-55.8C-35.3,-63.5,-21.3,-66,-7.4,-67.2C6.5,-68.4,19.5,-68.2,30.5,-83.6" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-corporate-gold" />
              <span className="text-corporate-gold tracking-[0.2em] uppercase text-sm font-semibold">{t.sus_tag}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              {t.sus_title_1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">{t.sus_title_2}</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {t.sus_desc}
            </p>
            <button className="text-white border-b border-corporate-gold pb-1 hover:text-corporate-gold transition-colors font-medium">
              {t.sus_btn_report}
            </button>
          </motion.div>

          <div className="space-y-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-corporate-gold/50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="bg-slate-700/50 p-3 rounded-md mr-4 text-corporate-gold">
                    {metric.icon === 'leaf' && <Leaf className="w-6 h-6" />}
                    {metric.icon === 'water' && <Droplets className="w-6 h-6" />}
                    {metric.icon === 'users' && <Users className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{metric.value}</h3>
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">{metric.label}</h4>
                    <p className="text-slate-400 text-sm leading-snug">{metric.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;