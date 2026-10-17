import TextContent from '../common/TextContent/TextContent.jsx';
import './BottomPanel.css';

function BottomPanel({ upperText, mainText, buttonText, buttonHref }) {
  return (
    <section className="bottom-panel" aria-label="Siguiente paso">
      <div className="bottom-panel-inner">
        <TextContent
          upperText={upperText}
          mainText={mainText}
          htmlTag="h2"
          fontFamily="Cinzel"
          paragraphPosition="bottom"
        />
        <a href={buttonHref} className="bottom-panel-btn btn primary">
          {buttonText}
        </a>
      </div>
    </section>
  );
}

export default BottomPanel;
