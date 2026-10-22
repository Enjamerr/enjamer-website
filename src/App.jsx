import { Route, Routes } from 'react-router-dom';
import ClientsComponent from './components/ClientsComponent/ClientsComponent.jsx';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HowWeWorkComponent from './components/HowWeWorkComponent/HowWeWorkComponent.jsx';
import Navbar from './components/NavbarComponent/NavbarComponent.jsx';
import Roadmap from './components/RoadmapComponent/RoadmapComponent.jsx';
import ServicesSection from './components/ServicesComponent/ServicesSection';
import PageTransition from './components/common/PageTransition/PageTransition.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Faq from './pages/Faq/Faq.jsx';
import OurName from './pages/OurName/OurName.jsx';
import Principles from './pages/Principles/Principles.jsx';
import Purpose from './pages/Purpose/Purpose.jsx';
import Values from './pages/Values/Values.jsx';

import './App.css';

function Home() {
  return (
    <>
      <HeaderComponent />
      <div className="services-clients-transition">
        <ServicesSection />
        <ClientsComponent />
      </div>
      <Roadmap />
      <HowWeWorkComponent />
    </>
  );
}

const page = (element) => <PageTransition>{element}</PageTransition>;

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={page(<Home />)} />
        <Route path="/nosotros" element={page(<AboutUs />)} />
        <Route path="/nosotros/proposito" element={page(<Purpose />)} />
        <Route path="/nosotros/nuestro-nombre" element={page(<OurName />)} />
        <Route path="/nosotros/valores" element={page(<Values />)} />
        <Route path="/nosotros/principios" element={page(<Principles />)} />
        <Route path="/preguntas-frecuentes" element={page(<Faq />)} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
