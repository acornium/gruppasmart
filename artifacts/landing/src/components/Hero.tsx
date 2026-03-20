import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    started.current = false;
    setCount(0);
  }, [target]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Hero() {
  const { t } = useLang();
  const stats = t.hero.stats;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-between pt-24 overflow-hidden bg-navy-950">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-950/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent z-10" />
        <div
          className="absolute inset-0 z-10 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <motion.img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Commercial real estate"
          style={{ y: bgY }}
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-px bg-accent-400" />
                <span className="text-accent-400 text-xs font-semibold tracking-[0.25em] uppercase">
                  {t.hero.tag}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-white leading-[1.08] mb-6 text-balance hyphens-auto"
              >
                {t.hero.headline1}{" "}{t.hero.headline2}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="text-base md:text-lg text-white/55 max-w-2xl leading-relaxed mb-10 font-sans font-light"
              >
                {t.hero.sub}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-navy-900 text-sm font-semibold tracking-wide hover:bg-slate-100 transition-colors"
                >
                  {t.hero.cta1}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/15 text-white/80 text-sm font-medium tracking-wide hover:border-white/35 hover:text-white transition-colors"
                >
                  {t.hero.cta2}
                </a>
              </motion.div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-20 border-t border-white/8 bg-white/[0.03] backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/8">
            {stats.map((stat, i) => (
              <div key={i} className={`py-7 px-6 md:px-10 ${i >= 2 ? "border-t md:border-t-0 border-white/8" : ""} ${i % 2 === 1 ? "border-l md:border-l-0 border-white/8" : ""}`}>
                <div className="text-white font-display text-3xl md:text-4xl font-semibold mb-1 tabular-nums">
                  <CountUp target={stat.value} suffix={stat.suffix} duration={1600} />
                </div>
                <div className="text-white/40 text-xs font-sans font-medium uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
