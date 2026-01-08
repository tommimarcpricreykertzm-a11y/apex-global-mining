import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: t.nav_about, href: '#about' },
    { name: t.nav_ops, href: '#operations' },
    { name: t.nav_sus, href: '#sustainability' },
    { name: t.nav_inv, href: '#investors' },
    { name: t.nav_careers, href: '#careers' },
  ];

  const handleLangSelect = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel border-b border-slate-700 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-corporate-gold rounded-sm flex items-center justify-center">
              <span className="text-corporate-900 font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-wide text-white uppercase leading-none">Apex</span>
              <span className="text-xs text-corporate-gold tracking-[0.2em] uppercase">Global Mining</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-corporate-gold transition-colors duration-200 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center text-slate-300 hover:text-white group px-2 py-1"
              >
                <Globe className="w-4 h-4 mr-2 group-hover:text-corporate-gold" />
                <span className="text-xs font-medium uppercase">{language === 'en' ? 'English' : '中文'}</span>
                <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-40 bg-corporate-900 border border-slate-700 shadow-xl rounded-sm overflow-hidden"
                  >
                    <button 
                      onClick={() => handleLangSelect('en')}
                      className={`w-full flex items-center px-4 py-3 text-xs text-left hover:bg-slate-800 transition-colors ${language === 'en' ? 'text-corporate-gold' : 'text-slate-300'}`}
                    >
                      <span className="mr-2 text-lg">🇬🇧</span>
                      English
                      {language === 'en' && <Check className="w-3 h-3 ml-auto" />}
                    </button>
                    <button 
                      onClick={() => handleLangSelect('zh')}
                      className={`w-full flex items-center px-4 py-3 text-xs text-left hover:bg-slate-800 transition-colors ${language === 'zh' ? 'text-corporate-gold' : 'text-slate-300'}`}
                    >
                      <span className="mr-2 text-lg">🇨🇳</span>
                      中文
                      {language === 'zh' && <Check className="w-3 h-3 ml-auto" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="px-5 py-2 border border-corporate-gold text-corporate-gold hover:bg-corporate-gold hover:text-corporate-900 transition-all duration-300 font-medium text-sm">
              {t.nav_contact}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-corporate-900 border-b border-slate-700 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-300 hover:text-corporate-gold py-2"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="border-t border-slate-700 w-full my-4"></div>
              
              {/* Mobile Language Switcher */}
              <div className="flex space-x-4 w-full justify-center py-2">
                <button 
                  onClick={() => { handleLangSelect('en'); setIsMobileMenuOpen(false); }}
                  className={`flex items-center px-4 py-2 border rounded-full text-xs ${language === 'en' ? 'border-corporate-gold text-corporate-gold' : 'border-slate-600 text-slate-400'}`}
                >
                  <span className="mr-2">🇬🇧</span> English
                </button>
                <button 
                  onClick={() => { handleLangSelect('zh'); setIsMobileMenuOpen(false); }}
                  className={`flex items-center px-4 py-2 border rounded-full text-xs ${language === 'zh' ? 'border-corporate-gold text-corporate-gold' : 'border-slate-600 text-slate-400'}`}
                >
                  <span className="mr-2">🇨🇳</span> 中文
                </button>
              </div>

               <button className="w-full py-3 bg-corporate-gold text-corporate-900 font-bold uppercase tracking-widest mt-4">
                {t.nav_contact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;