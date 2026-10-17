import './Footer.css';

function Footer() {
  return (
    <footer className="footer" aria-label="Pie de página">
      <hr className="footer-rule" />

      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/" className="footer-logo" aria-label="Enjamer, inicio">
            <svg
              className="footer-isotipo"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="grad-top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#4f46e5" />
                  <stop offset="100%" stop-color="#ffd6e0" />
                </linearGradient>
                <linearGradient id="grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffd6e0" />
                  <stop offset="100%" stop-color="#520fb8" />
                </linearGradient>
                <linearGradient id="grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffef26" />
                  <stop offset="100%" stop-color="#e3312d" />
                </linearGradient>
              </defs>
              <path
                d="M452.135,515.344c-2.243-1.207-3.608-3.506-3.563-5.998l.236-12.782-20.289-10.945c-3.578-1.93-7.935-1.894-11.479.095l-32.327,18.143c-3.544,1.989-5.754,5.639-5.824,9.616l-.603,34.499c-.073,4.183,2.232,8.065,5.996,10.096l31.036,16.743c3.578,1.93,7.935,1.894,11.479-.095l32.327-18.143c3.544-1.989,5.754-5.639,5.824-9.616l.428-24.486-13.242-7.127Z"
                fill="url(#grad-top)"
              />
              <path
                d="M507.709,427.667l-31.036-16.743c-3.578-1.93-7.935-1.894-11.479.095l-32.327,18.143c-3.544,1.989-5.754,5.639-5.824,9.616l-.603,34.499c-.073,4.183,2.232,8.065,5.996,10.096l16.489,8.895c.301-2.018,1.546-3.834,3.384-4.865l14.339-8.048c1.049-.589,2.244-.9,3.456-.9,1.168,0,2.326.291,3.348.841l13.789,7.422c1.781.959,3.005,2.606,3.413,4.49l16.625-9.33c3.544-1.989,5.754-5.639,5.824-9.616l.603-34.499c.073-4.183-2.232-8.065-5.996-10.096Z"
                fill="url(#grad-left)"
              />
              <path
                d="M551.343,502.362l-31.036-16.743c-3.578-1.93-7.935-1.894-11.479.095l-18.065,10.139-.242,13.108c-.043,2.343-1.367,4.526-3.454,5.698l-14.34,8.048c-.691.388-1.445.652-2.225.79l-.427,24.477c-.073,4.183,2.232,8.065,5.996,10.096l31.036,16.743c3.578,1.93,7.935,1.894,11.479-.095l32.327-18.143c3.544-1.989,5.754-5.639,5.824-9.616l.603-34.499c.073-4.183-2.232-8.065-5.996-10.096Z"
                fill="url(#grad-right)"
              />
              <path
                d="M467.628,482.68l-13.567,7.614c-1.571.882-2.557,2.53-2.59,4.332l-.262,14.176c-.035,1.9.995,3.661,2.669,4.562l12.982,6.987c1.53.823,3.374.807,4.889-.043l13.567-7.614c1.571-.882,2.557-2.53,2.59-4.332l.262-14.176c.035-1.9-.995-3.661-2.669-4.562l-12.982-6.987c-1.53-.823-3.374-.807-4.889.043Z"
                fill="#101824"
              />
            </svg>
            <span className="footer-wordmark">ENJAMER</span>
          </a>
          <p className="footer-slogan">Tecnología construida en comunidad.</p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del footer">
          <div className="footer-column">
            <h3 className="footer-column-title">Conversemos</h3>
            <ul className="footer-links">
              <li>
                <a href="/contacto" className="footer-link">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/preguntas-frecuentes" className="footer-link">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="/contacto#canales" className="footer-link">
                  Canales de contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Información</h3>
            <ul className="footer-links">
              <li>
                <a href="/privacidad" className="footer-link">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="footer-link">
                  Términos de uso
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Preferencias de cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3 className="footer-column-title">Contacto</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@enjamer.com" className="footer-link">
                  info@enjamer.com
                </a>
              </li>
              <li className="footer-whatsapp-placeholder">
                <span className="footer-link-disabled">WhatsApp (próximamente)</span>
              </li>
            </ul>
            <div className="footer-social">
              <h4 className="footer-social-title">Redes sociales</h4>
              <div className="footer-social-icons">
                <a
                  href="#"
                  className="footer-social-icon footer-social-icon--instagram"
                  aria-label="Instagram"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.071 3.252.144 4.771 1.662 4.915 4.879.146 3.245-.142 4.871-1.648 6.113-1.501 1.239-3.843 1.667-7.117 1.05-3.267-.616-4.378-2.69-4.524-4.879-.146-2.223.446-3.267.711-4.784.14-.757.289-2.056.289-2.374 0-.271-.105-.543-.176-.632-.356-.435-1.377-.994-2.78-.866-2.825.256-5.744.725-7.995-.776-2.253-1.502-3.278-4.01-2.386-6.355.892-2.344 4.572-3.182 6.978-2.282 2.407.899 3.752 3.428 3.421 6.639-.275 2.653-1.594 4.359-3.792 4.359-2.262 0-3.466-1.66-3.897-4.317-.432-2.657.355-3.834.711-4.786.189-.487.534-1.172 1.032-1.558 1.682-1.31 5.093-1.433 6.392-.068 2.075-2.074 2.712-4.976 1.261-7.136-1.452-2.159-5.059-2.86-7.028-1.179-1.968 1.688-2.159 4.973-.655 7.298 1.501 2.324 5.088 2.816 7.018 1.138 1.919-1.673 2.282-4.992.781-7.313-.776-1.184-.213-2.47-.213-2.781 0-.264.14-.505.289-.62.316-.316.914-.551 2.78-.492 2.97.112 5.958-.012 8.17-.78 2.209-.767 4.306-2.318 4.442-4.539.146-2.217-.275-4.745-1.531-5.981-1.254-1.233-3.112-1.644-4.873-1.499-3.282.275-4.807 1.794-4.954 5.04-.147 3.245 1.647 4.873 4.915 4.727 3.268-.145 4.797-1.662 4.941-4.919.147-3.253-1.595-4.78-4.85-4.924z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer-social-icon footer-social-icon--facebook"
                  aria-label="Facebook"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.391 3.438 9.89 8.205 11.385v-6.987H7.078v-3.47h3.047V9.43c0-3.008 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v6.987c4.767-1.495 8.2-5.99 8.2-11.385" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer-social-icon footer-social-icon--whatsapp"
                  aria-label="WhatsApp"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 4.157c-3.144-1.665-6.788-.582-9.195 1.595C10.43 2.38 6.113 3.456 2.81 6.847c-.947 1.136-1.223 2.725-.862 4.388.34 1.563 1.284 2.883 2.497 3.726 1.143.846 2.509 1.454 4.154 1.672l.157.007c2.942.399 5.272-1.102 6.48-3.696.71-1.532 1.09-3.258.97-5.062-.124-1.782-1.163-3.316-2.394-4.511-1.228-1.196-2.607-2.002-4.055-2.297-2.926-.594-6.392.642-7.342 3.768-.902 2.974-.207 6.563 2.235 8.696.877.763 2.237.987 3.532.896 1.692-.118 3.581-.651 5.285-1.777 1.707-1.129 3.389-2.578 4.209-4.428l.074-.194c.283-.681.484-1.394.499-2.128.024-1.34-.243-2.684-.787-3.98-.533-1.266-1.323-2.461-2.335-3.525-1.012-1.04-2.184-1.877-3.467-2.539-2.539-1.315-5.595-.867-7.542 1.597-1.948 2.464-2.506 5.589-1.359 8.204 1.118 2.528 3.388 4.603 6.194 5.898 1.159.529 2.358.762 3.588.581 2.645-.394 5.298-1.94 6.92-4.904 1.622-2.96 1.884-6.595.515-9.762" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Enjamer. Tecnología construida en comunidad.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
