import { useState } from 'react';
import ProcessStage from './ProcessStage.jsx';
import { PROCESS_STAGES } from '../utils/processStages.js';

export default function ProcessStageComponent() {
  const [currentStage, setCurrentStage] = useState(PROCESS_STAGES[0].id);

  return (
    <section className="process-page__layout process-page__wrap" aria-label="Las siete etapas">
      <aside className="process-page__sidebar">
        <p className="process-page__eyebrow">El recorrido</p>
        <nav aria-label="Etapas del proceso">
          {PROCESS_STAGES.map((stage) => (
            <a
              key={stage.id}
              href={`#${stage.id}`}
              aria-current={currentStage === stage.id ? 'step' : undefined}
              onClick={() => setCurrentStage(stage.id)}
            >
              <span>{stage.index}</span>
              {stage.name}
            </a>
          ))}
        </nav>
        <p className="process-page__note">
          Los alcances y tiempos se acuerdan según la realidad de tu proyecto.
        </p>
      </aside>
      <div className="process-page__journey">
        {PROCESS_STAGES.map((stage) => (
          <ProcessStage key={stage.id} stage={stage} />
        ))}
      </div>
    </section>
  );
}
