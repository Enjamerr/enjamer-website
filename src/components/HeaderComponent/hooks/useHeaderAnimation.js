import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroVideo from '../../../assets/hero-video.mp4';

const REVEALED_KEY = 'enjamer:hero-revealed';

function hasRevealed() {
  try {
    return window.sessionStorage.getItem(REVEALED_KEY) === '1';
  } catch {
    return false;
  }
}

function rememberRevealed() {
  try {
    window.sessionStorage.setItem(REVEALED_KEY, '1');
  } catch {
    // Storage unavailable, the hero simply animates again.
  }
}

export default function useHeaderAnimation() {
  const headerRef = useRef(null);
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const video = videoRef.current;
    const image = imageRef.current;
    const media = gsap.matchMedia();
    let contentShown = false;
    let videoAttempted = false;
    media.add(
      {
        desktop: '(min-width: 768px)',
        mobile: '(max-width: 767px)',
        reducedMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { desktop, reducedMotion } = context.conditions;
        let revealed = false;
        let disposed = false;
        let watchdog;
        header.dataset.phase = 'waiting';
        header.dataset.video = 'hidden';
        context.add('reveal', () => {
          if (revealed || disposed) {
            return;
          }
          revealed = true;
          clearTimeout(watchdog);
          header.dataset.phase = 'ready';
          const items = header.querySelectorAll('[data-hero-animate]');
          if (reducedMotion || contentShown || hasRevealed()) {
            gsap.set(items, { autoAlpha: 1, y: 0 });
          } else {
            gsap.fromTo(
              items,
              { autoAlpha: 0, y: 18 },
              { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.18, ease: 'power2.out' },
            );
          }
          rememberRevealed();
          contentShown = true;
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
        if (hasRevealed()) {
          context.reveal();
        } else if (desktop && !reducedMotion && !videoAttempted) {
          videoAttempted = true;
          video.addEventListener('ended', ended);
          video.addEventListener('error', fallback);
          video.addEventListener('playing', playing);
          video.addEventListener('timeupdate', watchProgress);
          video.src = heroVideo;
          watchProgress();
          video.play().catch(fallback);
        } else if (reducedMotion || image.complete) {
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
    return () => media.revert();
  }, []);

  return { headerRef, videoRef, imageRef };
}
