import { workProcessSteps } from "../../data/workProcessSteps";
import { Card, CardTitle, CardDescription } from "../../components/common/Card";
import { Heading } from "../../components/common/Heading";

export default function WorkProcessSection({ className }) {
  return (
    <section id="WorkProcess" className={className}>
      <div className="section-container my-12 lg:my-20">
        <Heading
          align="center"
          hasTagline={true}
          taglineText="-/ How We Work"
          titleClass="mt-3"
          title="5 Langkah Kami Bekerja, dari Ide sampai Produk yang Terus Berkembang"
          paragraphClass="max-w-xl mx-auto leading-relaxed!"
          paragraph="Setiap tahap kami rancang supaya prosesnya transparan dan terukur, dari ide awal sampai produk siap dipakai."
        />

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute left-7 top-0 bottom-4 w-px -translate-x-1/2 bg-secondary md:left-1/2"
          />

          {workProcessSteps.map((step, i) => {
            const isLeft = i % 2 === 0;

            return (
              <li
                key={step.num}
                className="group relative pl-16 py-4 lg:py-12 md:grid md:grid-cols-2 md:items-center md:pl-0 md:py-8 lg:even:text-right"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-7 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-dark font-mono font-bold shadow-sm ring-4 ring-background dark:ring-dark-surface transition-transform duration-300 group-hover:scale-105 md:left-1/2"
                >
                  {step.num}
                </div>

                <Card
                  hoverable={true}
                  padding="lg"
                  className={
                    "lg:mx-16 " + (isLeft ? "md:col-start-1 md:pr-14 md:me-9" : "md:col-start-2 md:pl-14 md:ms-9")
                  }
                >
                  <CardTitle size="default" className="mb-2">
                    {step.title}
                  </CardTitle>

                  <CardDescription className="text-sm">{step.desc}</CardDescription>
                </Card>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
