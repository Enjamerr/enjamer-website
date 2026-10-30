export const SERVICE_OPTIONS = [
  { id: 'productos-saas', label: 'Productos SaaS' },
  { id: 'software-a-medida', label: 'Desarrollo de software a medida' },
  { id: 'orientacion-tecnica', label: 'Orientación técnica' },
  { id: 'capacidad-adicional', label: 'Capacidad adicional para equipos tecnológicos' },
  { id: 'soporte-y-evolucion', label: 'Soporte y evolución de soluciones' },
];

export const INITIAL_VALUES = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  description: '',
};

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

  return errors;
}
