import { useId } from 'react';
import { ChevronDown } from 'lucide-react';

function FaqItem({ number, question, answer, isOpen, onToggle }) {
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const contentId = `${baseId}-content`;

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <h3 className="faq-item__heading">
        <button
          type="button"
          id={triggerId}
          className="faq-item__trigger"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
        >
          <span className="faq-item__question">
            <span className="faq-number">{number}</span>
            <span className="faq-item__text">{question}</span>
          </span>
          <ChevronDown className="faq-item__icon" aria-hidden="true" />
        </button>
      </h3>
      <div
        id={contentId}
        className="faq-item__content"
        role="region"
        aria-labelledby={triggerId}
        inert={!isOpen}
      >
        <div className="faq-item__content-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
