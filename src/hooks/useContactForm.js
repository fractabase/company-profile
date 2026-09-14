import { useState, useCallback, useMemo } from "react";
import { validators } from "../utils/validators";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectTypes: ["Web Application"],
  budgetRange: "",
  timeTarget: "",
  message: "",
};

const INITIAL_PHONE_STATE = {
  countryCode: "62",
  raw: "",
  display: "",
};

const INITIAL_TOUCHED = {
  name: false,
  email: false,
  phone: false,
  projectTypes: false,
  message: false,
};

export function useContactForm({ onSubmit } = {}) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [phoneState, setPhoneState] = useState(INITIAL_PHONE_STATE);
  const [optionalOpen, setOptionalOpen] = useState(false);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const fieldIds = useMemo(() => ({
    name: "contact-name",
    email: "contact-email",
    phone: "contact-phone",
    company: "contact-company",
    projectTypes: "contact-project-types",
    budgetRange: "contact-budget",
    timeTarget: "contact-time",
    message: "contact-message",
  }), []);

  const handleChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handlePhoneInputChange = useCallback((inputValue) => {
    const rawDigits = inputValue.replace(/\D/g, "");
    const limitedDigits = rawDigits.slice(0, 13);
    const display = formatPhoneNumber(limitedDigits);
    const fullNumber = phoneState.countryCode + limitedDigits;

    setPhoneState((prev) => ({
      countryCode: prev.countryCode,
      raw: limitedDigits,
      display: display,
    }));

    setFormData((prev) => ({ ...prev, phone: fullNumber }));
  }, [phoneState.countryCode]);

  const handleCountryCodeChange = useCallback((newCode) => {
    const fullNumber = newCode + phoneState.raw;
    setPhoneState((prev) => ({
      countryCode: newCode,
      raw: prev.raw,
      display: prev.display,
    }));
    setFormData((prev) => ({ ...prev, phone: fullNumber }));
  }, [phoneState.raw]);

  const handleBlur = useCallback((field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const toggleProjectType = useCallback((type) => {
    setFormData((prev) => {
      const current = prev.projectTypes;
      const updated = current.includes(type) ? current.filter((t) => t !== type) : [...current, type];
      return { ...prev, projectTypes: updated.length > 0 ? updated : ["Web Application"] };
    });
  }, []);

  const getErrors = useCallback(() => {
    const errors = {};

    if (!validators.required(formData.name)) {
      errors.name = "Nama Lengkap wajib diisi.";
    }

    if (!validators.required(formData.email)) {
      errors.email = "Email wajib diisi.";
    } else if (!validators.email(formData.email)) {
      errors.email = "Format email tidak valid, contoh: nama@email.com";
    }

    if (!phoneState.raw) {
      errors.phone = "Nomor WhatsApp/Telepon wajib diisi.";
    } else if (!validators.phone(phoneState.raw)) {
      errors.phone = "Nomor tidak valid, masukkan 8-13 digit angka.";
    }

    if (formData.projectTypes.length === 0) {
      errors.projectTypes = "Pilih minimal satu jenis proyek.";
    }

    if (!validators.required(formData.message)) {
      errors.message = "Pesan wajib diisi.";
    }

    return errors;
  }, [formData, phoneState.raw]);

  const errors = getErrors();
  const hasErrors = Object.keys(errors).length > 0;

  const shouldShowError = useCallback((field) => {
    return submitAttempted || touched[field];
  }, [submitAttempted, touched]);

  const scrollToFirstError = useCallback(() => {
    const fieldOrder = ["name", "email", "phone", "projectTypes", "message"];
    for (const field of fieldOrder) {
      if (errors[field]) {
        const element = document.getElementById(fieldIds[field]);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.focus();
          break;
        }
      }
    }
  }, [errors, fieldIds]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    setSubmitAttempted(true);
    setTouched({
      name: true,
      email: true,
      phone: true,
      projectTypes: true,
      message: true,
    });

    if (hasErrors) {
      scrollToFirstError();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log("Form submitted:", formData);
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setSubmitStatus("success");
      setSubmitted(true);
      setFormData(INITIAL_FORM_DATA);
      setPhoneState(INITIAL_PHONE_STATE);
      setTouched(INITIAL_TOUCHED);
      setSubmitAttempted(false);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, hasErrors, onSubmit, scrollToFirstError]);

  const resetForm = useCallback(() => {
    setSubmitted(false);
    setSubmitStatus(null);
    setTouched(INITIAL_TOUCHED);
    setSubmitAttempted(false);
    setOptionalOpen(false);
  }, []);

  return {
    formData,
    phoneState,
    optionalOpen,
    setOptionalOpen,
    setSubmitStatus,
    touched,
    errors,
    hasErrors,
    submitAttempted,
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
    scrollToFirstError,
    handleSubmit,
    resetForm,
  };
}
