import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";
import { useContactForm } from "../../hooks/useContactForm";
import CountryCodeDropdown from "../../components/common/CountryCodeDropdown";
import { PROJECT_TYPES, BUDGET_RANGES, TIME_TARGETS, COUNTRY_CODES } from "../../data/contactFormData";
import { contactInfo } from "../../data/contactInfo";

const inputBase =
  "w-full mt-1 md:mt-2 px-4 py-3 rounded-xl border bg-surface/60 text-primary-color placeholder:text-secondary-color/60 focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all duration-200 text-base";

const inputNormal = `${inputBase} border-line focus:border-secondary`;

const inputError = `${inputBase} border-red-500 focus:border-red-500`;

const selectBase =
  "w-full mt-1 md:mt-2 px-4 py-3 rounded-xl border bg-surface/60 text-primary-color focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all duration-200 appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1rem] cursor-pointer bg-[image:var(--select-chevron)] text-sm";

const selectNormal = `${selectBase} border-line focus:border-secondary`;

const SubmitButton = ({ isSubmitting, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full py-4 px-6 rounded-xl text-sm font-bold transition-all duration-200 shadow-md flex items-center justify-center gap-2 relative overflow-hidden group cursor-pointer ${
        isSubmitting
          ? "bg-primary/60 text-dark/70 cursor-wait"
          : "bg-primary hover:bg-primary-soft text-dark shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5"
      }`}
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Mengirim Pengajuan...</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          <Icons.Plane
            className={`w-4 h-4 transition-transform duration-300 ease-out ${
              isHovered ? "translate-x-2 -translate-y-0.5" : ""
            }`}
          />
        </>
      )}
    </button>
  );
};

const WhatsAppButton = () => {
  const waInfo = contactInfo.find((c) => c.key === "whatsapp");
  if (!waInfo?.href) return null;

  // Template message yang natural dan profesional
  const templateMessage = encodeURIComponent(
    "Halo, saya mau tanya tentang jasa pembuatan software.\n\n" + "Boleh konsultasi dulu?",
  );

  const waUrl = `${waInfo.href}?text=${templateMessage}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-200 shadow-md flex items-center justify-center gap-2 bg-secondary/15 hover:bg-secondary/25 border border-secondary/30 text-primary-color hover:-translate-y-0.5"
    >
      <Icons.WhatsApp className="w-5 h-5 text-secondary" />
      <span>Diskusi Cepat via WhatsApp</span>
    </a>
  );
};

const labelClass = "text-xs font-semibold uppercase tracking-wider text-primary-color";

const errorTextClass = "mt-1 text-xs text-red-500";

