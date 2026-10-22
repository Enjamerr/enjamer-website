import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Compass, Layers, Share2, Users } from 'lucide-react';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent';
import ButtonComponent from '../common/ButtonComponent/ButtonComponent';
import BottonPanelComponent from '../common/BottonPanelComponent/BottonPanelComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import heroImage from '../../assets/hero-image.jpg';
import './ServicesPageComponent.css';

const HASH_TO_SERVICE = {
  'tab-saas': 'productos-saas',
  'tab-software': 'software-a-medida',
  'tab-orientacion': 'orientacion-tecnica',
  'tab-capacidad': 'capacidad-adicional',
  'tab-soporte': 'soporte-y-evolucion',
};

const SERVICES = [
  {
    id: 'productos-saas',
    title: 'Productos SaaS',
    infoTitle: 'Productos SaaS',
    cardDescription: 'HRM, ERP, CRM y más; herramientas digitales preparadas para evolucionar.',
    description:
      'Productos de software ofrecidos como servicio y preparados para evolucionar. SaaS significa que utilizas una solución a través de internet, bajo las condiciones acordadas para cada producto.',
    Icon: Layers,
    canHelp: [
      'Acceder a herramientas digitales desde internet.',
      'Contar con una solución que pueda evolucionar.',
    ],
    forYou:
      'Organizaciones y personas que buscan herramientas para necesidades concretas. La disponibilidad y condiciones de cada producto se confirman al conversar.',
  },
  {
    id: 'software-a-medida',
    title: 'Software a medida',
    infoTitle: 'Desarrollo de software a medida',
    cardDescription: 'Software que se adapta a tu forma de trabajar.',
    description:
      'Soluciones tecnológicas adaptadas a los procesos, necesidades y objetivos de cada cliente.',
    Icon: Code,
    canHelp: [
      'Convertir una idea en una solución viable.',
      'Organizar procesos y reducir tareas repetitivas.',
      'Conectar herramientas que necesitan trabajar juntas.',
    ],
    forYou:
      'Personas, emprendimientos y organizaciones que necesitan una solución ajustada a su realidad.',
  },
  {
    id: 'orientacion-tecnica',
    title: 'Orientación técnica',
    infoTitle: 'Orientación técnica',
    cardDescription: 'Claridad para tomar tu próxima decisión.',
    description:
      'Acompañamiento para evaluar ideas, comprender alternativas y tomar decisiones tecnológicas.',
    Icon: Compass,
    canHelp: [
      'Entender si una idea es viable.',
      'Comparar alternativas y sus implicaciones.',
      'Definir por dónde empezar.',
    ],
    forYou:
      'Personas con o sin experiencia técnica que necesitan criterio y una explicación comprensible.',
  },
  {
    id: 'capacidad-adicional',
    title: 'Capacidad adicional',
    infoTitle: 'Capacidad adicional para equipos tecnológicos',
    cardDescription: 'Más capacidades para construir juntos.',
    description:
      'Apoyo que complementa las capacidades de equipos existentes y facilita el avance de proyectos.',
    Icon: Users,
    canHelp: [
      'Complementar las capacidades de un equipo.',
      'Apoyar el desarrollo de un proyecto en marcha.',
      'Compartir conocimientos y mejorar la colaboración.',
    ],
    forYou: 'Empresas y equipos tecnológicos que buscan apoyo compatible con su forma de trabajar.',
  },
  {
    id: 'soporte-y-evolucion',
    title: 'Soporte y evolución',
    infoTitle: 'Soporte y evolución de soluciones',
    cardDescription: 'Acompañamiento que continúa después de la entrega.',
    description:
      'Mantenimiento, mejora y acompañamiento de soluciones tecnológicas después de su entrega.',
    Icon: Share2,
    canHelp: [
      'Mantener una solución en funcionamiento.',
      'Atender mejoras y nuevas necesidades.',
      'Planear su evolución con información clara.',
    ],
    forYou:
      'Equipos y organizaciones con una solución tecnológica que necesita cuidado y evolución.',
  },
];

function ServicesPageComponent() {
  const [activeService, setActiveService] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return HASH_TO_SERVICE[hash] || null;
  });

  const active = SERVICES.find((service) => service.id === activeService) || SERVICES[0];
  const ActiveIcon = active.Icon;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Enjamer - Servicio';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const target = document.getElementById('service-cards');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <>
      <section className="services-page">
        <img className="services-page__background" src={heroImage} alt="" aria-hidden="true" />
        <TextContentComponent
          upperText="Servicios"
          mainText="Cada necesidad tiene su propio camino"
          htmlTag="h1"
          fontFamily="Cinzel"
          supportingParagraph="Una idea por construir. Un proceso por mejorar. Un equipo que necesita apoyo. Encuentra por dónde podemos empezar."
          paragraphPosition="bottom"
        />

        <div className="services-layout" id="service-cards">
          <nav className="service-cards" aria-label="Servicios">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                className={`service-card${active.id === service.id ? ' active' : ''}`}
                aria-pressed={active.id === service.id}
                onClick={() => setActiveService(service.id)}
              >
                <span className="service-card__head">
                  <h3>{service.title}</h3>
                  <span className="service-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>
                <p>{service.cardDescription}</p>
              </button>
            ))}
          </nav>

          <main className="service-info">
            <div className="service-info__top">
              <p className="service-info__kicker">
                <span aria-hidden="true"></span>
                De la necesidad a la solución
              </p>
              <span className="service-info__icon">
                <ActiveIcon size={22} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>

            <h2>{active.infoTitle}</h2>
            <p className="service-info__description">{active.description}</p>

            <div className="service-info__columns">
              <div className="help-block">
                <h4>Podemos ayudarte a</h4>
                <ul>
                  {active.canHelp.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="for-you-block">
                <h4>Es para ti si...</h4>
                <p>{active.forYou}</p>
              </div>
            </div>

            <ButtonComponent text="Cuéntanos qué necesitas" to="/contacto" />

            <div className="service-info__foot">
              <p>Escuchamos primero. Construimos contigo.</p>
              <Link to="/como-trabajamos">
                Conoce el proceso <span aria-hidden="true">→</span>
              </Link>
            </div>
          </main>
        </div>

        <section className="orientation">
          <hr className="orientation__rule" />
          <Compass className="orientation__icon" aria-hidden="true" />
          <h2>¿Todavía no sabes qué necesitas?</h2>
          <p>Contáctanos y te ayudamos a descubrirlo.</p>
          <ButtonComponent text="Contactar" to="/contacto" />
          <hr className="orientation__rule" />
        </section>

        <BottonPanelComponent
          upperText="El siguiente paso lo damos juntos"
          mainText="Las buenas soluciones empiezan con una conversación"
          supportingParagraph="Cuéntanos tu idea, tu necesidad o ese proceso que quieres mejorar. Empecemos por entenderlo."
          buttonText="Cuéntanos qué necesitas"
          buttonHref="/contacto"
        />
      </section>

      <FooterComponent />
    </>
  );
}

export default ServicesPageComponent;
