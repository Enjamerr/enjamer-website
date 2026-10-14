const COPY = {
  servicios: {
    title: 'Servicios',
    text: 'Soluciones a tu medida: software, SaaS, orientación, capacidad y soporte.',
  },
  'como-trabajamos': {
    title: 'Cómo trabajamos',
    text: 'Escuchamos, definimos juntos, construimos y acompañamos.',
  },
  nosotros: {
    title: 'Nosotros',
    text: 'Tecnología construida en comunidad, desde Colombia.',
  },
  'preguntas-frecuentes': {
    title: 'Preguntas frecuentes',
    text: 'Pronto: respuestas a las dudas más comunes.',
  },
  contacto: {
    title: 'Cuéntanos qué necesitas',
    text: 'El siguiente paso lo damos juntos: escríbenos tu idea.',
  },
};

function Stub({ page }) {
  const copy = COPY[page] ?? { title: page, text: '' };
  return (
    <section>
      <h1>{copy.title}</h1>
      <p>{copy.text}</p>
    </section>
  );
}

export default Stub;
