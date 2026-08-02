import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}

        <a href="/" className="flex items-center">

          <Image
            src="/images/logo.png"
            alt="Vanzashop Consultoria"
            width={190}
            height={60}
            priority
            className="h-12 w-auto object-contain"
          />

        </a>

        {/* Menu */}

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">

          <a
            href="#about"
            className="transition duration-300 hover:text-blue-600"
          >
            Quem Somos
          </a>

          <a
            href="#services"
            className="transition duration-300 hover:text-blue-600"
          >
            Soluções
          </a>

          <a
            href="#differentials"
            className="transition duration-300 hover:text-blue-600"
          >
            Metodologia
          </a>

          <a
            href="#marketplaces"
            className="transition duration-300 hover:text-blue-600"
          >
            Ecossistemas
          </a>

          <a
            href="#faq"
            className="transition duration-300 hover:text-blue-600"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="transition duration-300 hover:text-blue-600"
          >
            Contato
          </a>

        </nav>

        {/* CTA */}

        <Button
          href="https://wa.me/5554999981574"
          rightIcon={<ArrowRight className="h-4 w-4" />}
        >
          Agendar Diagnóstico
        </Button>

      </div>

    </header>
  );
}
