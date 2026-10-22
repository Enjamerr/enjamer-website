import TextContentComponent from '../../components/common/TextContentComponent/TextContentComponent.jsx';
import './Purpose.css';

function Purpose() {
  return (
    <section className="purpose" aria-label="Propósito">
      <div className="purpose-inner">
        <TextContentComponent
          upperText="Nuestro propósito"
          mainText="Que la tecnología deje de ser una barrera"
          htmlTag="h1"
          fontFamily="Cinzel"
          supportingParagraph="Escuchar, explicar y construir para transformar necesidades reales en soluciones útiles."
          paragraphPosition="bottom"
        />

        <div className="purpose-blocks">
          <div className="purpose-block">
            <h3 className="purpose-title">Misión</h3>
            <p className="purpose-desc">
              En Enjamer construimos soluciones tecnológicas de calidad a partir de las necesidades
              reales de cada cliente. Nos distingue una relación cercana, humilde y transparente:
              explicamos con claridad, brindamos soporte responsable y acompañamos tanto los logros
              como las dificultades. Hacemos que cada cliente se sienta parte de Enjamer,
              construyendo confianza y creciendo juntos.
            </p>
          </div>
          <div className="purpose-block">
            <h3 className="purpose-title">Visión</h3>
            <p className="purpose-desc">
              Ser una compañía tecnológica reconocida por la calidad de sus soluciones, la cercanía
              con sus clientes y su compromiso con el aprendizaje continuo. Aspiramos a crecer junto
              a nuestro equipo, clientes y aliados, construyendo relaciones de confianza y una
              cultura que cuestione, investigue y comparta el conocimiento. Evolucionamos juntos con
              humildad, curiosidad y el propósito de transformar necesidades reales en soluciones
              útiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Purpose;
