import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavbarComponent/NavbarComponent.jsx';
import FooterComponent from '../components/FooterComponent/FooterComponent.jsx';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p role="status">Cargando página…</p>}>
        <Outlet />
      </Suspense>
      <FooterComponent />
    </>
  );
}
import { Suspense } from 'react';
