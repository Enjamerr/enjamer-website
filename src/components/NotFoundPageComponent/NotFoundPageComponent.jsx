import { useEffect } from 'react';
import ButtonComponent from '../common/ButtonComponent/ButtonComponent';
import TextContentComponent from '../common/TextContentComponent/TextContentComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import './NotFoundPageComponent.css';

export default function NotFoundPageComponent() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Enjamer - Página no encontrada';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <main className="not-found-page" id="contenido">
        <div className="not-found-page__inner">
          <TextContentComponent
            upperText="Error 404"
            mainText="Esta página no existe"
            htmlTag="h1"
            mainId="not-found-title"
            fontFamily="Cinzel"
            supportingParagraph="Puede que el enlace haya cambiado o que la página todavía no esté disponible."
            paragraphPosition="bottom"
          />
          <ButtonComponent text="Volver al inicio" to="/" />
        </div>
      </main>
      <FooterComponent />
    </>
  );
}
