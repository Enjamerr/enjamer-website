import { Routes, Route } from 'react-router-dom';
import ContactPageComponent from './components/ContactPageComponent/ContactPageComponent';
import HomePageComponent from './components/HomePageComponent/HomePageComponent.jsx';
import Navbar from './components/NavbarComponent/NavbarComponent.jsx';
import NotFoundPageComponent from './components/NotFoundPageComponent/NotFoundPageComponent.jsx';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/contacto" element={<ContactPageComponent />} />
        <Route path="*" element={<NotFoundPageComponent />} />
      </Routes>
    </>
  );
}

export default App;
