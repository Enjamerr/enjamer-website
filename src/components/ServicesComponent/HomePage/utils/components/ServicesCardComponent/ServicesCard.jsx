import './ServicesCard.css';

export default function ServicesCard({
  id,
  title,
  description,
  Icon,
  illustration,
  buttonLabel,
  href,
  variant = 'standard',
}) {
  return (
    <article
      className={`services-card services-card--${variant}`}
      aria-labelledby={`service-${id}`}
    >
      <div className="services-card__main">
        <div className="services-card__top">
          <span className="services-card__icon">
            {Icon && <Icon size={20} strokeWidth={1.5} aria-hidden="true" />}
          </span>
        </div>
        <h3 id={`service-${id}`}>{title}</h3>
        <p>{description}</p>
        <a
          className="services-card__button--glass"
          href={href}
          aria-label={`${buttonLabel}: ${title}`}
        >
          {buttonLabel}
          <span className="services-card__arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
      {illustration && <div className="services-card__media">{illustration}</div>}
    </article>
  );
}
