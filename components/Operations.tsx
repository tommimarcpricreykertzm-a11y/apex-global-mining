import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { OperationLocation } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Operations: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const locations: OperationLocation[] = [
    {
      id: '1',
      name: language === 'en' ? 'Helios Project' : 'Helios 项目',
      country: language === 'en' ? 'Australia' : '澳大利亚',
      resource: language === 'en' ? 'Lithium' : '锂',
      // Red dry earth / desert landscape
      image: '/images/ops_lithium.png',
      status: 'Development'
    },
    {
      id: '2',
      name: language === 'en' ? 'Andes Norte' : 'Andes Norte 矿区',
      country: language === 'en' ? 'Chile' : '智利',
      resource: language === 'en' ? 'Copper' : '铜',
      // Excavator in rugged terrain
      image: '/images/ops_copper.png',
      status: 'Active'
    },
    {
      id: '3',
      name: language === 'en' ? 'Sierra Gold' : 'Sierra 金矿',
      country: language === 'en' ? 'Nevada, USA' : '美国内华达',
      resource: language === 'en' ? 'Gold' : '金',
      // Earthworks / Excavation
      image: '/images/ops_gold.png',
      status: 'Active'
    },
    {
      id: '4',
      name: language === 'en' ? 'Nordic Rare' : 'Nordic 稀土',
      country: language === 'en' ? 'Sweden' : '瑞典',
      resource: 'REE',
      // Industrial / Construction / Tunnel vibe
      image: '/images/ops_rare_earth.png',
      status: 'Exploration'
    }
  ];

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'Active': return t.ops_status_active;
      case 'Development': return t.ops_status_dev;
      case 'Exploration': return t.ops_status_exp;
      default: return status;
    }
  };

  return (
    <section id="operations" className="py-24 bg-corporate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h4 className="text-corporate-gold tracking-[0.2em] uppercase text-sm font-semibold mb-3">{t.ops_tag}</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">{t.ops_title}</h2>
          </div>
          <button className="mt-6 md:mt-0 text-white hover:text-corporate-gold transition-colors flex items-center tracking-widest uppercase text-sm font-medium">
            {t.ops_view_map} <ArrowUpRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredId(loc.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative h-96 group overflow-hidden cursor-pointer border border-slate-700"
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-slate-900">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${loc.status === 'Active' ? 'bg-green-900 text-green-300' :
                    loc.status === 'Development' ? 'bg-blue-900 text-blue-300' :
                      'bg-corporate-gold text-corporate-900'
                  }`}>
                  {getStatusLabel(loc.status)}
                </span>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-corporate-900 via-corporate-900/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white font-serif mb-1">{loc.name}</h3>
                <div className="flex items-center text-slate-300 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-corporate-gold" />
                  {loc.country}
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${hoveredId === loc.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-400 text-sm border-t border-slate-600 pt-3 flex justify-between">
                    <span>{t.ops_resource}:</span>
                    <span className="text-white font-medium">{loc.resource}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operations;