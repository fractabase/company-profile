export default function WorkProcessSection() {
  return (
    <>
      <section className="bg-secondary/10 min-h-max!" id="WorkProcess">
        <div className="section-container my-20">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-center text-primary-color font-bold mb-16">
            4 Langkah Mudah Memulai Proyek Bersama Kami
          </h2>

          <div className="grid grid-cols-4 gap-6 relative">
            <div className="absolute border-t-2 border-dotted border-primary/40 top-8 left-[12%] right-[12%] -z-10"></div>
            <div className="text-center">
              <span className="text-2xl text-surface bg-primary w-16 h-16 mx-auto mb-6 p-6 rounded-full flex items-center justify-center">
                1
              </span>

              <h3 className="text-3xl mb-3">Konsultasi & Kebutuhan (Discovery) </h3>

              <p className="text-secondary-color">
                Diskusi mendalam untuk memahami masalah bisnis, analisis kebutuhan, dan menentukan scope proyek.
              </p>
            </div>

            <div className="text-center">
              <span className="text-2xl text-surface bg-primary w-16 h-16 mx-auto mb-6 p-6 rounded-full flex items-center justify-center">
                2
              </span>

              <h3 className="text-3xl mb-3">Perancangan UI/UX & Arsitektur (Design)</h3>

              <p className="text-secondary-color">
                Pembuatan wireframe, desain antarmuka modern yang ramah pengguna, dan alur arsitektur sistem.
              </p>
            </div>

            <div className="text-center">
              <span className="text-2xl text-surface bg-primary w-16 h-16 mx-auto mb-6 p-6 rounded-full flex items-center justify-center">
                3
              </span>
              <h3 className="text-3xl mb-3">Pengembangan & Pengujian (Development & QA)</h3>

              <p className="text-secondary-color">
                Penulisan kode berspesifikasi tinggi diikuti pengujian ketat (quality assurance) untuk memastikan bebas
                bug.
              </p>
            </div>

            <div className="text-center">
              <span className="text-2xl text-surface bg-primary w-16 h-16 mx-auto mb-6 p-6 rounded-full flex items-center justify-center">
                4
              </span>
              <h3 className="text-3xl mb-3">Peluncuran & Pendampingan (Deployment & Support)</h3>
              <p className="text-secondary-color">
                Aplikasi resmi dirilis ke server/store, disertai garansi pasca-peluncuran dan panduan penggunaan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
