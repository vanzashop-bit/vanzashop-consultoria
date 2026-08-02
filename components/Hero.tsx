import {
  ArrowRight,
  BrainCircuit,
  LineChart,
  ShieldCheck,
} from "lucide-react";

import Button from "./Button";

const features = [
  {
    title: "Estratégia",
    icon: BrainCircuit,
  },
  {
    title: "Processos",
    icon: ShieldCheck,
  },
  {
    title: "Tecnologia",
    icon: LineChart,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Background */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-20 px-4 py-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">

        {/* Texto */}

        <div>

          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">

            Estratégia • Operação • Tecnologia

          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-950 lg:text-6xl">

            Estruturamos operações de marketplace preparadas para crescer.

          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">

            A Vanzashop atua ao lado de empresas que desejam profissionalizar
            suas operações, conectar processos, integrar tecnologias e criar
            uma estrutura preparada para crescer com eficiência e segurança.

          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <Button
              href="https://wa.me/5554999981574"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Agendar Diagnóstico
            </Button>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (

                <div
                  key={feature.title}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >

                  <Icon className="h-4 w-4 text-blue-600" />

                  {feature.title}

                </div>

              );

            })}

          </div>

        </div>

        {/* Dashboard */}

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">

                Nossa atuação

              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">

                Crescimento estruturado

              </h2>

            </div>

            <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">

              VANZASHOP

            </div>

          </div>

          {/* Gráfico */}

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <div className="mb-4 flex items-center justify-between">

              <span className="text-sm font-medium text-slate-500">

                Evolução da Operação

              </span>

              <span className="text-sm font-semibold text-green-600">

                Crescimento Contínuo

              </span>

            </div>

            <svg
              viewBox="0 0 320 140"
              className="h-40 w-full"
            >

              <path
                d="M10 120 C70 115 90 95 140 85 C180 75 220 45 310 20"
                stroke="#2563EB"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />

              <circle cx="310" cy="20" r="6" fill="#2563EB" />

            </svg>

          </div>

          <div className="mt-8 space-y-4">

            {[
              "Estratégia personalizada",
              "Processos estruturados",
              "Integrações inteligentes",
              "Automação operacional",
              "Escalabilidade",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4"
              >

                <div className="h-2.5 w-2.5 rounded-full bg-green-500" />

                <span className="font-medium text-slate-800">

                  {item}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
