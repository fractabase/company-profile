import { useState } from "react";
import { Card, CardContent } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Web Development",
    budget: "10-25m",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section id="Contact">
        <div className="section-container py-20">
          <div className="rounded-xl p-8 sm:p-12 shadow-2xl shadow-primary/10 bg-surface border border-line relative mb-12">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-line text-secondary-color">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  Slot Proyek Terbuka Bulan Ini
                </span>

                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-primary-color">
                  Siap Mentransformasi Ide Digital <br className="hidden sm:inline" />
                  Menjadi Produk Berdaya Saing Tinggi?
                </h2>

                <p className="text-sm max-w-2xl leading-relaxed text-secondary-color">
                  Baik Anda UMKM yang butuh website kencang, perorangan dengan ide startup, maupun perusahaan yang
                  membutuhkan tambahan tim developer. Kami siap membantu dari nol.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Tim%20Software%20House,%20saya%20ingin%20konsultasi%20proyek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-soft text-dark font-bold text-sm shadow-lg shadow-primary/20 transition flex items-center justify-center gap-2"
                >
                  <Icons.WhatsApp className="w-5 h-5" />

                  <span>Diskusi Cepat via WA</span>
                </a>

                <a
                  href="#form-section"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm border border-secondary text-secondary hover:bg-secondary hover:text-surface transition flex items-center justify-center gap-2"
                >
                  <span>Isi Form Penawaran</span>

                  <Icons.ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-8 items-start" id="formSection">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-color mb-4">
                Punya Rencana Proyek Digital? <br /> Mari Diskusi Sekarang.
              </h2>

              <p className="text-xl text-secondary-color">
                Konsultasikan kebutuhan aplikasi atau ketersediaan tim IT Anda tanpa dipungut biaya.
              </p>

              <div className="space-y-2 pt-2">
                <div className="p-4 rounded-2xl bg-surface border border-line flex items-center gap-4">
                  <div className="w-10 h-10 text-secondary shrink-0">
                    <Icons.WhatsApp className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-secondary-color uppercase">WhatsApp</h3>
                    <p className="text-lg font-bold text-primary-color mt-0.5">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-surface border border-line flex items-center gap-4">
                  <div className="w-10 h-10 text-secondary shrink-0">
                    <Icons.Mail className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-secondary-color uppercase">E-Mail</h3>
                    <p className="text-lg font-bold text-primary-color mt-0.5">fractabaseinteractive@gmail.com</p>
                    <p className="text-xs text-secondary-color mt-1">Untuk dokumen RFQ / Penawaran Resmi</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-surface border border-line flex items-center gap-4">
                  <div className="w-10 h-10 text-secondary shrink-0">
                    <Icons.Location className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-secondary-color uppercase">Kantor</h3>
                    <p className="text-lg font-semibold text-primary-color mt-0.5">PT. Fractabase Interactive</p>
                    <p className="text-xs text-secondary-color mt-1">Kota Bekasi, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-base border border-line text-xs text-secondary-color flex items-center gap-3">
                <span className="text-lg w-10 h-10 text-secondary shrink-0">
                  <Icons.ShieldInfo className="w-10 h-10" />
                </span>

                <span>
                  Seluruh kerahasiaan ide dan dokumen proyek dilindungi oleh{" "}
                  <strong>Non-Disclosure Agreement (NDA)</strong>.
                </span>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/15 text-primary rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>

                  <h3 className="text-2xl font-bold text-primary-color">Pesan Anda Berhasil Terkirim!</h3>

                  <p className="text-sm text-secondary-color max-w-md mx-auto">
                    Terima kasih telah menghubungi kami. Tim consultant kami akan mengulas estimasi Anda dan menghubungi
                    via Email/WhatsApp dalam max 1x24 jam.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl bg-base text-xs font-bold text-secondary-color hover:bg-line transition"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <Card variant="default" hoverable={false} className="py-4">
                  <CardContent className="mt-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label htmlFor="" className="font-semibold text-primary-color">
                            Nama Lengkap
                          </label>

                          <input
                            type="text"
                            className="mt-2 py-1 px-3 rounded-md border border-line w-full text-primary-color focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Telon Must"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="" className="font-semibold text-primary-color">
                            Nama Perusahaan
                          </label>

                          <input
                            type="text"
                            className="mt-2 py-1 px-3 rounded-md border border-line w-full text-primary-color focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Spasi Y"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label htmlFor="" className="font-semibold text-primary-color">
                            Email
                          </label>

                          <input
                            type="email"
                            className="mt-2 py-1 px-3 rounded-md border border-line w-full text-primary-color focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary peer"
                            placeholder="telon@spasiy.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                          <p className="hidden peer-invalid:block invisible peer-invalid:visible text-xs text-secondary mt-1">
                            Please provide a valid email address.
                          </p>
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="" className="font-semibold text-primary-color">
                            Nomor Telepon/WhatsApp
                          </label>

                          <input
                            type="tel"
                            className="mt-2 py-1 px-3 rounded-md border border-line w-full text-primary-color focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary peer"
                            placeholder="+628****7890"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />

                          <p className="hidden peer-invalid:block invisible peer-invalid:visible text-xs text-secondary mt-1">
                            Please provide a valid phone number.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label htmlFor="" className="font-semibold text-primary-color">
                            Jenis Layanan
                          </label>

                          <select
                            id=""
                            className="mt-2 py-1 px-3 rounded-md border border-line w-full text-primary-color focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          >
                            <option value="Web Development" label="Custom Web Application" />
                            <option value="Mobile App" label="Aplikasi Mobile (Android/iOS)" />
                            <option value="Talent Outsourcing" label="IT Talent/Client Work" />
                            <option value="Maintenance" label="Maintenance & Server Setup" />
                          </select>
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="" className="font-semibold text-primary-color">
                            Perkiraan Budget
                          </label>

                          <select
                            id=""
                            className="mt-2 py-1 px-3 rounded-md border border-line w-full text-primary-color focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          >
                            <option value="< 10m" label="&lt; Rp 10 Juta (UMKM/Startup)" />
                            <option value="10-25m" label="Rp 10 Juta - Rp 25 Juta" />
                            <option value="25-50m" label="Rp 25 Juta - Rp 50 Juta" />
                            <option value="> 50m" label="&gt; Rp 50 Juta (Enterprise/Custom" />
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="" className="font-semibold text-primary-color">
                          Deskripsi singkat Kebutuhan Proyek
                        </label>

                        <textarea
                          name=""
                          id=""
                          className="mt-2 py-1 px-3 rounded-md border border-line w-full text-primary-color focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                          rows={5}
                          placeholder="Ceritakan singkat tentang ide aplikasi, alur bisnis, atau jumlah developer yang dibutuhkan..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-soft text-dark text-sm font-bold transition shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                      >
                        <span>Kirim & Dapatkan Estimasi Gratis</span>
                        <Icons.ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
