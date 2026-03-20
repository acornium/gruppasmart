import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          <div className="md:col-span-2">
            <a href="#" className="inline-flex flex-col mb-6">
              <span className="font-display text-xl font-bold tracking-[0.12em] uppercase text-white">SMART</span>
              <span className="text-xs tracking-[0.25em] font-medium uppercase text-white/30">Development</span>
            </a>
            <p className="text-white/35 text-base leading-relaxed max-w-sm font-sans">{f.desc}</p>
          </div>

          <div>
            <h5 className="font-semibold tracking-wide text-xs mb-6 text-white/50">{f.sections}</h5>
            <ul className="space-y-3 text-base text-white/35">
              {f.navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold tracking-wide text-xs mb-6 text-white/50">{f.contacts}</h5>
            <ul className="space-y-3 text-base text-white/35">
              <li>{f.address}</li>
              <li><a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a></li>
              <li><a href="mailto:info@smart-devt.ru" className="hover:text-white transition-colors">info@smart-devt.ru</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/25">
          <p>© {year} SMART Development. {f.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">{f.privacy}</a>
            <a href="#" className="hover:text-white/60 transition-colors">{f.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
