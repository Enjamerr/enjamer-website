import ClientsComponent from './components/ClientsComponent/ClientsComponent.jsx';
import Footer from './components/Footer/Footer.jsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HowWeWork from './components/HowWeWork/HowWeWork.jsx';
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
      <HowWeWork />
      <Footer />
    </>
  );
}

export default App;
