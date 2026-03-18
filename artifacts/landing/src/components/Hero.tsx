import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-950/75 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Premium Real Estate Architecture"
          className="w-full h-full object-cover scale-105 motion-safe:animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
              Инвестиционный фонд недвижимости
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-white leading-[1.1] mb-6 text-balance">
              Диверсифицированные инвестиции в <span className="text-gold-500 italic">реальные активы</span>
            </h1>
            <p className="text-lg md:text-xl text-cream-200/80 max-w-2xl leading-relaxed mb-10 font-sans font-light">
              С фокусом на сохранение и долгосрочный рост капитала. Компания формирует и управляет портфелем складской, торговой и жилой недвижимости — активов с устойчивым спросом и предсказуемой доходностью.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-semibold tracking-wide hover:bg-gold-400 transition-all duration-300"
              >
                Инвестировать в портфель
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-4 bg-transparent border border-cream-100/20 text-cream-100 font-medium tracking-wide hover:bg-cream-100/10 hover:border-gold-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                Получить презентацию
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Stats Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-cream-100/10 bg-navy-950/50 backdrop-blur-md z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream-100/10">
            {[
              { label: "Опыта на рынке", value: "15+ лет" },
              { label: "Под управлением", value: "500k+ м²" },
              { label: "Объектов в портфеле", value: "20+" },
              { label: "Целевая доходность", value: "12–18%" },
            ].map((stat, i) => (
              <div key={i} className="py-6 px-4 md:px-8 flex flex-col justify-center">
                <span className="text-gold-500 font-display text-3xl md:text-4xl mb-1">{stat.value}</span>
                <span className="text-cream-100/60 text-xs md:text-sm font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 text-cream-100/50 hover:text-gold-500 transition-colors animate-bounce hidden md:block">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
