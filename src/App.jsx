import { Navigate, Route, Routes } from 'react-router-dom';
import ClientsComponent from './components/ClientsComponent/ClientsComponent.jsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Navbar from './components/Navbar/index.js';
import ServicesSection from './components/ServicesComponent/ServicesSection';
import Home from './pages/Home.jsx';
import Stub from './pages/Stub.jsx';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HeaderComponent />
      <div className="services-clients-transition">
        <ServicesSection />
        <ClientsComponent />
      </div>
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Stub page="servicios" />} />
          <Route path="/como-trabajamos" element={<Stub page="como-trabajamos" />} />
          <Route path="/nosotros" element={<Stub page="nosotros" />} />
          <Route path="/preguntas-frecuentes" element={<Stub page="preguntas-frecuentes" />} />
          <Route path="/contacto" element={<Stub page="contacto" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
