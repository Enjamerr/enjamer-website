import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import heroEndFrame from '../../../assets/hero-end-frame.jpg';
import heroVideo from '../../../assets/hero-video.mp4';

let introPlayed = false;

export default function useHeaderAnimation() {
  const headerRef = useRef(null);
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const [returning] = useState(() => introPlayed);

  useLayoutEffect(() => {
    const header = headerRef.current;
    const video = videoRef.current;
    const image = imageRef.current;
    const media = gsap.matchMedia();
    const skipIntro = returning;
    let introTimer;
    let videoAttempted = false;
    if (!skipIntro) {
      const preload = new window.Image();
      preload.src = heroEndFrame;
    }
    media.add(
      {
        desktop: '(min-width: 768px)',
        mobile: '(max-width: 767px)',
        reducedMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { desktop, reducedMotion } = context.conditions;
        let contentShown = skipIntro;
        let revealed = false;
        let disposed = false;
        let watchdog;
        header.dataset.phase = skipIntro ? 'ready' : 'waiting';
        header.dataset.video = 'hidden';
        if (skipIntro) {
          document.body.classList.add('hero-intro-complete');
          gsap.set(header.querySelectorAll('[data-hero-animate]'), { autoAlpha: 1, y: 0 });
        }
        context.add('reveal', () => {
          if (revealed || disposed) {
            return;
          }
          revealed = true;
          clearTimeout(watchdog);
          header.dataset.phase = 'ready';
          const items = header.querySelectorAll('[data-hero-animate]');
          if (reducedMotion || contentShown) {
            gsap.set(items, { autoAlpha: 1, y: 0 });
          } else {
            gsap.fromTo(
              items,
              { autoAlpha: 0, y: 18 },
              { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.18, ease: 'power2.out' },
            );
          }
          contentShown = true;
          window.clearTimeout(introTimer);
          introTimer = window.setTimeout(() => {
            introPlayed = true;
            document.body.classList.add('hero-intro-complete');
          }, 0);
        });
        const fallback = () => {
          if (disposed) {
            return;
          }
          video.pause();
          header.dataset.video = 'hidden';
          context.reveal();
        };
        // A stalled connection must not hide the content indefinitely.
        const watchProgress = () => {
          clearTimeout(watchdog);
          if (!revealed) {
            watchdog = setTimeout(fallback, 12000);
          }
        };
        const ended = () => {
          context.reveal();
        };
        const playing = () => {
          if (!disposed && !revealed) {
            header.dataset.video = 'visible';
          }
        };
        const imageReady = () => {
          context.reveal();
        };
        if (desktop && !reducedMotion && !videoAttempted && !skipIntro) {
          videoAttempted = true;
          video.addEventListener('ended', ended);
          video.addEventListener('error', fallback);
          video.addEventListener('playing', playing);
          video.addEventListener('timeupdate', watchProgress);
          video.src = heroVideo;
          watchProgress();
          video.play().catch(fallback);
        } else if (skipIntro || reducedMotion || image.complete) {
          context.reveal();
        } else {
          image.addEventListener('load', imageReady);
          image.addEventListener('error', imageReady);
          watchdog = setTimeout(imageReady, 12000);
        }
        return () => {
          disposed = true;
          clearTimeout(watchdog);
          video.removeEventListener('ended', ended);
          video.removeEventListener('error', fallback);
          video.removeEventListener('playing', playing);
          video.removeEventListener('timeupdate', watchProgress);
          image.removeEventListener('load', imageReady);
          image.removeEventListener('error', imageReady);
          video.pause();
          video.removeAttribute('src');
          video.load();
          delete header.dataset.phase;
          delete header.dataset.video;
        };
      },
    );
    return () => {
      window.clearTimeout(introTimer);
      media.revert();
    };
  }, [returning]);

  return { headerRef, videoRef, imageRef, returning };
}
