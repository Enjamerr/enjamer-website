import ClientsComponent from './components/ClientsComponent/ClientsComponent.jsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ServicesSection from './components/ServicesComponent/ServicesSection';

import './App.css';

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="services-clients-transition">
        <ServicesSection />
        <ClientsComponent />
      </div>
    </>
  );
}

export default App;
