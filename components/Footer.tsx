import Link from "next/link";

const footerSections = [
  {
    title: "Serviços",
    links: [
      { label: "Consultoria", href: "#consultoria" },
      { label: "Sobre", href: "#about" },
      { label: "Contato", href: "#contact" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "WhatsApp", href: "https://wa.me/5554999981574" },
      { label: "E-mail", href: "mailto:vanzashop@vanzashop.com.br" },
      { label: "Localização", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-2xl font-semibold tracking-tight text-white">VANZASHOP</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Consultoria especializada para empresas que querem vender melhor em marketplaces com mais estratégia e operação.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{section.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © 2026 VANZASHOP. Todos os direitos reservados.
      </div>
    </footer>
  );
}
