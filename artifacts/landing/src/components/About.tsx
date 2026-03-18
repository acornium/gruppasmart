import { motion } from "framer-motion";
import { Building2, LayoutDashboard, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Реальные активы",
    description: "Инвестиции в физическую коммерческую недвижимость с понятной прозрачной оценкой и фундаментальной защитой от инфляции."
  },
  {
    icon: LayoutDashboard,
    title: "Диверсифицированный портфель",
    description: "Сбалансированное сочетание складской, торговой и жилой недвижимости снижает общие риски и обеспечивает стабильный денежный поток."
  },
  {
    icon: ShieldCheck,
    title: "Прозрачность и контроль",
    description: "Регулярная детальная отчётность, независимая рыночная оценка активов и юридически оформленные права инвестора на каждом этапе."
  },
  {
    icon: TrendingUp,
    title: "Профессиональное управление",
    description: "Реализуем полный цикл: от девелопмента и строительства до эффективного управления активами и долгосрочными арендными отношениями."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Кто мы
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display text-navy-900 mb-6"
          >
            Инвестиционная модель
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-navy-800/70 text-lg font-sans leading-relaxed"
          >
            Наш подход основан на глубоком понимании рынка и строгом отборе объектов. Мы создаем добавленную стоимость за счет активного управления и стратегического девелопмента.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-gold-500/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              
              <div className="w-14 h-14 bg-navy-900 text-gold-500 flex items-center justify-center rounded-none mb-8 relative z-10">
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-display font-bold text-navy-900 mb-4 relative z-10">
                {feature.title}
              </h4>
              <p className="text-navy-800/70 font-sans leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
