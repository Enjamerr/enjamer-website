import useHeaderAnimation from './utils/useHeaderAnimation';
import ButtonComponent from '../common/ButtonComponent/ButtonComponent';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent';
import heroEndFrame from '../../assets/hero-end-frame.jpg';
import heroImage from '../../assets/hero-image.jpg';

import './HeaderComponent.css';

export default function HeaderComponent() {
  const { headerRef, videoRef, imageRef, returning } = useHeaderAnimation();

  return (
    <header className="header" ref={headerRef} aria-labelledby="hero-heading">
      <img
        className={`header__background${returning ? ' header__background--end' : ''}`}
        ref={imageRef}
        src={returning ? heroEndFrame : heroImage}
        alt=""
        fetchPriority="high"
      />
      <video
        className="header__background header__video"
        ref={videoRef}
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <div className="header__content">
        <TextContentComponent
          upperText="Un aliado para tu próxima idea"
          mainText="Tecnología construida en comunidad"
          htmlTag="h1"
          mainId="hero-heading"
          fontFamily="Cinzel"
          supportingParagraph="Transformamos necesidades reales en soluciones tecnológicas. Escuchamos, construimos y te acompañamos para avanzar juntos."
          paragraphPosition="bottom"
        />
        <div className="header__actions">
          <ButtonComponent text="Cuéntanos qué necesitas" to="/nosotros" data-hero-animate />
          <ButtonComponent
            text="Explora nuestros servicios"
            to="/servicios"
            transparent
            data-hero-animate
          />
        </div>
      </div>
    </header>
  );
}
