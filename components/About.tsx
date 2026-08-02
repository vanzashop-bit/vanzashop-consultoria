import {
  ArrowRight,
  BarChart3,
  Workflow,
  Settings2,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const pillars = [
  {
    title: "Estratégia de Crescimento",
    description:
      "Construímos planos personalizados para aumentar competitividade, melhorar resultados e preparar sua operação para crescer de forma sustentável.",
    icon: BarChart3,
  },
  {
    title: "Processos e Operação",
    description:
      "Estruturamos fluxos operacionais que reduzem retrabalho, aumentam produtividade e tornam sua operação mais eficiente.",
    icon: Workflow,
  },
  {
    title: "Tecnologia e Integrações",
    description:
      "Conectamos marketplaces, ERPs, HUBs e outras ferramentas para criar uma operação integrada, organizada e preparada para escalar.",
    icon: Settings2,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">

        <div>

          <SectionTitle
            eyebrow="QUEM SOMOS"
            title="Estratégia, tecnologia e processos para operações de marketplace."
            description="A Vanzashop ajuda empresas a estruturar, organizar e escalar suas operações de venda através de uma abordagem estratégica, focada em eficiência operacional e crescimento sustentável."
          />

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">

            <p className="text-lg leading-8 text-slate-600">

              Mais do que implantar plataformas ou organizar cadastros, atuamos
              como parceiros estratégicos na evolução da operação dos nossos
              clientes, conectando pessoas, processos e tecnologia para criar
              negócios preparados para crescer.

            </p>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-orange-600">

              Conheça nossa metodologia de trabalho

              <ArrowRight className="h-4 w-4" />

            </div>

          </div>

        </div>

        <div className="grid gap-5">

          {pillars.map((pillar) => {

            const Icon = pillar.icon;

            return (

              <div
                key={pillar.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">

                  <Icon className="h-7 w-7" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">

                  {pillar.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-600">

                  {pillar.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
