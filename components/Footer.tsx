import React from 'react';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
               <div className="w-8 h-8 bg-corporate-gold rounded-sm flex items-center justify-center">
                  <span className="text-corporate-900 font-bold text-lg">A</span>
               </div>
               <span className="text-xl font-serif font-bold text-white uppercase">Apex</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.footer_desc}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">{t.footer_col_company}</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-corporate-gold transition-colors">{t.nav_about}</a></li>
              <li><a href="#" className="hover:text-corporate-gold transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-corporate-gold transition-colors">Corporate Governance</a></li>
              <li><a href="#" className="hover:text-corporate-gold transition-colors">{t.nav_careers}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">{t.footer_col_ops}</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-corporate-gold transition-colors">Global Map</a></li>
              <li><a href="#" className="hover:text-corporate-gold transition-colors">Exploration</a></li>
              <li><a href="#" className="hover:text-corporate-gold transition-colors">Safety & Health</a></li>
              <li><a href="#" className="hover:text-corporate-gold transition-colors">Supply Chain</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">{t.footer_col_contact}</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> ir@apexmining.group</li>
              <li>Headquarters:<br/>100 Bishopsgate<br/>London, EC2N 4AG<br/>United Kingdom</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>{t.footer_rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;