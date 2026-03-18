import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function Navigation() {
  const { lang, t, toggle } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.portfolio, href: "#portfolio" },
    { name: t.nav.investors, href: "#investors" },
    { name: t.nav.contacts, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled ? "glass-nav py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#" className="flex flex-col group">
              <span className={`font-display text-xl font-bold tracking-[0.12em] uppercase transition-colors ${
                isScrolled ? "text-navy-900" : "text-white"
              }`}>
                SMART
              </span>
              <span className={`text-[0.6rem] tracking-[0.25em] font-medium uppercase transition-colors ${
                isScrolled ? "text-slate-500" : "text-white/50"
              }`}>
                Development
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                    isScrolled ? "text-slate-600 hover:text-navy-900" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Language toggle */}
              <button
                onClick={toggle}
                aria-label="Switch language"
                className={`flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-colors ${
                  isScrolled ? "text-slate-400 hover:text-navy-900" : "text-white/40 hover:text-white"
                }`}
              >
                <span className={lang === "ru" ? "text-accent-500" : ""}>RU</span>
                <span className={isScrolled ? "text-slate-200" : "text-white/20"}>/</span>
                <span className={lang === "en" ? "text-accent-500" : ""}>EN</span>
              </button>

              <a
                href="#contact"
                className={`px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-none ${
                  isScrolled
                    ? "bg-navy-900 text-white hover:bg-accent-500"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white hover:text-navy-900 backdrop-blur-sm"
                }`}
              >
                {t.nav.cta}
              </a>
            </div>

            {/* Mobile right side */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggle}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
                  isScrolled ? "text-slate-400" : "text-white/50"
                }`}
              >
                {lang === "ru" ? "EN" : "RU"}
              </button>
              <button
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Меню"
              >
                {isMobileMenuOpen ? (
                  <X className={isScrolled ? "text-navy-900" : "text-white"} size={22} />
                ) : (
                  <Menu className={isScrolled ? "text-navy-900" : "text-white"} size={22} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden bg-white border-t border-slate-100 shadow-xl"
            >
              <div className="flex flex-col px-6 py-6 gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-navy-900 text-base font-medium border-b border-slate-100 pb-4 last:border-0 hover:text-accent-500 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 block text-center py-3 bg-navy-900 text-white text-sm font-semibold tracking-wider hover:bg-accent-500 transition-colors"
                >
                  {t.nav.cta}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
