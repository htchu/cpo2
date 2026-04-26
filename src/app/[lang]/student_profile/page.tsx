import { getDictionary } from "@/i18n/dictionaries";

function PieChart({
  title,
  segments,
}: {
  title: string;
  segments: Array<{ label: string; value: number; color: string }>;
}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const cx = 100;
  const cy = 100;
  const r = 80;

  // Build SVG arc paths
  let currentAngle = -90; // start from top
  const paths = segments.map((seg) => {
    const angle = (seg.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;

    // Label position at mid-angle
    const midRad = ((startAngle + endAngle) / 2) * (Math.PI / 180);
    const labelR = r * 0.6;
    const lx = cx + labelR * Math.cos(midRad);
    const ly = cy + labelR * Math.sin(midRad);
    const pct = Math.round((seg.value / total) * 100);

    return { d, color: seg.color, lx, ly, pct, value: seg.value };
  });

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
        {title}
      </h3>
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          {paths.map((p, i) => (
            <path key={i} d={p.d} fill={p.color} stroke="white" strokeWidth="2" />
          ))}
          {paths.map((p, i) => (
            <text
              key={`t-${i}`}
              x={p.lx}
              y={p.ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              {p.pct}%
            </text>
          ))}
        </svg>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: seg.color }}
              />
              <span className="text-sm text-slate-600">
                {seg.label} ({seg.value})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function StudentProfilePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const sp = dict.student_profile;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">{sp.title}</h1>
      <p className="text-slate-600 mb-4 leading-relaxed">{sp.description}</p>
      <p className="text-lg font-semibold text-blue-600 mb-8">
        {sp.total_label}: {sp.total}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {sp.charts.map((chart, i) => (
          <PieChart key={i} title={chart.title} segments={chart.segments} />
        ))}
      </div>
    </div>
  );
}
