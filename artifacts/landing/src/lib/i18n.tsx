import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Lang = "ru" | "en";

export const translations = {
  ru: {
    nav: {
      about: "О компании",
      portfolio: "Портфель",
      investors: "Инвесторам",
      contacts: "Контакты",
      cta: "Связаться",
    },
    hero: {
      tag: "Девелопмент и управление активами",
      headline1: "Диверсифицированные инвестиции в",
      headline2: "реальные активы",
      sub: "Многопрофильная инвестиционная группа, финансирующая проекты с высоким потенциалом развития в различных отраслях экономики России",
      cta1: "Инвестировать в портфель",
      cta2: "Получить презентацию",
      stats: [
        { label: "Лет на рынке", value: 15, suffix: "+" },
        { label: "м² под управлением", value: 500, suffix: "k+" },
        { label: "Объектов в портфеле", value: 20, suffix: "+" },
        { label: "Целевая доходность", value: 12, suffix: "–18%" },
      ],
    },
    about: {
      tag: "О компании",
      title: "Инвестиционная модель",
      sub: "Наш подход основан на глубоком понимании рынка, строгом отборе объектов и создании устойчивой стоимости для инвесторов.",
      features: [
        { number: "01", title: "Реальные активы", description: "Инвестиции в физическую коммерческую недвижимость с понятной прозрачной оценкой и фундаментальной защитой от инфляции." },
        { number: "02", title: "Диверсифицированный портфель", description: "Сбалансированное сочетание складской, торговой и жилой недвижимости снижает общие риски и обеспечивает стабильный денежный поток." },
        { number: "03", title: "Прозрачность и контроль", description: "Регулярная детальная отчётность, независимая рыночная оценка активов и юридически оформленные права инвестора на каждом этапе." },
        { number: "04", title: "Профессиональное управление", description: "Реализуем полный цикл: от девелопмента и строительства до эффективного управления активами и долгосрочными арендными отношениями." },
      ],
    },
    portfolio: {
      tag: "Наши активы",
      title: "Портфель объектов",
      sub: "Фокус на объектах с устойчивым спросом и предсказуемой доходностью в фундаментальных секторах экономики.",
      reportLink: "Полный отчёт по портфелю",
      filters: ["Все", "Склад", "Логистика", "Индустриальный", "Торговля", "Жильё"],
      statusLabel: "Статус",
      items: [
        { title: "Складской комплекс «Северный»", type: "Склад", specs: "45 000 м²", location: "Московская область", highlights: "Заполняемость 98%", meta: "Класс A", image: "portfolio-1.png" },
        { title: "Логистический парк «Юго-Западный»", type: "Логистика", specs: "80 000 м²", location: "Московская область", highlights: "В управлении с 2019", meta: "Мультиарендный", image: "portfolio-2.png" },
        { title: "Индустриальный парк «Технополис»", type: "Индустриальный", specs: "35 000 м²", location: "Подмосковье", highlights: "Долгосрочные арендаторы", meta: "Производство", image: "portfolio-3.png" },
        { title: "Торговый центр «Центральный»", type: "Торговля", specs: "25 000 м²", location: "Центральный регион", highlights: "500 000 чел/мес", meta: "Retail", image: "portfolio-4.png" },
        { title: "Жилой комплекс «Новое время»", type: "Жильё", specs: "60 000 м²", location: "Новая Москва", highlights: "85% реализовано", meta: "Комфорт-класс", image: "portfolio-5.png" },
        { title: "Складской парк «Восток»", type: "Склад", specs: "55 000 м²", location: "Восток МО", highlights: "Класс A+", meta: "BTS-формат", image: "portfolio-6.png" },
      ],
    },
    investors: {
      tag: "Форматы участия",
      title: "Для инвесторов",
      sub: "Гибкие структуры сделок, адаптированные под профиль риска, объём капитала и стратегические цели инвестора.",
      popular: "Популярный выбор",
      yieldLabel: "Целевая доходность",
      volLabel: "Минимальный объём",
      cta: "Оставить заявку",
      disclaimer: "* Указанная доходность является прогнозной и не гарантируется. Инвестиции в недвижимость сопряжены с рисками. Перед принятием решения об инвестировании рекомендуется ознакомиться с инвестиционным меморандумом и проконсультироваться с финансовым советником. Деятельность осуществляется в строгом соответствии с законодательством РФ.",
      tiers: [
        { title: "Частные инвесторы", volume: "от 5 млн ₽", yield: "12–15%", period: "годовых", featured: false, features: ["Прямые инвестиции в объекты", "Договоры займа / долевое участие", "Ежеквартальные выплаты", "Регулярная отчётность"] },
        { title: "HNWI", volume: "от 50 млн ₽", yield: "15–18%", period: "годовых", featured: true, features: ["Индивидуальные условия", "Совместное владение объектами", "Приоритетный доступ к новым проектам", "Персональный менеджер"] },
        { title: "Институциональные", volume: "от 500 млн ₽", yield: "Индивидуально", period: "", featured: false, features: ["Участие в капитале фонда / СПО", "Индивидуальная структура сделки", "Стратегическое партнёрство", "Совместный девелопмент"] },
      ],
    },
    contact: {
      tag: "Контакты",
      title: "Связаться с командой",
      sub: "Мы открыты к диалогу и готовы предоставить детальную презентацию портфеля, ответить на вопросы и обсудить форматы сотрудничества.",
      phoneLabel: "Телефон",
      emailLabel: "Email",
      successTitle: "Заявка отправлена",
      successSub: "Наш менеджер свяжется с вами в течение 1 рабочего дня. Благодарим за интерес к SMART Development.",
      successReset: "Отправить ещё одну заявку",
      requestLabel: "Тема обращения *",
      requestTypes: [
        { value: "invest" as const, label: "Инвестировать" },
        { value: "presentation" as const, label: "Получить презентацию" },
        { value: "contact" as const, label: "Задать вопрос" },
      ],
      nameLabel: "Имя *",
      namePlaceholder: "Иван Петров",
      emailFieldLabel: "Email *",
      emailPlaceholder: "ivan@company.ru",
      phoneFieldLabel: "Телефон",
      phonePlaceholder: "+7 (___) ___-__-__",
      investorLabel: "Тип инвестора *",
      investorPlaceholder: "Выберите тип",
      investorOptions: [
        { value: "private" as const, label: "Частный инвестор" },
        { value: "hnwi" as const, label: "HNWI (от 50 млн ₽)" },
        { value: "fund" as const, label: "Институциональный фонд" },
        { value: "other" as const, label: "Другое" },
      ],
      volumeLabel: "Объём инвестиций *",
      volumePlaceholder: "Укажите планируемый объём",
      volumeOptions: [
        { value: "5-50", label: "5–50 млн руб." },
        { value: "50-500", label: "50–500 млн руб." },
        { value: "500+", label: "Более 500 млн руб." },
      ],
      messageLabel: "Сообщение",
      messagePlaceholder: "Дополнительная информация или вопросы...",
      submitIdle: "Отправить заявку",
      submitPending: "Отправка...",
      errorTitle: "Ошибка отправки",
      errorSub: "Не удалось отправить заявку. Попробуйте позже или свяжитесь по телефону.",
      errors: { name: "Введите ваше имя", email: "Введите корректный email", investorType: "Выберите тип", investmentVolume: "Выберите объём" },
    },
    footer: {
      desc: "Управляющая компания и девелопер коммерческой и жилой недвижимости. Создаём устойчивую стоимость активов для наших инвесторов.",
      sections: "Разделы",
      contacts: "Контакты",
      address: "Москва, Пресненская набережная, 12",
      copyright: "Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      navLinks: [
        { label: "О компании", href: "#about" },
        { label: "Портфель", href: "#portfolio" },
        { label: "Инвесторам", href: "#investors" },
        { label: "Контакты", href: "#contact" },
      ],
    },
  },

  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      investors: "Investors",
      contacts: "Contacts",
      cta: "Contact Us",
    },
    hero: {
      tag: "Multifaceted Investment Group",
      headline1: "Financing high-potential projects",
      headline2: "across the Russian economy",
      sub: "A diversified investment group financing projects with strong development potential across multiple sectors of the Russian economy.",
      cta1: "Invest in the Portfolio",
      cta2: "Request a Presentation",
      stats: [
        { label: "Years in the market", value: 15, suffix: "+" },
        { label: "sqm under management", value: 500, suffix: "k+" },
        { label: "Assets in portfolio", value: 20, suffix: "+" },
        { label: "Target return", value: 12, suffix: "–18%" },
      ],
    },
    about: {
      tag: "About Us",
      title: "Investment Model",
      sub: "Our approach is built on deep market expertise, rigorous asset selection and the creation of sustainable value for investors.",
      features: [
        { number: "01", title: "Real Assets", description: "Investment in physical commercial real estate with transparent valuation and fundamental inflation protection." },
        { number: "02", title: "Diversified Portfolio", description: "A balanced mix of warehouse, retail and residential property reduces overall risk and provides stable cash flow." },
        { number: "03", title: "Transparency & Control", description: "Regular detailed reporting, independent market valuation and legally formalised investor rights at every stage." },
        { number: "04", title: "Professional Management", description: "We cover the full cycle — from development and construction to active asset management and long-term lease relations." },
      ],
    },
    portfolio: {
      tag: "Our Assets",
      title: "Asset Portfolio",
      sub: "Focused on assets with stable demand and predictable returns in fundamental sectors of the economy.",
      reportLink: "Full Portfolio Report",
      filters: ["All", "Warehouse", "Logistics", "Industrial", "Retail", "Residential"],
      statusLabel: "Status",
      items: [
        { title: "Northern Warehouse Complex", type: "Warehouse", specs: "45,000 sqm", location: "Moscow Region", highlights: "98% occupancy", meta: "Class A", image: "portfolio-1.png" },
        { title: "South-West Logistics Park", type: "Logistics", specs: "80,000 sqm", location: "Moscow Region", highlights: "Under management since 2019", meta: "Multi-tenant", image: "portfolio-2.png" },
        { title: "Technopolis Industrial Park", type: "Industrial", specs: "35,000 sqm", location: "Moscow suburbs", highlights: "Long-term tenants", meta: "Manufacturing", image: "portfolio-3.png" },
        { title: "Central Retail Center", type: "Retail", specs: "25,000 sqm", location: "Central Region", highlights: "500k visitors/mo", meta: "Retail", image: "portfolio-4.png" },
        { title: "New Era Residential Complex", type: "Residential", specs: "60,000 sqm", location: "New Moscow", highlights: "85% sold", meta: "Comfort class", image: "portfolio-5.png" },
        { title: "East Warehouse Park", type: "Warehouse", specs: "55,000 sqm", location: "East Moscow Region", highlights: "Class A+", meta: "BTS format", image: "portfolio-6.png" },
      ],
    },
    investors: {
      tag: "Investment Formats",
      title: "For Investors",
      sub: "Flexible deal structures tailored to investor risk profile, capital volume and strategic objectives.",
      popular: "Most Popular",
      yieldLabel: "Target Return",
      volLabel: "Minimum Volume",
      cta: "Submit Inquiry",
      disclaimer: "* The stated returns are projected and not guaranteed. Real estate investments carry risks. Before making an investment decision, please review the investment memorandum and consult a financial adviser. All activities are conducted in strict compliance with applicable law.",
      tiers: [
        { title: "Private Investors", volume: "from ₽5M", yield: "12–15%", period: "per annum", featured: false, features: ["Direct investment in portfolio assets", "Loan agreements / equity participation", "Quarterly distributions", "Regular reporting"] },
        { title: "HNWI", volume: "from ₽50M", yield: "15–18%", period: "per annum", featured: true, features: ["Customised terms", "Co-ownership of assets", "Priority access to new projects", "Dedicated relationship manager"] },
        { title: "Institutional", volume: "from ₽500M", yield: "Bespoke", period: "", featured: false, features: ["Fund equity / SPV participation", "Bespoke deal structure", "Strategic partnership", "Co-development"] },
      ],
    },
    contact: {
      tag: "Contact",
      title: "Get in Touch",
      sub: "We welcome dialogue and are ready to provide a detailed portfolio presentation, answer your questions and discuss partnership formats.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      successTitle: "Inquiry Submitted",
      successSub: "Our manager will contact you within 1 business day. Thank you for your interest in SMART Development.",
      successReset: "Submit another inquiry",
      requestLabel: "Subject *",
      requestTypes: [
        { value: "invest" as const, label: "Invest" },
        { value: "presentation" as const, label: "Get Presentation" },
        { value: "contact" as const, label: "Ask a Question" },
      ],
      nameLabel: "Name *",
      namePlaceholder: "John Smith",
      emailFieldLabel: "Email *",
      emailPlaceholder: "john@company.com",
      phoneFieldLabel: "Phone",
      phonePlaceholder: "+1 (___) ___-____",
      investorLabel: "Investor Type *",
      investorPlaceholder: "Select type",
      investorOptions: [
        { value: "private" as const, label: "Private Investor" },
        { value: "hnwi" as const, label: "HNWI (from ₽50M)" },
        { value: "fund" as const, label: "Institutional Fund" },
        { value: "other" as const, label: "Other" },
      ],
      volumeLabel: "Investment Volume *",
      volumePlaceholder: "Select volume",
      volumeOptions: [
        { value: "5-50", label: "₽5M – ₽50M" },
        { value: "50-500", label: "₽50M – ₽500M" },
        { value: "500+", label: "Over ₽500M" },
      ],
      messageLabel: "Message",
      messagePlaceholder: "Additional information or questions...",
      submitIdle: "Submit Inquiry",
      submitPending: "Sending...",
      errorTitle: "Submission Error",
      errorSub: "Failed to submit. Please try again or contact us by phone.",
      errors: { name: "Please enter your name", email: "Please enter a valid email", investorType: "Please select a type", investmentVolume: "Please select a volume" },
    },
    footer: {
      desc: "Asset manager and developer of commercial and residential real estate. We create sustainable asset value for our investors.",
      sections: "Sections",
      contacts: "Contacts",
      address: "Moscow, Presnenskaya Emb., 12",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      navLinks: [
        { label: "About", href: "#about" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Investors", href: "#investors" },
        { label: "Contacts", href: "#contact" },
      ],
    },
  },
} as const;

export type Translations = typeof translations.ru;

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  const t = translations[lang] as unknown as Translations;

  const toggle = useCallback(() => {
    setLang((l) => {
      const next = l === "ru" ? "en" : "ru";
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
