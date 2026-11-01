import { useEffect } from 'react';
import { Check } from 'lucide-react';
import DropdownComponent from '../common/DropdownComponent/DropdownComponent';
import { SERVICE_OPTIONS } from './utils/elementsList';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent';
import heroImage from '../../assets/hero-image.jpg';
import useContactForm from './hooks/useContactForm';
import MessageComponent from '../common/MessageComponent/MessageComponent';
import LoadingOverlayComponent from '../common/LoadingOverlayComponent/LoadingOverlayComponent';
import '../common/ButtonComponent/ButtonComponent.css';
import './ContactPageComponent.css';

export default function ContactPageComponent() {
  const {
    values,
    message,
    dismissMessage,
    errors,
    consent,
    marketing,
    isSubmitting,
    result,
    updateField,
    setFieldValue,
    handleConsentChange,
    handleMarketingChange,
    handleSubmit,
  } = useContactForm();
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Contacto';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="contact-page" id="contenido">
      <MessageComponent message={message} onDismiss={dismissMessage} />
      <LoadingOverlayComponent active={isSubmitting} />
      <img className="contact-page__background" src={heroImage} alt="" fetchPriority="high" />

      <div className="contact-page__inner">
        <div className="contact-page__intro">
          <TextContentComponent
            upperText="Contacto"
            mainText="Conozcámonos"
            htmlTag="h1"
            mainId="contact-title"
            fontFamily="Cinzel"
            supportingParagraph={
              <>
                No necesitas tener todas las respuestas. Empecemos por una idea, por un contexto,
                por algo que quieres mejorar. Empecemos{' '}
                <span className="contact-page__emphasis">juntos</span>.
              </>
            }
            paragraphPosition="bottom"
          />
        </div>

        <form
          className="contact-form"
          aria-busy={isSubmitting}
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
              />
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
              />
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
              <DropdownComponent
                options={SERVICE_OPTIONS}
                value={values.service}
                onChange={(value) => setFieldValue('service', value)}
                id="service"
                name="service"
                label="Tipo de servicio"
                placeholder="Selecciona el servicio que te interesa"
                required
                fullWidth
                invalid={Boolean(errors.service)}
              />
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
                aria-describedby="description-counter"
              />
              <div className="contact-form__helper">
                <span id="description-counter">{values.description.length} / 1.000</span>
              </div>
            </div>
          </div>

          <div className="contact-form__consents">
            <label className="contact-form__consent" htmlFor="consent">
              <span className="contact-form__checkbox">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={handleConsentChange}
                  aria-invalid={Boolean(errors.consent)}
                />
                <Check className="contact-form__checkbox-icon" aria-hidden="true" />
              </span>
              <span>
                He leído la{' '}
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
                y autorizo el tratamiento de mis datos para responder a mi solicitud.
              </span>
            </label>

            <label className="contact-form__consent" htmlFor="marketing">
              <span className="contact-form__checkbox">
                <input
                  id="marketing"
                  name="marketing"
                  type="checkbox"
                  checked={marketing}
                  onChange={handleMarketingChange}
                />
                <Check className="contact-form__checkbox-icon" aria-hidden="true" />
              </span>
              <span>
                Deseo recibir novedades y comunicaciones comerciales de Enjamer. (Opcional)
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="common-button contact-form__submit"
            disabled={isSubmitting}
          >
            Contactar
          </button>

          <p className="contact-form__status" role="status" aria-live="polite">
            {result?.ok ? result.message : null}
          </p>
        </form>
      </div>
    </main>
  );
}
