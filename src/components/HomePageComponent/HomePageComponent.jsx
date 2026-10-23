import ClientsComponent from '../ClientsComponent/ClientsComponent.jsx';
import FooterComponent from '../FooterComponent/FooterComponent.jsx';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import HowWeWorkComponent from '../HowWeWorkComponent/HowWeWorkComponent.jsx';
import Roadmap from '../RoadmapComponent/RoadmapComponent.jsx';
import ServicesSection from '../ServicesComponent/ServicesSection';
import './HomePageComponent.css';

export default function HomePageComponent() {
  return (
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
  );
}
