import ButtonComponent from '../ButtonComponent/ButtonComponent';
import TextContentComponent from '../TextContentComponent/TextContentComponent.jsx';
import './BottonPanelComponent.css';

function BottonPanelComponent({
  upperText,
  mainText,
  supportingParagraph,
  buttonText,
  buttonHref,
}) {
  return (
    <section className="bottom-panel" aria-label="Siguiente paso">
      <div className="bottom-panel-inner">
        <main className="principal">
          <TextContentComponent
            upperText={upperText}
            mainText={mainText}
            htmlTag="h2"
            fontFamily="Cinzel"
            supportingParagraph={supportingParagraph}
            paragraphPosition="bottom"
          />
        </main>
        <div className="button_component">
          <ButtonComponent text={buttonText} to={buttonHref} />
        </div>
      </div>
    </section>
  );
}

export default BottonPanelComponent;
