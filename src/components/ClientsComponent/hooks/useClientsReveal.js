import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useClientsReveal() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const media = gsap.matchMedia();
    let disposed = false;

    media.add(
      {
        desktop: '(min-width: 1025px)',
        compact: '(max-width: 1024px)',
        reducedMotion: '(prefers-reduced-motion: reduce)',
      },
      ({ conditions }) => {
        if (conditions.reducedMotion) {
          return;
        }

        const cardDistance = conditions.desktop ? 180 : 80;
        const textDistance = conditions.desktop ? 64 : 28;
        const cards = section.querySelectorAll('.client-card');
        const text = section.querySelectorAll(
          '.clients-text .text-content__upper, .clients-text .text-content__main, .clients-text .text-content__paragraph, .clients-cta',
        );

        const reveal = (element, offset) => {
          const tween = gsap.fromTo(
            element,
            { x: offset, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: element,
                start: 'clamp(top 94%)',
                end: 'clamp(top 60%)',
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            },
          );
          return tween;
        };

        cards.forEach((card) => reveal(card, -cardDistance));
        const textTweens = Array.from(text, (element) => reveal(element, textDistance));

        const showFocused = (event) => {
          text.forEach((element, index) => {
            if (element.contains(event.target)) {
              textTweens[index].scrollTrigger.kill();
              textTweens[index].progress(1);
            }
          });
        };
        section.addEventListener('focusin', showFocused);
        return () => section.removeEventListener('focusin', showFocused);
      },
      section,
    );

    document.fonts?.ready.then(() => {
      if (!disposed) {
        ScrollTrigger.refresh();
      }
    });

    return () => {
      disposed = true;
      media.revert();
    };
  }, []);

  return { sectionRef };
}
