import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    title: "Частные инвесторы",
    volume: "От 5 млн руб.",
    yield: "12–15% годовых",
    features: [
      "Прямые инвестиции в объекты",
      "Договоры займа / долевое участие",
      "Ежеквартальные выплаты",
      "Регулярная отчётность"
    ],
    highlighted: false
  },
  {
    title: "HNWI (Состоятельные)",
    volume: "От 50 млн руб.",
    yield: "15–18% годовых",
    features: [
      "Индивидуальные условия",
      "Совместное владение объектами",
      "Приоритетное участие в новых проектах",
      "Персональный менеджер"
    ],
    highlighted: true
  },
  {
    title: "Фонды / Институционалы",
    volume: "От 500 млн руб.",
    yield: "Индивидуально",
    features: [
      "Участие в капитале фонда",
      "Специализированное проектное общество",
      "Индивидуальная структура сделки",
      "Стратегическое партнёрство"
    ],
    highlighted: false
  }
];

export function Investors() {
  return (
    <section id="investors" className="py-24 md:py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-900/50 skew-x-12 translate-x-32 hidden lg:block pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Для инвесторов
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display mb-6"
          >
            Форматы участия
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream-100/70 text-lg font-sans leading-relaxed"
          >
            Мы предлагаем гибкие структуры сделок, адаптированные под профиль риска, объем капитала и стратегические цели инвестора.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`p-8 lg:p-10 transition-transform hover:-translate-y-2 ${
                tier.highlighted 
                  ? "bg-navy-900 border-2 border-gold-500 relative shadow-2xl shadow-gold-500/10" 
                  : "bg-navy-900/40 border border-white/10 hover:border-gold-500/30"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-wider py-1 px-4">
                  Популярный выбор
                </div>
              )}
              <h4 className="text-2xl font-display font-bold mb-2">{tier.title}</h4>
              <div className="text-gold-500 font-sans font-semibold text-lg mb-6">{tier.volume}</div>
              
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="text-sm text-cream-100/60 uppercase tracking-widest mb-1">Целевая доходность</div>
                <div className="text-3xl font-display font-medium text-white">{tier.yield}</div>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold-500 shrink-0" />
                    <span className="text-cream-100/80 font-sans text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`block w-full text-center py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                  tier.highlighted
                    ? "bg-gold-500 text-navy-900 hover:bg-gold-400"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Оставить заявку
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center text-cream-100/40 text-xs max-w-4xl mx-auto"
        >
          * Указанная доходность является прогнозной и не гарантируется. Инвестиции в недвижимость сопряжены с рисками. Перед принятием решения об инвестировании рекомендуется ознакомиться с меморандумом и проконсультироваться с финансовым советником. Деятельность осуществляется в строгом соответствии с законодательством РФ.
        </motion.div>
      </div>
    </section>
  );
}
