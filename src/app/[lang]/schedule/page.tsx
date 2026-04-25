import { getDictionary } from "@/i18n/dictionaries";

export default async function SchedulePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.schedule.title}
      </h1>
      <p className="text-slate-600 mb-8">{dict.schedule.description}</p>

      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm max-w-md">
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
    </div>
  );
}
