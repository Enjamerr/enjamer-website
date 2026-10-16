import { Code, Compass, Layers, Users, Wrench } from 'lucide-react';

import TextContent from '../common/TextContent/TextContent';
import ServicesCard from '../ServicesCard/ServicesCard';
import useServicesReveal from './hooks/useServicesReveal';
import './ServicesSection.css';

const services = [
  {
    id: 'saas',
    title: 'Productos SaaS',
    description:
      'HRM, ERP, CRM y más; herramientas digitales preparadas para evolucionar y adaptarse a ti, a tu negocio, a tu progreso.',
    Icon: Layers,
    variant: 'featured',
    illustration: (
      <div className="services-saas" aria-hidden="true">
        <div className="services-saas__card services-saas__card--main">
          <div className="services-saas__row">
            <span className="services-saas__avatars">
              <i />
              <i />
              <i />
            </span>
            <span className="services-saas__badge" />
          </div>
          <span className="services-saas__line services-saas__line--long" />
          <span className="services-saas__line services-saas__line--short" />
          <div className="services-saas__bars">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="services-saas__card services-saas__card--float">
          <span className="services-saas__dot" />
          <span className="services-saas__line services-saas__line--long" />
          <span className="services-saas__spark" />
        </div>
        <span className="services-saas__orb" />
      </div>
    ),
  },
  {
    id: 'software',
    title: 'Desarrollo de software a medida',
    description: 'Software que se adapta a tu forma de trabajar.',
    Icon: Code,
  },
  {
    id: 'orientacion',
    title: 'Orientación técnica',
    description: 'Claridad para tomar tu próxima decisión.',
    Icon: Compass,
  },
  {
    id: 'capacidad',
    title: 'Capacidad adicional para equipos tecnológicos',
    description: 'Más capacidades para construir juntos.',
    Icon: Users,
  },
  {
    id: 'soporte',
    title: 'Soporte y evolución de soluciones',
    description: 'Acompañamiento que continúa después de la entrega.',
    Icon: Wrench,
  },
];

export default function ServicesSection() {
  const { sectionRef } = useServicesReveal();

  return (
    <section
      className="services"
      id="servicios"
      aria-labelledby="services-heading"
      ref={sectionRef}
    >
      <div className="services__inner">
        <TextContent
          upperText="Lo que podemos construir"
          mainText="Tu necesidad. Nuestro punto de partida"
          htmlTag="h2"
          mainId="services-heading"
          fontFamily="Cinzel"
          supportingParagraph="Desde una primera idea hasta una solución que necesita evolucionar. Encuentra la forma en que podemos ayudarte."
          paragraphPosition="right"
        />
        <div className="services__grid">
          {services.map((service) => (
            <ServicesCard
              key={service.id}
              {...service}
              buttonLabel="Conoce el servicio"
              href={`/servicios#tab-${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
