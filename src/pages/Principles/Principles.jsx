import RoadmapComponent from '../../components/common/RoadmapComponent/RoadmapComponent.jsx';
import './Principles.css';

const PRINCIPLES = [
  {
    id: 'colaboracion',
    number: '01',
    title: 'Colaboración',
    description: 'Construimos soluciones con las personas.',
  },
  {
    id: 'disciplina',
    number: '02',
    title: 'Disciplina',
    description: 'Cumplimos compromisos y asumimos los resultados.',
  },
  {
    id: 'inconformismo',
    number: '03',
    title: 'Inconformismo constructivo',
    description: 'Investigamos y cuestionamos para mejorar.',
  },
  {
    id: 'acompanamiento',
    number: '04',
    title: 'Acompañamiento',
    description: 'Explicamos con claridad y apoyamos en las dificultades.',
  },
  {
    id: 'ambicion',
    number: '05',
    title: 'Ambición responsable',
    description: 'Crecemos sin perder la cercanía ni la humildad.',
  },
];

function Principles() {
  return (
    <section className="principles" aria-label="Principios">
      <div className="principles-inner">
        <RoadmapComponent
          sectionUpperText="Cómo lo llevamos a la práctica"
          sectionTitle="Nuestros principios"
          sectionHtmlTag="h1"
          sectionFontFamily="Cinzel"
          items={PRINCIPLES}
        />
      </div>
    </section>
  );
}

export default Principles;
