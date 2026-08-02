import {
  BrainCircuit,
  Workflow,
  Cpu,
  TrendingUp,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "Estratégia",
    description:
      "Cada projeto começa com uma análise detalhada da operação para identificar oportunidades, definir prioridades e construir um plano de crescimento consistente.",
    icon: BrainCircuit,
  },
  {
    title: "Processos",
    description:
      "Estruturamos fluxos operacionais mais eficientes, reduzindo retrabalho, aumentando produtividade e trazendo mais controle para a operação.",
    icon: Workflow,
  },
  {
    title: "Tecnologia",
    description:
      "Integramos marketplaces, ERPs, HUBs e outras soluções para criar operações conectadas, organizadas e preparadas para evoluir.",
    icon: Cpu,
  },
  {
    title: "Evolução Contínua",
    description:
      "Acompanhamos a evolução da operação com foco em melhoria contínua, adaptação às mudanças do mercado e crescimento sustentável.",
    icon: TrendingUp,
  },
];

export default function Differentials() {
  return (
    <section
      id="differentials"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionTitle
        eyebrow="NOSSA FORMA DE TRABALHAR"
        title="Resultados consistentes começam com uma operação bem estruturada."
        description="Acreditamos que crescimento sustentável é consequência da combinação entre estratégia, processos bem definidos e tecnologia aplicada à realidade de cada empresa."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
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
          Mais do que implementar ferramentas.
        </h3>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Nosso trabalho é estruturar operações capazes de acompanhar o
          crescimento da empresa. Unimos estratégia, processos e tecnologia para
          criar uma base sólida que permita escalar com eficiência, organização
          e segurança.
        </p>
      </div>
    </section>
  );
}
