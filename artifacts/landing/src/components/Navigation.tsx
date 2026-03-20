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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#" className="flex items-center">
              <img
                src={
                  isScrolled
                    ? `${import.meta.env.BASE_URL}sg.svg`
                    : `${import.meta.env.BASE_URL}sgwhite.svg`
                }
                alt="SMART Development"
                className="h-8 w-auto"
              />
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
                <motion.span
                  animate={{
                    opacity: lang === "ru" ? 1 : 0.4,
                    scale: lang === "ru" ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  RU
                </motion.span>
                <motion.span
                  className={isScrolled ? "text-slate-200" : "text-white/20"}
                >
                  /
                </motion.span>
                <motion.span
                  animate={{
                    opacity: lang === "en" ? 1 : 0.4,
                    scale: lang === "en" ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  EN
                </motion.span>
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
      </nav>

      {/* Mobile menu — outside nav to avoid overflow clipping */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`fixed left-0 right-0 z-40 md:hidden bg-white border-t border-slate-100 shadow-xl ${isScrolled ? "top-[60px]" : "top-[72px]"}`}
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
    </>
  );
}
