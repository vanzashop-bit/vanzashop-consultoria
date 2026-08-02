import SectionTitle from "./SectionTitle";
import {
  BarChart3,
  Workflow,
  Bot,
  Puzzle,
  LineChart,
  Store,
  Settings2,
  ShieldCheck,
} from "lucide-react";

const areas = [
  {
    title: "Estratégia Comercial",
    description:
      "Planejamento para aumentar competitividade, melhorar posicionamento e impulsionar resultados nos marketplaces.",
    icon: BarChart3,
  },
  {
    title: "Gestão Operacional",
    description:
      "Organização de processos, padronização de rotinas e estruturação da operação para maior eficiência.",
    icon: Workflow,
  },
  {
    title: "Automação",
    description:
      "Redução de tarefas manuais através da automação de processos e fluxos operacionais.",
    icon: Bot,
  },
  {
    title: "Integrações",
    description:
      "Conectamos marketplaces, ERPs, HUBs e outras plataformas para criar uma operação integrada.",
    icon: Puzzle,
  },
  {
    title: "Business Intelligence",
    description:
      "Transformamos dados em informações estratégicas para apoiar decisões e identificar oportunidades.",
    icon: LineChart,
  },
  {
    title: "Expansão de Canais",
    description:
      "Estruturamos operações preparadas para atuar em diferentes marketplaces de forma organizada.",
    icon: Store,
  },
  {
    title: "Otimização de Processos",
    description:
      "Revisamos fluxos internos para reduzir gargalos e aumentar produtividade.",
    icon: Settings2,
  },
  {
    title: "Governança Operacional",
    description:
      "Criamos processos consistentes que garantem estabilidade e sustentam o crescimento da operação.",
    icon: ShieldCheck,
  },
];

export default function Areas() {
  return (
    <section
      id="areas"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionTitle
        eyebrow="ÁREAS DE ATUAÇÃO"
        title="Soluções para estruturar e escalar operações de marketplace."
        description="Atuamos de forma estratégica em todas as etapas da operação, unindo pessoas, processos e tecnologia para criar negócios mais eficientes e preparados para crescer."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((area) => {
          const Icon = area.icon;

          return (
            <div
              key={area.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
