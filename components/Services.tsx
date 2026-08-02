import {
  BarChart3,
  Bot,
  BrainCircuit,
  GitBranch,
  LineChart,
  Workflow,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Estratégia para Crescimento",
    description:
      "Desenvolvemos estratégias personalizadas para fortalecer a presença da empresa nos marketplaces, aumentar competitividade e criar bases sólidas para expansão.",
    icon: BrainCircuit,
  },
  {
    title: "Gestão da Operação",
    description:
      "Organizamos processos, definimos fluxos operacionais e estruturamos a rotina da operação para aumentar eficiência e controle.",
    icon: Workflow,
  },
  {
    title: "Automação de Processos",
    description:
      "Reduzimos atividades manuais através da automação de tarefas, permitindo uma operação mais ágil, segura e produtiva.",
    icon: Bot,
  },
  {
    title: "Integrações Tecnológicas",
    description:
      "Conectamos marketplaces, ERPs, HUBs e demais plataformas para criar um ecossistema integrado e preparado para crescer.",
    icon: GitBranch,
  },
  {
    title: "Inteligência de Dados",
    description:
      "Transformamos indicadores em informações estratégicas para apoiar decisões e identificar oportunidades de melhoria contínua.",
    icon: LineChart,
  },
  {
    title: "Escalabilidade Operacional",
    description:
      "Preparamos empresas para crescer com organização, processos estruturados e tecnologia alinhada às necessidades do negócio.",
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionTitle
        eyebrow="SOLUÇÕES"
        title="Transformamos operações em estruturas preparadas para crescer."
        description="Nossa atuação vai além da consultoria tradicional. Trabalhamos lado a lado com nossos clientes para desenvolver operações mais eficientes, integradas e preparadas para acompanhar o crescimento do negócio."
        center
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {services.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.title}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                <Icon className="h-7 w-7" />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">

                {service.title}

              </h3>

              <p className="mt-4 leading-8 text-slate-600">

                {service.description}

              </p>

            </div>

          );

        })}

      </div>
    </section>
  );
}
