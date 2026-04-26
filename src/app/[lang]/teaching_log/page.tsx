import { getDictionary } from "@/i18n/dictionaries";

export default async function TeachingLogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.teaching_log.title}
      </h1>
      <p className="text-slate-600 mb-8 leading-relaxed">
        {dict.teaching_log.description}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {dict.teaching_log.materials.map((mat) => (
          <a
            key={mat.code}
            href={mat.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z" />
                  <path d="M8 12h8v1.5H8zm0 3h8v1.5H8zm0 3h5v1.5H8z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-xs font-mono text-blue-600 font-semibold">
                  {mat.code}
                </span>
                <h3 className="text-sm font-semibold text-slate-800 mt-0.5 group-hover:text-blue-600 transition-colors">
                  {mat.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{mat.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
