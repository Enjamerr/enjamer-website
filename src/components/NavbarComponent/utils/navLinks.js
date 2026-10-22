import {
  CircleHelp,
  ClipboardCheck,
  Compass,
  Gem,
  Hexagon,
  House,
  LayoutGrid,
  Target,
  Users,
} from 'lucide-react';

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

export const NAV_DROPDOWN = [
  {
    id: 'proposito',
    label: 'Propósito',
    to: '/nosotros/proposito',
    icon: Target,
  },
  {
    id: 'nuestro-nombre',
    label: 'Nuestro nombre',
    to: '/nosotros/nuestro-nombre',
    icon: Hexagon,
  },
  {
    id: 'valores',
    label: 'Valores',
    to: '/nosotros/valores',
    icon: Gem,
  },
  {
    id: 'principios',
    label: 'Principios',
    to: '/nosotros/principios',
    icon: Compass,
  },
];

export const NAV_CTA = {
  id: 'contacto',
  label: 'Cuéntanos qué necesitas',
  to: '/contacto',
};
