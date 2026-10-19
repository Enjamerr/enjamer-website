import TextContentComponent from '../common/TextContentComponent/TextContentComponent.jsx';
import InfoBlock from './InfoBlock';
import BottomPanel from '../common/BottomPanel/BottomPanel.jsx';
import './HowWeWork.css';

function HowWeWork() {
  return (
    <section className="how-we-work" aria-label="Cómo trabajamos">
      <div className="how-we-work-inner">
        <TextContentComponent
          upperText="Lo que nos mueve"
          mainText="Tan importante como construir, es el cómo lo hacemos."
          htmlTag="h2"
          fontFamily="Cinzel"
          paragraphPosition="bottom"
        />

        <div className="info-blocks">
          <InfoBlock
            title="Familia"
            description="No importa si eres un estudiante de bachillerato, tampoco importa si eres el CEO de una multinacional. Te haremos sentir como mereces. Te haremos sentir especial."
          />
          <InfoBlock
            title="Conocimiento compartido"
            description="Siempre hay algo que enseñar, aprender y mejorar juntos."
          />
          <InfoBlock
            title="Cercanía con responsabilidad"
            description="Escuchamos y acompañamos tanto los logros como las dificultades."
          />
        </div>

        <BottomPanel
          upperText="El siguiente paso lo damos juntos"
          mainText="Las buenas soluciones empiezan con una conversación."
          supportingParagraph="Cuéntanos tu idea, tu necesidad o ese proceso que quieres mejorar. Empecemos por entenderlo."
          buttonText="Cuéntanos qué necesitas"
          buttonHref="/contacto"
        />
      </div>
    </section>
  );
}

export default HowWeWork;
