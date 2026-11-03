import { Route, Routes, Link } from 'react-router-dom';
import ContactPageComponent from './components/ContactPageComponent/ContactPageComponent.jsx';
import HomePageComponent from './components/HomePageComponent/HomePageComponent.jsx';
import HowWeWorkPageComponent from './components/HowWeWorkComponent/HowWeWorkPage/HowWeWorkPageComponent.jsx';
import AppPresentationProvider from './app/providers/AppPresentationProvider.jsx';
import ScrollToTop from './app/ScrollToTop.jsx';
import MainLayout from './app/MainLayout.jsx';
import FaqPageComponent from './components/FaqPageComponent/FaqPageComponent.jsx';

import ServicesPageComponent from './components/ServicesComponent/ServicesPage/ServicesPageComponent.jsx';

import './App.css';

function App() {
  return (
    <AppPresentationProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePageComponent />} />
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
                <Link to="/">Volver</Link>
              </center>
            </>
          }
        />
      </Routes>
    </AppPresentationProvider>
  );
}

export default App;
