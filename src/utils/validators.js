const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validators = {
  email: (value) => EMAIL_REGEX.test(value.trim()),
  phone: (digits) => digits.length >= 8 && digits.length <= 13,
  required: (value) => value.trim().length > 0,
};
