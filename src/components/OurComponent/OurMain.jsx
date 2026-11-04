import { useContext, useEffect, useLayoutEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AppPresentationContext } from '../../app/providers/AppPresentationContext.js';
import OurComponent from './component/OurComponent.jsx';
import PurposeComponent from './pages/PurposeComponent/PurposeComponent.jsx';
import OurNameComponent from './pages/OurNameComponent/OurNameComponent.jsx';
import ValuesComponent from './pages/ValuesComponent/ValuesComponent.jsx';
import PrinciplesComponent from './pages/PrinciplesComponent/PrinciplesComponent.jsx';
import './OurMain.css';

const titles = {
  proposito: 'Propósito',
  'nuestro-nombre': 'Nuestro nombre',
  valores: 'Valores',
  principios: 'Principios',
};

export default function OurMain() {
  const revealNavigation = useContext(AppPresentationContext);
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    revealNavigation();
  }, [revealNavigation]);
  useEffect(() => {
    const previous = document.title;
    document.title = `${titles[pathname.split('/').filter(Boolean)[1]] || 'Nosotros'} | Enjamer`;
    return () => {
      document.title = previous;
    };
  }, [pathname]);

  return (
    <main className="our-main" id="contenido">
      <div className="our-main__background" aria-hidden="true" />
      <div className="our-main__view" key={pathname}>
        <Routes>
          <Route index element={<OurComponent />} />
          <Route path="proposito" element={<PurposeComponent />} />
          <Route path="nuestro-nombre" element={<OurNameComponent />} />
          <Route path="valores" element={<ValuesComponent />} />
          <Route path="principios" element={<PrinciplesComponent />} />
          <Route path="*" element={<Navigate to="/nosotros" replace />} />
        </Routes>
      </div>
    </main>
  );
}
