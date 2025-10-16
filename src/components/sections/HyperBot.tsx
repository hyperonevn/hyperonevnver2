import React from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

export const HyperBot: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  // Some playful sample chat messages (AI demo style)
  const demoChat = [
    { sender: 'user', text: 'Hey Hyper Bot, what can you do?' },
    {
      sender: 'bot',
      text: 'I can automate your customer service, summarize documents, and even integrate with your CRM in seconds.',
    },
    { sender: 'user', text: 'Wow! Can you understand multiple languages?' },
    {
      sender: 'bot',
      text: 'Absolutely. I support Vietnamese, English, Japanese — and more languages are on the way.',
    },
    { sender: 'user', text: 'Can you connect with my Smart Home system?' },
    {
      sender: 'bot',
      text: 'Yes! Hyper Bot seamlessly integrates with our Smart Home platform — check it out at smarthome.hyperonevn.com.',
    },
  ];

  return (
    <section id="hyperbot" className="py-20 bg-[#0f1117] relative overflow-hidden">
      {/* Decorative blur background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] mb-6">
              Hyper Bot – Your AI Partner
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Hyper Bot is an advanced AI assistant designed to automate, analyze, and elevate your
              business operations. Built by Hyper One for the next generation of intelligent systems.
            </p>
            <ul className="mb-8 space-y-4 text-gray-200">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Natural Language Processing
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Multilingual Support (VN, EN, JP)
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Enterprise-grade Security
              </li>
            </ul>
            <a
              href="https://zalo.me/1933820705251835125"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 inline-block"
            >
              Try Hyper Bot
            </a>
          </div>

          {/* Right: Chat simulation */}
          <div className="relative">
            <div className="bg-[#1a1f2c] p-6 rounded-lg shadow-xl">
              {/* Browser-like header */}
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-4">
                {demoChat.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.sender === 'user' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg max-w-[80%] text-sm ${
                        msg.sender === 'user'
                          ? 'bg-blue-500/20 text-gray-100'
                          : 'bg-blue-600/30 text-white'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar (decorative) */}
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full bg-[#0f1117] border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/30 rounded-full blur-xl z-[-1]"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-xl z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
