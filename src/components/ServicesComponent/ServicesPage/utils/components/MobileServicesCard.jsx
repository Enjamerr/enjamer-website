import { ArrowLeft, ArrowRight } from 'lucide-react';
import useMobileServiceNavigation from '../../hook/mobile/useMobileServiceNavigation.jsx';
import useMobileServiceHeight from '../../hook/mobile/useMobileServiceHeight.jsx';
import ServiceDetailContent from './ServiceDetailContent.jsx';

export default function MobileServicesCard({ services, initialServiceId }) {
  const { current, previous, panels, navigate } = useMobileServiceNavigation(
    services,
    initialServiceId,
  );
  const cardRef = useMobileServiceHeight(panels, current);

  return (
    <article ref={cardRef} className="service-info service-info--mobile" aria-label="Servicios">
      <div className="service-info__mobile-panels" aria-live="polite">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(node) => {
              panels.current[index] = node;
            }}
            className="service-info__mobile-panel"
            hidden={index !== current && index !== previous}
            aria-hidden={index !== current}
            inert={index !== current}
          >
            <ServiceDetailContent service={service} titleId={`mobile-title-${service.id}`} />
          </div>
        ))}
      </div>
      <button
        className="service-info__mobile-next service-info__mobile-prev"
        type="button"
        aria-label="Servicio anterior"
        disabled={current === 0}
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={24} strokeWidth={1.5} aria-hidden="true" />
      </button>
      <button
        className="service-info__mobile-next"
        type="button"
        aria-label="Siguiente servicio"
        disabled={current === services.length - 1}
        onClick={() => navigate(1)}
      >
        <ArrowRight size={24} strokeWidth={1.5} aria-hidden="true" />
        <span className="service-info__mobile-number" aria-hidden="true">
          {String(current + 1).padStart(2, '0')}
        </span>
      </button>
    </article>
  );
}
