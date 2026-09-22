import { useState } from "react";
import { Heading } from "../../components/common/Heading";

export default function ProvenResultSection({ services }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Parse proven results untuk extract metrics yang lebih detail
  const metrics = services.map((service) => {
    const result = service.provenResult;
    let metric = {};

    // Parse different result formats
    if (result.includes("%")) {
      // Format: "+40% traffic dalam 3 bulan"
      const match = result.match(/([+-]?\d+)%/);
      metric.value = match ? match[1] : "";
      metric.unit = "%";
      metric.label = result.replace(/[+-]?\d+%\s*/i, "");
    } else if (
      result.includes("dari") &&
      (result.includes("jadi") || result.includes("menjadi") || result.includes("ke"))
    ) {
      // Format: "Waktu pembuatan laporan berkurang dari 3 hari menjadi 4 jam"
      const beforeMatch = result.match(/dari\s+(\d+)\s+(\w+)/i);
      const afterMatch = result.match(/(?:jadi|menjadi|ke)\s+(\d+)\s+(\w+)/i);
      if (beforeMatch && afterMatch) {
        metric.before = `${beforeMatch[1]} ${beforeMatch[2]}`;
        metric.after = `${afterMatch[1]} ${afterMatch[2]}`;
        metric.label = result.split("dari")[0].trim();
      }
    } else if (result.includes("unduhan") || result.includes("+")) {
      // Format: "10.000+ unduhan pada bulan pertama..."
      const match = result.match(/([\d.,]+)\+?\s+(\w+)/);
      if (match) {
        metric.value = match[1];
        metric.unit = match[2];
        metric.label = result.replace(/[\d.,]+\+?\s+\w+\s*/i, "");
      }
    } else if (result.includes("lebih cepat") && result.includes("x")) {
      // Format: "Onboarding developer selesai dalam 2 minggu, 4x lebih cepat..."
      const timeMatch = result.match(/dalam\s+(\d+)\s+(\w+)/i);
      const speedMatch = result.match(/(\d+)x/i);
      if (timeMatch && speedMatch) {
        metric.value = timeMatch[1];
        metric.unit = timeMatch[2];
        metric.multiplier = `${speedMatch[1]}x`;
        metric.label = "Onboarding developer";
        metric.suffix = "lebih cepat";
      }
    }

    return {
      ...metric,
      service: service.title,
      slug: service.slug,
      icon: service.icon,
      originalResult: result,
    };
  });

  return (
    <>
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="section-container relative z-10">
          <Heading
            align="center"
            hasTagline={true}
            taglineText="-/ HASIL_TERUKUR"
            title="Dampak Terukur Layanan Kami"
            paragraph="Dampak terukur dari setiap layanan berdasarkan data proyek yang kami selesaikan."
          />

          {/* Metrics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const isHovered = hoveredIndex === index;
              const accent =
                metric.slug === "website-dev" || metric.slug === "custom-software"
                  ? { hex: "#35beeb", text: "text-primary", border: "border-primary/40", tint: "bg-primary/10" }
                  : metric.slug === "web-app" || metric.slug === "system-integration"
                    ? { hex: "#7b61ff", text: "text-secondary", border: "border-secondary/40", tint: "bg-secondary/10" }
                    : { hex: "#f5a623", text: "text-tertiary", border: "border-tertiary/40", tint: "bg-tertiary/10" };

              return (
                <div
                  key={metric.slug}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card */}
                  <div
                    className={`relative h-full p-6 sm:p-8 rounded-2xl border border-line bg-surface backdrop-blur-sm overflow-hidden transition-all duration-300 ease-out ${isHovered ? "-translate-y-1 shadow-lg border-line-strong" : ""}`}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                    }}
                    style={{
                      boxShadow: isHovered
                        ? `0 8px 24px -4px ${
                            metric.slug === "website-dev" || metric.slug === "custom-software"
                              ? "rgba(53, 190, 235, 0.15)"
                              : metric.slug === "web-app" || metric.slug === "system-integration"
                                ? "rgba(139, 92, 246, 0.15)"
                                : "rgba(251, 146, 60, 0.15)"
                          }`
                        : "none",
                    }}
                  >
                    {/* OPSI 1: Radial Cursor Spotlight (Realtime Cursor-following Glow) */}
                    <div
                      className="pointer-events-none absolute w-60 h-60 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0 will-change-transform"
                      style={{
                        left: "var(--mouse-x, 50%)",
                        top: "var(--mouse-y, 50%)",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: accent.hex,
                      }}
                    />

                    {/* Icon & Service name */}
                    <div className="relative z-10 flex items-center gap-3 mb-6">
                      {Icon && (
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                            metric.slug === "website-dev" || metric.slug === "custom-software"
                              ? "bg-primary/10"
                              : metric.slug === "web-app" || metric.slug === "system-integration"
                                ? "bg-secondary/10"
                                : "bg-tertiary/10"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              metric.slug === "website-dev" || metric.slug === "custom-software"
                                ? "text-primary"
                                : metric.slug === "web-app" || metric.slug === "system-integration"
                                  ? "text-secondary"
                                  : "text-tertiary"
                            }`}
                          />
                        </div>
                      )}

                      <div className="text-xs font-mono text-secondary-color uppercase tracking-wide">
                        {metric.service}
                      </div>
                    </div>

                    {/* Metric display - different layouts based on data structure */}
                    <div className="space-y-4">
                      {/* Type 1: Percentage or simple value */}
                      {metric.value && metric.unit && !metric.before && (
                        <div>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span
                              className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                                metric.slug === "website-dev" || metric.slug === "custom-software"
                                  ? "text-primary"
                                  : metric.slug === "web-app" || metric.slug === "system-integration"
                                    ? "text-secondary"
                                    : "text-tertiary"
                              }`}
                            >
                              {metric.value}
                              {metric.unit === "%" ? "%" : ""}
                            </span>

                            {metric.unit !== "%" && (
                              <span className="text-lg font-semibold text-secondary-color">
                                {metric.unit}
                                {metric.multiplier && ` · ${metric.multiplier}`}
                              </span>
                            )}
                          </div>

                          <p className="text-sm text-secondary-color leading-relaxed">
                            {metric.label}
                            {metric.suffix && ` ${metric.suffix}`}
                          </p>
                        </div>
                      )}

                      {/* Type 2: Before/After comparison */}
                      {metric.before && metric.after && (
                        <div>
                          <div className="text-sm font-mono text-secondary-color mb-3">{metric.label}</div>

                          <div className="flex items-center gap-4">
                            {/* Before */}
                            <div className="flex-1">
                              <div className="text-xs text-secondary-color/60 mb-1 uppercase tracking-wide">Before</div>
                              <div className="text-2xl font-bold text-secondary-color/50 line-through">
                                {metric.before}
                              </div>
                            </div>

                            {/* Arrow */}
                            <div
                              className={`${
                                metric.slug === "website-dev" || metric.slug === "custom-software"
                                  ? "text-primary"
                                  : metric.slug === "web-app" || metric.slug === "system-integration"
                                    ? "text-secondary"
                                    : "text-tertiary"
                              }`}
                            >
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </div>

                            {/* After */}
                            <div className="flex-1">
                              <div className="text-xs text-secondary-color/60 mb-1 uppercase tracking-wide">After</div>

                              <div
                                className={`text-2xl font-extrabold ${
                                  metric.slug === "website-dev" || metric.slug === "custom-software"
                                    ? "text-primary"
                                    : metric.slug === "web-app" || metric.slug === "system-integration"
                                      ? "text-secondary"
                                      : "text-tertiary"
                                }`}
                              >
                                {metric.after}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Fallback: show original text */}
                      {!metric.value && !metric.before && (
                        <div className="text-base font-semibold text-primary-color leading-snug">
                          {metric.originalResult}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="mt-10 text-center">
            <p className="text-xs sm:text-sm font-mono text-secondary-color">
              <span className="opacity-60">// Data diambil dari studi kasus nyata proyek klien kami</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
