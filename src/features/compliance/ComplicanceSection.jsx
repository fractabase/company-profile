import { Card, CardContent, CardDescription, CardTitle } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";

export default function ComplicanceSection() {
  const complianceFeatures = [
    {
      icon: <Icons.Shield className="w-6 h-6 text-primary" />,
      title: "Legalitas & Administrasi Resmi (CV)",
      desc: "Didukung penuh dokumen legalitas usaha (NIB & NPWP). Kami menyediakan Kontrak Kerja (MOU/SPK), BAST, dan invoices resmi untuk kebutuhan perpajakan & audit internal.",
    },
    {
      icon: <Icons.Lock className="w-6 h-6 text-primary" />,
      title: "Kerahasiaan Terjamin (Strict NDA)",
      desc: "Seluruh proyek B2B dan talent augmentation dilindungi oleh Non-Disclosure Agreement (NDA). Data sensitif dan ide bisnis perusahaan Anda dijamin aman 100%.",
    },
    {
      icon: <Icons.Code className="w-6 h-6 text-primary" />,
      title: "100% Kepemilikan Hak Cipta Kode",
      desc: "Setelah peluncuran, seluruh source code, repositori Git, dan dokumentasi arsitektur sistem sepenuhnya diserahkan menjadi aset milik perusahaan Anda.",
    },
    {
      icon: <Icons.Users className="w-6 h-6 text-primary" />,
      title: "Dedicated PM & Skema Fleksibel",
      desc: "Komunikasi terpusat melalui Dedicated Project Manager. Kami mendukung pembayaran berbasis termin proyek maupun kontrak bulanan (Dedicated Developer).",
    },
  ];

  return (
    <>
      <section className="bg-dark-secondary" id="Compliance">
        <div className="section-container my-20">
          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-line pb-8">
              <div>
                <span className="inline-flex px-3 py-1 rounded-full text-md font-semibold bg-primary/15 text-primary border border-primary/30 mb-4">
                  🛡️ Kemitraan Aman & Transparan
                </span>

                <h2 className="text-4xl font-bold text-dark-text">
                  Standar Compliance & Legalitas <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary-soft to-primary-soft">
                    Khusus Klien Korporat & B2B
                  </span>
                </h2>
              </div>

              <p className="text-dark-text-mute text-sm max-w-md">
                Kami memahami ketatnya proses pengadaan (procurement) di perusahaan Anda. Seluruh kerja sama disusun
                terstruktur, legal, dan aman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceFeatures.map((item, idx) => (
                <Card key={idx} variant="glass">
                  <CardContent className="my-3">
                    <div className="p-3 w-fit rounded-xl bg-primary/15 border border-primary/30 mb-4">{item.icon}</div>

                    <CardTitle className="text-dark-text">{item.title}</CardTitle>

                    <CardDescription className="text-dark-text-mute">{item.desc}</CardDescription>
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
