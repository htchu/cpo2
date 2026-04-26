import { getDictionary } from "@/i18n/dictionaries";

export default async function FeedbackPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const fb = dict.feedback;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">{fb.title}</h1>
      <p className="text-slate-600 mb-8 leading-relaxed">{fb.description}</p>

      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-8">
        <ol className="space-y-4">
          {fb.instructions.map((instruction, i) => (
            <li key={i} className="flex items-start gap-4 text-slate-600">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </span>
              <span className="pt-0.5">{instruction}</span>
            </li>
          ))}
        </ol>
      </div>

      <a
        href={fb.file}
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
        {fb.download_label}
      </a>
    </div>
  );
}
