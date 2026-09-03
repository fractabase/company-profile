import heroImage from "../../assets/images/image-1.svg";

export default function HeroSection({ className }) {
  return (
    <>
      <section className={`relative dark:bg-dark-secondary/40 ${className}`} id="Home">
        <div className="section-container max-sm:px-3 min-h-dvh grid lg:grid-cols-3 items-center">
          <div className="col-auto lg:col-span-2">
            <span className="border border-secondary text-secondary text-xs md:text-sm font-semibold bg-secondary/20 rounded-3xl lg:rounded-2xl py-2 lg:py-3 px-3 lg:px-4 uppercase">
              Software House · Digital Solutions
            </span>

            <h1 className="text-3xl lg:text-6xl mb-4 mt-4 lg:mt-8 font-bold text-primary-color">
              Mitra Pengembangan <span className="text-primary">Website</span>,{" "}
              <span className="text-primary">Aplikasi Mobile</span>, dan <span className="text-primary">SaaS</span>{" "}
              untuk Setiap Skala Bisnis.
            </h1>

            <p className="text-lg lg:text-xl text-secondary-color mb-6 lg:max-w-4/5">
              Kami merancang dan membangun, serta mengembangkan software untuk individu, bisnis kecil (UMKM), startup
              dan bisnis besar (korporat). Mulai dari mendiskusikan masalah dan konsep awal hingga menjadi produk
              digital yang siap digunakan.
            </p>

            <div className="flex max-md:flex-col gap-3">
              <a
                href="/#Contact"
                className="py-2 px-5 border border-primary rounded-3xl bg-primary text-dark text-xl text-center transition hover:text-shadow-xs shadow hover:shadow-lg hover:translate-y-0.5"
                role="button"
              >
                Diskusi Rencana
              </a>

              <button
                type="button"
                className="py-2 px-5 border border-primary rounded-3xl text-primary text-xl transition hover:bg-primary/10 shadow hover:shadow-lg hover:translate-y-0.5"
              >
                Explore Plan
              </button>
            </div>
          </div>

          <div className="col-auto max-lg:hidden">
            <img src={heroImage} alt="Hero Image Ilustration" className="z-3 relative ms-20 max-xl:w-10/12" />
          </div>
        </div>

        <div className="hidden">
          <div className="w-72 h-72 rounded-full -z-10 bg-radial from-primary to-transparent blur-3xl absolute left-1/3 top-16 animate-[bounce_40s_ease-in-out_infinite]"></div>

          <div className="w-52 h-52 rounded-full -z-10 bg-radial from-tertiary to-transparent blur-3xl absolute left-18 top-96 animate-[bounce_30s_ease-in-out_infinite]"></div>

          <div className="w-64 h-64 rounded-full -z-10 bg-radial from-secondary to-transparent blur-3xl absolute left-96 bottom-24 animate-[bounce_50s_ease-in-out_infinite]"></div>
        </div>
      </section>
    </>
  );
}
