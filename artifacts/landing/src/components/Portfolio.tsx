import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const typeColors: Record<string, string> = {
  "Склад": "bg-navy-900 text-white",
  "Логистика": "bg-slate-700 text-white",
  "Индустриальный": "bg-slate-600 text-white",
  "Торговля": "bg-slate-800 text-white",
  "Жильё": "bg-navy-800 text-white",
  "Warehouse": "bg-navy-900 text-white",
  "Logistics": "bg-slate-700 text-white",
  "Industrial": "bg-slate-600 text-white",
  "Retail": "bg-slate-800 text-white",
  "Residential": "bg-navy-800 text-white",
};

export function Portfolio() {
  const { t } = useLang();
  const { filters, items } = t.portfolio;
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  // Reset filter to "All" when language changes (filter labels change)
  const prevFilter0 = useRef(filters[0]);
  useEffect(() => {
    if (prevFilter0.current !== filters[0]) {
      setActiveFilter(filters[0]);
      prevFilter0.current = filters[0];
    }
  }, [filters]);

  const allLabel = filters[0];
  const filtered = activeFilter === allLabel
    ? items
    : items.filter((i) => i.type === activeFilter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-6 h-px bg-accent-500" />
              <span className="text-accent-500 text-xs font-semibold tracking-[0.22em] uppercase">
                {t.portfolio.tag}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-display text-navy-900"
            >
              {t.portfolio.title}
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-navy-900 border-b border-slate-300 pb-1 hover:border-accent-500 hover:text-accent-500 transition-colors whitespace-nowrap"
          >
            {t.portfolio.reportLink}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Filter tabs — re-initialize when filters change (language switch) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 border ${
                activeFilter === f
                  ? "bg-navy-900 text-white border-navy-900"
                  : "bg-transparent text-slate-500 border-slate-200 hover:border-navy-900 hover:text-navy-900"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group cursor-pointer flex flex-col bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-400"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/5 transition-colors" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest ${typeColors[item.type] ?? "bg-navy-900 text-white"}`}>
                      {item.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-lg font-display font-semibold text-navy-900 mb-3 leading-snug group-hover:text-accent-600 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 font-medium uppercase tracking-wide">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {item.location}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{item.meta}</div>
                      <div className="text-sm font-semibold text-navy-900">{item.specs}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{t.portfolio.statusLabel}</div>
                      <div className="text-sm font-semibold text-accent-600">{item.highlights}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
