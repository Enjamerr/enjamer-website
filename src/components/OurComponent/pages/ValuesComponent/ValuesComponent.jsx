import TextContentComponent from '../../../common/TextContentComponent/TextContentComponent.jsx';
import RoadmapComponent from '../../../common/RoadmapComponent/RoadmapComponent.jsx';
import BottomPanelComponent from '../../../common/BottonPanelComponent/BottonPanelComponent.jsx';
import { items } from './data.js';

export default function ValuesComponent() {
  return (
    <section className="our-page our-page--roadmap" aria-labelledby="ValuesComponent-title">
      <RoadmapComponent
        items={items}
        label="Nuestros valores"
        introduction={
          <TextContentComponent
            upperText="Lo que nos importa"
            mainText="Nuestros valores"
            htmlTag="h1"
            mainId="ValuesComponent-title"
            supportingParagraph="Un recorrido por lo que nos une, desde la comunidad hasta el cuidado de cada relación."
          />
        }
      />
      <BottomPanelComponent
        upperText="Sigamos construyendo"
        mainText="De las ideas a lo que hacemos juntos"
        supportingParagraph="El siguiente paso también se construye en comunidad."
        buttonText="Nuestros principios"
        buttonHref="/nosotros/principios"
      />
    </section>
  );
}
