import { Link } from 'react-router-dom';
import TextContent from '../common/TextContent/TextContent.jsx';
import { ROADMAP_STAGES } from './roadmapStages.js';
import './Roadmap.css';

function Roadmap({ stages = ROADMAP_STAGES }) {
  return (
    <section className="roadmap" aria-labelledby="roadmap-title">
      <div className="roadmap__head">
        <TextContent
          upperText="Nuestra forma de trabajar"
          mainText="Con claridad, paso a paso hasta el progreso"
        />
      </div>
      <div className="roadmap__track">
        <ol className="roadmap__list">
          {stages.map((stage) => {
            return (
              <li key={stage.id} className="roadmap__stage">
                <span className="roadmap__index">{stage.index}</span>
                <span className="roadmap__phase">{stage.phase}</span>
                <h3>{stage.name}</h3>
                <p>{stage.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="roadmap__foot">
        <Link className="btn primary" to="/como-trabajamos">
          Explorar las siete etapas
        </Link>
      </div>
    </section>
  );
}

export default Roadmap;
