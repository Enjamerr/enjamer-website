import { useLayoutEffect, useRef } from 'react';
import { clamp, createRoadmapSteps, getRoadmapFrame } from './roadmapProgress.js';

export default function useRoadmapScroll(items) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const section = root.current;
    const pin = section.querySelector('.culture-roadmap__pin');
    const heading = section.querySelector('.culture-roadmap__heading');
    const viewport = section.querySelector('.culture-roadmap__viewport');
    const path = section.querySelector('.culture-roadmap__path');
    const cards = [...section.querySelectorAll('.culture-roadmap__item')];
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(width < 1000px)');
    let metrics;
    let frame;
    let needsMeasurement = true;
    let disposed = false;
    let currentTime;
    let previousTimestamp;

    const reset = () => {
      delete section.dataset.scroll;
      section.style.removeProperty('--scroll-height');
      section.style.removeProperty('--intro-y');
      section.style.removeProperty('--intro-scale');
      section.style.removeProperty('--heading-opacity');
      section.style.removeProperty('--scroll-cue-opacity');
      section.style.removeProperty('--camera-y');
      cards.forEach((card) => {
        card.style.removeProperty('--reveal');
        card.inert = false;
      });
    };

    const measure = () => {
      if (preference.matches || mobile.matches) {
        window.removeEventListener('scroll', schedule);
        reset();
        metrics = null;
        return;
      }
      window.addEventListener('scroll', schedule, { passive: true });
      section.dataset.scroll = 'true';
      const navbar = document.querySelector('.site-header');
      const navBottom = Math.max(0, navbar?.getBoundingClientRect().bottom || 98);
      const height = pin.clientHeight;
      const headingTop = navBottom + 18;
      const headingHeight = heading.offsetHeight;
      const tallestCard = Math.max(...cards.map((card) => card.offsetHeight));
      const available = height - headingTop - 48;
      const headingScale = Math.min(
        1,
        Math.max(0.55, (available - Math.min(tallestCard, height * 0.5)) / headingHeight),
      );
      section.style.setProperty(
        '--roadmap-top',
        `${headingTop + headingHeight * headingScale + 24}px`,
      );
      const offsets = cards.map((card) => card.offsetTop);
      const { steps, duration } = createRoadmapSteps(offsets);
      const cameraStops = [{ time: 0, y: 0 }];
      let previousY = 0;
      cards.forEach((card, index) => {
        const { start, transition } = steps[index];
        const rowOffset = offsets[index] - offsets[0];
        const y =
          rowOffset === 0
            ? 0
            : Math.max(0, offsets[index] + card.offsetHeight + 16 - viewport.clientHeight);
        if (transition !== null) {
          cameraStops.push({ time: transition, y: previousY }, { time: start, y });
          previousY = y;
        }
        const overflow =
          rowOffset === 0 ? Math.max(0, card.offsetHeight - viewport.clientHeight) : 0;
        if (overflow > 0 && (index === 0 || transition !== null)) {
          cameraStops.push({ time: start + 0.65, y }, { time: start + 1, y: y + overflow });
          previousY = y + overflow;
        }
      });
      const distance = duration * Math.min(460, Math.max(260, height * 0.55));
      section.style.setProperty('--scroll-height', `${height + distance}px`);
      metrics = {
        top: section.getBoundingClientRect().top + window.scrollY,
        distance,
        duration,
        steps,
        cameraStops,
        introTravel: Math.max(0, heading.offsetTop - headingTop),
        headingScale,
      };
    };

    const render = (timestamp = performance.now()) => {
      frame = null;
      if (disposed) {
        return;
      }
      const measured = needsMeasurement;
      if (needsMeasurement) {
        measure();
        needsMeasurement = false;
      }
      if (!metrics) {
        return;
      }
      const time = clamp((window.scrollY - metrics.top) / metrics.distance) * metrics.duration;
      const elapsed = Math.min(
        40,
        Math.max(0, timestamp - (previousTimestamp ?? timestamp - 16.67)),
      );
      previousTimestamp = timestamp;
      if (measured || currentTime == null || time === 0 || time === metrics.duration) {
        currentTime = time;
      } else {
        currentTime += (time - currentTime) * (1 - Math.exp(-elapsed / 65));
        if (Math.abs(time - currentTime) < 0.0001) {
          currentTime = time;
        }
      }
      const state = getRoadmapFrame(currentTime, metrics.steps, metrics.cameraStops);
      section.style.setProperty('--intro-y', `${-state.intro * metrics.introTravel}px`);
      section.style.setProperty('--scroll-cue-opacity', String(1 - state.intro));
      section.style.setProperty('--heading-opacity', String(state.headingOpacity));
      section.style.setProperty(
        '--intro-scale',
        String(1 - state.intro * (1 - metrics.headingScale)),
      );
      section.style.setProperty('--camera-y', `${-state.camera}px`);
      cards.forEach((card, index) => {
        const reveal = state.cards[index];
        card.style.setProperty('--reveal', String(reveal));
        card.inert = reveal < 0.99;
      });
      if (currentTime !== time) {
        schedule();
      }
    };
    const schedule = () => {
      if (!disposed && frame == null) {
        frame = requestAnimationFrame(render);
      }
    };
    const resize = () => {
      needsMeasurement = true;
      schedule();
    };

    render();
    window.addEventListener('resize', resize);
    window.visualViewport?.addEventListener('resize', resize);
    preference.addEventListener('change', resize);
    mobile.addEventListener('change', resize);
    const observer = new ResizeObserver(resize);
    observer.observe(heading);
    observer.observe(path);
    document.fonts?.ready.then(resize);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', resize);
      window.visualViewport?.removeEventListener('resize', resize);
      preference.removeEventListener('change', resize);
      mobile.removeEventListener('change', resize);
      reset();
      section.style.removeProperty('--roadmap-top');
    };
  }, [items]);

  return root;
}
