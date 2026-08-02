import {
  ArrowRight,
  BrainCircuit,
  GitBranch,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const reasons = [
  {
    title: "Visão Estratégica",
    description:
      "Cada projeto é desenvolvido a partir da realidade da empresa, considerando objetivos, estrutura operacional e oportunidades de crescimento.",
    icon: BrainCircuit,
  },
  {
    title: "Integração entre Processos",
    description:
      "Conectamos pessoas, processos e tecnologia para criar operações mais organizadas, eficientes e preparadas para evoluir.",
    icon: GitBranch,
  },
  {
    title: "Parceria de Longo Prazo",
    description:
      "Nosso trabalho vai além da implantação. Acompanhamos a evolução da operação e apoiamos decisões ao longo do crescimento do negócio.",
    icon: ShieldCheck,
  },
  {
    title: "Foco em Evolução Contínua",
    description:
      "Cada melhoria implementada cria uma base mais sólida para ampliar resultados com estabilidade, eficiência e escalabilidade.",
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionTitle
        eyebrow="POR QUE A VANZASHOP"
        title="Mais do que uma consultoria. Um parceiro estratégico para a evolução da sua operação."
        description="Acreditamos que crescimento sustentável depende de processos bem estruturados, decisões estratégicas e tecnologia aplicada à realidade de cada empresa."
        center
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">

        {/* Bloco principal */}

        <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">

          <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Nossa filosofia
          </span>

          <h3 className="mt-8 text-4xl font-bold leading-tight">
            Crescimento consistente começa com uma operação bem estruturada.
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Atuamos lado a lado com nossos clientes para desenvolver operações
            capazes de crescer de forma organizada, integrando estratégia,
            processos e tecnologia em uma única direção.
          </p>

          <div className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-200">

            Conheça nossa metodologia

            <ArrowRight className="h-4 w-4" />

          </div>

        </div>

        {/* Cards */}

        <div className="grid gap-5 sm:grid-cols-2">

          {reasons.map((reason) => {

            const Icon = reason.icon;

            return (

              <div
                key={reason.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                  <Icon className="h-7 w-7" />

                </div>

                <h4 className="mt-6 text-xl font-bold text-slate-900">

                  {reason.title}

                </h4>

                <p className="mt-4 leading-8 text-slate-600">

                  {reason.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
