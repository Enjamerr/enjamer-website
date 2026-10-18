import { Blocks, Lightbulb, SlidersHorizontal, Users } from 'lucide-react';

export const CLIENTS = [
  {
    id: 'idea',
    title: 'Personas con una idea',
    description: 'Orientación para convertir una necesidad en un camino posible.',
    Icon: Lightbulb,
  },
  {
    id: 'startups',
    title: 'Startups y organizaciones',
    description: 'Soluciones para tú procesos y su crecimiento como equipo o independiente',
    Icon: Blocks,
  },
  {
    id: 'equipos',
    title: 'Equipos tecnológicos',
    description: 'Capacidades que se suman al conocimiento de tu equipo.',
    Icon: Users,
  },
  {
    id: 'evolucion',
    title: 'Productos en evolución',
    description: 'Soporte y mejoras para lo que ya has construido.',
    Icon: SlidersHorizontal,
  },
];
