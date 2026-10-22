import TextContentComponent from '../../components/common/TextContentComponent/TextContentComponent.jsx';
import './OurName.css';

function OurName() {
  return (
    <section className="our-name" aria-label="Nuestro nombre">
      <div className="our-name-inner">
        <TextContentComponent
          upperText="Nuestro nombre"
          mainText="De un enjambre de ideas, una forma de construir"
          htmlTag="h1"
          fontFamily="Cinzel"
        />

        <div className="our-name-content">
          <div className="our-name-text">
            <p className="our-name-desc">
              Enjamer nace de una idea relacionada con el concepto de enjambre y con la construcción
              colectiva. El nombre representa la idea de que varias personas, conocimientos y
              capacidades pueden unirse para crear algo más grande. Desde su origen, Enjamer fue
              pensada como una empresa tecnológica que pudiera crecer, incorporar nuevas personas y
              continuar evolucionando con el tiempo. Cada integrante aporta al crecimiento del
              grupo. Compartimos el conocimiento, mantenemos viva la curiosidad y crecemos juntos.
              La colaboración y el aprendizaje continuo son el núcleo de la marca.
            </p>
          </div>
          <div className="our-name-visual">
            <svg
              className="isotipo"
              viewBox="378.3 409.5 179.1 166.7"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="enjamer-top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#ffd6e0" />
                </linearGradient>
                <linearGradient id="enjamer-left" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd6e0" />
                  <stop offset="100%" stopColor="#520fb8" />
                </linearGradient>
                <linearGradient id="enjamer-right" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffef26" />
                  <stop offset="100%" stopColor="#e3312d" />
                </linearGradient>
              </defs>
              <path
                d="M452.135,515.344c-2.243-1.207-3.608-3.506-3.563-5.998l.236-12.782-20.289-10.945c-3.578-1.93-7.935-1.894-11.479.095l-32.327,18.143c-3.544,1.989-5.754,5.639-5.824,9.616l-.603,34.499c-.073,4.183,2.232,8.065,5.996,10.096l31.036,16.743c3.578,1.93,7.935,1.894,11.479-.095l32.327-18.143c3.544-1.989,5.754-5.639,5.824-9.616l.428-24.486-13.242-7.127Z"
                fill="url(#enjamer-top)"
              />
              <path
                d="M507.709,427.667l-31.036-16.743c-3.578-1.93-7.935-1.894-11.479.095l-32.327,18.143c-3.544,1.989-5.754,5.639-5.824,9.616l-.603,34.499c-.073,4.183,2.232,8.065,5.996,10.096l16.489,8.895c.301-2.018,1.546-3.834,3.384-4.865l14.339-8.048c1.049-.589,2.244-.9,3.456-.9,1.168,0,2.326.291,3.348.841l13.789,7.422c1.781.959,3.005,2.606,3.413,4.49l16.625-9.33c3.544-1.989,5.754-5.639,5.824-9.616l.603-34.499c.073-4.183-2.232-8.065-5.996-10.096Z"
                fill="url(#enjamer-left)"
              />
              <path
                d="M551.343,502.362l-31.036-16.743c-3.578-1.93-7.935-1.894-11.479.095l-18.065,10.139-.242,13.108c-.043,2.343-1.367,4.526-3.454,5.698l-14.34,8.048c-.691.388-1.445.652-2.225.79l-.427,24.477c-.073,4.183,2.232,8.065,5.996,10.096l31.036,16.743c3.578,1.93,7.935,1.894,11.479-.095l32.327-18.143c3.544-1.989,5.754-5.639,5.824-9.616l.603-34.499c.073-4.183-2.232-8.065-5.996-10.096Z"
                fill="url(#enjamer-right)"
              />
              <path
                d="M467.628,482.68l-13.567,7.614c-1.571.882-2.557,2.53-2.59,4.332l-.262,14.176c-.035,1.9.995,3.661,2.669,4.562l12.982,6.987c1.53.823,3.374.807,4.889-.043l13.567-7.614c1.571-.882,2.557-2.53,2.59-4.332l.262-14.176c.035-1.9-.995-3.661-2.669-4.562l-12.982-6.987c-1.53-.823-3.374-.807-4.889.043Z"
                fill="#0b0d14"
              />
            </svg>
            <p className="our-name-caption">
              Tres hexágonos que representan la unión, el conocimiento compartido y la fuerza de
              crecer juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurName;
