import { useEffect, useRef } from 'react';

// Reveal on scroll: IntersectionObserver adds `.is-visible` past a 0.3
// threshold, staggered per card. Cards stay visible when JS, the observer
// or motion allow no animation, so content is never left hidden.
export default function useServicesReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }
    const cards = section.querySelectorAll('.services-card');
    if (cards.length === 0) {
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    section.classList.add('services--animate');
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible', 'is-settled'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            card.classList.add('is-visible');
            observer.unobserve(card);
            window.setTimeout(() => card.classList.add('is-settled'), 1100);
          }
        });
      },
      { threshold: 0.3 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return { sectionRef };
}
