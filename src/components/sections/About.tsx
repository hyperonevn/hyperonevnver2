import React from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
export const About: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();
  return <section id="about" className="py-20 bg-[#0f1117]">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] mb-12 text-center">
          {t('about.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              {t('about.description')}
            </p>
            <p className="text-lg text-gray-300">
              Where human insight meets intelligent automation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">10+</h3>
              <p className="text-gray-400">AI Projects</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">5+</h3>
              <p className="text-gray-400">Expert Engineers</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">8+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};