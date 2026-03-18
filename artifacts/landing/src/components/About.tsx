import { motion } from "framer-motion";
import { Building2, LayoutDashboard, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Building2,
    number: "01",
    title: "Реальные активы",
    description: "Инвестиции в физическую коммерческую недвижимость с понятной прозрачной оценкой и фундаментальной защитой от инфляции."
  },
  {
    icon: LayoutDashboard,
    number: "02",
    title: "Диверсифицированный портфель",
    description: "Сбалансированное сочетание складской, торговой и жилой недвижимости снижает общие риски и обеспечивает стабильный денежный поток."
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Прозрачность и контроль",
    description: "Регулярная детальная отчётность, независимая рыночная оценка активов и юридически оформленные права инвестора на каждом этапе."
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Профессиональное управление",
    description: "Реализуем полный цикл: от девелопмента и строительства до эффективного управления активами и долгосрочными арендными отношениями."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-6 h-px bg-accent-500" />
              <span className="text-accent-500 text-xs font-semibold tracking-[0.22em] uppercase">
                О компании
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-display text-navy-900 leading-tight"
            >
              Инвестиционная модель
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base font-sans leading-relaxed max-w-sm md:text-right"
          >
            Наш подход основан на глубоком понимании рынка, строгом отборе объектов и создании устойчивой стоимости для инвесторов.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-200">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group bg-white p-10 lg:p-12 hover:bg-navy-900 transition-all duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <feature.icon className="w-5 h-5 text-accent-500 group-hover:text-accent-300 transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-slate-200 group-hover:text-white/10 font-display text-5xl font-bold leading-none transition-colors select-none">
                  {feature.number}
                </span>
              </div>
              <h4 className="text-xl font-display font-semibold text-navy-900 group-hover:text-white mb-4 transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-500 group-hover:text-white/60 font-sans leading-relaxed text-sm transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
