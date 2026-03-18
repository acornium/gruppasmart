import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const portfolioItems = [
  {
    title: "Складской комплекс «Северный»",
    type: "Склад / Логистика",
    specs: "45 000 м² · Класс A",
    location: "Московская область",
    highlights: "Заполняемость 98%",
    image: "portfolio-1.png",
  },
  {
    title: "Логистический парк «Юго-Западный»",
    type: "Склад / Логистика",
    specs: "80 000 м² · Мультиарендный",
    location: "Московская область",
    highlights: "В управлении с 2019",
    image: "portfolio-2.png",
  },
  {
    title: "Индустриальный парк «Технополис»",
    type: "Индустриальный",
    specs: "35 000 м² · Производство",
    location: "Подмосковье",
    highlights: "Долгосрочные арендаторы",
    image: "portfolio-3.png",
  },
  {
    title: "Торговый центр «Центральный»",
    type: "Торговля",
    specs: "25 000 м² · Retail",
    location: "Центральный регион",
    highlights: "Трафик 500 000 чел/мес",
    image: "portfolio-4.png",
  },
  {
    title: "Жилой комплекс «Новое время»",
    type: "Жильё",
    specs: "60 000 м² · Комфорт-класс",
    location: "Новая Москва",
    highlights: "85% реализовано (Сдан)",
    image: "portfolio-5.png",
  },
  {
    title: "Складской парк «Восток»",
    type: "Склад / Логистика",
    specs: "55 000 м² · BTS-формат",
    location: "Восток МО",
    highlights: "Класс A+",
    image: "portfolio-6.png",
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Наши активы
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display text-navy-900 mb-4"
            >
              Портфель объектов
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-navy-800/70 text-lg font-sans"
            >
              Фокус на объектах с устойчивым спросом и предсказуемой доходностью в фундаментальных секторах экономики.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="text-navy-900 font-semibold uppercase tracking-wider text-sm border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-colors">
              Скачать полный отчет
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden mb-6">
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={`${import.meta.env.BASE_URL}images/${item.image}`} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-navy-900 text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-wider backdrop-blur-md">
                    {item.type}
                  </span>
                </div>
              </div>
              
              <h4 className="text-2xl font-display font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                {item.title}
              </h4>
              
              <div className="flex items-center gap-2 text-sm text-navy-800/60 mb-4 font-medium uppercase tracking-wide">
                <MapPin className="w-4 h-4 text-gold-500" />
                {item.location}
              </div>
              
              <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                <span className="text-navy-900 font-medium text-sm">{item.specs}</span>
                <span className="text-gold-600 font-semibold text-sm">{item.highlights}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
