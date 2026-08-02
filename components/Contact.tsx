import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import Button from "./Button";

const contactItems = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 54 99998-1574",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "vanzashop@vanzashop.com.br",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Caxias do Sul • RS • Brasil",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="grid gap-8 rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

        {/* Texto */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">

            Vamos conversar

          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">

            Sua operação está preparada para crescer?

          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">

            Cada empresa possui desafios diferentes.
            Antes de propor qualquer solução, buscamos entender a realidade da
            sua operação, identificar oportunidades e construir um plano de
            crescimento alinhado aos objetivos do seu negócio.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              href="https://wa.me/5554999981574"
              className="bg-white text-slate-900 hover:bg-slate-100"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Agendar Diagnóstico
            </Button>

            <Button
              href="mailto:vanzashop@vanzashop.com.br"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Enviar E-mail
            </Button>

          </div>

        </div>

        {/* Card */}

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">

              <MessageCircle className="h-7 w-7" />

            </div>

            <div>

              <p className="text-sm text-slate-300">

                Atendimento

              </p>

              <p className="text-xl font-semibold">

                Segunda à Sexta

              </p>

            </div>

          </div>

          <div className="mt-10 space-y-4">

            {contactItems.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >

                  <Icon className="h-5 w-5 text-blue-200" />

                  <div>

                    <p className="text-sm text-slate-400">

                      {item.label}

                    </p>

                    <p className="font-semibold">

                      {item.value}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

            <p className="text-sm text-slate-400">

              Empresa

            </p>

            <p className="mt-1 font-semibold">

              VANZASHOP CONSULTORIA

            </p>

            <p className="mt-3 text-sm text-slate-400">

              CNPJ

            </p>

            <p className="font-semibold">

              38.206.690/0001-02

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
