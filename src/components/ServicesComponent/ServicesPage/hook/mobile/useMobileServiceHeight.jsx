import { useLayoutEffect, useRef } from 'react';

export default function useMobileServiceHeight(panels, current) {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const content = panels.current[current].firstElementChild;
    const updateHeight = () => {
      const styles = getComputedStyle(card);
      const border = parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);
      card.style.setProperty(
        '--service-panel-height',
        `${content.getBoundingClientRect().height + border}px`,
      );
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(content);
    return () => observer.disconnect();
  }, [panels, current]);

  return cardRef;
}
