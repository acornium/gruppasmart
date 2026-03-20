import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Investors() {
  const { t } = useLang();
  const { tiers } = t.investors;

  return (
    <section id="investors" className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-6 h-px bg-accent-400" />
              <span className="text-accent-400 text-xs font-semibold tracking-[0.22em] uppercase">
                {t.investors.tag}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-display text-white"
            >
              {t.investors.title}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/40 text-base font-sans leading-relaxed max-w-sm"
          >
            {t.investors.sub}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-6 sm:p-8 lg:p-10 transition-colors duration-300 ${
                tier.featured
                  ? "bg-accent-500 hover:bg-accent-600"
                  : "bg-white/[0.03] hover:bg-white/[0.07]"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-white text-accent-600 text-xs font-bold tracking-wide px-3 py-1">
                  {t.investors.popular}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-display font-semibold text-white mb-5">
                  {tier.title}
                </h3>
                <div className={`text-xs tracking-wide mb-2 ${tier.featured ? "text-white/60" : "text-white/30"}`}>
                  {t.investors.volLabel}
                </div>
                <div className={`text-2xl font-display font-semibold ${tier.featured ? "text-white" : "text-white/80"}`}>
                  {tier.volume}
                </div>
              </div>

              <div className={`py-6 border-y mb-8 ${tier.featured ? "border-white/20" : "border-white/8"}`}>
                <div className={`text-xs tracking-wide mb-1.5 ${tier.featured ? "text-white/60" : "text-white/30"}`}>
                  {t.investors.yieldLabel}
                </div>
                <div className={`font-display font-semibold text-3xl ${tier.featured ? "text-white" : "text-white/80"}`}>
                  {tier.yield}
                  {tier.period && (
                    <span className={`text-base font-normal ml-1.5 ${tier.featured ? "text-white/60" : "text-white/40"}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3.5 mb-10 flex-1">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${tier.featured ? "text-white" : "text-accent-400"}`}
                      strokeWidth={2.5}
                    />
                    <span className={`text-base font-sans leading-snug ${tier.featured ? "text-white/80" : "text-white/50"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group/btn flex items-center justify-between px-5 py-3.5 text-sm font-semibold tracking-wide transition-all ${
                  tier.featured
                    ? "bg-white text-accent-600 hover:bg-slate-100"
                    : "border border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {t.investors.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-white/25 text-xs font-sans leading-relaxed max-w-4xl"
        >
          {t.investors.disclaimer}
        </motion.p>

      </div>
    </section>
  );
}
