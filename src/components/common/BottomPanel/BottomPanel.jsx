import ButtonComponent from '../ButtonComponent/ButtonComponent';
import TextContentComponent from '../TextContentComponent/TextContentComponent.jsx';
import './BottomPanel.css';

function BottomPanel({ upperText, mainText, supportingParagraph, buttonText, buttonHref }) {
  return (
    <section className="bottom-panel" aria-label="Siguiente paso">
      <div className="bottom-panel-inner">
        <TextContentComponent
          upperText={upperText}
          mainText={mainText}
          htmlTag="h2"
          fontFamily="Cinzel"
          supportingParagraph={supportingParagraph}
          paragraphPosition="bottom"
        />
        <ButtonComponent text={buttonText} to={buttonHref} />
      </div>
    </section>
  );
}

export default BottomPanel;
