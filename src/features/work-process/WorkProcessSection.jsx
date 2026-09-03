import { Icons } from "../../components/common/Icons";

const steps = [
  {
    num: "01",
    icon: <Icons.ProblemSolving className="w-5 h-5" />,
    title: "Konsultasi & Kebutuhan (Discovery)",
    desc: "Diskusi mendalam untuk memahami masalah bisnis, analisis kebutuhan, dan menentukan scope proyek.",
  },
  {
    num: "02",
    icon: <Icons.Customization className="w-5 h-5" />,
    title: "Perancangan UI/UX & Arsitektur (Design)",
    desc: "Pembuatan wireframe, desain antarmuka modern yang ramah pengguna, dan alur arsitektur sistem.",
  },
  {
    num: "03",
    icon: <Icons.Code className="w-5 h-5" />,
    title: "Pengembangan & Pengujian (Development & QA)",
    desc: "Penulisan kode berspesifikasi tinggi diikuti pengujian ketat (quality assurance) untuk memastikan bebas bug.",
  },
  {
    num: "04",
    icon: <Icons.Check className="w-5 h-5" />,
    title: "Peluncuran & Pendampingan (Deployment & Support)",
    desc: "Aplikasi resmi dirilis ke server/store, disertai garansi pasca-peluncuran dan panduan penggunaan.",
  },
];

export default function WorkProcessSection() {
  return (
    <section id="WorkProcess">
      <div className="section-container my-12 lg:my-20">
        <header className="text-center mb-8 md:mb-12 pb-5 border-b border-line-strong">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary">-/ How We Work</span>

          <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-primary-color">
            4 Langkah Mudah Memulai Proyek Bersama Kami
          </h2>

          <p className="mt-3 text-lg lg:text-xl text-secondary-color max-w-xl mx-auto leading-relaxed">
            Alur kerja terstruktur dari awal ide hingga produk matang — transparan, terukur, dan aman untuk bisnis Anda.
          </p>
        </header>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute left-7 top-0 bottom-4 w-px -translate-x-1/2 bg-secondary md:left-1/2"
          />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;

            return (
              <li
                key={step.num}
                className="group relative pl-16 py-4 lg:py-12 md:grid md:grid-cols-2 md:items-center md:pl-0 md:py-8 lg:even:text-right"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-7 top-4 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-secondary text-dark font-mono font-bold shadow-sm ring-4 ring-background dark:ring-dark-surface transition-transform duration-300 group-hover:scale-105 md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                >
                  {step.num}
                </div>

                <article
                  className={
                    "bg-surface border border-line rounded-2xl lg:mx-16 p-3 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-md " +
                    (isLeft ? "md:col-start-1 md:pr-14 md:me-9" : "md:col-start-2 md:pl-14 md:ms-9")
                  }
                >
                  <h3 className="mb-2 text-xl font-semibold leading-snug text-primary-color">{step.title}</h3>

                  <p className="text-sm leading-relaxed text-secondary-color">{step.desc}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
