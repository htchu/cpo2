import { getDictionary } from "@/i18n/dictionaries";

export default async function EmiPlanPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.emi_plan.title}
      </h1>
      <p className="text-slate-600 mb-8 leading-relaxed">
        {dict.emi_plan.description}
      </p>

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
        {dict.emi_plan.download_label}
      </a>
    </div>
  );
}
