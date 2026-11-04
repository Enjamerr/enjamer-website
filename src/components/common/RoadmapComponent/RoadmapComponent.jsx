import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import useRoadmapScroll from './hook/useRoadmapScroll.js';
import './RoadmapComponent.css';

export default function RoadmapComponent({ items, label, introduction }) {
  const [active, setActive] = useState(0);
  const root = useRoadmapScroll(items);
  const id = useId();

  return (
    <div className="culture-roadmap" ref={root}>
      <div className="culture-roadmap__pin">
        <div className="culture-roadmap__intro">
          <header className="culture-roadmap__heading">{introduction}</header>
          <div className="culture-roadmap__scroll-cue">
            <span>Desplázate para descubrir</span>
            <ChevronDown aria-hidden="true" />
          </div>
        </div>
        <div className="culture-roadmap__viewport">
          <div className="culture-roadmap__track">
            <ol className="culture-roadmap__path" aria-label={label}>
              {items.map((item, index) => {
                const row = Math.floor(index / 3);
                const col = row % 2 === 0 ? index % 3 : 2 - (index % 3);
                return (
                  <li
                    key={item.id}
                    className="culture-roadmap__item"
                    style={{ '--row': row + 1, '--col': col + 1 }}
                    data-active={active === index}
                    data-turn={index % 3 === 2 ? (row % 2 === 0 ? 'right' : 'left') : undefined}
                  >
                    <article>
                      <button
                        type="button"
                        className="culture-roadmap__select"
                        aria-pressed={active === index}
                        aria-describedby={`${id}-${item.id}`}
                        onClick={() => setActive(index)}
                      >
                        <span className="culture-roadmap__number">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{item.title}</span>
                      </button>
                      <h2 className="culture-roadmap__title">{item.title}</h2>
                      <p id={`${id}-${item.id}`}>{item.description}</p>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
