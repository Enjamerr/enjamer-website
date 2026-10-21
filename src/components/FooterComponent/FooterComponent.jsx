import { Link } from 'react-router-dom';
import './FooterComponent.css';

function FooterComponent() {
  return (
    <footer className="footer" aria-label="Pie de página">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Enjamer, inicio">
            <img src="/imagotipoOscuro.png" alt="enjamer" />
          </Link>
          <p className="footer-slogan">Tecnología construida en comunidad</p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del footer">
          <div className="footer-column">
            <h3 className="footer-column-title">Explorar</h3>
            <ul className="footer-links">
              <li>
                <Link to="/servicios" className="footer-link">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/como-trabajamos" className="footer-link">
                  ¿Cómo trabajamos?
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="footer-link">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/preguntas-frecuentes" className="footer-link">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Información</h3>
            <ul className="footer-links">
              <li>
                <Link to="/privacidad" className="footer-link">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="footer-link">
                  Términos de uso
                </Link>
              </li>
              <li>
                <button type="button" className="footer-link footer-link-button">
                  Preferencias de cookies
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3 className="footer-column-title">Contacto</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@enjamer.com" className="footer-link">
                  info@enjamer.com
                  <p>Información adicional</p>
                </a>
              </li>
              <li>
                <a href="mailto:info@enjamer.com" className="footer-link">
                  support@enjamer.com
                  <p>Suporte tecnológico</p>
                </a>
              </li>
              <li>
                <a href="mailto:info@enjamer.com" className="footer-link">
                  sales@enjamer.com
                  <p>Canal de ventas</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-social">
            <h3 className="footer-column-title social-title">Social media</h3>
            <ul className="ul-social">
              <li>
                <a
                  href="https://instagram.com/"
                  className="footer-icons"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  <img src="/social/intagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="footer-icons"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  <img src="/social/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.whatsapp.com/"
                  target="_black"
                  rel="noopener noreferrer"
                  className="footer-icons"
                >
                  <img src="/social/whatsapp.svg" alt="WhatsApp" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Enjamer. Tecnología construida en comunidad.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
