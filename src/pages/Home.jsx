function Home() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src="/brand/isotipo-oscuro.png" width="170" height="179" alt="Isotipo de Enjamer" />
        </div>
        <div>
          <h1>Enjamer</h1>
          <p>Tecnología construida en comunidad.</p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Servicios</h2>
          <p>Soluciones a tu medida.</p>
        </div>
        <div id="social">
          <h2>Comunidad</h2>
          <p>Creamos juntos.</p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default Home;
