function BrowserMockup() {
  return (
    <div className="relative w-96 animate-[float_6s_ease-in-out_infinite]">
      {/* Browser frame */}
      <div className="rounded-xl bg-surface dark:bg-dark-surface border border-line shadow-xl shadow-dark/10 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-base/50 dark:bg-dark-surface-alt/50">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-surface dark:bg-dark-surface rounded-md px-3 py-1 text-xs text-secondary-color text-center border border-line">
              app.fractabase.io
            </div>
          </div>
          <div className="w-4" />
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-4">
          {/* Stat boxes */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/10 rounded-lg p-3">
              <p className="text-lg font-bold text-primary-color">60%</p>
              <p className="text-xs text-secondary-color">Efisiensi Naik</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-3">
              <p className="text-lg font-bold text-primary-color">2.7k</p>
              <p className="text-xs text-secondary-color">Sesi Aktif</p>
            </div>
          </div>

          {/* Mini bar chart */}
          <div className="flex items-end gap-2 h-16 px-2">
            {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-secondary/60 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({ className }) {
  return (
    <div className={`absolute w-30 animate-[float_7s_ease-in-out_infinite_0.5s] origin-top ${className}`}>
      {/* Phone frame */}
      <div className="rounded-[20px] h-56 bg-primary-color dark:bg-dark-surface-alt border-[3px] border-primary-color dark:border-dark-surface-alt shadow-xl shadow-dark/20 overflow-hidden">
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1 bg-primary-color dark:bg-dark-surface-alt">
          <div className="w-12 h-1.5 rounded-full bg-surface/30" />
        </div>

        {/* Screen content */}
        <div className="bg-surface dark:bg-dark-surface p-3 pb-8 space-y-2 h-full relative flex flex-col">
          {/* Header bar */}
          <div className="h-4 rounded bg-secondary/40" />

          {/* Content lines */}
          <div className="space-y-1.5 h-max">
            <div className="h-2 rounded bg-line w-full" />
            <div className="h-2 rounded bg-line w-4/5" />
            <div className="h-2 rounded bg-line w-3/5" />
          </div>

          <div className="h-2 rounded bg-line w-full" />
          <div className="h-2 rounded bg-line w-5/6" />

          {/* CTA button */}
          <div className="pt-2 mt-auto">
            <div className="h-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-[8px] text-dark font-medium">Mulai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingBadge({ label, dotColor, className }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface dark:bg-dark-surface border border-line shadow-lg shadow-dark/5 text-xs font-medium text-primary-color ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${dotColor}`} />
      {label}
    </div>
  );
}

export default function HeroSection({ className }) {
  return (
    <>
      <section className={`relative overflow-visible ${className}`} id="Home">
        {/* Content */}
        <div className="section-container max-sm:px-3 min-h-dvh grid lg:grid-cols-3 items-center relative z-10">
          {/* Left: Text content */}
          <div className="col-auto lg:col-span-2 py-6 mt-20 lg:mt-0">
            <span className="border border-secondary rounded-3xl lg:rounded-full text-secondary text-xs md:text-sm font-semibold bg-secondary/20 py-2 lg:py-3 px-3 lg:px-4 uppercase">
              Software House · Digital Solutions
            </span>

            <h1 className="text-3xl lg:text-6xl mb-4 mt-4 lg:mt-8 font-bold text-primary-color max-w-3xl">
              Mitra Pengembangan <span className="text-primary">Website</span>,{" "}
              <span className="text-primary">Aplikasi Mobile</span>, dan <span className="text-primary">SaaS</span>{" "}
              untuk Setiap Skala Bisnis.
            </h1>

            <p className="text-lg lg:text-xl text-secondary-color mb-6 lg:max-w-4/5">
              Kami merancang dan membangun, serta mengembangkan software untuk individu, bisnis kecil (UMKM), startup
              dan bisnis besar (korporat). Mulai dari mendiskusikan masalah dan konsep awal hingga menjadi produk
              digital yang siap digunakan.
            </p>

            <div className="flex max-sm:flex-col gap-3">
              <a
                href="/#Contact"
                className="py-2 px-5 border border-primary rounded-xl bg-primary text-dark text-xl text-center transition hover:text-shadow-xs shadow hover:shadow-lg hover:translate-y-0.5"
                role="button"
              >
                Mulai Diskusi
              </a>

              <button
                type="button"
                className="py-2 px-5 border border-primary rounded-xl text-primary text-xl transition hover:bg-primary/10 focus:bg-primary/10 shadow hover:shadow-lg hover:translate-y-0.5"
              >
                Lihat Layanan
              </button>
            </div>
          </div>

          {/* Right: Product mockup composition */}
          <div className="col-auto max-lg:mt-8 max-lg:mb-16 relative h-87.5 md:h-96 hidden lg:block ">
            {/* Browser Mockup */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <BrowserMockup />
            </div>

            {/* Phone Mockup — overlapping bottom-left of browser */}
            <PhoneMockup className="top-32" />

            {/* Floating Badges */}
            <FloatingBadge
              label="Deploy Ready"
              dotColor="bg-tertiary"
              className="absolute -top-4 right-4 -translate-x-1/2 animate-[float_5s_ease-in-out_infinite_0.3s]"
            />

            <FloatingBadge
              label="Cross-Platform"
              dotColor="bg-primary"
              className="absolute bottom-28 right-4 -translate-x-1/2 animate-[float_6s_ease-in-out_infinite_0.8s]"
            />
          </div>

          {/* Mobile mockup — visible only below lg */}
          <div className="col-auto lg:hidden sm:w-1/2 sm:mx-auto relative h-70 md:h-87.5 mt-6 max-sm:overflow-hidden">
            <div className="absolute left-44 -translate-x-1/2 top-5 scale-75 origin-top">
              <BrowserMockup />
            </div>

            <PhoneMockup className="left-0 top-24 scale-75" />

            <FloatingBadge
              label="Deploy Ready"
              dotColor="bg-tertiary"
              className="absolute top-1 right-8 scale-90 sm:-translate-x-1/2 animate-[float_5s_ease-in-out_infinite_0.3s]"
            />

            <FloatingBadge
              label="Cross-Platform"
              dotColor="bg-primary"
              className="absolute bottom-12 right-4 scale-90 sm:-translate-x-1/2 animate-[float_6s_ease-in-out_infinite_0.8s]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
