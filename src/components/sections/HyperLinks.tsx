import React from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

export const HyperLinks: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const links = [
    {
      id: 1,
      title: 'Hyper One Smart Home',
      description: 'Experience intelligent living — automation with emotion.',
      image: 'https://raw.githubusercontent.com/hyperonevn/smarthome/main/cover.jpg',
      url: 'https://smarthome.hyperonevn.com'
    },
    {
      id: 2,
      title: 'Hyper One Academy',
      description: 'Learn AI and automation — practical, real-world knowledge.',
      image: 'https://raw.githubusercontent.com/hyperonevn/hyperonevn/main/about.png',
      url: 'https://academy.hyperonevn.com'
    },
    {
      id: 3,
      title: 'Hyper One Blog',
      description: 'Ideas, stories, and system thinking from the Hyper One team.',
      image: 'https://raw.githubusercontent.com/hyperonevn/hyperonevn/main/blog.jpg',
      url: 'https://blog.hyperonevn.com'
    }
  ];

  return (
    <section id="hyper-links" className="py-20 bg-[#131722]">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] mb-10 text-center">
          Hyper One Ecosystem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {links.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={link.image}
                alt={link.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-1">{link.title}</h3>
                <p className="text-sm text-gray-300">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
