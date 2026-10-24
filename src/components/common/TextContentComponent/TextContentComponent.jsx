import './TextContentComponent.css';

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
const fontClasses = {
  Cinzel: 'text-content__main--cinzel',
  'Bodoni Moda': 'text-content__main--bodoni',
  Inter: 'text-content__main--inter',
};

export default function TextContentComponent({
  upperText,
  mainText,
  htmlTag = 'h2',
  fontFamily = 'Cinzel',
  supportingParagraph,
  paragraphPosition = 'bottom',
  mainId,
  animate = false,
}) {
  const MainTag = tags.includes(htmlTag) ? htmlTag : 'h2';
  const position = ['bottom', 'right', 'left'].includes(paragraphPosition)
    ? paragraphPosition
    : 'bottom';
  return (
    <div className={`text-content text-content--${position}`}>
      <div className="text-content__group">
        {upperText && (
          <p className="text-content__upper" data-hero-animate={animate ? '' : undefined}>
            <span></span>
            {upperText}
          </p>
        )}
        <MainTag
          id={mainId}
          className={`text-content__main ${fontClasses[fontFamily] || fontClasses.Cinzel}`}
          data-hero-animate={animate ? '' : undefined}
        >
          {mainText}
        </MainTag>
      </div>
      {supportingParagraph && (
        <p className="text-content__paragraph" data-hero-animate={animate ? '' : undefined}>
          {supportingParagraph}
        </p>
      )}
    </div>
  );
}
