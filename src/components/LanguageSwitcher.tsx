import React from 'react';
import { useLanguage } from '../utils/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'vi', flag: '🇻🇳', name: 'Vietnamese' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'ja', flag: '🇯🇵', name: 'Japanese' },
    { code: 'zh', flag: '🇨🇳', name: 'Chinese' },
    { code: 'ko', flag: '🇰🇷', name: 'Korean' },
    { code: 'es', flag: '🇪🇸', name: 'Spanish' },
  ];

  return (
    <div className="flex items-center space-x-3">
      {languages.map(({ code, flag, name }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`text-xl transition-all ${
            language === code
              ? 'opacity-100 scale-110'
              : 'opacity-50 hover:opacity-75'
          }`}
          title={name}
        >
          {flag}
        </button>
      ))}
    </div>
  );
};
