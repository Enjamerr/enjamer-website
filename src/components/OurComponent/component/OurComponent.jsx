import TextContentComponent from '../../common/TextContentComponent/TextContentComponent.jsx';
import './OurComponent.css';

export default function OurComponent() {
  return (
    <section className="our-intro" aria-labelledby="our-title">
      <TextContentComponent
        upperText="Somos Enjamer"
        mainText="Nadie construye en soledad"
        mainId="our-title"
        htmlTag="h1"
        supportingParagraph="Somos una empresa tecnológica colombiana. Nos une la convicción de que las capacidades compartidas pueden transformar necesidades reales, generar un impacto positivo en las personas y construir una comunidad que crece y aprende en conjunto."
      />
    </section>
  );
}
