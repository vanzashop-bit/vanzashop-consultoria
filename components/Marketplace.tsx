import {
  ArrowRight,
  Store,
  ShoppingCart,
  Package,
  Building2,
} from "lucide-react";

import Button from "./Button";
import SectionTitle from "./SectionTitle";

const ecosystems = [
  {
    name: "Mercado Livre",
    description:
      "Estratégias comerciais, estruturação operacional, gestão e evolução contínua para operações de alta performance.",
    icon: Store,
  },
  {
    name: "Shopee",
    description:
      "Otimização da operação, melhoria de processos e estratégias voltadas ao crescimento sustentável.",
    icon: ShoppingCart,
  },
  {
    name: "Amazon",
    description:
      "Planejamento e estruturação para empresas que desejam expandir sua presença em novos canais de venda.",
    icon: Package,
  },
  {
    name: "Magalu",
    description:
      "Apoio estratégico para integração, operação e desenvolvimento de novos canais comerciais.",
    icon: Building2,
  },
];

export default function Marketplace() {
  return (
    <section
      id="marketplaces"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionTitle
        eyebrow="ECOSSISTEMAS"
        title="Atuamos nos principais marketplaces do Brasil."
        description="Nossa experiência abrange diferentes plataformas e modelos operacionais, permitindo desenvolver estratégias adaptadas à realidade de cada empresa."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {ecosystems.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.name}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                <Icon className="h-7 w-7" />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">

                {item.name}

              </h3>

              <p className="mt-4 leading-8 text-slate-600">

                {item.description}

              </p>

            </div>

          );

        })}

      </div>

      <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-10 text-center shadow-sm">

        <h3 className="text-2xl font-bold text-slate-900">

          Cada marketplace possui desafios diferentes.

        </h3>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

          Nossa atuação considera as particularidades de cada plataforma,
          adaptando processos, tecnologia e estratégia para construir operações
          eficientes, organizadas e preparadas para crescer.

        </p>

        <div className="mt-8">

          <Button
            href="#contact"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Conversar com um Especialista
          </Button>

        </div>

      </div>

    </section>
  );
}
