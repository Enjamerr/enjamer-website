import ClientsComponent from './components/ClientsComponent/ClientsComponent.jsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Navbar from './components/Navbar/index.js';
import ServicesSection from './components/ServicesComponent/ServicesSection';

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
      <main id="contenido" />
    </>
  );
}

export default App;
