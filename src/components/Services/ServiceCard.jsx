const icons = {
  layers: (
    <>
      <path d="m12 3 10 5-10 5L2 8Z" />
      <path d="m2 12 10 5 10-5M2 16l10 5 10-5" />
    </>
  ),
  code: <path d="m18 16 4-4-4-4M6 8l-4 4 4 4m8.5-12-5 16" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16 8-3 5-5 3 3-5Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="7" r="4" />
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m14-18a4 4 0 0 1 0 8m6 10v-2a4 4 0 0 0-3-4" />
    </>
  ),
  tools: (
    <path d="m14 6 4 4m-8 4-6 6a2 2 0 0 1-3-3l6-6m8 4 5 5-3 3-5-5M3 3l5 1 1 4 4 4m1-6a5 5 0 0 1 6-4l-3 3 2 2 3-3a5 5 0 0 1-6 6l-3 3" />
  ),
};

export default function ServiceCard({
  id,
  title,
  description,
  icon,
  illustration,
  buttonLabel,
  href,
  variant = 'standard',
  accent = 'purple',
  number,
}) {
  return (
    <article
      className={`services-card services-card--${variant} services-card--${accent}`}
      aria-labelledby={`service-${id}`}
    >
      <div className="services-card__top">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[icon]}
        </svg>
        <span aria-hidden="true">{String(number).padStart(2, '0')}</span>
      </div>
      <h3 id={`service-${id}`}>{title}</h3>
      <p>{description}</p>
      {illustration}
      <a className="services-card__button" href={href} aria-label={`${buttonLabel}: ${title}`}>
        {buttonLabel}
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
