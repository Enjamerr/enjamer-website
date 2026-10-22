import TextContentComponent from '../../components/common/TextContentComponent/TextContentComponent.jsx';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us" aria-label="Nosotros">
      <div className="about-us-inner">
        <TextContentComponent
          upperText="Somos Enjamer"
          mainText="Nadie construye en soledad"
          htmlTag="h1"
          fontFamily="Cinzel"
          supportingParagraph="Somos una empresa tecnológica colombiana. Nos une la convicción de que las capacidades compartidas pueden transformar necesidades reales, generar un impacto positivo en las personas y construir una comunidad que crece y aprende en conjunto."
          paragraphPosition="bottom"
        />
      </div>
    </section>
  );
}

export default AboutUs;
