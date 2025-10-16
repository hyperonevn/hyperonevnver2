import React, { useEffect, useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../utils/LanguageContext';
export const Header: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [{
    id: 'about',
    label: t('nav.about')
  }, {
    id: 'vision',
    label: t('nav.vision')
  }, {
    id: 'services',
    label: t('nav.services')
  }, {
    id: 'projects',
    label: t('nav.projects')
  }, {
    id: 'hyperbot',
    label: t('nav.hyperbot')
  }, {
    id: 'contact',
    label: t('nav.contact')
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f1117]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="text-3xl font-bold font-['Oswald'] tracking-wider text-white">
            <span className="text-blue-500">HYPER</span> ONE
          </div>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => <a key={item.id} href={`#${item.id}`} className="text-gray-300 hover:text-white transition-colors">
              {item.label}
            </a>)}
          <LanguageSwitcher />
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-[#0f1117]/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            {navItems.map(item => <a key={item.id} href={`#${item.id}`} className="block py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>)}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>}
    </header>;
};