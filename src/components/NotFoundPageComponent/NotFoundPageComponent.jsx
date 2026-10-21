import { useEffect } from 'react';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent.jsx';
import ButtonComponent from '../common/ButtonComponent/ButtonComponent.jsx';
import useNotFoundAnimation from './hooks/useNotFoundAnimation.js';
import './NotFoundPageComponent.css';

export default function NotFoundPageComponent() {
  const pageRef = useNotFoundAnimation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Enjamer - 404';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="not-found-page" ref={pageRef} aria-labelledby="not-found-title">
      <img className="not-found-page__logo" src="/imagotipoClaro.svg" alt="Enjamer" />
      <TextContentComponent
        upperText="404"
        mainText="Página no encontrada"
        htmlTag="h1"
        mainId="not-found-title"
        supportingParagraph="La dirección que buscas no corresponde a una página disponible."
      />
      <ButtonComponent text="Volver al inicio" to="/" />
    </main>
  );
}
