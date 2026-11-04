import TextContentComponent from '../../../common/TextContentComponent/TextContentComponent.jsx';
import BottomPanelComponent from '../../../common/BottonPanelComponent/BottonPanelComponent.jsx';
import './OurNameComponent.css';

export default function OurNameComponent() {
  return (
    <section className="our-page name-page" aria-labelledby="name-title">
      <header className="our-page__heading">
        <TextContentComponent
          upperText="Nuestro nombre"
          mainText="Un enjambre de capacidades"
          htmlTag="h1"
          mainId="name-title"
          supportingParagraph="Personas distintas que se organizan, aprenden y construyen juntas algo que ninguna lograría sola."
        />
      </header>
      <div className="name-page__story">
        <div>
          <h2>Enjambre + Builder</h2>
          <p>
            Enjamer nace de una fusión de palabras alusivas a la construcción colectiva: varias
            personas uniendo sus habilidades, conocimientos y capacidades para crear algo más
            grande.
          </p>
          <p>
            Desde su origen, fue pensada como una empresa tecnológica capaz de crecer más allá de
            sus fundadores, incorporar nuevas personas y seguir evolucionando. Cada integrante
            aporta al crecimiento del grupo.
          </p>
          <p>
            La colaboración y el aprendizaje continuo son nuestro núcleo. Todos podemos enseñar y
            aprender, sin importar la experiencia, el cargo o la trayectoria.
          </p>
        </div>
        <figure>
          <img
            src="/favicon.svg"
            alt="Imagotipo oficial de Enjamer, compuesto por el nombre y tres hexágonos unidos"
          />
          <figcaption>
            Tres hexágonos
            <p>Cliente, desarrollador y ansias de crecimiento</p>
          </figcaption>
        </figure>
      </div>
      <BottomPanelComponent
        upperText="Nuestra esencia"
        mainText="Cada persona aporta al conjunto"
        supportingParagraph="Así llevamos la colaboración y el aprendizaje a nuestra manera de trabajar."
        buttonText="Conoce nuestros principios"
        buttonHref="/nosotros/principios"
      />
    </section>
  );
}
