import TextContent from '../common/TextContent/TextContent';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

const services = [
  {
    id: 'saas',
    title: 'Productos SaaS',
    description:
      'HRM, ERP, CRM y más; herramientas digitales preparadas para evolucionar y adaptarse a ti, a tu negocio, a tu progreso.',
    icon: 'layers',
    variant: 'featured',
    accent: 'purple',
  },
  {
    id: 'software',
    title: 'Desarrollo de software a medida',
    description: 'Software que se adapta a tu forma de trabajar.',
    icon: 'code',
    accent: 'blue',
    illustration: (
      <div className="services-code" aria-hidden="true">
        <div className="services-code__bar">
          <i />
          <i />
          <i />
          <span>tu-proxima-idea.js</span>
        </div>
        <pre>
          <code>
            {'const idea = {\n  comunidad: true,\n  progreso: "juntos"\n};\n\nconstruir(idea);'}
          </code>
        </pre>
      </div>
    ),
  },
  {
    id: 'orientacion',
    title: 'Orientación técnica',
    description: 'Claridad para tomar tu próxima decisión.',
    icon: 'compass',
    accent: 'gold',
  },
  {
    id: 'capacidad',
    title: 'Capacidad adicional para equipos tecnológicos',
    description: 'Más capacidades para construir juntos.',
    icon: 'users',
    accent: 'purple',
  },
  {
    id: 'soporte',
    title: 'Soporte y evolución de soluciones',
    description: 'Acompañamiento que continúa después de la entrega.',
    icon: 'tools',
    accent: 'blue',
  },
];

export default function ServicesSection() {
  return (
    <section className="services" id="servicios" aria-labelledby="services-heading">
      <div className="services__inner">
        <TextContent
          upperText="Lo que podemos construir"
          mainText="Tu necesidad. Nuestro punto de partida."
          htmlTag="h2"
          mainId="services-heading"
          fontFamily="Inter"
          supportingParagraph="Desde una primera idea hasta una solución que necesita evolucionar. Encuentra la forma en que podemos ayudarte."
          paragraphPosition="right"
        />
        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              number={index + 1}
              buttonLabel="Conoce el servicio"
              href={`/servicios#tab-${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
