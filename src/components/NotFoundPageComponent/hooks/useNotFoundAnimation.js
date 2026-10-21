import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function useNotFoundAnimation() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        const items = pageRef.current.querySelectorAll(
          '.not-found-page__logo, .text-content__upper, .text-content__main, .text-content__paragraph, .common-button',
        );
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' },
        );
      },
      pageRef,
    );

    return () => media.revert();
  }, []);

  return pageRef;
}
