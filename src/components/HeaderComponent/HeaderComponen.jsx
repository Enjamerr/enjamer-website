import useHeaderAnimation from './hooks/useHeaderAnimation';

import TextContent from '../common/TextContent/TextContent';
import heroImage from '../../assets/hero-image.jpg';

import './HeaderComponent.css';

export default function HeaderComponent() {
  const { headerRef, videoRef, imageRef } = useHeaderAnimation();

  return (
    <header className="header" ref={headerRef} aria-labelledby="hero-heading">
      <img
        className="header__background"
        ref={imageRef}
        src={heroImage}
        alt=""
        fetchPriority="high"
      />
      <video
        className="header__background header__video"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <div className="header__content">
        <TextContent
          upperText="Un aliado para tu próxima idea"
          mainText="Tecnología construida en comunidad"
          htmlTag="h1"
          mainId="hero-heading"
          fontFamily="Cinzel"
          supportingParagraph="Transformamos necesidades reales en soluciones tecnológicas. Escuchamos, construimos y te acompañamos para avanzar juntos."
          paragraphPosition="bottom"
        />
        <div className="header__actions">
          <button type="button" data-hero-animate>
            Cuéntanos qué necesitas
          </button>
          <button type="button" className="header__secondary" data-hero-animate>
            Explora nuestros servicios
          </button>
        </div>
      </div>
    </header>
  );
}
