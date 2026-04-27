import { getDictionary } from "@/i18n/dictionaries";

export default async function EmiPlanPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const p = dict.emi_plan;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">{p.title}</h1>

      {/* Basic Info */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-1">{p.plan_name}</h2>
        <p className="text-sm text-slate-500 mb-6 italic">{p.plan_name_en}</p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {(
            [
              ["period", p.period],
              ["applicant", p.applicant],
              ["institution", p.institution],
              ["category", p.category],
            ] as const
          ).map(([key, value]) => (
            <div key={key}>
              <dt className="text-sm font-medium text-slate-500">
                {p.info_labels[key]}
              </dt>
              <dd className="mt-0.5 text-slate-800 font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Members */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          {p.members_title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="pb-2 pr-4 font-semibold text-slate-500">#</th>
                <th className="pb-2 pr-4 font-semibold text-slate-500">
                  {lang === "zh-TW" ? "姓名" : "Name"}
                </th>
                <th className="pb-2 pr-4 font-semibold text-slate-500">
                  {lang === "zh-TW" ? "學校／單位" : "Institution"}
                </th>
                <th className="pb-2 font-semibold text-slate-500">
                  {lang === "zh-TW" ? "職稱" : "Title"}
                </th>
              </tr>
            </thead>
            <tbody>
              {p.members.map((m, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="py-2.5 pr-4 text-slate-400">{i + 1}</td>
                  <td className="py-2.5 pr-4 font-medium text-slate-800">
                    {m.name}
                  </td>
                  <td className="py-2.5 pr-4 text-slate-600">{m.school}</td>
                  <td className="py-2.5 text-slate-600">{m.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Theme & Goals */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-2">
          {p.theme_title}
        </h2>
        <p className="text-blue-700 font-semibold mb-6">{p.theme}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {p.goals.map((g, i) => (
            <div
              key={i}
              className="border border-slate-100 rounded-lg p-5 bg-slate-50"
            >
              <h3 className="font-semibold text-slate-800 mb-2">{g.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          {p.activities_title}
        </h2>
        <div className="space-y-5">
          {p.activities.map((a) => (
            <div
              key={a.number}
              className="flex gap-4 border border-slate-100 rounded-lg p-5 bg-slate-50"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {a.number}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800">{a.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    {a.type}
                  </span>
                  <span className="text-xs text-slate-500">{a.time}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {a.description}
                </p>
                {a.speaker && (
                  <p className="text-xs text-slate-500 mt-2">
                    {lang === "zh-TW" ? "講者：" : "Speaker: "}
                    {a.speaker}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expected Outputs */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          {p.outputs_title}
        </h2>
        <ul className="space-y-3">
          {p.outputs.map((o, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-slate-700 leading-relaxed"
            >
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                {i + 1}
              </span>
              {o}
            </li>
          ))}
        </ul>
      </div>

      {/* Expected Outcomes */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          {p.outcomes_title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Qualitative */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-3">
              {p.qualitative_title}
            </h3>
            <ul className="space-y-2">
              {p.qualitative.map((q, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-600 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-400"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantitative */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-3">
              {p.quantitative_title}
            </h3>
            <ul className="space-y-2">
              {p.quantitative.map((q, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-600 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-green-400"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Download */}
      <div className="text-center">
        <a
          href="/【靜宜-朱學亭】115年雙語教育跨校社群計畫書-中山大學EMI.docx"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {p.download_label}
        </a>
      </div>
    </div>
  );
}
