import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Vision } from './components/sections/Vision';
import { CeoMessage } from './components/sections/CeoMessage';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { HyperBot } from './components/sections/HyperBot';
import { HyperLinks } from './components/sections/HyperLinks'; // ✅ Mới thêm
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { ContactBar } from './components/ContactBar';
import { LanguageProvider } from './utils/LanguageContext';

export function App() {
  // Add fonts and meta tags for SEO
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
      <div className="bg-[#0f1117] text-white min-h-screen font-['Space_Grotesk']">
        <Header />
        <main>
          <Hero />
          <About />
          <Vision />
          <CeoMessage />
          <Services />
          <Projects />
          <HyperBot />
          <HyperLinks /> {/* ✅ Thêm phần 3 tab mới */}
          <Contact />
        </main>
        <Footer />
        <ContactBar />
      </div>
    </LanguageProvider>
  );
}
