import { Code, Compass, Layers, Users, Wrench } from 'lucide-react';

export const SERVICES = [
  {
    id: 'productos-saas',
    title: 'Productos SaaS',
    infoTitle: 'Desarrollo y acceso a productos SaaS',
    cardDescription: 'Soluciones digitales con una inversión inicial accesible y pagos periódicos.',
    description:
      'SaaS (Softwares as a service) o software como servicio es el modelo que desarrollamos y en el que ofrecemos soluciones adaptadas a necesidades específicas. Si aún no contamos con la solución que necesitas, podemos crearla desde cero, con un pago inicial accesible y pagos periódicos por su uso.',
    Icon: Layers,
    canHelp: [
      'Acceder a soluciones digitales existentes o desarrollar una nueva según tus necesidades.',
      'Reducir la inversión inicial frente a un desarrollo de software completamente a medida.',
      'Utilizar un sistema alojado y gestionado como servicio, con mantenimiento y mejoras según el plan contratado.',
    ],
    forYou:
      'Necesitas una solución tecnológica con una inversión inicial accesible y pagos periódicos.',
    button: 'Quiero una solución SaaS',
  },
  {
    id: 'software-a-medida',
    title: 'Software a medida',
    infoTitle: 'Desarrollo de software a medida',
    cardDescription: 'Aplicaciones y sistemas desarrollados según tus necesidades.',
    description:
      'Diseñamos y desarrollamos soluciones de software adaptadas a los procesos y necesidades específicas de cada cliente. Esto incluye aplicaciones web, sistemas de gestión, automatización de procesos e integración entre herramientas digitales.',
    Icon: Code,
    canHelp: [
      'Desarrollar aplicaciones para gestionar información y operaciones.',
      'Automatizar tareas manuales y procesos repetitivos.',
      'Integrar sistemas para facilitar el intercambio de información.',
    ],
    forYou:
      'Necesitas una solución tecnológica con funcionalidades específicas que las herramientas existentes no ofrecen o no se ajustan completamente a tus procesos.',
    button: 'Quiero mi propio software',
  },
  {
    id: 'orientacion-tecnica',
    title: 'Orientación técnica',
    infoTitle: 'Orientación técnica',
    cardDescription: 'Asesoramiento para evaluar ideas y tomar decisiones tecnológicas.',
    description:
      'Brindamos asesoramiento para evaluar ideas, identificar necesidades tecnológicas y analizar alternativas de implementación. Te ayudamos a comprender las opciones disponibles, sus ventajas, limitaciones y requisitos antes de tomar decisiones.',
    Icon: Compass,
    canHelp: [
      'Evaluar la viabilidad técnica de una idea o proyecto.',
      'Comparar tecnologías, herramientas y alternativas de desarrollo.',
      'Identificar requisitos y definir los siguientes pasos de implementación.',
    ],
    forYou:
      'Tienes una idea, un problema o una decisión tecnológica pendiente y necesitas orientación profesional antes de invertir recursos o comenzar un desarrollo.',
    button: 'Quiero asesorarme',
  },
  {
    id: 'capacidad-adicional',
    title: 'Capacidad adicional',
    infoTitle: 'Capacidad adicional para equipos tecnológicos',
    cardDescription: 'Apoyo técnico para complementar equipos de desarrollo.',
    description:
      'Apoyamos a equipos de desarrollo que necesitan recursos técnicos adicionales para ejecutar proyectos, implementar funcionalidades o atender tareas específicas. Nos integramos al trabajo existente de acuerdo con los objetivos, tecnologías y responsabilidades acordadas.',
    Icon: Users,
    canHelp: [
      'Desarrollar funcionalidades dentro de proyectos existentes.',
      'Apoyar tareas de programación, integración y mantenimiento.',
      'Complementar temporalmente la capacidad de un equipo técnico.',
    ],
    forYou:
      'Tu empresa cuenta con un equipo tecnológico, pero necesita apoyo adicional para atender su carga de trabajo, cubrir necesidades específicas o avanzar en un proyecto.',
    button: 'Necesito un equipo',
  },
  {
    id: 'soporte-y-evolucion',
    title: 'Soporte y evolución',
    infoTitle: 'Soporte y evolución de soluciones',
    cardDescription: 'Mantenimiento, soporte y mejoras para sistemas existentes.',
    description:
      'Prestamos servicios de mantenimiento, soporte técnico y mejora continua de aplicaciones y sistemas existentes. Nuestro objetivo es corregir problemas, implementar cambios y adaptar las soluciones a nuevas necesidades operativas.',
    Icon: Wrench,
    canHelp: [
      'Diagnosticar y corregir errores de funcionamiento.',
      'Implementar mejoras y nuevas funcionalidades.',
      'Realizar mantenimiento y actualizaciones de software.',
    ],
    forYou:
      'Ya cuentas con una aplicación o sistema tecnológico que necesita mantenimiento, corrección de errores, actualizaciones o nuevas funcionalidades para continuar siendo útil.',
    button: 'Solicitar soporte',
  },
].map((service) => ({
  ...service,
  tabId: `tab-${service.id.split('-')[0]}`,
}));
