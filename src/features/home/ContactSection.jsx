import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";
import { PROJECT_TYPES, BUDGET_RANGES, TIME_TARGETS, COUNTRY_CODES } from "../../data/contactFormData";
import { contactInfo } from "../../data/contactInfo";
import { useContactForm } from "../../hooks/useContactForm";
import { Heading } from "../../components/common/Heading";

const CountryCodeDropdown = ({ value, onChange, codes }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  const inputRef = useRef(null);

  const selected = codes.find((code) => code.code === value) || codes[0];

  const filtered = codes.filter(
    (code) =>
      code.country.toLowerCase().includes(query.toLowerCase()) ||
      code.code.includes(query) ||
      code.label.includes(query),
  );

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const handleSelect = (code) => {
    onChange(code);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2.5 h-full rounded-l border-0 border-r border-r-primary/30 bg-surface text-primary-color focus:outline-none focus:ring-0 cursor-pointer hover:bg-primary/5 transition"
        aria-label="Pilih kode negara"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="text-sm font-medium">{selected.label}</span>
        <Icons.ChevronDown className="w-3.5 h-3.5 text-secondary-color" />
      </button>

      {open && (
        <div className="absolute z-50 top-full left-0 mt-1 w-56 max-h-64 overflow-hidden rounded-lg border border-primary bg-surface shadow-lg shadow-primary/10">
          <div className="p-2 border-b border-primary/20">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari negara atau kode..."
              className="w-full px-3 py-1.5 text-sm rounded border border-primary/30 bg-surface text-primary-color placeholder:text-secondary-color/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30"
            />
          </div>
          <ul className="overflow-y-auto max-h-48 py-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-sm text-secondary-color/60 text-center">Tidak ditemukan</li>
            ) : (
              filtered.map((c) => (
                <li key={c.code}>
                  <button
                    type="button"
                    onClick={() => handleSelect(c.code)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-sm transition ${
                      c.code === value
                        ? "bg-primary/10 text-primary-color font-medium"
                        : "text-primary-color hover:bg-primary/5"
                    }`}
                  >
                    <span className="text-base leading-none">{c.flag}</span>
                    <span className="flex-1 truncate">{c.country}</span>
                    <span className="text-secondary-color text-xs font-mono">{c.label}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

const inputBase =
  "w-full mt-1 md:mt-2 px-4 py-2.5 rounded border bg-surface text-primary-color placeholder:text-secondary-color/60 focus:outline-none focus:ring-2 focus:ring-secondary/40 transition";

const inputNormal = `${inputBase} border-primary focus:border-secondary`;

const inputError = `${inputBase} border-red-500 focus:border-red-500`;

const selectBase =
  "w-full mt-1 md:mt-2 px-4 py-2.5 rounded border bg-surface text-primary-color focus:outline-none focus:ring-2 focus:ring-secondary/40 transition appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1rem] cursor-pointer bg-[image:var(--select-chevron)]";

const selectNormal = `${selectBase} border-primary focus:border-secondary`;

const SubmitButton = ({ isSubmitting, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full py-3.5 px-6 rounded-xl text-sm font-bold transition shadow-lg flex items-center justify-center gap-2 relative ${
        isSubmitting
          ? "bg-primary/60 text-dark/70 cursor-wait"
          : "bg-primary hover:bg-primary-soft text-dark shadow-primary/20"
      }`}
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Mengirim...</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          <Icons.Plane
            className={`w-4 h-4 transition-transform duration-200 ease-(--ease) ${isHovered ? "translate-x-2" : ""}`}
          />
        </>
      )}
    </button>
  );
};

const labelClass = "font-semibold text-primary-color";

const errorTextClass = "mt-1 text-xs text-red-500";

export default function ContactSection() {
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
      <section id="Contact">
        <div className="section-container my-12 lg:my-20 ">
          <Heading
            hasTagline={true}
            taglineText="-/ Konsultasi dan Berdiskusi"
            titleClass="mt-3"
            title="Mulai Proyek Anda Bersama Kami"
            paragraphClass="leading-relaxed max-w-3xl"
            paragraph="Punya rencana pengembangan website, aplikasi mobile, atau butuh tambahan developer? Berikan gambaran
              singkat mengenai sistem yang ingin dibangun atau kriteria talenta IT yang dicari, dan tim kami akan segera
              menghubungi Anda untuk mengatur sesi konsultasi."
          />

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Left: value proposition + contact info */}
            <div className="space-y-3">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex max-md:flex-col lg:items-center gap-4 mb-6 pb-2 border-b border-line">
                    <div className="w-10 h-10 flex items-center justify-center text-secondary shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="flex flex-col gap-1 mb-2">
                      <h3 className="text-xs font-semibold text-secondary-color uppercase tracking-wide">
                        {item.label}
                      </h3>

                      <p className="font-semibold text-primary-color mt-0.5 break-all">{item.value}</p>
                      <p className="text-xs text-secondary-color mt-0.5">{item.note}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: contact form */}
            <Card variant="ghost" hoverable={false} className="bg-transparent">
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
                    onClick={resetForm}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition"
                  >
                    Kirim Pesan Lain
                  </button>
                </CardContent>
              ) : (
                <CardContent className="px-4 py-4 pt-0! lg:p-8">
                  {/* Network error message */}
                  {submitStatus === "network-error" && (
                    <div className="mb-6 p-4 rounded-xl bg-tertiary/10 border border-tertiary/30 text-center space-y-3">
                      <div className="w-12 h-12 bg-tertiary/20 text-tertiary rounded-full flex items-center justify-center mx-auto">
                        <Icons.AlertCircle className="w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-bold text-tertiary">Masalah Koneksi</h3>

                      <p className="text-sm text-secondary-color">
                        Pesan gagal dikirim karena masalah koneksi. Periksa jaringan Anda, lalu coba lagi.
                      </p>

                      <button
                        type="button"
                        onClick={() => setSubmitStatus(null)}
                        className="mt-2 px-5 py-2 rounded-xl bg-tertiary/10 text-tertiary text-sm font-bold hover:bg-tertiary/20 transition"
                      >
                        Coba Lagi
                      </button>
                    </div>
                  )}

                  {/* Generic error message */}
                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 rounded-xl bg-tertiary/10 border border-tertiary/30 text-center space-y-3">
                      <div className="w-12 h-12 bg-tertiary/20 text-tertiary rounded-full flex items-center justify-center mx-auto">
                        <Icons.X className="w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-bold text-tertiary">Gagal Mengirim</h3>

                      <p className="text-sm text-secondary-color">
                        Gagal mengirim pesan, silakan coba lagi atau hubungi kami langsung via WhatsApp.
                      </p>

                      <button
                        type="button"
                        onClick={() => setSubmitStatus(null)}
                        className="mt-2 px-5 py-2 rounded-xl bg-tertiary/10 text-tertiary text-sm font-bold hover:bg-tertiary/20 transition"
                      >
                        Tutup
                      </button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                      {/* Row 2: Email, Phone */}
                      <div className="flex flex-col">
                        <label htmlFor={fieldIds.email} className={labelClass}>
                          Email <span className="text-red-400">*</span>
                        </label>

                        <input
                          id={fieldIds.email}
                          name="email"
                          type="email"
                          autoComplete="email"
                          className={shouldShowError("email") && errors.email ? inputError : inputNormal}
                          placeholder="nama@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                        />

                        {shouldShowError("email") && errors.email && <p className={errorTextClass}>{errors.email}</p>}
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor={fieldIds.phone} className={labelClass}>
                          Nomor WhatsApp/Telepon <span className="text-red-400">*</span>
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
                            className="flex-1 min-w-0 px-3 py-2.5 rounded-r bg-surface text-primary-color placeholder:text-secondary-color/60 focus:outline-none focus:ring-0"
                            placeholder="812-3456-7890"
                            value={phoneState.display}
                            onChange={(e) => handlePhoneInputChange(e.target.value)}
                            onBlur={() => handleBlur("phone")}
                          />
                        </div>

                        {shouldShowError("phone") && errors.phone && <p className={errorTextClass}>{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Row 4: Toggle for optional fields */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => setOptionalOpen(!optionalOpen)}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-soft transition focus:outline-none focus:underline"
                        aria-expanded={optionalOpen}
                      >
                        <span className="text-base font-bold leading-none">{optionalOpen ? "−" : "+"}</span>
                        <span>{optionalOpen ? "Sembunyikan detail lain" : "Tambahkan detail lain (opsional)"}</span>
                      </button>
                    </div>

                    {/* Optional fields panel */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        optionalOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-4 pt-2">
                        {/* Company */}
                        <div className="flex flex-col">
                          <label htmlFor={fieldIds.company} className={labelClass}>
                            Nama Perusahaan <span className="text-secondary-color font-normal text-sm">(opsional)</span>
                          </label>

                          <input
                            id={fieldIds.company}
                            name="company"
                            type="text"
                            autoComplete="organization"
                            className={inputNormal}
                            placeholder="PT Contoh Sukses Mandiri (kosongkan jika individu)"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Time target below + Budget side by side */}

                          <div className="flex flex-col">
                            <label htmlFor={fieldIds.budgetRange} className={labelClass}>
                              Estimasi Budget{" "}
                              <span className="text-secondary-color font-normal text-sm">(opsional)</span>
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
                              <span className="text-secondary-color font-normal text-sm">(opsional)</span>
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

                    {/* Row 5: Project Type */}
                    <fieldset>
                      <legend className={labelClass} id={fieldIds.projectTypes}>
                        Jenis Proyek <span className="text-red-400">*</span>
                      </legend>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {PROJECT_TYPES.map((type) => {
                          const selected = formData.projectTypes.includes(type);
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
                                type="checkbox"
                                name="projectType"
                                value={type}
                                checked={selected}
                                onChange={() => toggleProjectType(type)}
                                className="sr-only"
                              />
                              {type}
                            </label>
                          );
                        })}
                      </div>

                      {shouldShowError("projectTypes") && errors.projectTypes && (
                        <p className={errorTextClass}>{errors.projectTypes}</p>
                      )}
                    </fieldset>

                    {/* Row 6: Message */}
                    <div className="flex flex-col">
                      <label htmlFor={fieldIds.message} className={labelClass}>
                        Pesan <span className="text-red-400">*</span>
                      </label>

                      <textarea
                        id={fieldIds.message}
                        name="message"
                        rows={4}
                        className={`${shouldShowError("message") && errors.message ? inputError : inputNormal} resize-none`}
                        placeholder="Ceritakan singkat tentang ide aplikasi, alur bisnis, atau jumlah developer yang dibutuhkan..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                      ></textarea>

                      {shouldShowError("message") && errors.message && (
                        <p className={errorTextClass}>{errors.message}</p>
                      )}
                    </div>

                    {/* Row 7: Submit button */}
                    <SubmitButton isSubmitting={isSubmitting}>Kirimkan Permintaan dan Dapatkan Estimasi</SubmitButton>
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
