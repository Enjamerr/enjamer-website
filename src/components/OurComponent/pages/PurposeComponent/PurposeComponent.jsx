import { Compass, Telescope } from 'lucide-react';
import TextContentComponent from '../../../common/TextContentComponent/TextContentComponent.jsx';
import BottomPanelComponent from '../../../common/BottonPanelComponent/BottonPanelComponent.jsx';
import './PurposeComponent.css';

export default function PurposeComponent() {
  return (
    <section className="our-page purpose-page" aria-labelledby="purpose-title">
      <header className="our-page__heading">
        <TextContentComponent
          upperText="Nuestro propósito"
          mainText="Construir hoy, crecer juntos"
          htmlTag="h1"
          mainId="purpose-title"
          supportingParagraph="Transformamos necesidades reales en soluciones útiles, con el conocimiento y la confianza de una comunidad."
        />
      </header>
      <div className="purpose-page__sections">
        <article>
          <Compass aria-hidden="true" />
          <span className="purpose-page__number">Lo que hacemos</span>
          <h2>Misión</h2>
          <p>
            En Enjamer construimos soluciones tecnológicas de calidad a partir de las necesidades
            reales de cada cliente. Nos distingue una relación cercana, humilde y transparente:
            explicamos con claridad, brindamos soporte responsable y acompañamos tanto los logros
            como las dificultades. Hacemos que cada cliente se sienta parte de Enjamer, construyendo
            confianza y creciendo juntos.
          </p>
        </article>
        <article>
          <Telescope aria-hidden="true" />
          <span className="purpose-page__number">Hacia dónde vamos</span>
          <h2>Visión</h2>
          <p>
            Ser una compañía tecnológica reconocida por la calidad de sus soluciones, la cercanía
            con sus clientes y su compromiso con el aprendizaje continuo. Aspiramos a crecer junto a
            nuestro equipo, clientes y aliados, construyendo relaciones de confianza y una cultura
            que cuestione, investigue y comparta el conocimiento. Evolucionamos juntos con humildad,
            curiosidad y el propósito de transformar necesidades reales en soluciones útiles.
          </p>
        </article>
      </div>
      <BottomPanelComponent
        upperText="Lo que nos mueve"
        mainText="Nuestro propósito empieza con las personas"
        supportingParagraph="Conoce los valores que guían nuestra forma de construir y aprender juntos."
        buttonText="Explora nuestros valores"
        buttonHref="/nosotros/valores"
      />
    </section>
  );
}
