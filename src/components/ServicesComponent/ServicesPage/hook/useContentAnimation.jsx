import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function useContentAnimation(
  containerRef,
  contentKey,
  selector = '[data-hero-animate]',
) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        gsap.fromTo(
          containerRef.current.querySelectorAll(selector),
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' },
        );
      },
      containerRef,
    );
    return () => media.revert();
  }, [containerRef, contentKey, selector]);
}
