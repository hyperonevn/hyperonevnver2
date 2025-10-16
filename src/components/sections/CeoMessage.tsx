import React from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
export const CeoMessage: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();
  return <section className="py-20 bg-[#0f1117]">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] mb-12 text-center">
            {t('ceo.title')}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img src="https://raw.githubusercontent.com/hyperonevn/hyperonevn/main/founder.jpg" />
            </div>
            <div>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "{t('ceo.message')}"
              </blockquote>
              <div className="flex items-center">
                <div className="h-1 w-12 bg-blue-500 mr-4"></div>
                <div>
                  <p className="font-bold text-xl">{t('ceo.name')}</p>
                  <p className="text-gray-400">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};