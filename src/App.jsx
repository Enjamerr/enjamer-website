import { Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';
import Navbar from './components/NavbarComponent/NavbarComponent.jsx';
import HomePageComponent from './components/HomePageComponent/HomePageComponent.jsx';
import HowWeWorkPageComponent from './components/HowWeWorkComponent/HowWeWorkPageComponent.jsx';
import NotFoundPageComponent from './components/NotFoundPageComponent/NotFoundPageComponent.jsx';
import AppPresentationProvider from './app/providers/AppPresentationProvider.jsx';
import ScrollToTop from './app/ScrollToTop.jsx';

function App() {
  return (
    <AppPresentationProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/como-trabajamos" element={<HowWeWorkPageComponent />} />
        <Route path="*" element={<NotFoundPageComponent />} />
      </Routes>
      <FooterComponent />
    </AppPresentationProvider>
  );
}

export default App;
