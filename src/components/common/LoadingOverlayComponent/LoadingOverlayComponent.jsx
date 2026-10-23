import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import loadingAnimation from '../../../assets/video/loading_animation.webm';
import './LoadingOverlayComponent.css';

export default function LoadingOverlayComponent({ active = false }) {
  const [visible, setVisible] = useState(active);
  const startedAt = useRef(null);

  if (active && !visible) {
    setVisible(true);
  }

  useEffect(() => {
    if (active) {
      startedAt.current = performance.now();
      return;
    }
    if (!visible || startedAt.current === null) {
      return;
    }
    const extraTime = (performance.now() - startedAt.current) * 0.75;
    const timer = setTimeout(() => setVisible(false), extraTime);
    return () => clearTimeout(timer);
  }, [active, visible]);

  return visible ? <LoadingOverlayContent /> : null;
}

function LoadingOverlayContent() {
  useEffect(() => {
    const root = document.getElementById('root');
    const previousInert = root?.inert;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    if (root) {
      root.inert = true;
    }
    document.body.style.overflow = 'hidden';

    return () => {
      if (root) {
        root.inert = previousInert;
      }
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  return createPortal(
    <div
      className="loading-overlay"
      role="status"
      aria-live="polite"
      aria-label="Enviando solicitud. Espera un momento."
    >
      <video
        className="loading-overlay__video"
        src={loadingAnimation}
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 1.6;
        }}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
    </div>,
    document.body,
  );
}
