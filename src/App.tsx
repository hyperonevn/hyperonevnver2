import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Vision } from './components/sections/Vision';
import { CeoMessage } from './components/sections/CeoMessage';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { HyperBot } from './components/sections/HyperBot';
import { HyperLinks } from './components/sections/HyperLinks';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { ContactBar } from './components/ContactBar';
import { LanguageProvider } from './utils/LanguageContext';

export function App() {
  const [theme, setTheme] = useState({
    blue: getComputedStyle(document.documentElement).getPropertyValue('--ai-blue') || '#00aaff',
    cyan: getComputedStyle(document.documentElement).getPropertyValue('--ai-cyan') || '#00ffff',
    dark: getComputedStyle(document.documentElement).getPropertyValue('--ai-dark') || '#0f1117',
  });

  // 👇 Lắng nghe thay đổi biến màu toàn cục (khi Intro thay đổi theme)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme({
        blue: getComputedStyle(document.documentElement).getPropertyValue('--ai-blue') || '#00aaff',
        cyan: getComputedStyle(document.documentElement).getPropertyValue('--ai-cyan') || '#00ffff',
        dark: getComputedStyle(document.documentElement).getPropertyValue('--ai-dark') || '#0f1117',
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
    return () => observer.disconnect();
  }, []);

  // Add fonts + meta tags (giữ nguyên)
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Oswald:wght@200;300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const metaTags = [
      { name: 'description', content: 'HYPER ONE - Leading Vietnamese AI Startup' },
      { property: 'og:title', content: 'HYPER ONE - AI Solutions' },
      {
        property: 'og:description',
        content: "Innovative AI & automation platform empowering Vietnamese SMEs"
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3'
      },
      { property: 'og:type', content: 'website' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.keys(tag).forEach(key => {
        meta.setAttribute(key, tag[key]);
      });
      document.head.appendChild(meta);
    });

    return () => {
      document.head.removeChild(link);
      metaTags.forEach(() => {
        const metas = document.querySelectorAll('meta');
        metas.forEach(meta => {
          if (
            meta.getAttribute('name') === 'description' ||
            meta.getAttribute('property')?.startsWith('og:')
          ) {
            document.head.removeChild(meta);
          }
        });
      });
    };
  }, []);

  return (
    <LanguageProvider>
      {/* ✅ Dùng theme màu từ CSS variables */}
      <div
        className="min-h-screen font-['Space_Grotesk'] transition-colors duration-500"
        style={{
          backgroundColor: theme.dark.trim(),
          color: theme.cyan.trim(),
        }}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Vision />
          <CeoMessage />
          <Services />
          <Projects />
          <HyperBot />
          <HyperLinks />
          <Contact />
        </main>
        <Footer />
        <ContactBar />
      </div>
    </LanguageProvider>
  );
}
