import { Card, CardBadge, CardContent, CardDescription, CardTitle } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";
import { serviceData } from "../../data/serviceData";

export default function ServicesSection() {
  return (
    <>
      <section className="bg-transparent" id="Services">
        <div className="section-container min-h-screen flex flex-col justify-center my-14">
          <h2 className="mb-4 text-2xl md:text-4xl lg:text-5xl text-primary-color font-bold w-1/2">
            Layanan Digital End-to-End untuk Mendukung Pertumbuhan Bisnis Anda
          </h2>

          <p className="mb-5 text-lg lg:text-2xl text-secondary-color w-2/3">
            Dari konsep awal hingga pemeliharaan sistem, kami menyediakan solusi teknologi terintegrasi yang fleksibel
            sesuai kebutuhan Anda.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.map((item, idx) => {
              const Icon = item.icon;

              return (
                <Card key={idx} variant="default" hoverable={true} className="grid grid-rows-subgrid row-span-4 gap-1">
                  <div className="p-6 pb-3 flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-primary/15 text-primary">
                      <Icon className={"w-6 h-6"} />
                    </div>

                    <CardBadge variant={item.badgeVariant}>{item.badge}</CardBadge>
                  </div>

                  <CardTitle className="px-6">{item.title}</CardTitle>
                  <CardDescription className="px-6">{item.description}</CardDescription>

                  <hr className="mt-1 border-secondary-color/20 w-11/12 mx-auto" />

                  <CardContent className="pb-6">
                    <ul className="space-y-2.5 my-2">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm font-medium text-secondary-color">
                          <Icons.Check className="w-4 h-4 text-emerald-500 shrink-0" />
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
