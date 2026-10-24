import { useContext, useEffect, useLayoutEffect } from 'react';
import { AppPresentationContext } from '../../app/providers/AppPresentationContext.js';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent.jsx';
import ButtonComponent from '../common/ButtonComponent/ButtonComponent.jsx';
import './NotFoundPageComponent.css';

export default function NotFoundPageComponent() {
  const revealNavigation = useContext(AppPresentationContext);

  useLayoutEffect(() => {
    revealNavigation();
  }, [revealNavigation]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Enjamer - 404';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="not-found-page">
      <TextContentComponent
        upperText="404"
        mainText="Página no encontrada"
        htmlTag="h1"
        supportingParagraph="La dirección que buscas no corresponde a una página disponible."
      />
      <ButtonComponent text="Volver al inicio" to="/" />
    </main>
  );
}
