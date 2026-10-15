import { Blocks, Lightbulb, SlidersHorizontal, Users } from 'lucide-react';
import TextContent from '../common/TextContent/TextContent.jsx';
import useClientsReveal from './hooks/useClientsReveal';
import './ClientsComponent.css';

const CLIENTS = [
  {
    id: 'idea',
    title: 'Personas con una idea',
    description: 'Orientación para convertir una necesidad en un camino posible.',
    Icon: Lightbulb,
  },
  {
    id: 'startups',
    title: 'Startups y organizaciones',
    description: 'Soluciones para tú procesos y su crecimiento como equipo o independiente',
    Icon: Blocks,
  },
  {
    id: 'equipos',
    title: 'Equipos tecnológicos',
    description: 'Capacidades que se suman al conocimiento de tu equipo.',
    Icon: Users,
  },
  {
    id: 'evolucion',
    title: 'Productos en evolución',
    description: 'Soporte y mejoras para lo que ya has construido.',
    Icon: SlidersHorizontal,
  },
];

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
            <TextContent
              upperText="Un lugar para tu idea"
              mainText="¿Y tú qué clase de cliente eres?"
              htmlTag="h2"
              fontFamily="Bodoni"
              supportingParagraph="Un gran emprendedor sabe que las grandes ideas comienzan con una chispa."
              paragraphPosition="bottom"
            />
            <a className="clients-cta" href="/nosotros">
              Construyamos juntos lo que viene
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsComponent;
