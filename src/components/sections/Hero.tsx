import React from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
export const Hero: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      filter: 'brightness(0.3)'
    }}></div>
      <div ref={ref} className={`container mx-auto px-4 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-bold font-['Oswald'] mb-6 tracking-wider">
          <span className="text-blue-500">HYPER</span> ONE
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          Vietnam's Leading AI Innovation Hub
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#about" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 text-lg">
            Learn More
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border border-white hover:bg-white/10 text-white rounded-md transition-colors duration-300 text-lg">
            Contact Us
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>;
};