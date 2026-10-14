/**
 * Configuración centralizada de enlaces de navegación.
 * Basada en el prototipo (prototype.enjamer.com), sin "Proyectos".
 * Se reutiliza en la barra de escritorio, el menú móvil y las
 * pestañas inferiores para evitar duplicación de código.
 */
export const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio', to: '/' },
  { id: 'servicios', label: 'Servicios', to: '/servicios' },
  { id: 'como-trabajamos', label: 'Cómo trabajamos', to: '/como-trabajamos' },
  { id: 'nosotros', label: 'Nosotros', to: '/nosotros' },
  { id: 'faq', label: 'FAQ', to: '/preguntas-frecuentes' },
];

export const NAV_CTA = {
  id: 'contacto',
  label: 'Cuéntanos qué necesitas',
  to: '/contacto',
};

export const NAV_PRIMARY_IDS = ['inicio', 'servicios', 'nosotros', 'faq'];
