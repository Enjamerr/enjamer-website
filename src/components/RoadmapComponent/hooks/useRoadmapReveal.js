import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useRoadmapReveal() {
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
        horizontal: '(min-width: 1025px) and (prefers-reduced-motion: no-preference)',
        vertical: '(max-width: 1024px) and (prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const pin = section.querySelector('.roadmap__pin');
        const viewport = section.querySelector('.roadmap__viewport');
        const track = section.querySelector('.roadmap__track');
        const fill = section.querySelector('.roadmap__line-fill');
        const stages = Array.from(section.querySelectorAll('.roadmap__stage'));
        if (!pin || !viewport || !track || !fill || stages.length === 0) {
          return;
        }

        const release = () => section.classList.remove('roadmap--animate');
        const showAll = () => {
          stages.forEach((stage) => stage.classList.add('is-visible'));
          return release;
        };

        section.classList.add('roadmap--animate');

        if (context.conditions.horizontal) {
          const travel = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
          if (travel() < 80) {
            return showAll();
          }

          let cards = [];
          const measure = () => stages.map((stage) => ({ stage, offset: stage.offsetLeft }));
          const apply = (progress) => {
            const x = -progress * travel();
            const edge = viewport.clientWidth * 0.78;
            cards.forEach(({ stage, offset }) => {
              stage.classList.toggle('is-visible', offset + x <= edge);
            });
          };

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: pin,
              start: 'top top',
              end: () => `+=${travel()}`,
              pin: true,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => apply(self.progress),
              onRefresh: (self) => {
                cards = measure();
                apply(self.progress);
              },
            },
          });
          timeline.fromTo(track, { x: 0 }, { x: () => -travel(), ease: 'none' }, 0);
          timeline.fromTo(fill, { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0);

          cards = measure();
          apply(0);
          return release;
        }

        if (!('IntersectionObserver' in window)) {
          return showAll();
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              entry.target.classList.toggle('is-visible', entry.isIntersecting);
            });
          },
          { threshold: 0.3 },
        );
        stages.forEach((stage) => observer.observe(stage));

        return () => {
          observer.disconnect();
          release();
        };
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
