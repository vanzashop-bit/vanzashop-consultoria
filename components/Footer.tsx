import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const footerSections = [
  {
    title: "Navegação",
    links: [
      { label: "Quem Somos", href: "#about" },
      { label: "Soluções", href: "#consultoria" },
      { label: "Nossa Metodologia", href: "#differentials" },
      { label: "Contato", href: "#contact" },
    ],
  },
  {
    title: "Contato",
    links: [
      {
        label: "WhatsApp",
        href: "https://wa.me/5554999981574",
      },
      {
        label: "vanzashop@vanzashop.com.br",
        href: "mailto:vanzashop@vanzashop.com.br",
      },
      {
        label: "Caxias do Sul • RS",
        href: "#contact",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">

      <div className="mx-auto grid max-w-7xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">

        {/* Marca */}

        <div>

          <h2 className="text-3xl font-bold text-white">

            VANZASHOP

          </h2>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-blue-400">

            Marketplace Operations

          </p>

          <p className="mt-6 max-w-md leading-8 text-slate-400">

            Estruturamos operações de marketplace através de estratégia,
            processos e tecnologia, criando negócios mais eficientes,
            organizados e preparados para crescer de forma sustentável.

          </p>

          <div className="mt-8 space-y-3">

            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 text-blue-400" />

              <span>+55 54 99998-1574</span>

            </div>

            <div className="flex items-center gap-3">

              <Mail className="h-5 w-5 text-blue-400" />

              <span>vanzashop@vanzashop.com.br</span>

            </div>

            <div className="flex items-center gap-3">

              <MapPin className="h-5 w-5 text-blue-400" />

              <span>Caxias do Sul • RS • Brasil</span>

            </div>

          </div>

        </div>

        {/* Links */}

        {footerSections.map((section) => (

          <div key={section.title}>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">

              {section.title}

            </h3>

            <ul className="mt-6 space-y-4">

              {section.links.map((link) => (

                <li key={link.label}>

                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
                  >

                    {link.label}

                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />

                  </Link>

                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 sm:px-6 lg:flex-row lg:px-8">

          <p>

            © 2026 VANZASHOP CONSULTORIA. Todos os direitos reservados.

          </p>

          <div className="flex items-center gap-6">

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Política de Privacidade
            </Link>

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Termos de Uso
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
