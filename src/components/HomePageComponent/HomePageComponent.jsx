import { useContext } from 'react';
import { AppPresentationContext } from '../../app/providers/AppPresentationContext.js';
import HeaderComponent from '../HeaderComponent/HeaderComponent.jsx';
import ServicesSection from '../ServicesComponent/ServicesSection.jsx';
import ClientsComponent from '../ClientsComponent/ClientsComponent.jsx';
import Roadmap from '../RoadmapComponent/RoadmapComponent.jsx';
import HowWeWorkComponent from '../HowWeWorkComponent/HowWeWorkComponent.jsx';
import { homeVideoState } from './utils/homeVideoState.js';
import './HomePageComponent.css';

export default function HomePageComponent() {
  const revealNavigation = useContext(AppPresentationContext);

  return (
    <>
      <HeaderComponent
        entranceCompleted={homeVideoState.entranceCompleted}
        finalFrame={homeVideoState.finalFrame}
        onReveal={revealNavigation}
      />
      <div className="services-clients-transition">
        <ServicesSection />
        <ClientsComponent />
      </div>
      <Roadmap />
      <HowWeWorkComponent />
    </>
  );
}
