import React from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
export const Vision: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();
  return <section id="vision" className="py-20 relative">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      filter: 'brightness(0.2)'
    }}></div>
      <div ref={ref} className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] mb-12 text-center">
          {t('vision.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#0f1117]/80 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Mission</h3>
            <p className="text-lg text-gray-300">{t('vision.mission')}</p>
          </div>
          <div className="bg-[#0f1117]/80 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Values</h3>
            <p className="text-lg text-gray-300">{t('vision.values')}</p>
          </div>
        </div>
      </div>
    </section>;
};