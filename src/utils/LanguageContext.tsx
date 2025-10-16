import React, { useState, createContext, useContext, ReactNode } from 'react';

type Language = 'vi' | 'en' | 'ja' | 'zh' | 'es' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    'nav.about': 'Về Hyper One',
    'nav.vision': 'Tầm Nhìn',
    'nav.services': 'Giải Pháp',
    'nav.projects': 'Dự Án',
    'nav.hyperbot': 'Hyper Bot',
    'nav.contact': 'Liên Hệ',

    'about.title': 'Về Hyper One',
    'about.description':
      'Hyper One không chỉ là một công ty – chúng tôi là một nền tảng chuyển hóa. Với sứ mệnh đồng hành cùng doanh nghiệp Việt bước vào kỷ nguyên AI, chúng tôi phát triển các giải pháp toàn diện giúp SMEs tự động hóa quy trình, mở rộng thị trường và bứt phá tăng trưởng thông qua các công nghệ như Hyper Bot, Hyper Brain HB1, Hyper Cloud, Hyper Pay và Hyper One Smart Home.',

    'vision.title': 'Tầm Nhìn',
    'vision.mission':
      'Trở thành doanh nghiệp công nghệ đa ngành xoay quanh trục AI và tự động hóa lớn nhất châu Á, vươn tầm thế giới. Hyper One tin rằng: AI không còn là đặc quyền, mà là điều kiện cơ bản cho mọi doanh nghiệp – xuất phát từ trí tuệ Việt, công nghệ Việt, vì con người Việt.',
    'vision.values':
      'Chúng tôi tin vào sự đổi mới liên tục, công nghệ có đạo đức và tư duy hệ thống – nơi AI phục vụ con người, chứ không thay thế con người.',

    'ceo.title': 'Thông điệp từ Nhà sáng lập',
    'ceo.message':
      '“Tương lai không thuộc về người mạnh nhất, mà thuộc về những người tiên phong trong đổi mới và kiên định với sứ mệnh của mình. Hyper One không chạy theo điều AI có thể làm, mà trung thành với điều AI nên làm: có đạo đức, có trách nhiệm, vì con người.”',
    'ceo.name': 'Lữ Minh Trí – Nhà sáng lập Hyper One',

    'services.title': 'Giải pháp & Dịch vụ',
    'service1.title': 'Hyper Bot – Trợ lý AI cho doanh nghiệp',
    'service1.description':
      'Tự động hóa chăm sóc khách hàng, hỗ trợ bán hàng và quản trị nội bộ với trợ lý AI nói đúng tông – đúng vai – đúng ngữ cảnh.',
    'service2.title': 'Hyper Brain HB1 – Hệ trí tuệ đa lõi',
    'service2.description':
      'Bộ não điều phối nhiều tác tử AI (agents) theo vai trò và hành vi, học từ dữ liệu thực tế của người dùng.',
    'service3.title': 'Hyper Cloud – Lưu trữ & tự động hóa',
    'service3.description':
      'Lưu trữ thông minh, kết nối với Drive, Zalo, Gmail và API doanh nghiệp – tạo nên hệ sinh thái “cloud for action”.',
    'service4.title': 'Hyper One Smart Home',
    'service4.description':
      'Giải pháp nhà thông minh chuẩn Việt: tiện nghi, tự động hóa và mang bản sắc cảm xúc. “Ngôi nhà hiểu bạn – không chỉ nghe bạn nói.”',
    'service5.title': 'Hyper One Academy',
    'service5.description':
      'Đào tạo AI thực chiến cho doanh nghiệp và cá nhân. “AI không lấy mất việc làm của bạn – người biết dùng AI sẽ.”',

    'projects.title': 'Dự án tiêu biểu',
    'projects.description':
      'Chúng tôi đã triển khai các dự án AI cho SMEs, giáo dục, nhà thông minh và nền tảng dữ liệu tại Việt Nam, Singapore và Nhật Bản.',

    'contact.title': 'Liên hệ & Thông tin công ty',
    'contact.address': '68 Nguyễn Huệ, phường Sài Gòn, TP. Hồ Chí Minh, Việt Nam',
    'contact.email': 'Email: info@hyperonevn.com',
    'contact.phone': 'Hotline: +84 352 608 068 | +84 342 608 068',

    'footer.copyright':
      '© 2025 HYPER ONE CO., LTD. “Chúng tôi không chạy theo điều AI có thể làm, mà trung thành với điều AI nên làm: có đạo đức, có trách nhiệm, vì con người.”'
  },

  en: {
    'nav.about': 'About',
    'nav.vision': 'Vision',
    'nav.services': 'Solutions',
    'nav.projects': 'Projects',
    'nav.hyperbot': 'Hyper Bot',
    'nav.contact': 'Contact',

    'about.title': 'About Hyper One',
    'about.description':
      'Hyper One is a transformative AI and automation platform empowering Vietnamese SMEs to innovate, scale, and thrive with intelligent systems.',

    'vision.title': 'Vision',
    'vision.mission':
      'To become Asia’s leading multi-sector technology company centered on AI and automation. We believe AI is not a privilege, but a foundation for every enterprise – built by Vietnamese intelligence, for humanity.',
    'vision.values':
      'We pursue ethical technology, continuous innovation, and human-centered AI – where technology serves people, not replaces them.',

    'ceo.title': 'Message from the Founder',
    'ceo.message':
      '“The future belongs not to the strongest, but to those who lead innovation with purpose. Hyper One stays true not to what AI can do, but to what AI should do – with ethics, responsibility, and humanity.”',
    'ceo.name': 'Lữ Minh Trí – Founder of Hyper One',

    'services.title': 'Solutions & Services',
    'service1.title': 'Hyper Bot – AI Assistant for SMEs',
    'service1.description':
      'Automate customer support, sales, and internal workflows with context-aware AI.',
    'service2.title': 'Hyper Brain HB1 – Multi-core AI System',
    'service2.description':
      'An orchestration engine managing multiple AI agents that learn from real interactions.',
    'service3.title': 'Hyper Cloud – Smart Storage & Automation',
    'service3.description':
      'Connects Drive, Zalo, Gmail, and APIs to form an integrated, action-driven cloud ecosystem.',
    'service4.title': 'Hyper One Smart Home',
    'service4.description':
      'Vietnamese smart home solution with emotional intelligence. “A home that understands you.”',
    'service5.title': 'Hyper One Academy',
    'service5.description':
      'Practical AI education for professionals and enterprises. “AI won’t take your job – people who use AI will.”',

    'projects.title': 'Featured Projects',
    'projects.description':
      'We deliver AI-driven innovation for SMEs, education, and smart living across Vietnam, Singapore, and Japan.',

    'contact.title': 'Contact & Company Information',
    'contact.address': '68 Nguyen Hue, Saigon Ward, Ho Chi Minh City, Vietnam',
    'contact.email': 'Email: info@hyperonevn.com',
    'contact.phone': 'Hotline: +84 352 608 068 | +84 342 608 068',

    'footer.copyright':
      '© 2025 HYPER ONE CO., LTD. "We stay true not to what AI can do, but to what AI should do – ethical, responsible, human."'
  },

  ja: {
    'nav.about': '会社概要',
    'nav.vision': 'ビジョン',
    'nav.services': 'ソリューション',
    'nav.projects': 'プロジェクト',
    'nav.hyperbot': 'ハイパーボット',
    'nav.contact': 'お問い合わせ',

    'about.title': 'ハイパーワンについて',
    'about.description':
      'Hyper OneはAIと自動化を通じて中小企業の成長を支援する変革プラットフォームです。',

    'vision.title': 'ビジョン',
    'vision.mission':
      'AIと自動化を軸にアジアを代表するテクノロジー企業を目指します。',
    'vision.values':
      '倫理的で人間中心のAI開発を推進し、テクノロジーが人に寄り添う社会を実現します。',

    'ceo.title': '創業者からのメッセージ',
    'ceo.message':
      '「未来は最も強い者のものではなく、使命に忠実な革新者のものです。Hyper OneはAIができることではなく、AIがすべきことに忠実であり続けます。」',
    'ceo.name': 'ル・ミン・チー（Lữ Minh Trí）– 創業者',

    'services.title': 'ソリューションとサービス',
    'service1.title': 'Hyper Bot – AIアシスタント',
    'service1.description': '顧客対応や販売を自動化するスマートAIソリューション。',
    'service2.title': 'Hyper Brain HB1 – マルチコアAIシステム',
    'service2.description': '複数のAIエージェントを統合し、ユーザー行動から学習します。',
    'service3.title': 'Hyper Cloud – クラウド自動化',
    'service3.description': 'Drive、Zalo、Gmailを統合して自動化を実現。',
    'service4.title': 'Hyper Oneスマートホーム',
    'service4.description': 'あなたを理解する家。感情に反応するAIスマートホーム。',
    'service5.title': 'Hyper Oneアカデミー',
    'service5.description': 'AI実践教育。「AIではなく、AIを使う人が未来をつくる。」',

    'projects.title': '注目のプロジェクト',
    'projects.description': 'ベトナム、シンガポール、日本でAIソリューションを提供しています。',

    'contact.title': 'お問い合わせ・会社情報',
    'contact.address': 'ベトナム ホーチミン市 サイゴン坊 グエンフエ通り68番地',
    'contact.email': 'メール: info@hyperonevn.com',
    'contact.phone': '電話: +84 352 608 068 | +84 342 608 068',

    'footer.copyright':
      '© 2025 HYPER ONE CO., LTD. 「私たちはAIができることではなく、AIがすべきことに忠実であり続けます。」'
  },

  zh: {
    'nav.about': '关于我们',
    'nav.vision': '愿景',
    'nav.services': '解决方案',
    'nav.projects': '项目',
    'nav.hyperbot': 'Hyper Bot',
    'nav.contact': '联系我们',

    'about.title': '关于 Hyper One',
    'about.description':
      'Hyper One 是一个致力于推动越南中小企业迈入人工智能时代的变革平台。',

    'vision.title': '愿景',
    'vision.mission': '成为亚洲领先的人工智能与自动化科技公司。',
    'vision.values': '坚持以人为本、道德与创新并重的AI理念。',

    'ceo.title': '创始人寄语',
    'ceo.message':
      '“未来属于忠于使命并勇于创新的人。Hyper One 坚守 AI 应该做的事——有道德、有责任、以人为本。”',
    'ceo.name': '吕明智 – Hyper One 创始人',

    'services.title': '解决方案与服务',
    'service1.title': 'Hyper Bot – 企业AI助理',
    'service1.description': '通过AI助理自动化客户服务、销售及内部管理。',
    'service2.title': 'Hyper Brain HB1 – 多核AI系统',
    'service2.description': '协调多个AI代理，从用户行为中学习优化。',
    'service3.title': 'Hyper Cloud – 智能云自动化',
    'service3.description': '整合Drive、Zalo、Gmail，实现云端智能自动化。',
    'service4.title': 'Hyper One 智能家居',
    'service4.description': '为越南设计的智能家居——理解你而不仅仅听你。',
    'service5.title': 'Hyper One 学院',
    'service5.description': '提供实战AI培训，让企业与个人掌握AI力量。',

    'projects.title': '精选项目',
    'projects.description': '我们已在越南及亚洲多个地区实施AI解决方案。',

    'contact.title': '联系我们与公司信息',
    'contact.address': '越南胡志明市西贡坊阮惠街68号',
    'contact.email': '邮箱: info@hyperonevn.com',
    'contact.phone': '电话: +84 352 608 068 | +84 342 608 068',

    'footer.copyright':
      '© 2025 HYPER ONE CO., LTD. “我们忠于AI应该做的事——有道德、有责任、以人为本。”'
  },

  es: {
    'nav.about': 'Sobre Nosotros',
    'nav.vision': 'Visión',
    'nav.services': 'Soluciones',
    'nav.projects': 'Proyectos',
    'nav.hyperbot': 'Hyper Bot',
    'nav.contact': 'Contacto',

    'about.title': 'Sobre Hyper One',
    'about.description':
      'Hyper One es una plataforma de transformación que impulsa a las pymes vietnamitas hacia la era de la inteligencia artificial y la automatización.',

    'vision.title': 'Visión',
    'vision.mission':
      'Convertirnos en la empresa tecnológica líder en Asia centrada en la IA y la automatización.',
    'vision.values': 'Creemos en una IA ética, humana e innovadora.',

    'ceo.title': 'Mensaje del Fundador',
    'ceo.message':
      '“El futuro pertenece a quienes lideran con propósito. Hyper One sigue fiel a lo que la IA debe hacer: ética, responsabilidad y humanidad.”',
    'ceo.name': 'Lữ Minh Trí – Fundador de Hyper One',

    'services.title': 'Soluciones y Servicios',
    'service1.title': 'Hyper Bot – Asistente de IA para Empresas',
    'service1.description':
      'Automatiza ventas, soporte y operaciones internas con IA contextual.',
    'service2.title': 'Hyper Brain HB1 – Sistema de IA Multinúcleo',
    'service2.description':
      'Coordina múltiples agentes de IA que aprenden del comportamiento humano.',
    'service3.title': 'Hyper Cloud – Almacenamiento Inteligente',
    'service3.description':
      'Conecta Drive, Zalo y Gmail para crear automatización inteligente.',
    'service4.title': 'Hyper One Smart Home',
    'service4.description':
      'Solución vietnamita de hogar inteligente: comodidad, emoción y tecnología.',
    'service5.title': 'Hyper One Academy',
    'service5.description':
      'Formación práctica en IA para empresas y profesionales.',

    'projects.title': 'Proyectos Destacados',
    'projects.description':
      'Hemos implementado soluciones de IA en Vietnam, Singapur y Japón.',

    'contact.title': 'Contacto e Información de la Empresa',
    'contact.address': '68 Nguyen Hue, barrio Saigon, Ciudad de Ho Chi Minh, Vietnam',
    'contact.email': 'Correo: info@hyperonevn.com',
    'contact.phone': 'Teléfono: +84 352 608 068 | +84 342 608 068',

    'footer.copyright':
      '© 2025 HYPER ONE CO., LTD. “Fieles a lo que la IA debe hacer: ética, responsabilidad y humanidad.”'
  },

  ko: {
    'nav.about': '하이퍼원 소개',
    'nav.vision': '비전',
    'nav.services': '솔루션',
    'nav.projects': '프로젝트',
    'nav.hyperbot': '하이퍼봇',
    'nav.contact': '문의하기',

    'about.title': '하이퍼원 소개',
    'about.description':
      '하이퍼원은 AI와 자동화를 통해 중소기업의 혁신과 성장을 지원하는 플랫폼입니다.',

    'vision.title': '비전',
    'vision.mission': 'AI와 자동화를 중심으로 한 아시아 최고의 기술 기업으로 성장합니다.',
    'vision.values': '윤리적이고 인간 중심적인 AI 기술을 지향합니다.',

    'ceo.title': '창립자 메시지',
    'ceo.message':
      '“미래는 가장 강한 자가 아니라 사명과 혁신을 잃지 않는 자의 것입니다. 하이퍼원은 AI가 할 수 있는 일보다 해야 하는 일에 충실합니다.”',
    'ceo.name': '르 민 트리 – 하이퍼원 창립자',

    'services.title': '솔루션 및 서비스',
    'service1.title': 'Hyper Bot – AI 비즈니스 어시스턴트',
    'service1.description':
      '고객 서비스, 판매 및 운영을 자동화하는 AI 어시스턴트.',
    'service2.title': 'Hyper Brain HB1 – 멀티코어 AI 시스템',
    'service2.description': '여러 AI 에이전트를 관리하며 사용자 행동에서 학습합니다.',
    'service3.title': 'Hyper Cloud – 스마트 클라우드',
    'service3.description': 'Drive, Zalo, Gmail과 연동하여 자동화를 실현합니다.',
    'service4.title': 'Hyper One 스마트홈',
    'service4.description': '감정을 이해하고 반응하는 AI 스마트홈 솔루션.',
    'service5.title': 'Hyper One 아카데미',
    'service5.description': '기업 및 개인을 위한 실전형 AI 교육 프로그램.',

    'projects.title': '주요 프로젝트',
    'projects.description':
      '베트남, 싱가포르, 일본 등에서 AI 및 자동화 프로젝트를 진행했습니다.',

    'contact.title': '문의 및 회사 정보',
    'contact.address': '베트남 호치민시 사이공동 응우옌후에 거리 68번지',
    'contact.email': '이메일: info@hyperonevn.com',
    'contact.phone': '전화: +84 352 608 068 | +84 342 608 068',

    'footer.copyright':
      '© 2025 HYPER ONE CO., LTD. “AI가 할 수 있는 일보다 해야 하는 일에 충실합니다.”'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
