import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Operations from './components/Operations';
import Sustainability from './components/Sustainability';
import Careers from './components/Careers';
import StockChart from './components/StockChart';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { FileText, Download, ArrowRight } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-corporate-900 text-slate-100 selection:bg-corporate-gold selection:text-corporate-900">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Operations />
        
        {/* Investor Highlights Section */}
        <section id="investors" className="py-24 bg-corporate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-12">
              <div className="lg:w-1/2">
                <h4 className="text-corporate-gold tracking-[0.2em] uppercase text-sm font-semibold mb-3">{t.inv_tag}</h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{t.inv_title}</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {t.inv_desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <a href="#" className="flex items-center p-4 bg-slate-800 border border-slate-700 hover:border-corporate-gold transition-colors group">
                    <FileText className="w-8 h-8 text-slate-400 group-hover:text-corporate-gold mr-3" />
                    <div>
                      <div className="text-white font-bold text-sm">{t.inv_report_q3}</div>
                      <div className="text-xs text-slate-500 flex items-center mt-1">
                        {t.inv_download} <Download className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center p-4 bg-slate-800 border border-slate-700 hover:border-corporate-gold transition-colors group">
                    <FileText className="w-8 h-8 text-slate-400 group-hover:text-corporate-gold mr-3" />
                    <div>
                      <div className="text-white font-bold text-sm">{t.inv_report_annual}</div>
                      <div className="text-xs text-slate-500 flex items-center mt-1">
                         {t.inv_download} <Download className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </a>
                </div>

                <button className="flex items-center text-corporate-gold font-bold uppercase tracking-wider text-sm hover:text-white transition-colors">
                  {t.inv_btn_center} <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              
              <div className="lg:w-1/2">
                 <StockChart />
                 <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 border border-slate-800 bg-slate-800/30">
                       <div className="text-2xl font-serif font-bold text-white">$2.4B</div>
                       <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">{t.inv_ebitda}</div>
                    </div>
                    <div className="text-center p-4 border border-slate-800 bg-slate-800/30">
                       <div className="text-2xl font-serif font-bold text-white">$0.85</div>
                       <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">{t.inv_dividend}</div>
                    </div>
                    <div className="text-center p-4 border border-slate-800 bg-slate-800/30">
                       <div className="text-2xl font-serif font-bold text-white">A-</div>
                       <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">{t.inv_rating}</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <Sustainability />
        <Careers />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;