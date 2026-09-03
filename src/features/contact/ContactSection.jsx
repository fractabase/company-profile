import { useState } from "react";
import { Card, CardContent } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";

const PROJECT_TYPES = ["Web Application", "Mobile App", "Custom Software", "System Integration", "IT Talent"];

const inputClass =
  "w-full mt-1 md:mt-2 px-4 py-2.5 rounded border border-primary bg-surface text-primary-color placeholder:text-secondary-color/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40 transition";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Application",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Icons.Mail className="w-7 h-7" />,
      label: "Email",
      value: "fractabaseinteractive@gmail.com",
      note: "Untuk dokumen RFQ / Penawaran Resmi",
    },
    {
      icon: <Icons.WhatsApp className="w-7 h-7" />,
      label: "WhatsApp",
      value: "+62 812-3456-7890",
      note: "Chat langsung untuk respon cepat",
    },
    {
      icon: <Icons.Location className="w-7 h-7" />,
      label: "Location",
      value: "PT. Fractabase Interactive",
      note: "Kota Bekasi, Indonesia",
    },
    {
      icon: <Icons.Time className="w-7 h-7" />,
      label: "Working Hours",
      value: "Flexible",
      note: "1x24 jam respon via Email/WhatsApp, 09:00-17:00 untuk meeting",
    },
  ];

  return (
    <>
      <section id="Contact">
        <div className="section-container my-12 lg:my-20 ">
          <div className="space-y-4 pb-7 mb-12 border-b border-line-strong">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border border-line-strong bg-primary-soft/20 text-secondary-color">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for new projects
            </span>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary-color">
              Let&rsquo;s build something together
            </h2>

            <p className="leading-relaxed text-secondary-color text-lg lg:text-xl max-w-2xl">
              Baik Anda butuh website kencang, aplikasi mobile, maupun tim developer tambahan — kami siap membantu dari
              nol hingga peluncuran. Ceritakan ide Anda, kami yang mewujudkannya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Left: value proposition + contact info */}
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex max-md:flex-col lg:items-center gap-4 transition hover:border-secondary/50 mb-6 pb-2 border-b border-line"
                >
                  <div className="w-10 h-10 flex items-center justify-center text-secondary shrink-0">{item.icon}</div>

                  <div className="flex flex-col gap-1 mb-2">
                    <h3 className="text-xs font-semibold text-secondary-color uppercase tracking-wide">{item.label}</h3>
                    <p className="font-semibold text-primary-color mt-0.5 break-all">{item.value}</p>
                    <p className="text-xs text-secondary-color mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: contact form */}
            <Card variant="glass" hoverable={false} className="bg-transparent border-0 shadow-none!">
              {submitted ? (
                <CardContent className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/15 text-primary rounded-full flex items-center justify-center mx-auto">
                    <Icons.Check className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-primary-color">Pesan Anda Berhasil Terkirim!</h3>

                  <p className="text-sm text-secondary-color max-w-md mx-auto">
                    Terima kasih telah menghubungi kami. Tim consultant kami akan mengulas kebutuhan Anda dan
                    menghubungi via Email/WhatsApp dalam maksimal 1x24 jam.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition"
                  >
                    Kirim Pesan Lain
                  </button>
                </CardContent>
              ) : (
                <CardContent className="px-4 py-4 pt-0! lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="font-semibold text-primary-color">
                          Nama Lengkap
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          className={inputClass}
                          placeholder="Telon Must"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold text-primary-color">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className={`${inputClass} peer`}
                          placeholder="telon@spasiy.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <p className="mt-1 text-xs text-secondary invisible peer-invalid:visible">
                          Masukkan alamat email yang valid.
                        </p>
                      </div>
                    </div>

                    <fieldset>
                      <legend className="font-semibold text-primary-color">Jenis Proyek</legend>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {PROJECT_TYPES.map((type) => {
                          const selected = formData.projectType === type;
                          return (
                            <label
                              key={type}
                              className={`cursor-pointer px-4 py-2 rounded-full text-sm border transition ${
                                selected
                                  ? "bg-primary text-dark border-primary font-semibold"
                                  : "border-primary bg-base dark:bg-dark-surface-alt text-secondary-color hover:border-secondary/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="projectType"
                                value={type}
                                checked={selected}
                                onChange={() => setFormData({ ...formData, projectType: type })}
                                className="sr-only"
                              />
                              {type}
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div className="flex flex-col">
                      <label htmlFor="message" className="font-semibold text-primary-color">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={`${inputClass} resize-none`}
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
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
