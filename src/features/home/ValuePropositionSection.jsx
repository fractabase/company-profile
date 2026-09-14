import { Card, CardContent, CardDescription, CardTitle } from "../../components/common/Card";
import { Heading } from "../../components/common/Heading";
import { benefits } from "../../data/benefits";

export default function ValuePropositionSection() {
  return (
    <section id="ValueProposition">
      <div className="section-container my-12 lg:my-20">
        <Heading
          hasTagline={true}
          taglineText="-/ Mengapa Fractabase Interactive"
          titleClass="mt-3 max-w-2xl"
          title="Solusi interaktif yang membuat bisnis Anda bekerja lebih baik dan tumbuh."
          paragraphClass="max-w-3xl"
          paragraph="Kami mengukur keberhasilan proyek dari hasil bisnis Anda, bukan sekadar kode yang selesai tepat waktu."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                variant="default"
                padding="xs"
                className="relative after:border-2 after:border-secondary after:rounded-xl after:transition after:w-24 after:h-24 after:absolute after:-top-9 after:-right-9 after:rotate-45 hover:after:rotate-135"
              >
                <CardContent>
                  <Icon className="mb-3 w-7 h-7 text-primary" />
                  <CardTitle className="mb-5 pb-1 w-64 border-b border-line">{item.title}</CardTitle>
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
