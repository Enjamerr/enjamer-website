import { Route, Routes } from 'react-router-dom';
import ContactPageComponent from './components/ContactPageComponent/ContactPageComponent.jsx';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';
import HomePageComponent from './components/HomePageComponent/HomePageComponent.jsx';
import HowWeWorkPageComponent from './components/HowWeWorkComponent/HowWeWorkPageComponent.jsx';
import NotFoundPageComponent from './components/NotFoundPageComponent/NotFoundPageComponent.jsx';
import AppPresentationProvider from './app/providers/AppPresentationProvider.jsx';
import ScrollToTop from './app/ScrollToTop.jsx';
import MainLayout from './app/MainLayout.jsx';
import './App.css';

function App() {
  return (
    <AppPresentationProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/contacto" element={<ContactPageComponent />} />
          <Route path="/como-trabajamos" element={<HowWeWorkPageComponent />} />
        </Route>
        <Route path="*" element={<NotFoundPageComponent />} />
      </Routes>
      <FooterComponent />
    </AppPresentationProvider>
  );
}

export default App;
