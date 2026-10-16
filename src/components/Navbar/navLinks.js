import { LuCircleHelp, LuClipboardCheck, LuHouse, LuLayoutGrid, LuUsers } from 'react-icons/lu';

export const NAV_LINKS = [
  {
    id: 'inicio',
    label: 'Inicio',
    to: '/',
    icon: LuHouse,
  },
  {
    id: 'servicios',
    label: 'Servicios',
    to: '/servicios',
    icon: LuLayoutGrid,
  },
  {
    id: 'como-trabajamos',
    label: 'Cómo trabajamos',
    to: '/como-trabajamos',
    icon: LuClipboardCheck,
  },
  {
    id: 'nosotros',
    label: 'Nosotros',
    to: '/nosotros',
    icon: LuUsers,
  },
  {
    id: 'faq',
    label: 'FAQ',
    to: '/preguntas-frecuentes',
    icon: LuCircleHelp,
  },
];

export const NAV_CTA = {
  id: 'contacto',
  label: 'Cuéntanos qué necesitas',
  to: '/contacto',
};
