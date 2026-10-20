import ClientsComponent from './components/ClientsComponent/ClientsComponent.jsx';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HowWeWorkComponent from './components/HowWeWorkComponent/HowWeWorkComponent.jsx';
import Navbar from './components/NavbarComponent/NavbarComponent.jsx';
import Roadmap from './components/RoadmapComponent/RoadmapComponent.jsx';
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
      <Roadmap />
      <HowWeWorkComponent />
      <FooterComponent />
    </>
  );
}

export default App;
