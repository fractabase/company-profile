import { Card, CardContent, CardDescription, CardTitle } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";

const benefits = [
  {
    icon: Icons.ProblemSolving,
    title: "Problem Solving",
    description:
      "Kami mulai dari memahami tantangan bisnis Anda, lalu menerjemahkannya jadi solusi digital yang tepat sasaran.",
  },
  {
    icon: Icons.Customization,
    title: "Customization",
    description: "Kami bangun setiap software mengikuti alur kerja dan kebutuhan spesifik bisnis Anda.",
  },
  {
    icon: Icons.Efficiency,
    title: "Efficiency",
    description:
      "Kami ganti proses manual yang rawan kesalahan dengan sistem yang mempercepat operasional harian bisnis Anda.",
  },
  {
    icon: Icons.Scalability,
    title: "Scalability",
    description:
      "Kami rancang arsitektur sistem agar bisa tumbuh bersama bisnis Anda tanpa perlu dibangun ulang dari nol.",
  },
  {
    icon: Icons.TechnicalExpertise,
    title: "Technical Expertise",
    description:
      "Tim engineer kami menangani development end-to-end, jadi Anda tidak perlu membangun tim internal dari nol.",
  },
  {
    icon: Icons.LongTermValue,
    title: "Long-Term Value",
    description: "Kami bangun software yang terus memberi nilai setelah rilis, bukan cuma rampung tepat waktu.",
  },
];

export default function ValuePropositionSection() {
  return (
    <section id="ValueProposition">
      <div className="section-container my-12 lg:my-20">
        <header className="mb-8 lg:mb-14 border-b border-line-strong">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase">
            -/ Mengapa Fractabase Interactive
          </span>

          <h2 className="mt-3 mb-4 text-2xl md:text-4xl lg:text-5xl text-primary-color font-bold max-w-2xl">
            Solusi interaktif yang membuat bisnis Anda bekerja lebih baik dan tumbuh.
          </h2>

          <p className="mb-5 text-lg lg:text-xl text-secondary-color leading-normal max-w-3xl">
            Kami mengukur keberhasilan proyek dari hasil bisnis Anda, bukan sekadar kode yang selesai tepat waktu.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                variant="default"
                className="p-2 relative after:transition after:w-24 after:h-24 after:absolute after:border-2 after:border-secondary after:rounded-xl after:rotate-45 after:-top-9 after:-right-9 hover:after:rotate-135"
              >
                <CardContent className="lg:py-6">
                  <Icon className="mb-4 w-7 h-7 text-primary" />
                  <CardTitle className="mb-2 pb-1 w-64 border-b border-primary-color/20">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
