import RoadmapComponent from '../../components/common/RoadmapComponent/RoadmapComponent.jsx';
import './Values.css';

const VALUES = [
  { id: 'comunidad', title: 'Comunidad', description: 'Crecemos juntos y fortalecemos al grupo.' },
  {
    id: 'conocimiento',
    title: 'Conocimiento',
    description: 'Todos enseñamos, aprendemos y compartimos.',
  },
  {
    id: 'humildad',
    title: 'Humildad',
    description: 'Reconocemos nuestros límites y escuchamos a los demás.',
  },
  {
    id: 'empatia',
    title: 'Empatía',
    description: 'Comprendemos y acompañamos a clientes y compañeros.',
  },
  {
    id: 'progreso',
    title: 'Progreso',
    description: 'Mejoramos con práctica, curiosidad y adaptación.',
  },
  {
    id: 'innovacion',
    title: 'Innovación',
    description: 'Creamos soluciones que transforman necesidades reales.',
  },
  {
    id: 'transparencia',
    title: 'Transparencia',
    description: 'Explicamos con claridad y actuamos con honestidad.',
  },
  {
    id: 'responsabilidad',
    title: 'Responsabilidad',
    description: 'Asumimos nuestros compromisos y sus resultados.',
  },
  {
    id: 'excelencia',
    title: 'Excelencia',
    description: 'Buscamos la calidad en cada entrega y relación.',
  },
  {
    id: 'sostenibilidad',
    title: 'Sostenibilidad',
    description: 'Construimos pensando en el largo plazo y el entorno.',
  },
  {
    id: 'inclusion',
    title: 'Inclusión',
    description: 'Valoramos las distintas capacidades y trayectorias.',
  },
];

function Values() {
  return (
    <section className="values" aria-label="Valores">
      <div className="values-inner">
        <RoadmapComponent
          sectionUpperText="Lo que nos importa"
          sectionTitle="Nuestros valores"
          sectionHtmlTag="h1"
          sectionFontFamily="Cinzel"
          items={VALUES}
        />
      </div>
    </section>
  );
}

export default Values;
