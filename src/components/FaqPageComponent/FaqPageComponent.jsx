import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Compass } from 'lucide-react';
import { AppPresentationContext } from '../../app/providers/AppPresentationContext.js';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent.jsx';
import ButtonComponent from '../common/ButtonComponent/ButtonComponent.jsx';
import FaqItemComponent from './utils/components/FaqItemComponent/FaqItemComponent.jsx';
import { getFaqData } from './utils/getFaqData.js';
import { normalizeSearch } from './utils/normalizeSearch.js';
import { navigateFaqQuestions } from './utils/navigateFaqQuestions.js';
import './FaqPageComponent.css';

export default function FaqPageComponent() {
  const revealNavigation = useContext(AppPresentationContext);
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [faqState, setFaqState] = useState({ items: [], loading: true, usedFallback: false });
  const searchRef = useRef(null);
  const items = faqState.items.filter((item) =>
    normalizeSearch(`${item.question} ${item.answer}`).includes(normalizeSearch(query)),
  );

  useLayoutEffect(() => {
    revealNavigation();
  }, [revealNavigation]);
  useEffect(() => {
    let active = true;
    getFaqData().then((result) => {
      if (active) {
        setFaqState({ ...result, loading: false });
      }
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Preguntas frecuentes · Enjamer';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="faq-page" id="contenido">
      <div className="faq-page__backdrop" aria-hidden="true" />
      <header className="faq-page__intro faq-page__wrap">
        <TextContentComponent
          upperText="Preguntas frecuentes"
          mainText="Preguntar también es parte de construir"
          htmlTag="h1"
          supportingParagraph="Respuestas claras para dar el primer paso. Busca una duda o explora las preguntas más frecuentes."
        />
      </header>
      <section className="faq-page__layout faq-page__wrap" aria-label="Preguntas y respuestas">
        <aside className="faq-page__aside" aria-labelledby="faq-guidance-title">
          <div className="faq-page__icon">
            <Compass aria-hidden="true" />
          </div>
          <h2 id="faq-guidance-title">No tienes que tener todas las respuestas</h2>
          <p>Si tu pregunta es diferente, empecemos por una escucha activa.</p>
          <ButtonComponent text="Pregúntanos" to="/contacto" />
        </aside>
        <div className="faq-page__questions" aria-busy={faqState.loading}>
          <label className="faq-page__search-label" htmlFor="faq-search">
            ¿Qué te gustaría saber?
          </label>
          <div className="faq-page__search">
            <span aria-hidden="true">⌕</span>
            <input
              ref={searchRef}
              id="faq-search"
              type="search"
              placeholder="Busca: tiempos, propuesta, soporte…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <p className="faq-page__count" role="status" aria-atomic="true">
            {faqState.loading
              ? 'Cargando preguntas…'
              : `${items.length} ${items.length === 1 ? 'respuesta' : 'respuestas'}${query ? ' para tu búsqueda' : ''}`}
          </p>
          {faqState.usedFallback && (
            <p className="faq-page__notice" role="status">
              No pudimos actualizar las preguntas. Puedes consultar la información disponible.
            </p>
          )}
          {items.map((item, index) => (
            <FaqItemComponent
              key={item.id}
              item={item}
              expanded={expandedId === item.id}
              onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
              onKeyDown={(event) => navigateFaqQuestions(event, index, items)}
            />
          ))}
          {!faqState.loading && !items.length && (
            <div className="faq-page__empty">
              <h2>No encontramos esa pregunta.</h2>
              <p>Prueba con otra palabra o cuéntanos tu duda.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  searchRef.current?.focus();
                }}
              >
                Ver todas las preguntas
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
