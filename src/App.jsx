import ClientsComponent from './components/ClientsComponent/ClientsComponent.jsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Navbar from './components/NavbarComponent/NavbarComponent.jsx';
import Roadmap from './components/RoadmapComponent/Roadmap.jsx';
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
    </>
  );
}

export default App;
