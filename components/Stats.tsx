import {
  BrainCircuit,
  Workflow,
  Cpu,
  LineChart,
} from "lucide-react";

const pillars = [
  {
    title: "Estratégia",
    description:
      "Planejamento comercial orientado por objetivos e indicadores.",
    icon: BrainCircuit,
  },
  {
    title: "Processos",
    description:
      "Operações estruturadas para reduzir retrabalho e aumentar eficiência.",
    icon: Workflow,
  },
  {
    title: "Tecnologia",
    description:
      "Integração entre plataformas para automatizar e simplificar a operação.",
    icon: Cpu,
  },
  {
    title: "Performance",
    description:
      "Acompanhamento contínuo para evolução consistente da operação.",
    icon: LineChart,
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

      <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-14">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            NOSSA METODOLOGIA
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            Crescimento sustentável exige uma operação bem estruturada.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Acreditamos que resultados consistentes são consequência da união
            entre estratégia, processos, tecnologia e acompanhamento contínuo.
            Esses são os pilares que orientam cada projeto desenvolvido pela
            Vanzashop.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {pillars.map((pillar) => {

            const Icon = pillar.icon;

            return (

              <div
                key={pillar.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-200">

                  <Icon className="h-7 w-7" />

                </div>

                <h3 className="mt-6 text-2xl font-bold">

                  {pillar.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-300">

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
