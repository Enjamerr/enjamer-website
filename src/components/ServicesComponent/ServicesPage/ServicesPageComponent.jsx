import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AppPresentationContext } from '../../../app/providers/AppPresentationContext.js';
import { Compass } from 'lucide-react';
import { SERVICES } from './utils/ServicesPageData.js';
import useLayoutTrancition from './hook/layoutTrancition.jsx';
import useContentAnimation from './hook/useContentAnimation.jsx';
import TextContentComponent from '../../common/TextContentComponent/TextContentComponent';
import ButtonComponent from '../../common/ButtonComponent/ButtonComponent';
import BottonPanelComponent from '../../common/BottonPanelComponent/BottonPanelComponent';
import ServiceDetailContent from './utils/components/ServiceDetailContent.jsx';
import MobileServicesCard from './utils/components/MobileServicesCard.jsx';
import './ServicesPageComponent.css';

const getServiceFromHash = () =>
  SERVICES.find((service) => `#${service.tabId}` === window.location.hash)?.id || null;

function ServicesPageComponent() {
  const revealNavigation = useContext(AppPresentationContext);
  const introRef = useRef(null);
  const { detailRef, contentRef } = useLayoutTrancition();

  useLayoutEffect(() => {
    revealNavigation();
  }, [revealNavigation]);

  useContentAnimation(introRef);

  const [activeService, setActiveService] = useState(getServiceFromHash);

  useEffect(() => {
    const syncService = () => setActiveService(getServiceFromHash());
    window.addEventListener('hashchange', syncService);
    return () => window.removeEventListener('hashchange', syncService);
  }, []);

  const active = SERVICES.find((service) => service.id === activeService) || SERVICES[0];
  useContentAnimation(contentRef, active.id, ':scope > *');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Servicios';
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
    <main className="services-page" id="contenido">
      <div className="services-page__backdrop" aria-hidden="true" />
      <header className="services-page__intro services-page__wrap" ref={introRef}>
        <TextContentComponent
          animate
          upperText="Servicios"
          mainText="Cada necesidad tiene su propio camino"
          htmlTag="h1"
          mainId="services-title"
          supportingParagraph="Una idea por construir. Un proceso por mejorar. Un equipo por apoyar. Encuentra la fórmula en que mejor coexistimos."
          paragraphPosition="bottom"
        />
      </header>

      <div className="services-layout" id="service-cards">
        <nav className="service-cards" aria-label="Servicios">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              id={service.tabId}
              type="button"
              className={`service-card${active.id === service.id ? ' active' : ''}`}
              aria-pressed={active.id === service.id}
              aria-controls="service-detail"
              onClick={() => {
                setActiveService(service.id);
                window.history.pushState(null, '', `#${service.tabId}`);
              }}
            >
              <span className="service-card__content">
                <span className="service-card__title">{service.title}</span>
                <span className="service-card__description">{service.cardDescription}</span>
              </span>
              <span className="service-card__arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </nav>

        <article
          ref={detailRef}
          className="service-info service-info--desktop"
          id="service-detail"
          aria-labelledby="service-detail-title"
        >
          <ServiceDetailContent
            service={active}
            contentRef={contentRef}
            titleId="service-detail-title"
          />
        </article>
        <MobileServicesCard services={SERVICES} initialServiceId={active.id} />
      </div>

      <section className="orientation">
        <hr className="orientation__rule" />
        <Compass className="orientation__icon" aria-hidden="true" />
        <h2>¿Necesitas más información?</h2>
        <p>
          Es <b>gratis</b>, solo da clic y pregunta.
        </p>
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
    </main>
  );
}

export default ServicesPageComponent;
