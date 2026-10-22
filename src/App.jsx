import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent/NavbarComponent.jsx';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HowWeWorkComponent from './components/HowWeWorkComponent/HowWeWorkComponent.jsx';
import Roadmap from './components/RoadmapComponent/RoadmapComponent.jsx';
import ServicesSection from './components/ServicesComponent/ServicesSection';
import ClientsComponent from './components/ClientsComponent/ClientsComponent.jsx';
import ServicesPageComponent from './components/ServicesPageComponent/ServicesPageComponent';

import './App.css';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      return;
    }
    window.scrollTo(0, 0);
  }, [location.key, location.hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderComponent />
              <div className="services-clients-transition">
                <ServicesSection />
                <ClientsComponent />
              </div>
              <Roadmap />
              <HowWeWorkComponent />
              <FooterComponent />
            </>
          }
        />
        <Route path="/servicios" element={<ServicesPageComponent />} />
      </Routes>
    </>
  );
}

export default App;
