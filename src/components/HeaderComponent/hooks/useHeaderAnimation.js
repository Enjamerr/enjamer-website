import { useLayoutEffect, useEffectEvent, useRef } from 'react';
import { gsap } from 'gsap';
import heroVideo from '../../../assets/hero-video.mp4';
import { animateHeaderContent } from '../utils/animateHeaderContent.js';

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
    let contentShown = entranceCompleted.current;
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
        let seekToEnd;
        let revealFinalFrame;
        header.dataset.phase = contentShown ? 'ready' : 'waiting';
        header.dataset.video = 'hidden';
        context.add('reveal', () => {
          if (revealed || disposed) {
            return;
          }
          revealed = true;
          entranceCompleted.current = true;
          clearTimeout(watchdog);
          header.dataset.phase = 'ready';
          notifyReveal();
          animateHeaderContent(header, reducedMotion);
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
          // Keep the decoded final frame across route unmounts, without replaying the video.
          if (video.videoWidth && video.videoHeight) {
            try {
              const canvas = document.createElement('canvas');
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              canvas.getContext('2d').drawImage(video, 0, 0);
              finalFrame.current = canvas.toDataURL('image/png');
            } catch {
              // Seeking the paused video remains the fallback when capture is unavailable.
              finalFrame.current = null;
            }
          }
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
        revealFinalFrame = () => {
          if (disposed) {
            return;
          }
          clearTimeout(watchdog);
          video.pause();
          header.dataset.video = 'visible';
        };
        seekToEnd = () => {
          if (disposed) {
            return;
          }
          const end = Number.isFinite(video.duration) ? video.duration - 0.04 : 0;
          if (end > 0) {
            video.currentTime = end;
          } else {
            revealFinalFrame();
          }
        };
        const restoreFinalFrame = () => {
          video.addEventListener('loadedmetadata', seekToEnd);
          video.addEventListener('seeked', revealFinalFrame);
          video.addEventListener('error', fallback);
          video.src = heroVideo;
          video.load();
          watchProgress();
        };
        if (contentShown) {
          context.reveal();
          if (desktop && !reducedMotion) {
            if (finalFrame.current) {
              image.src = finalFrame.current;
              image.style.filter = 'blur(6px)';
            } else {
              restoreFinalFrame();
            }
          }
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
          video.removeEventListener('loadedmetadata', seekToEnd);
          video.removeEventListener('seeked', revealFinalFrame);
          image.removeEventListener('load', imageReady);
          image.removeEventListener('error', imageReady);
          video.pause();
          video.removeAttribute('src');
          video.load();
          image.src = originalImageSource;
          image.style.filter = '';
          delete header.dataset.phase;
          delete header.dataset.video;
        };
      },
    );
    return () => media.revert();
  }, [entranceCompleted, finalFrame]);

  return { headerRef, videoRef, imageRef };
}
