import ButtonComponent from '../common/ButtonComponent/ButtonComponent';
import TextContent from '../common/TextContentComponent/TextContentComponent.jsx';
import useRoadmapReveal from './hooks/useRoadmapReveal';
import { ROADMAP_STAGES } from './utils/roadmapStages.js';
import './RoadmapComponent.css';

function Roadmap({ stages = ROADMAP_STAGES }) {
  const { sectionRef } = useRoadmapReveal();

  return (
    <section ref={sectionRef} className="roadmap" aria-labelledby="roadmap-title">
      <div className="roadmap__fade" aria-hidden="true" />
      <div className="roadmap__pin">
        <div className="roadmap__inner">
          <TextContent
            upperText="Nuestra forma de trabajar"
            mainText="Con claridad, paso a paso hasta el progreso"
            htmlTag="h2"
            mainId="roadmap-title"
            fontFamily="Cinzel"
          />
        </div>
        <div className="roadmap__viewport">
          <div className="roadmap__rail" aria-hidden="true" />
          <div className="roadmap__line-fill" aria-hidden="true" />
          <ol className="roadmap__track">
            {stages.map((stage, index) => (
              <li
                key={stage.id}
                className={`roadmap__stage roadmap__stage--${index % 2 === 0 ? 'bottom' : 'top'}`}
              >
                <article className="roadmap__card">
                  <div className="roadmap__meta">
                    <span className="roadmap__index">{stage.index}</span>
                    <span className="roadmap__phase">{stage.phase}</span>
                  </div>
                  <h3>{stage.name}</h3>
                  <p>{stage.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
        <div className="roadmap__inner roadmap__foot">
          <ButtonComponent text="Explorar las siete etapas" to="/como-trabajamos" />
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
