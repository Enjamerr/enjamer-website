import TextContentComponent from '../../../common/TextContentComponent/TextContentComponent.jsx';
import RoadmapComponent from '../../../common/RoadmapComponent/RoadmapComponent.jsx';
import BottomPanelComponent from '../../../common/BottonPanelComponent/BottonPanelComponent.jsx';
import { items } from './data.js';

export default function PrinciplesComponent() {
  return (
    <section className="our-page our-page--roadmap" aria-labelledby="PrinciplesComponent-title">
      <RoadmapComponent
        items={items}
        label="Nuestros principios"
        introduction={
          <TextContentComponent
            upperText="Cómo lo llevamos a la práctica"
            mainText="Nuestros principios"
            htmlTag="h1"
            mainId="PrinciplesComponent-title"
            supportingParagraph="Lo que creemos toma forma en decisiones, compromisos y acciones compartidas."
          />
        }
      />
      <BottomPanelComponent
        upperText="Sigamos construyendo"
        mainText="De las ideas a lo que hacemos juntos"
        supportingParagraph="El siguiente paso también se construye en comunidad."
        buttonText="Construyamos juntos"
        buttonHref="/contacto"
      />
    </section>
  );
}
