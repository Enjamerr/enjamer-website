import ButtonComponent from '../common/ButtonComponent/ButtonComponent';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent.jsx';
import useClientsReveal from './hooks/useClientsReveal';
import { CLIENTS } from './utils/clients.js';
import './ClientsComponent.css';

function ClientsComponent() {
  const { sectionRef } = useClientsReveal();

  return (
    <section ref={sectionRef} className="clients-section" aria-label="Clientes">
      <div className="clients-inner">
        <div className="clients-layout">
          <div className="clients-cards">
            {CLIENTS.map((client) => {
              const { Icon } = client;
              return (
                <article key={client.id} className="client-card">
                  <span className="client-card-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="client-card-text">
                    <h3 className="client-card-title">{client.title}</h3>
                    <p className="client-card-desc">{client.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="clients-text">
            <TextContentComponent
              upperText="Un lugar para tu idea"
              mainText="¿Y tú qué clase de cliente eres?"
              htmlTag="h2"
              fontFamily="Bodoni"
              supportingParagraph="Un gran emprendedor sabe que las grandes ideas comienzan con una chispa."
              paragraphPosition="bottom"
            />
            <ButtonComponent text="Construyamos juntos lo que viene" to="/nosotros" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsComponent;
