import { gsap } from 'gsap';

export function animateHeaderContent(header, reducedMotion) {
  const items = header.querySelectorAll('[data-hero-animate]');
  if (reducedMotion) {
    gsap.set(items, { autoAlpha: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    items,
    { autoAlpha: 0, y: 18 },
    { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.18, ease: 'power2.out' },
  );
}
