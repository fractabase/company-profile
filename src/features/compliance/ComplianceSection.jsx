import { Card, CardContent, CardDescription, CardTitle } from "../../components/common/Card";
import { compliance } from "../../data/compliance";

export default function ComplianceSection() {
  return (
    <>
      <section className="bg-dark-secondary" id="Compliance">
        <div className="section-container py-24 md:py-28">
          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-line pb-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg font-semibold border border-line text-secondary-soft mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Kemitraan Aman & Transparan
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-dark-text">
                  Standar Compliance & Legalitas <br className="hidden md:block" />
                  <span className="text-secondary-soft">Khusus Klien Korporat & B2B</span>
                </h2>
              </div>

              <p className="text-dark-text-mute text-sm max-w-md">
                Kami memahami ketatnya proses pengadaan (procurement) di perusahaan Anda. Seluruh kerja sama disusun
                terstruktur, legal, dan aman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {compliance.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={idx}
                    variant="glass"
                    padding="md"
                    className="transition hover:-translate-y-0.5 hover:border-secondary/60"
                  >
                    <CardContent className="my-3">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 w-fit rounded-xl border border-line bg-dark-surface text-secondary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-dark-text-faint">0{idx + 1}</span>
                      </div>

                      <CardTitle className="text-dark-text">{item.title}</CardTitle>

                      <CardDescription className="text-dark-text-mute mt-2">{item.desc}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
