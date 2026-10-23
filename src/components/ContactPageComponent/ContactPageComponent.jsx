import { useEffect, useRef, useState } from 'react';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import heroImage from '../../assets/hero-image.jpg';
import '../common/ButtonComponent/ButtonComponent.css';
import './ContactPageComponent.css';

const SERVICE_OPTIONS = [
  { id: 'productos-saas', label: 'Productos SaaS' },
  { id: 'software-a-medida', label: 'Desarrollo de software a medida' },
  { id: 'orientacion-tecnica', label: 'Orientación técnica' },
  { id: 'capacidad-adicional', label: 'Capacidad adicional para equipos tecnológicos' },
  { id: 'soporte-y-evolucion', label: 'Soporte y evolución de soluciones' },
];

const INITIAL_VALUES = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  description: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Escribe tu nombre.';
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Escribe un correo electrónico válido.';
  }

  if (!SERVICE_OPTIONS.some((option) => option.id === values.service)) {
    errors.service = 'Selecciona un servicio.';
  }

  if (!values.description.trim()) {
    errors.description = 'Describe tu necesidad.';
  }

  return errors;
}

export default function ContactPageComponent() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Enjamer - Contacto';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  const updateField = (field) => (event) => {
    const { value } = event.target;
    setValues((previous) => ({ ...previous, [field]: value }));
    setSuccess(false);

    if (errors[field]) {
      setErrors((previous) => {
        const next = { ...previous };
        delete next[field];
        return next;
      });
    }
  };

  const handleConsentChange = (event) => {
    setConsent(event.target.checked);
    setSuccess(false);

    if (errors.consent) {
      setErrors((previous) => {
        const next = { ...previous };
        delete next.consent;
        return next;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const nextErrors = validate(values);

    if (!consent) {
      nextErrors.consent = 'Debes autorizar el tratamiento de tus datos para continuar.';
    }

    setErrors(nextErrors);
    setSuccess(false);

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => {
        formRef.current?.querySelector('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 900);
      });
      setValues(INITIAL_VALUES);
      setConsent(false);
      setMarketing(false);
      setSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="contact-page" id="contenido">
        <img className="contact-page__background" src={heroImage} alt="" fetchPriority="high" />

        <div className="contact-page__inner">
          <div className="contact-page__intro">
            <TextContentComponent
              upperText="Contacto"
              mainText="Háblanos"
              htmlTag="h1"
              mainId="contact-title"
              fontFamily="Cinzel"
              supportingParagraph={
                <>
                  No necesitas tener todas las respuestas. Empecemos por una idea, por un contexto,
                  por algo que quieres mejorar. Empecemos{' '}
                  <em className="contact-page__emphasis">juntos</em>.
                </>
              }
              paragraphPosition="bottom"
            />
          </div>

          <form
            className="contact-form"
            ref={formRef}
            noValidate
            aria-labelledby="contact-form-title"
            onSubmit={handleSubmit}
          >
            <div className="contact-form__top">
              <h2 id="contact-form-title">Hablemos de tu necesidad</h2>
              <span>* Campos obligatorios</span>
            </div>

            <div className="contact-form__fields">
              <div className="contact-form__field">
                <label htmlFor="name">
                  Nombre <span className="contact-form__required">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="¿Cómo te llamas?"
                  autoComplete="name"
                  maxLength={150}
                  required
                  value={values.name}
                  onChange={updateField('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p className="contact-form__error" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="contact-form__field">
                <label htmlFor="company">
                  Empresa o proyecto <span className="contact-form__optional">(opcional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nombre de tu empresa o idea"
                  autoComplete="organization"
                  maxLength={150}
                  value={values.company}
                  onChange={updateField('company')}
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">
                  Correo electrónico <span className="contact-form__required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  value={values.email}
                  onChange={updateField('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p className="contact-form__error" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="contact-form__field">
                <label htmlFor="phone">
                  Teléfono <span className="contact-form__optional">(opcional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Tu número de contacto"
                  autoComplete="tel"
                  maxLength={150}
                  value={values.phone}
                  onChange={updateField('phone')}
                />
              </div>

              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="service">
                  Tipo de servicio <span className="contact-form__required">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={values.service}
                  onChange={updateField('service')}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <option value="">Selecciona el servicio que te interesa</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="contact-form__error" id="service-error">
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="description">
                  Descripción de tu necesidad <span className="contact-form__required">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Cuéntanos qué quieres resolver, cómo lo haces hoy y qué te gustaría lograr…"
                  maxLength={1000}
                  required
                  value={values.description}
                  onChange={updateField('description')}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={
                    errors.description
                      ? 'description-counter description-error'
                      : 'description-counter'
                  }
                />
                <div className="contact-form__helper">
                  <span id="description-counter">{values.description.length} / 1.000</span>
                </div>
                {errors.description && (
                  <p className="contact-form__error" id="description-error">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            <div className="contact-form__consents">
              <label className="contact-form__consent" htmlFor="consent">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={handleConsentChange}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                />
                <span>
                  Él leyó la{' '}
                  <a
                    href="https://docs.enjamer.com/legal/ptdp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    Política de Tratamiento de Datos Personales
                  </a>{' '}
                  y autorizó el tratamiento de mis datos para responder a mi solicitud.
                </span>
              </label>

              <label className="contact-form__consent" htmlFor="marketing">
                <input
                  id="marketing"
                  name="marketing"
                  type="checkbox"
                  checked={marketing}
                  onChange={(event) => {
                    setMarketing(event.target.checked);
                  }}
                />
                <span>
                  Deseo recibir novedades y comunicaciones comerciales de Enjamer. (Opcional)
                </span>
              </label>

              {errors.consent && (
                <p className="contact-form__error" id="consent-error">
                  {errors.consent}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="common-button contact-form__submit"
              disabled={isSubmitting || !consent}
            >
              {isSubmitting ? 'Enviando…' : 'Contactar'}
            </button>

            <p className="contact-form__status" role="status" aria-live="polite">
              {success ? 'Gracias. Revisaremos tu solicitud y te contactaremos pronto.' : ''}
            </p>
          </form>
        </div>
      </main>

      <FooterComponent />
    </>
  );
}
