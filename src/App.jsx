import { lazy } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent/HomePageComponent.jsx';
import AppPresentationProvider from './app/providers/AppPresentationProvider.jsx';
import ScrollToTop from './app/ScrollToTop.jsx';
import MainLayout from './app/MainLayout.jsx';

import './App.css';

const ContactPageComponent = lazy(
  () => import('./components/ContactPageComponent/ContactPageComponent.jsx'),
);
const HowWeWorkPageComponent = lazy(
  () => import('./components/HowWeWorkComponent/HowWeWorkPage/HowWeWorkPageComponent.jsx'),
);
const ServicesPageComponent = lazy(
  () => import('./components/ServicesComponent/ServicesPage/ServicesPageComponent.jsx'),
);
const FaqPageComponent = lazy(() => import('./components/FaqPageComponent/FaqPageComponent.jsx'));

const OurMain = lazy(() => import('./components/OurComponent/OurMain.jsx'));

function App() {
  return (
    <AppPresentationProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/nosotros/*" element={<OurMain />} />
          <Route path="/contacto" element={<ContactPageComponent />} />
          <Route path="/como-trabajamos" element={<HowWeWorkPageComponent />} />
          <Route path="/servicios" element={<ServicesPageComponent />} />
          <Route path="/preguntas-frecuentes" element={<FaqPageComponent />} />
        </Route>
        <Route
          path="*"
          // Provisional design for a 404 page
          element={
            <>
              <center>
                <p>404 - Página no encontrada</p>
                <Link to="/">Ir a inicio</Link>
              </center>
            </>
          }
        />
      </Routes>
    </AppPresentationProvider>
  );
}

export default App;
