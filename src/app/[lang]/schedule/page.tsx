import { getDictionary } from "@/i18n/dictionaries";
import Image from "next/image";
import mapImg from "@/img/map.jpg";

export default async function SchedulePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const iconMap: Record<string, string> = {
    car: "🚗",
    train: "🚆",
    bus: "🚌",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.schedule.title}
      </h1>
      <p className="text-slate-600 mb-8">{dict.schedule.description}</p>

      {/* Schedule info + Map side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left: Schedule details */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-slate-500">
                {dict.schedule.label_date}
              </dt>
              <dd className="mt-1 text-lg text-slate-800 font-semibold">
                {dict.schedule.date}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">
                {dict.schedule.label_time}
              </dt>
              <dd className="mt-1 text-lg text-slate-800 font-semibold">
                {dict.schedule.time}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">
                {dict.schedule.label_location}
              </dt>
              <dd className="mt-1 text-lg text-slate-800 font-semibold">
                {dict.schedule.location}
              </dd>
            </div>
          </dl>
        </div>

        {/* Right: Map */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            {dict.schedule.map_title}
          </h2>
          <Image
              src={mapImg}
              alt="Providence University Ren-Yuan Building"
              className="w-full rounded-lg"
            />
        </div>
      </div>

      {/* Transportation section */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            {dict.schedule.transportation_title}
          </h2>
          <a
            href={dict.schedule.transportation_source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            {dict.schedule.transportation_source_label} ↗
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.schedule.transportation.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-100 rounded-lg p-5 bg-slate-50"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                <span className="mr-2">{iconMap[item.icon] || "📍"}</span>
                {item.mode}
              </h3>
              <ul className="space-y-2">
                {item.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-slate-400"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
