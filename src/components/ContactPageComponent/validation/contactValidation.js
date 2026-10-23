import { SERVICE_OPTIONS } from '../utils/elementsList';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values, consent) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Escribe tu nombre.';
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Escribe un correo electrónico válido.';
  }

  if (!SERVICE_OPTIONS.some((option) => option.id === values.service)) {
    errors.service = 'Selecciona un servicio.';
  }

  if (!values.description.trim()) {
    errors.description = 'Describe tu necesidad.';
  }

  if (!consent) {
    errors.consent = 'Debes autorizar el tratamiento de tus datos para continuar.';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}
