import useHeaderAnimation from './hooks/useHeaderAnimation.js';

import ButtonComponent from '../common/ButtonComponent/ButtonComponent';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent';
import heroImage from '../../assets/hero-image.jpg';

import './HeaderComponent.css';

export default function HeaderComponent({ entranceCompleted, finalFrame, onReveal }) {
  const { headerRef, videoRef, imageRef } = useHeaderAnimation(
    entranceCompleted,
    finalFrame,
    onReveal,
  );

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
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <div className="header__content">
        <TextContentComponent
          animate
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
