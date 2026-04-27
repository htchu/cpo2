import { getDictionary } from "@/i18n/dictionaries";

export default async function EmiResourcesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { tdc } = dict.emi_resources;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-3">
        {dict.emi_resources.title}
      </h1>
      <p className="text-slate-600 mb-10 leading-relaxed">
        {dict.emi_resources.description}
      </p>

      {/* TDC Section */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
          <h2 className="text-2xl font-bold text-white">{tdc.title}</h2>
          <a
            href={tdc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-100 hover:text-white text-sm mt-1 inline-block"
          >
            {tdc.url} ↗
          </a>
        </div>

        <div className="p-8">
          {/* Intro */}
          <p className="text-slate-600 leading-relaxed mb-8">{tdc.intro}</p>

          {/* Service sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {tdc.sections.map((section, idx) => (
              <a
                key={idx}
                href={section.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-slate-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {section.description}
                </p>
              </a>
            ))}
          </div>

          {/* Contact & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                {tdc.contact.title}
              </h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p>{tdc.contact.address}</p>
                <p>{tdc.contact.phone}</p>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {tdc.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
