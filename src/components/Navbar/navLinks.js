/**
 * Configuración centralizada de enlaces de navegación.
 * Basada en el prototipo (prototype.enjamer.com), sin "Proyectos".
 * Se reutiliza en la barra de escritorio, el menú móvil y las
 * pestañas inferiores para evitar duplicación de código.
 */
export const NAV_LINKS = [
  {
    id: 'inicio',
    label: 'Inicio',
    to: '/',
    glow: '#7C5CFC',
    icon: 'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10',
  },
  {
    id: 'servicios',
    label: 'Servicios',
    to: '/servicios',
    glow: '#168BFF',
    icon: 'M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 14h7v6H4z',
  },
  {
    id: 'como-trabajamos',
    label: 'Cómo trabajamos',
    to: '/como-trabajamos',
    glow: '#FF7A32',
    icon: 'M9 11l3 3 8-8M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9',
  },
  {
    id: 'nosotros',
    label: 'Nosotros',
    to: '/nosotros',
    glow: '#FFB020',
    icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  },
  {
    id: 'faq',
    label: 'FAQ',
    to: '/preguntas-frecuentes',
    glow: '#4F46E5',
    icon: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
  },
];

export const NAV_CTA = {
  id: 'contacto',
  label: 'Cuéntanos qué necesitas',
  to: '/contacto',
};

export const NAV_PRIMARY_IDS = ['inicio', 'servicios', 'nosotros', 'faq'];
