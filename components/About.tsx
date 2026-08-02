import { ArrowRight, BarChart3, Sparkles, Workflow } from "lucide-react";
import SectionTitle from "./SectionTitle";

const pillars = [
  {
    title: "Consultoria estratégica",
    description: "Apoio especializado para marcas e sellers que querem crescer com mais performance e clareza.",
    icon: Workflow,
  },
  {
    title: "Gestão comercial",
    description: "Organização, operação e posicionamento para gerar mais eficiência e resultado.",
    icon: BarChart3,
  },
  {
    title: "Experiência premium",
    description: "Uma abordagem mais profissional, objetiva e pensada para quem quer vender melhor.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Sobre a VANZASHOP"
            title="Consultoria focada em crescimento e venda"
            description="A VANZASHOP atua para empresas que desejam estruturar melhor seus processos e ampliar sua presença em marketplaces com mais estratégia."
          />
          <div className="mt-8 space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-600">
              O foco é ajudar o cliente a vender melhor, com mais organização, mais clareza operacional e uma estratégia mais alinhada ao mercado.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
              Descubra como a VANZASHOP pode apoiar seu negócio
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
