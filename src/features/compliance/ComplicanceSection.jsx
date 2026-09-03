import { Card, CardContent, CardDescription, CardTitle } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";

export default function ComplicanceSection() {
  const complianceFeatures = [
    {
      icon: <Icons.Shield className="w-6 h-6" />,
      title: "Legalitas & Administrasi Resmi (CV)",
      desc: "Didukung penuh dokumen legalitas usaha (NIB & NPWP). Kami menyediakan Kontrak Kerja (MOU/SPK), BAST, dan invoices resmi untuk kebutuhan perpajakan & audit internal.",
    },
    {
      icon: <Icons.Lock className="w-6 h-6" />,
      title: "Kerahasiaan Terjamin (Strict NDA)",
      desc: "Seluruh proyek B2B dan talent augmentation dilindungi oleh Non-Disclosure Agreement (NDA). Data sensitif dan ide bisnis perusahaan Anda dijamin aman 100%.",
    },
    {
      icon: <Icons.Code className="w-6 h-6" />,
      title: "100% Kepemilikan Hak Cipta Kode",
      desc: "Setelah peluncuran, seluruh source code, repositori Git, dan dokumentasi arsitektur sistem sepenuhnya diserahkan menjadi aset milik perusahaan Anda.",
    },
    {
      icon: <Icons.Users className="w-6 h-6" />,
      title: "Dedicated PM & Skema Fleksibel",
      desc: "Komunikasi terpusat melalui Dedicated Project Manager. Kami mendukung pembayaran berbasis termin proyek maupun kontrak bulanan (Dedicated Developer).",
    },
  ];

  return (
    <>
      <section className="bg-dark-secondary" id="Compliance">
        <div className="section-container py-24 md:py-28">
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute top-0 left-0 h-1 w-24 bg-secondary"></div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-line pb-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-line text-secondary-soft mb-4">
                  <Icons.Shield className="w-4 h-4" />
                  Kemitraan Aman & Transparan
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-dark-text">
                  Standar Compliance & Legalitas <br className="hidden md:block" />
                  <span className="text-secondary-soft">Khusus Klien Korporat & B2B</span>
                </h2>
              </div>

              <p className="text-dark-text-mute text-sm max-w-md">
                Kami memahami ketatnya proses pengadaan (procurement) di perusahaan Anda. Seluruh
                kerja sama disusun terstruktur, legal, dan aman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceFeatures.map((item, idx) => (
                <Card key={idx} variant="glass" className="transition hover:-translate-y-0.5 hover:border-secondary/60">
                  <CardContent className="my-3">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 w-fit rounded-xl border border-line bg-dark-surface text-secondary">
                        {item.icon}
                      </div>
                      <span className="font-mono text-xs text-dark-text-faint">
                        0{idx + 1}
                      </span>
                    </div>

                    <CardTitle className="text-dark-text">{item.title}</CardTitle>

                    <CardDescription className="text-dark-text-mute mt-2">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
