import { useEffectEvent, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroVideo from '../../../assets/hero-video.mp4';
import { animateHeaderContent } from '../utils/animateHeaderContent.js';

let introComplete = false;
const videoState = {
  started: false,
  ended: false,
  time: 0,
};

export default function useHeaderAnimation(entranceCompleted, finalFrame, onReveal) {
  const notifyReveal = useEffectEvent(onReveal);
  const headerRef = useRef(null);
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    const video = videoRef.current;
    const image = imageRef.current;
    const originalImageSource = image.src;
    const media = gsap.matchMedia();
    let introTimer;

    media.add(
      {
        desktop: '(min-width: 768px)',
        mobile: '(max-width: 767px)',
        reducedMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { desktop, reducedMotion } = context.conditions;
        const skipIntro = entranceCompleted.current || introComplete || videoState.started;
        const canUseVideo = desktop && !reducedMotion;
        const resumeVideo = canUseVideo && videoState.started;
        let contentShown = skipIntro;
        let revealed = skipIntro;
        let disposed = false;
        let watchdog;

        header.dataset.phase = skipIntro ? 'ready' : 'waiting';
        header.dataset.video = 'hidden';

        if (skipIntro) {
          header.dataset.returning = 'true';
          document.body.classList.add('hero-intro-complete');
          gsap.set(header.querySelectorAll('[data-hero-animate]'), { autoAlpha: 1, y: 0 });
          notifyReveal();
        } else {
          delete header.dataset.returning;
        }

        context.add('reveal', () => {
          if (revealed || disposed) {
            return;
          }
          revealed = true;
          entranceCompleted.current = true;
          clearTimeout(watchdog);
          header.dataset.phase = 'ready';
          notifyReveal();
          if (reducedMotion || contentShown) {
            gsap.set(header.querySelectorAll('[data-hero-animate]'), { autoAlpha: 1, y: 0 });
          } else {
            animateHeaderContent(header, reducedMotion);
          }
          contentShown = true;
          window.clearTimeout(introTimer);
          introTimer = window.setTimeout(() => {
            introComplete = true;
            document.body.classList.add('hero-intro-complete');
          }, 0);
        });

        const fallback = () => {
          if (disposed) {
            return;
          }
          video.pause();
          if (finalFrame.current) {
            image.src = finalFrame.current;
            image.style.filter = 'blur(6px)';
          }
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
        const captureFinalFrame = () => {
          if (video.videoWidth && video.videoHeight) {
            try {
              const canvas = document.createElement('canvas');
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              canvas.getContext('2d').drawImage(video, 0, 0);
              finalFrame.current = canvas.toDataURL('image/png');
            } catch {
              finalFrame.current = null;
            }
          }
        };
        const ended = () => {
          videoState.started = true;
          videoState.ended = true;
          videoState.time = video.currentTime;
          captureFinalFrame();
          context.reveal();
        };
        const playing = () => {
          if (disposed) {
            return;
          }
          videoState.started = true;
          header.dataset.video = 'visible';
        };
        const rememberTime = () => {
          if (!disposed && Number.isFinite(video.currentTime)) {
            videoState.time = video.currentTime;
          }
        };
        const imageReady = () => {
          context.reveal();
        };
        const bindVideoEvents = () => {
          video.addEventListener('ended', ended);
          video.addEventListener('error', fallback);
          video.addEventListener('playing', playing);
          video.addEventListener('timeupdate', rememberTime);
        };
        const unbindVideoEvents = () => {
          video.removeEventListener('ended', ended);
          video.removeEventListener('error', fallback);
          video.removeEventListener('playing', playing);
          video.removeEventListener('timeupdate', rememberTime);
        };
        const saveVideoState = () => {
          if (video.readyState > 0 && video.currentSrc) {
            videoState.started = true;
            if (!videoState.ended) {
              videoState.time = video.currentTime;
            }
            videoState.ended = videoState.ended || video.ended;
          }
        };

        if (resumeVideo) {
          bindVideoEvents();
          const restore = () => {
            if (disposed) {
              return;
            }
            const target = videoState.ended
              ? Math.max(0, (video.duration || 0) - 0.05)
              : Math.max(0, videoState.time);
            video.currentTime = target;

            if (videoState.ended) {
              video.pause();
              const showFinalFrame = () => {
                clearTimeout(watchdog);
                if (!disposed) {
                  header.dataset.video = 'visible';
                }
              };
              if (Math.abs(video.currentTime - target) < 0.01) {
                showFinalFrame();
              } else {
                video.addEventListener('seeked', showFinalFrame, { once: true });
                clearTimeout(watchdog);
                watchdog = setTimeout(showFinalFrame, 800);
              }
            } else {
              video.play().catch(fallback);
            }
          };
          video.addEventListener('loadedmetadata', restore, { once: true });
          video.preload = 'metadata';
          video.src = heroVideo;
          video.load();
        } else if (canUseVideo && !skipIntro) {
          bindVideoEvents();
          video.src = heroVideo;
          watchProgress();
          video.play().catch(fallback);
        } else if (skipIntro || image.complete) {
          context.reveal();
        } else {
          image.addEventListener('load', imageReady);
          image.addEventListener('error', imageReady);
          watchdog = setTimeout(imageReady, 12000);
        }

        return () => {
          disposed = true;
          clearTimeout(watchdog);
          saveVideoState();
          unbindVideoEvents();
          image.removeEventListener('load', imageReady);
          image.removeEventListener('error', imageReady);
          video.pause();
          video.removeAttribute('src');
          video.load();
          image.src = originalImageSource;
          image.style.filter = '';
          delete header.dataset.phase;
          delete header.dataset.video;
          delete header.dataset.returning;
        };
      },
    );

    return () => {
      window.clearTimeout(introTimer);
      media.revert();
    };
  }, [entranceCompleted, finalFrame]);

  return { headerRef, videoRef, imageRef };
}
