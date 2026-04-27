import Image from "next/image";
import { getDictionary } from "@/i18n/dictionaries";

export default async function PlatformsToolsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.platforms_tools.title}
      </h1>
      <p className="text-slate-600 mb-8 leading-relaxed">
        {dict.platforms_tools.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dict.platforms_tools.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative w-full aspect-[16/10] bg-slate-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                {item.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
