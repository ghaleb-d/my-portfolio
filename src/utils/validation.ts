// utils/validation.ts
export const validateName = (name: string) => /^[\p{L}\s]+$/u.test(name);
export const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validateSubject = (s: string) => s.trim().length > 0;
export const validateMessage = (m: string) => m.trim().length > 0;
