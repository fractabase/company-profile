import { projects } from "../../data/projects";

export default function ProjectsHeader() {
  const totalProjects = projects.length;
  const totalCategories = new Set(projects.map((p) => p.category)).size;
  const totalClients = new Set(projects.map((p) => p.client)).size;

  return (
    <>
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="section-container my-24 md:my-28 relative z-10">
          {/* Decorative top crosshair marks & telemetry */}
          <div
            aria-hidden="true"
            className="flex items-center justify-between text-[11px] font-mono text-secondary-color/60 mb-2 border-b border-line/40 pb-2 select-none"
          >
            <span>FRACTAL_INDEX // CATALOGUE.SYS</span>
            <span className="hidden sm:inline-block">STATUS: VERIFIED_PRODUCTIONS [9/9]</span>
            <span>+ + +</span>
          </div>

          {/* 1. Header */}
          <div className="text-left max-w-3xl space-y-4">
            <div className="px-4 py-2 border border-secondary rounded-3xl lg:rounded-full bg-secondary/20 text-xs md:text-sm font-mono font-semibold uppercase text-secondary tracking-wide shadow-sm w-max">
              Projects &amp; Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-color tracking-tight leading-[1.12]">
              Fractabase Interactive Projects
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-secondary-color leading-relaxed">
              Katalog lengkap rekayasa perangkat lunak kami meliputi web application, mobile application, landing page,
              game development, custom software, dan internal system.
            </p>
          </div>

          {/* 2. Stats row: 3 numbers computed from data */}
          <div className="relative border-y border-line py-8 my-10 bg-surface/40 dark:bg-dark-surface/40 px-4 sm:px-8">
            {/* Subtle corner crosshairs on stats container */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-2 -left-2 text-xs font-mono text-secondary-color/70"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-2 -right-2 text-xs font-mono text-secondary-color/70"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-2.25 -left-2 text-xs font-mono text-secondary-color/70"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-2.25 -right-2 text-xs font-mono text-secondary-color/70"
            >
              +
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-color tracking-tight block">
                  {totalProjects}
                </span>

                <span className="text-xs sm:text-sm font-mono font-medium text-secondary-color uppercase tracking-wider block">
                  Total Projects
                </span>
              </div>

              <div className="space-y-1 sm:border-x border-line sm:px-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-color tracking-tight block">
                  {totalCategories}
                </span>

                <span className="text-xs sm:text-sm font-mono font-medium text-secondary-color uppercase tracking-wider block">
                  Unique Categories
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-color tracking-tight block">
                  {totalClients}
                </span>

                <span className="text-xs sm:text-sm font-mono font-medium text-secondary-color uppercase tracking-wider block">
                  Unique Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
