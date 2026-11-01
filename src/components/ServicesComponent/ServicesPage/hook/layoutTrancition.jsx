import { useLayoutEffect, useRef } from 'react';

export default function useLayoutTrancition() {
  const detailRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const panel = detailRef.current;
    const content = contentRef.current;
    const updateHeight = () => {
      const styles = getComputedStyle(panel);
      const border = parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);
      panel.style.setProperty(
        '--service-panel-height',
        `${content.getBoundingClientRect().height + border}px`,
      );
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return { detailRef, contentRef };
}
