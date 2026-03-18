export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          <div className="md:col-span-2">
            <a href="#" className="inline-flex flex-col mb-6 group">
              <span className="font-display text-xl font-bold tracking-[0.12em] uppercase text-white">
                SMART
              </span>
              <span className="text-[0.6rem] tracking-[0.25em] font-medium uppercase text-white/30">
                Development
              </span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm font-sans">
              Управляющая компания и девелопер коммерческой и жилой недвижимости. Создаём устойчивую стоимость активов для наших инвесторов.
            </p>
          </div>

          <div>
            <h5 className="font-semibold uppercase tracking-widest text-[10px] mb-6 text-white/50">
              Разделы
            </h5>
            <ul className="space-y-3 text-sm text-white/35">
              {[
                { label: "О компании", href: "#about" },
                { label: "Портфель", href: "#portfolio" },
                { label: "Инвесторам", href: "#investors" },
                { label: "Контакты", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold uppercase tracking-widest text-[10px] mb-6 text-white/50">
              Контакты
            </h5>
            <ul className="space-y-3 text-sm text-white/35">
              <li>Москва, Пресненская набережная, 12</li>
              <li>
                <a href="tel:+74951234567" className="hover:text-white transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@smart-devt.ru" className="hover:text-white transition-colors">
                  info@smart-devt.ru
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-white/25">
          <p>© {year} SMART Development. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
