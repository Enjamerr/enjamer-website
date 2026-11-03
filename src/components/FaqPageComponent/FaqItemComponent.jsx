import { ChevronDown } from 'lucide-react';

export default function FaqItemComponent({ item, expanded, onToggle, onKeyDown }) {
  const triggerId = `faq-question-${item.id}`;
  const answerId = `faq-answer-${item.id}`;

  return (
    <div className="faq-page__item" data-expanded={expanded}>
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={expanded}
          aria-controls={answerId}
          onClick={onToggle}
          onKeyDown={onKeyDown}
        >
          <span className="faq-page__question">
            <span className="faq-page__number">{String(item.id + 1).padStart(2, '0')}</span>
            {item.question}
          </span>
          <ChevronDown size={16} aria-hidden="true" />
        </button>
      </h3>
      <div
        className="faq-page__expansion"
        id={answerId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!expanded}
        inert={!expanded}
      >
        <div>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