export default function FormWrapper() {
  const {
    formData,
    phoneState,
    optionalOpen,
    setOptionalOpen,
    setSubmitStatus,
    errors,
    submitted,
    isSubmitting,
    submitStatus,
    fieldIds,
    handleChange,
    handlePhoneInputChange,
    handleCountryCodeChange,
    handleBlur,
    toggleProjectType,
    shouldShowError,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <>
      <div className="relative">
        <Card
          variant="ghost"
          hoverable={false}
          className="bg-surface/50 border border-line rounded-2xl backdrop-blur-sm p-2 sm:p-4"
        >
          {/* Form Console Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-line/50 mb-4 select-none">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-secondary">
                FORM_CONSOLE // SUBMIT_BRIEF
              </span>
            </div>

            <span className="text-xs font-mono text-secondary-color/60">EST. TIME: 2 MIN</span>
          </div>

          {submitted ? (
            <CardContent className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/15 text-primary rounded-full flex items-center justify-center mx-auto border border-primary/30">
                <Icons.Check className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-extrabold text-primary-color">Pesan Anda Berhasil Terkirim!</h3>

              <p className="text-sm text-secondary-color max-w-md mx-auto leading-relaxed">
                Terima kasih telah menghubungi kami. Tim engineer kami akan mengulas brief kebutuhan Anda dan
                menghubungi via Email/WhatsApp dalam maksimal 1x24 jam kerja.
              </p>

              <button
                type="button"
                onClick={resetForm}
                className="mt-2 px-6 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition cursor-pointer"
              >
                Kirim Pesan Lain
              </button>
            </CardContent>
          ) : (
            <CardContent className="p-4 sm:p-6 pt-0!">
              {/* Error notifications */}
              {submitStatus === "network-error" && (
                <div className="mb-6 p-4 rounded-xl bg-tertiary/10 border border-tertiary/30 text-center space-y-3">
                  <div className="w-12 h-12 bg-tertiary/20 text-tertiary rounded-full flex items-center justify-center mx-auto">
                    <Icons.AlertCircle className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-tertiary">Masalah Koneksi</h3>

                  <p className="text-sm text-secondary-color">
                    Pesan gagal dikirim karena masalah jaringan. Silakan coba lagi.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className="mt-2 px-5 py-2 rounded-xl bg-tertiary/10 text-tertiary text-sm font-bold hover:bg-tertiary/20 transition cursor-pointer"
                  >
                    Coba Lagi
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name */}
                <div className="flex flex-col">
                  <label htmlFor={fieldIds.name} className={labelClass}>
                    Nama Lengkap <span className="text-red-400">*</span>
                  </label>

                  <input
                    id={fieldIds.name}
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={shouldShowError("name") && errors.name ? inputError : inputNormal}
                    placeholder="Nama lengkap Anda"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                  />

                  {shouldShowError("name") && errors.name && <p className={errorTextClass}>{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Row 2: Email & Phone */}
                  <div className="flex flex-col">
                    <label htmlFor={fieldIds.email} className={labelClass}>
                      Email Resmi <span className="text-red-400">*</span>
                    </label>

                    <input
                      id={fieldIds.email}
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={shouldShowError("email") && errors.email ? inputError : inputNormal}
                      placeholder="nama@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                    />

                    {shouldShowError("email") && errors.email && <p className={errorTextClass}>{errors.email}</p>}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor={fieldIds.phone} className={labelClass}>
                      Nomor WhatsApp / Telepon <span className="text-red-400">*</span>
                    </label>

                    <div
                      className={`mt-1 md:mt-2 flex rounded border ${
                        shouldShowError("phone") && errors.phone ? "border-red-400" : "border-primary"
                      } bg-surface focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/40 transition`}
                    >
                      <CountryCodeDropdown
                        value={phoneState.countryCode}
                        onChange={handleCountryCodeChange}
                        codes={COUNTRY_CODES}
                      />

                      <input
                        id={fieldIds.phone}
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="flex-1 min-w-0 px-3 py-2.5 rounded-r bg-surface text-primary-color placeholder:text-secondary-color/60 focus:outline-none focus:ring-0 text-sm"
                        placeholder="812-3456-7890"
                        value={phoneState.display}
                        onChange={(e) => handlePhoneInputChange(e.target.value)}
                        onBlur={() => handleBlur("phone")}
                      />
                    </div>

                    {shouldShowError("phone") && errors.phone && <p className={errorTextClass}>{errors.phone}</p>}
                  </div>
                </div>

                {/* Optional Fields Accordion Toggle */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setOptionalOpen(!optionalOpen)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary hover:text-primary-soft transition cursor-pointer"
                    aria-expanded={optionalOpen}
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold">
                      {optionalOpen ? "−" : "+"}
                    </span>
                    <span>{optionalOpen ? "Sembunyikan detail tambahan" : "Tambahkan detail proyek (opsional)"}</span>
                  </button>
                </div>

                {/* Optional Fields Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    optionalOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-col">
                      <label htmlFor={fieldIds.company} className={labelClass}>
                        Nama Perusahaan / Organisasi{" "}
                        <span className="text-secondary-color/60 font-normal lowercase">(opsional)</span>
                      </label>

                      <input
                        id={fieldIds.company}
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className={inputNormal}
                        placeholder="PT Example Indonesia (kosongkan jika perorangan)"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label htmlFor={fieldIds.budgetRange} className={labelClass}>
                          Estimasi Range Budget{" "}
                          <span className="text-secondary-color/60 font-normal lowercase">(opsional)</span>
                        </label>

                        <select
                          id={fieldIds.budgetRange}
                          name="budgetRange"
                          className={selectNormal}
                          value={formData.budgetRange}
                          onChange={(e) => handleChange("budgetRange", e.target.value)}
                        >
                          <option value="">Pilih range budget...</option>
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor={fieldIds.timeTarget} className={labelClass}>
                          Target Waktu Mulai{" "}
                          <span className="text-secondary-color/60 font-normal lowercase">(opsional)</span>
                        </label>

                        <select
                          id={fieldIds.timeTarget}
                          name="timeTarget"
                          className={selectNormal}
                          value={formData.timeTarget}
                          onChange={(e) => handleChange("timeTarget", e.target.value)}
                        >
                          <option value="">Pilih target waktu...</option>
                          {TIME_TARGETS.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Types Selection Pills */}
                <fieldset className="space-y-2">
                  <legend className={labelClass} id={fieldIds.projectTypes}>
                    Jenis Proyek <span className="text-red-400">*</span>
                  </legend>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {PROJECT_TYPES.map((type) => {
                      const selected = formData.projectTypes.includes(type);
                      return (
                        <label
                          key={type}
                          className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all duration-200 select-none ${
                            selected
                              ? "bg-primary text-dark border-primary font-bold shadow-xs scale-102"
                              : "border-line bg-surface/40 text-secondary-color hover:border-primary/40 hover:text-primary-color"
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="projectType"
                            value={type}
                            checked={selected}
                            onChange={() => toggleProjectType(type)}
                            className="sr-only"
                          />
                          {selected ? `✓ ${type}` : `+ ${type}`}
                        </label>
                      );
                    })}
                  </div>

                  {shouldShowError("projectTypes") && errors.projectTypes && (
                    <p className={errorTextClass}>{errors.projectTypes}</p>
                  )}
                </fieldset>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor={fieldIds.message} className={labelClass}>
                    Pesan / Brief Singkat <span className="text-red-400">*</span>
                  </label>

                  <textarea
                    id={fieldIds.message}
                    name="message"
                    rows={4}
                    className={`${shouldShowError("message") && errors.message ? inputError : inputNormal} resize-none`}
                    placeholder="Ceritakan singkat tentang kebutuhan proyek Anda, alur bisnis utama, atau ekspektasi yang ingin dicapai..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                  ></textarea>

                  {shouldShowError("message") && errors.message && <p className={errorTextClass}>{errors.message}</p>}
                </div>

                {/* Action buttons */}
                <div className="space-y-3 pt-3">
                  <SubmitButton isSubmitting={isSubmitting}>Kirim Brief Proyek</SubmitButton>
                  <WhatsAppButton />
                </div>

                {/* Consent Note */}
                <p className="text-sm text-secondary-color/70 text-center leading-relaxed">
                  Dengan mengirimkan brief ini, Anda menyetujui tim Fractabase untuk menghubungi Anda terkait kebutuhan
                  proyek. Data Anda diproses sesuai{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline font-mono">
                    Kebijakan Privasi
                  </Link>
                  .
                </p>
              </form>
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
}
