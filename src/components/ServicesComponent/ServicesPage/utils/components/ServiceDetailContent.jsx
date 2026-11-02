import { Link } from 'react-router-dom';
import ButtonComponent from '../../../../common/ButtonComponent/ButtonComponent';

export default function ServiceDetailContent({ service, contentRef, titleId }) {
  const ActiveIcon = service.Icon;
  return (
    <div className="service-info__content" ref={contentRef}>
      <div className="service-info__top">
        <p className="service-info__kicker">
          <span aria-hidden="true"></span>
          De la necesidad a la solución
        </p>
        <span className="service-info__icon">
          <ActiveIcon size={22} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>

      <h2 id={titleId}>{service.infoTitle}</h2>
      <p className="service-info__description">{service.description}</p>

      <div className="service-info__columns">
        <div className="help-block">
          <h3>Podemos ayudarte a</h3>
          <ul>
            {service.canHelp.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="for-you-block">
          <h3>Es para ti si...</h3>
          <p>{service.forYou}</p>
        </div>
      </div>

      <ButtonComponent text={service.button} to="/contacto" />

      <div className="service-info__foot">
        <p>Escuchamos primero. Construimos contigo.</p>
        <Link to="/como-trabajamos">
          Conoce el proceso <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
