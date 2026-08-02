type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {/* Badge */}

      <div
        className={`inline-flex ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
          {eyebrow}
        </span>
      </div>

      {/* Título */}

      <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>

      {/* Descrição */}

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        {description}
      </p>

      {/* Linha decorativa */}

      <div
        className={`mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
