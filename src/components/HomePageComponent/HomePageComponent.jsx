import { useContext, useEffect } from 'react';
import { AppPresentationContext } from '../../app/providers/AppPresentationContext.js';
import HeaderComponent from '../HeaderComponent/HeaderComponent.jsx';
import ServicesSection from '../ServicesComponent/HomePage/ServicesSection.jsx';
import ClientsComponent from '../ClientsComponent/ClientsComponent.jsx';
import Roadmap from '../RoadmapComponent/RoadmapComponent.jsx';
import HowWeWorkComponent from '../HowWeWorkComponent/HomePage/HowWeWorkComponent.jsx';
import { homeVideoState } from './utils/homeVideoState.js';
import './HomePageComponent.css';

export default function HomePageComponent() {
  const revealNavigation = useContext(AppPresentationContext);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Inicio';

    return () => {
      document.title = previousTitle;
    };
  }, []);

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
