import { BadgeCheck, LineChart, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  { title: "Estratégia comercial", icon: LineChart },
  { title: "Operação mais clara", icon: ShieldCheck },
  { title: "Atendimento especializado", icon: BadgeCheck },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
            Consultoria para marketplaces • crescimento com estratégia
          </span>

          <h1 className="mt-8 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Aumente suas vendas com consultoria especializada para marketplaces.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            A VANZASHOP ajuda empresas a estruturar melhor sua operação comercial, performance e presença em canais como Mercado Livre e Shopee.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/5554999981574"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Solicitar consultoria
            </a>
            <a
              href="#consultoria"
              className="rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Ver soluções
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  <Icon className="h-4 w-4 text-blue-600" />
                  {feature.title}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Serviço</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">Estrutura para vender melhor</h2>
            </div>
            <div className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700">Vanzashop</div>
          </div>

          <div className="mt-8 space-y-4">
            {[
              { name: "Gestão de marketplace", status: "Consultoria estratégica" },
              { name: "Automação e operação", status: "Mais eficiência" },
              { name: "Posicionamento comercial", status: "Mais conversão" },
              { name: "ERP Tiny e integração", status: "Mais controle" },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span className="font-medium text-slate-900">{item.name}</span>
                <span className="text-sm font-semibold text-blue-600">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
