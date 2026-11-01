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
    const timers = new Set();
    const ownedClasses = new Map();
    let disposed = false;
    let observer;
    const addClass = (element, className) => {
      if (!element.classList.contains(className)) {
        element.classList.add(className);
        if (!ownedClasses.has(element)) {
          ownedClasses.set(element, new Set());
        }
        ownedClasses.get(element).add(className);
      }
    };
    const cleanup = () => {
      disposed = true;
      observer?.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.clear();
      ownedClasses.forEach((classes, element) => {
        classes.forEach((className) => element.classList.remove(className));
      });
      ownedClasses.clear();
    };

    addClass(section, 'services--animate');
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => {
        addClass(card, 'is-visible');
        addClass(card, 'is-settled');
      });
      return cleanup;
    }
    observer = new IntersectionObserver(
      (entries) => {
        if (disposed) {
          return;
        }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            addClass(card, 'is-visible');
            observer.unobserve(card);
            const timer = window.setTimeout(() => {
              timers.delete(timer);
              if (!disposed) {
                addClass(card, 'is-settled');
              }
            }, 1100);
            timers.add(timer);
          }
        });
      },
      { threshold: 0.3 },
    );
    cards.forEach((card) => observer.observe(card));
    return cleanup;
  }, []);

  return { sectionRef };
}
