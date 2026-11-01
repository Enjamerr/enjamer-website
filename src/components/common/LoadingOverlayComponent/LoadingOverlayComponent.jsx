import { useEffect, useRef, useState } from 'react';
import LoadingOverlayContentComponent from './utils/components/LoadingOverlayContentComponent/LoadingOverlayContentComponent.jsx';
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

  return visible ? <LoadingOverlayContentComponent /> : null;
}
