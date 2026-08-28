import { Card, CardContent, CardDescription, CardTitle } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";

const benefits = [
  {
    icon: Icons.ProblemSolving,
    title: "Problem Solving",
    description:
      "Kami menerjemahkan tantangan bisnis Anda menjadi solusi digital yang tepat sasaran — bukan sekadar menulis baris kode.",
  },
  {
    icon: Icons.Customization,
    title: "Customization",
    description:
      "Setiap software kami bangun mengikuti alur kerja dan kebutuhan spesifik Anda, bukan template umum yang dipaksakan.",
  },
  {
    icon: Icons.Efficiency,
    title: "Efficiency",
    description: "Kami mengurangi proses manual yang rawan kesalahan dan mempercepat operasional harian bisnis Anda.",
  },
  {
    icon: Icons.Scalability,
    title: "Scalability",
    description:
      "Arsitektur dirancang agar sistem dapat tumbuh bersama bisnis Anda, tanpa perlu dibangun ulang dari nol.",
  },
  {
    icon: Icons.TechnicalExpertise,
    title: "Technical Expertise",
    description:
      "Tim engineer berpengalaman menangani development end-to-end, sehingga Anda tak perlu membangun tim internal dari awal.",
  },
  {
    icon: Icons.LongTermValue,
    title: "Long-Term Value",
    description:
      "Kami membangun software yang terus memberi nilai jangka panjang, bukan hanya rampung sesuai tenggat waktu.",
  },
];

export default function ValuePropositionSection() {
  return (
    <section id="ValueProposition">
      <div className="section-container py-20 flex flex-col justify-center">
        <div className="mb-2 max-w-2xl">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase">
            Mengapa Fractabase Interactive
          </span>

          <h2 className="mt-3 mb-4 text-xl md:text-4xl lg:text-5xl text-primary-color font-bold">
            Solusi interaktif yang membuat bisnis Anda bekerja lebih baik dan tumbuh.
          </h2>

          <p className="mb-5 text-lg lg:text-2xl text-secondary-color leading-normal">
            Kami hadir sebagai mitra teknologi yang memikirkan hasil bisnis Anda — bukan hanya kode yang selesai tepat
            waktu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                variant="default"
                className="p-2 relative after:transition after:w-24 after:h-24 after:absolute after:border-2 after:border-secondary after:rounded-xl after:rotate-45 after:-top-9 after:-right-9 hover:after:rotate-135"
              >
                <CardContent className="py-6">
                  <Icon className="mb-4  w-7 h-7 text-primary" />
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
