import { getDictionary } from "@/i18n/dictionaries";

export default async function TeachingMethodsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const tm = dict.teaching_methods;

  const colors = [
    { bg: "bg-blue-50", border: "border-blue-200", icon: "bg-blue-600", dot: "bg-blue-500" },
    { bg: "bg-amber-50", border: "border-amber-200", icon: "bg-amber-600", dot: "bg-amber-500" },
    { bg: "bg-emerald-50", border: "border-emerald-200", icon: "bg-emerald-600", dot: "bg-emerald-500" },
    { bg: "bg-purple-50", border: "border-purple-200", icon: "bg-purple-600", dot: "bg-purple-500" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">{tm.title}</h1>
      <p className="text-slate-600 mb-10 leading-relaxed">{tm.description}</p>

      <div className="space-y-8">
        {tm.methods.map((method, i) => {
          const c = colors[i % colors.length];
          return (
            <div
              key={i}
              className={`${c.bg} ${c.border} border rounded-xl p-6 md:p-8`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`w-9 h-9 ${c.icon} text-white rounded-full flex items-center justify-center text-sm font-bold`}
                >
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    {method.title}
                  </h2>
                  <span className="text-sm text-slate-500">
                    {method.subtitle}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 mt-3 mb-5 leading-relaxed">
                {method.description}
              </p>
              <ul className="space-y-2">
                {method.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span
                      className={`mt-2 w-2 h-2 ${c.dot} rounded-full shrink-0`}
                    />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
