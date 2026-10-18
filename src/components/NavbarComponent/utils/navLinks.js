import { CircleHelp, ClipboardCheck, House, LayoutGrid, Users } from 'lucide-react';

export const NAV_LINKS = [
  {
    id: 'inicio',
    label: 'Inicio',
    to: '/',
    icon: House,
  },
  {
    id: 'servicios',
    label: 'Servicios',
    to: '/servicios',
    icon: LayoutGrid,
  },
  {
    id: 'como-trabajamos',
    label: 'Cómo trabajamos',
    to: '/como-trabajamos',
    icon: ClipboardCheck,
  },
  {
    id: 'nosotros',
    label: 'Nosotros',
    to: '/nosotros',
    icon: Users,
  },
  {
    id: 'faq',
    label: 'FAQ',
    to: '/preguntas-frecuentes',
    icon: CircleHelp,
  },
];

export const NAV_CTA = {
  id: 'contacto',
  label: 'Cuéntanos qué necesitas',
  to: '/contacto',
};
