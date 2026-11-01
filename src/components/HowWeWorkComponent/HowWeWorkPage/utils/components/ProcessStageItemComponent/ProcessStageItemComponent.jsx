import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ProcessStageItemComponent({ stage }) {
  const { hash } = useLocation()
  
  const [expanded, setExpanded] = useState(false);
  const participationId = `${stage.id}-participation`;

  useEffect(() => {
    if (!hash) return;

    document.getElementById(decodeURIComponent(hash.slice(1)))
      ?.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <article className="process-stage" id={stage.id} aria-labelledby={`${stage.id}-title`}>
      <span className="process-stage__number" aria-hidden="true">
        {stage.index}
      </span>
      <div className="process-stage__card">
        <span className="process-stage__phase">{stage.phase}</span>
        <h2 id={`${stage.id}-title`}>{stage.name}</h2>
        <p>{stage.description}</p>
        <div className="process-stage__deliverable">
          <h3>¿Qué recibes?</h3>
          <p>{stage.deliverable}</p>
        </div>
        <div className="process-stage__participation" data-expanded={expanded}>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={participationId}
            onClick={() => setExpanded((value) => !value)}
          >
            Tu participación en esta etapa
            <span aria-hidden="true">+</span>
          </button>
          <div
            className="process-stage__expansion"
            id={participationId}
            inert={!expanded}
            aria-hidden={!expanded}
          >
            <div>
              <p>{stage.participation}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
