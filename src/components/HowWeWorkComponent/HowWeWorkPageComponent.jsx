import { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent.jsx';
import BottomPanelComponent from '../common/BottonPanelComponent/BottonPanelComponent.jsx';
import ProcessStageComponent from './components/ProcessStageComponent.jsx';
import { gsap } from 'gsap';
import { AppPresentationContext } from '../../app/providers/AppPresentationContext.js';
import './HowWeWorkPageComponent.css';

export default function HowWeWorkPageComponent() {
  const revealNavigation = useContext(AppPresentationContext);
  const introRef = useRef(null);

  useLayoutEffect(() => {
    revealNavigation();
  }, [revealNavigation]);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        gsap.fromTo(
          introRef.current.querySelectorAll('[data-hero-animate]'),
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' },
        );
      },
      introRef,
    );
    return () => media.revert();
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Enjamer - ¿Cómo trabajamos?';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="process-page process-route" id="contenido">
      <div className="process-page__backdrop" aria-hidden="true" />
      <header className="process-page__intro process-page__wrap" ref={introRef}>
        <TextContentComponent
          animate
          upperText="¿Cómo trabajamos?"
          mainText="De la primera conversación al siguiente desafío"
          htmlTag="h1"
          mainId="process-title"
          supportingParagraph={
            <>
              Un recorrido compartido. En cada etapa sabes qué hacemos, qué recibes y cómo puedes
              participar. En cada parte construimos{' '}
              <span className="process-page__accent">juntos</span>.
            </>
          }
        />
      </header>

      <ProcessStageComponent />

      <div className="process-page__closing">
        <div className="process-page__wrap">
          <BottomPanelComponent
            upperText="El siguiente paso lo damos juntos"
            mainText="De tu primera idea al siguiente paso juntos"
            supportingParagraph="Cuéntanos tu idea, tu necesidad o ese proceso que quieres mejorar. Empecemos por entenderlo."
            buttonText="Cuéntanos qué necesitas"
            buttonHref="/contacto"
          />
        </div>
      </div>
    </main>
  );
}
