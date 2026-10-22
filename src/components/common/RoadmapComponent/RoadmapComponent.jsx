import { useEffect, useRef } from 'react';
import TextContentComponent from '../TextContentComponent/TextContentComponent.jsx';
import './RoadmapComponent.css';

function RoadmapItem({ number, title, description, delay }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;

    if (!item) {
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      item.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            item.classList.add('is-visible');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 },
    );

    observer.observe(item);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={itemRef} className="roadmap-item" style={{ '--reveal-delay': delay }}>
      <span className="roadmap-number">{number}</span>
      <div className="roadmap-content">
        <h3 className="roadmap-title">{title}</h3>
        <p className="roadmap-desc">{description}</p>
      </div>
    </div>
  );
}

export default function RoadmapComponent({
  items = [],
  sectionUpperText,
  sectionTitle,
  sectionHtmlTag = 'h2',
  sectionFontFamily = 'Cinzel',
}) {
  return (
    <section className="roadmap-component" aria-label="Roadmap">
      {sectionTitle || sectionUpperText ? (
        <TextContentComponent
          upperText={sectionUpperText}
          mainText={sectionTitle}
          htmlTag={sectionHtmlTag}
          fontFamily={sectionFontFamily}
          paragraphPosition="bottom"
        />
      ) : null}
      <div className="roadmap-list">
        {items.map((item, index) => (
          <RoadmapItem
            key={item.id || index}
            number={item.number || index + 1}
            title={item.title}
            description={item.description}
            delay={`${index * 0.18}s`}
          />
        ))}
      </div>
    </section>
  );
}
