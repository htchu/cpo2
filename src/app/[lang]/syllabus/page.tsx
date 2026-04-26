import { getDictionary } from "@/i18n/dictionaries";

export default async function SyllabusPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const s = dict.syllabus;

  const phaseColors = [
    { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-600" },
    { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-600" },
  ];

  const noteColors: Record<string, string> = {
    "螺旋-初探": "bg-blue-100 text-blue-800",
    "螺旋-實作": "bg-blue-100 text-blue-800",
    "螺旋-分析": "bg-blue-100 text-blue-800",
    "螺旋-行動": "bg-blue-100 text-blue-800",
    "實踐行動": "bg-emerald-100 text-emerald-800",
    "回饋": "bg-amber-100 text-amber-800",
    "發展性": "bg-purple-100 text-purple-800",
    "Spiral-Explore": "bg-blue-100 text-blue-800",
    "Spiral-Practice": "bg-blue-100 text-blue-800",
    "Spiral-Analysis": "bg-blue-100 text-blue-800",
    "Spiral-Action": "bg-blue-100 text-blue-800",
    "Action": "bg-emerald-100 text-emerald-800",
    "Feedback": "bg-amber-100 text-amber-800",
    "Development": "bg-purple-100 text-purple-800",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{s.title}</h1>
      <p className="text-blue-600 font-medium mb-8">{s.plan_name}</p>

      {/* Course Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {(
          [
            [s.info.label_instructor, s.info.instructor],
            [s.info.label_department, s.info.department],
            [s.info.label_course, s.info.course],
            [s.info.label_semester, s.info.semester],
            [s.info.label_credits, s.info.credits],
            [s.info.label_class, s.info.class_name],
            [s.info.label_students, s.info.students],
            [s.info.label_venue, s.info.venue],
            [s.info.label_attribute, s.info.attribute],
          ] as const
        ).map(([label, value]) => (
          <div
            key={label}
            className="bg-white border border-slate-200 rounded-lg p-4"
          >
            <dt className="text-xs font-medium text-slate-500 uppercase">
              {label}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-slate-800">
              {value}
            </dd>
          </div>
        ))}
      </div>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {s.summary_title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{s.summary}</p>
      </section>

      {/* Course Design Phases */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          {s.design_title}
        </h2>
        {s.phases.map((phase, pi) => {
          const color = phaseColors[pi % phaseColors.length];
          return (
            <div
              key={pi}
              className={`${color.bg} ${color.border} border rounded-xl p-6 mb-6`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`w-8 h-8 ${color.badge} text-white rounded-full flex items-center justify-center text-sm font-bold`}
                >
                  {pi + 1}
                </span>
                <h3 className="text-lg font-semibold text-slate-800">
                  {phase.title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">{phase.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {phase.steps.map((step, si) => (
                  <div
                    key={si}
                    className="bg-white/70 rounded-lg p-4 border border-white"
                  >
                    <h4 className="font-semibold text-slate-800 text-sm mb-1">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Weekly Schedule Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          {s.weekly_title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-4 py-3 text-left text-sm font-medium w-16">
                  {s.weekly_headers.week}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {s.weekly_headers.topic}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {s.weekly_headers.content}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium w-28">
                  {s.weekly_headers.note}
                </th>
              </tr>
            </thead>
            <tbody>
              {s.weeks.map((week, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <td className="px-4 py-3 text-sm text-slate-800 font-medium">
                    {week.week}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-800 font-medium">
                    {week.topic}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    {week.content}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                        noteColors[week.note] || "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {week.note}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          {s.outcomes_title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {s.outcomes.map((outcome, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {outcome.title}
              </h3>
              <p className="text-slate-600 text-sm">{outcome.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          {s.deliverables_title}
        </h2>
        <ul className="space-y-3">
          {s.deliverables.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
