import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function useMobileServiceNavigation(services, initialServiceId) {
  const [current, setCurrent] = useState(() =>
    Math.max(
      0,
      services.findIndex((service) => service.id === initialServiceId),
    ),
  );
  const [previous, setPrevious] = useState(null);
  const direction = useRef(1);
  const panels = useRef([]);
  const busy = useRef(false);

  useLayoutEffect(() => {
    if (previous === null) {
      return;
    }
    const context = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      gsap
        .timeline({
          defaults: { duration: reduced ? 0 : 0.5, ease: 'power2.out' },
          onComplete: () => {
            busy.current = false;
            setPrevious(null);
          },
        })
        .fromTo(
          panels.current[previous],
          { x: 0, autoAlpha: 1 },
          { x: -direction.current * 60, autoAlpha: 0 },
          0,
        )
        .fromTo(
          panels.current[current],
          { x: direction.current * 60, autoAlpha: 0 },
          { x: 0, autoAlpha: 1 },
          0,
        );
    });
    return () => context.revert();
  }, [current, previous]);

  const navigate = (step) => {
    const next = current + step;
    if (busy.current || next < 0 || next >= services.length) {
      return;
    }
    busy.current = true;
    direction.current = step;
    setPrevious(current);
    setCurrent(next);
  };

  return { current, previous, panels, navigate };
}
