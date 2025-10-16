import React from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: 'Hyper Cloud',
      category: 'Cloud storage',
      image: 'https://raw.githubusercontent.com/hyperonevn/hyperonevn/main/cloud.png',
    },
    {
      id: 2,
      title: 'Hyper Bot',
      category: 'AI chatbot',
      image: 'https://raw.githubusercontent.com/hyperonevn/hyperonevn/main/hyperbot.png',
    },
    {
      id: 3,
      title: 'Hyper One Academy',
      category: 'Education',
      image: 'https://raw.githubusercontent.com/hyperonevn/hyperonevn/main/ai-future.jpg',
    },
    {
      id: 4,
      title: 'Hyper One Smart Home',
      category: 'Automation',
      image: 'https://raw.githubusercontent.com/hyperonevn/smarthome/main/cover.jpg',
      link: 'https://smarthome.hyperonevn.com', // ✅ thêm link chính thức
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#131722]">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] mb-6 text-center">
          {t('projects.title')}
        </h2>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          {t('projects.description')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link || '#'}
              target={project.link ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg aspect-square block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-blue-400">{project.category}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};
