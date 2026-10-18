import useHeaderAnimation from './hooks/useHeaderAnimation';

import ButtonComponent from '../common/ButtonComponent/ButtonComponent';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent';
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
