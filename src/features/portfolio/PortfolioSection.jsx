import { Card, CardBadge, CardDescription, CardTitle } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";
import { portfolioData } from "../../data/portfolioData";

export default function PorfolioSection() {
  return (
    <>
      <section className="py-20" id="Portfolio">
        <div className="section-container min-h-screen flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-primary-color font-bold mb-8">
            Hasil Karya & Studio Kasus Terkini
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {portfolioData.map((item, idx) => {
              return (
                <Card key={idx} variant="default" hoverable={true}>
                  <div className="m-4 relative min-h-60 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <CardBadge variant="tertiary">{item.category}</CardBadge>
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between p-4">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">Klien: {item.client}</p>
                      <CardTitle className="text-2xl mt-1">{item.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{item.description}</CardDescription>

                      <div className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-3">
                        <Icons.Shield className="w-5 h-5 text-primary shrink-0" />
                        <p className="text-xs font-semibold text-primary-color">
                          <strong>Hasil Nyata:</strong> {item.impact}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line">
                      <div className="flex flex-wrap gap-1.5">
                        {item.techStack.map((tech, tIdx) => (
                          <CardBadge key={tIdx} variant="neutral">
                            {tech}
                          </CardBadge>
                        ))}
                      </div>

                      <button className="px-4 py-2 rounded-xl bg-secondary text-surface text-xs font-bold hover:bg-secondary/80 transition flex items-center gap-1.5">
                        <span>Detail Case Study</span>
                        <Icons.ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
