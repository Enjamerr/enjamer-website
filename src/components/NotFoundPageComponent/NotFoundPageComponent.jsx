import { useEffect } from 'react';
import ButtonComponent from '../common/ButtonComponent/ButtonComponent.jsx';
import NotFoundMascot from './NotFoundMascot.jsx';
import useNotFoundAnimation from './hooks/useNotFoundAnimation.js';
import './NotFoundPageComponent.css';

export default function NotFoundPageComponent() {
  const pageRef = useNotFoundAnimation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Enjamer - Página no encontrada';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="not-found-page" id="contenido" aria-labelledby="not-found-title" ref={pageRef}>
      <div className="not-found-page__inner">
        <img className="not-found-page__logo" src="/imagotipoClaro.svg" alt="Enjamer" />

        <div className="not-found-page__content">
          <p className="not-found-page__eyebrow">
            <span aria-hidden="true" />
            Error 404
          </p>
          <h1 className="not-found-page__title" id="not-found-title">
            Esta página no existe
          </h1>
        </div>

        <NotFoundMascot />

        <p className="not-found-page__paragraph">
          Puede que el enlace haya cambiado o que la página todavía no esté disponible.
        </p>

        <div className="not-found-page__cta">
          <ButtonComponent text="Volver al inicio" to="/" />
        </div>
      </div>
    </main>
  );
}
