import {
  ArrowRight,
  BarChart3,
  Workflow,
 Bot,
  Puzzle,
  LineChart,
  TrendingUp,
} from "lucide-react";

const solutions = [
  {
    title: "Estratégia para Marketplaces",
    description:
      "Planejamento comercial, posicionamento e definição de estratégias para aumentar competitividade e acelerar resultados.",
    icon: TrendingUp,
  },
  {
    title: "Gestão da Operação",
    description:
      "Organizamos processos, padronizamos rotinas e estruturamos operações preparadas para crescer com eficiência.",
    icon: Workflow,
  },
  {
    title: "Automação de Processos",
    description:
      "Reduzimos atividades manuais através da automação de fluxos, aumentando produtividade e reduzindo falhas operacionais.",
    icon: Bot,
  },
  {
    title: "Integrações Tecnológicas",
    description:
      "Conectamos marketplaces, ERPs, HUBs e demais plataformas para criar um ecossistema operacional integrado.",
    icon: Puzzle,
  },
  {
    title: "Business Intelligence",
    description:
      "Transformamos dados em informações estratégicas para apoiar decisões e identificar oportunidades de crescimento.",
    icon: LineChart,
  },
  {
    title: "Escalabilidade",
    description:
      "Estruturamos operações capazes de acompanhar o crescimento da empresa com estabilidade, organização e controle.",
    icon: BarChart3,
  },
];

export default function Consultoria() {
  return (
    <section
      id="consultoria"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-12 lg:p-16">

        <div className="max-w-3xl">

          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Consultoria Estratégica
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight">
            Estruturamos operações preparadas para crescer.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Atuamos lado a lado com empresas que desejam profissionalizar suas
            operações em marketplaces, conectando estratégia, processos,
            tecnologia e gestão para construir negócios mais eficientes,
            organizados e escaláveis.
          </p>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/10 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/15"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-100">

                  <Icon className="h-7 w-7" />

                </div>

                <h3 className="mt-6 text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-300">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="https://wa.me/5554999981574"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
          >
            Solicitar Diagnóstico

            <ArrowRight className="h-4 w-4" />

          </a>

        </div>

      </div>
    </section>
  );
}
