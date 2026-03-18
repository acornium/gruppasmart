export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="inline-flex flex-col group mb-6">
              <span className="font-display text-2xl font-bold tracking-wider uppercase text-white">
                SMART
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] font-medium text-gold-500">
                Development
              </span>
            </a>
            <p className="text-cream-100/50 text-sm max-w-sm leading-relaxed mb-6">
              Управляющая компания и девелопер коммерческой и жилой недвижимости. Создаем устойчивую стоимость для наших инвесторов.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold uppercase tracking-widest text-xs mb-6 text-white">Разделы</h5>
            <ul className="space-y-4 text-sm text-cream-100/60">
              <li><a href="#about" className="hover:text-gold-500 transition-colors">О компании</a></li>
              <li><a href="#portfolio" className="hover:text-gold-500 transition-colors">Портфель</a></li>
              <li><a href="#investors" className="hover:text-gold-500 transition-colors">Инвесторам</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold uppercase tracking-widest text-xs mb-6 text-white">Контакты</h5>
            <ul className="space-y-4 text-sm text-cream-100/60">
              <li>Москва, Пресненская набережная, 12</li>
              <li><a href="tel:+74951234567" className="hover:text-gold-500 transition-colors">+7 (495) 123-45-67</a></li>
              <li><a href="mailto:info@smart-devt.ru" className="hover:text-gold-500 transition-colors">info@smart-devt.ru</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-100/40">
          <p>© {new Date().getFullYear()} SMART Development. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
