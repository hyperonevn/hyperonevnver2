import React from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
export const Contact: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();
  return <section id="contact" className="py-20 bg-gradient-to-b from-[#131722] to-[#0f1117]">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold font-['Oswald'] mb-12 text-center">
          {t('contact.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full bg-[#1a1f2c] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full bg-[#1a1f2c] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full bg-[#1a1f2c] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="How can we help you?" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea id="message" rows={6} className="w-full bg-[#1a1f2c] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Company Information</h3>
              <p className="text-gray-300 mb-2">{t('contact.address')}</p>
              <p className="text-gray-300 mb-2">{t('contact.email')}</p>
              <p className="text-gray-300">{t('contact.phone')}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <p className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-300">Saturday: 9:00 AM - 12:00 PM</p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17.25h-1.5v-6.75h1.5v6.75zm-.75-7.5c-.465 0-.75-.352-.75-.852 0-.498.285-.848.75-.848s.75.35.75.848c0 .5-.285.852-.75.852zm7.5 7.5h-1.5v-3.668c0-.636-.135-.878-.675-.878-.465 0-.882.402-.882.852v3.694h-1.5v-6.75h1.5v.85c.405-.571 1.035-.835 1.658-.835 1.155 0 1.892.69 1.892 2.183v4.552z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};