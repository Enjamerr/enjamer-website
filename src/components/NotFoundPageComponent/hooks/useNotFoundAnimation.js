import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function useNotFoundAnimation() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) {
      return undefined;
    }

    const media = gsap.matchMedia();
    media.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        const timeline = gsap.timeline({
          defaults: { ease: 'power3.out' },
          onComplete: () => {
            gsap.set(
              page.querySelectorAll(
                '.not-found-page__logo, .not-found-page__content > *, .not-found-mascot, .not-found-page__paragraph, .not-found-page__cta',
              ),
              { clearProps: 'opacity,visibility,transform' },
            );
          },
        });

        timeline
          .from('.not-found-page__logo', {
            autoAlpha: 0,
            y: -12,
            duration: 0.45,
          })
          .from(
            '.not-found-page__content > *',
            {
              autoAlpha: 0,
              y: 18,
              duration: 0.5,
              stagger: 0.08,
            },
            '-=0.15',
          )
          .from(
            '.not-found-mascot',
            {
              autoAlpha: 0,
              y: 28,
              scale: 0.94,
              duration: 0.7,
            },
            '-=0.3',
          )
          .from(
            '.not-found-page__paragraph',
            {
              autoAlpha: 0,
              y: 14,
              duration: 0.45,
            },
            '-=0.25',
          )
          .from(
            '.not-found-page__cta',
            {
              autoAlpha: 0,
              y: 12,
              duration: 0.4,
            },
            '-=0.25',
          );
      },
      pageRef,
    );

    return () => media.revert();
  }, []);

  return pageRef;
}
