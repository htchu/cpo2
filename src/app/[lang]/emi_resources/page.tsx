import { getDictionary } from "@/i18n/dictionaries";

export default async function EmiResourcesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.emi_resources.title}
      </h1>
      <p className="text-slate-600 mb-8 leading-relaxed">
        {dict.emi_resources.description}
      </p>
    </div>
  );
}
