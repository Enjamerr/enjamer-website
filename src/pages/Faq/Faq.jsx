import { useMemo, useState } from 'react';
import { Compass, Search } from 'lucide-react';
import ButtonComponent from '../../components/common/ButtonComponent/ButtonComponent';
import TextContentComponent from '../../components/common/TextContentComponent/TextContentComponent.jsx';
import FaqItem from './FaqItem.jsx';
import { FAQ_ITEMS } from './faqItems.js';
import './Faq.css';

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

function Faq() {
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const results = useMemo(() => {
    const term = normalize(query.trim());

    if (!term) {
      return FAQ_ITEMS;
    }

    return FAQ_ITEMS.filter((item) => normalize(`${item.question} ${item.answer}`).includes(term));
  }, [query]);

  return (
    <section className="faq-page" aria-label="Preguntas frecuentes">
      <div className="faq-page__inner">
        <div className="faq-page__header">
          <TextContentComponent
            upperText="Preguntas frecuentes"
            mainText="Preguntar también es parte de construir"
            htmlTag="h1"
            fontFamily="Cinzel"
            supportingParagraph="Respuestas claras para dar el primer paso. Busca una duda o explora las preguntas más frecuentes."
            paragraphPosition="bottom"
          />
        </div>

        <div className="faq-layout">
          <aside className="faq-aside">
            <span className="faq-aside__icon">
              <Compass aria-hidden="true" />
            </span>
            <h2 className="faq-aside__title">No tienes que tener todas las respuestas</h2>
            <p className="faq-aside__text">
              Si tu pregunta es diferente, empecemos por una escucha activa.
            </p>
            <ButtonComponent text="Pregúntanos" to="/contacto" />
          </aside>

          <div className="faq-main">
            <label className="search-label" htmlFor="faq-search">
              ¿Qué te gustaría saber?
            </label>
            <div className="faq-search">
              <span aria-hidden="true">
                <Search />
              </span>
              <input
                id="faq-search"
                type="search"
                placeholder="Busca: tiempos, propuesta, soporte…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <p className="result-count" role="status">
              {results.length} {results.length === 1 ? 'respuesta' : 'respuestas'}
              {query.trim() ? ' para tu búsqueda' : ''}
            </p>

            <div className="faq-list">
              {results.map((item) => (
                <FaqItem
                  key={item.id}
                  number={item.number}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
