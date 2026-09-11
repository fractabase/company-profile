import { Card, CardBadge, CardContent, CardDescription, CardTitle } from "../../components/common/Card";
import { Heading } from "../../components/common/Heading";
import { Icons } from "../../components/common/Icons";
import { serviceData } from "../../data/serviceData";

export default function ServicesSection() {
  return (
    <>
      <section className="bg-transparent" id="Services">
        <div className="section-container my-12 lg:my-20">
          <Heading
            titleClass="lg:w-1/2"
            title="Layanan Digital End-to-End, dari Konsep sampai Sistem yang Berjalan"
            paragraphClass="lg:w-2/3"
            paragraph="Kami menangani seluruh proses pengembangan, mulai dari diskusi kebutuhan awal sampai maintenance setelah
              sistem rilis."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.map((item, idx) => {
              const Icon = item.icon;

              return (
                <Card
                  key={idx}
                  variant="default"
                  hoverable={true}
                  padding="xs"
                  className="grid grid-rows-subgrid row-span-4 gap-1"
                >
                  <div className="lg:pb-3 flex items-center justify-between">
                    <div className="p-2 lg:p-3 rounded-xl bg-primary/15 text-primary">
                      <Icon className={"w-6 h-6"} />
                    </div>

                    <CardBadge variant={item.badgeVariant}>{item.badge}</CardBadge>
                  </div>

                  <CardTitle size="lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>

                  <CardContent className="mt-3 pt-3 sm:pt-4 md:pt-5 lg:pt-6 border-t border-secondary-color/20">
                    <ul className="space-y-2.5">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm font-medium text-secondary-color">
                          <Icons.Check className="w-4 h-4 text-tertiary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
