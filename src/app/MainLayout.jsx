import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavbarComponent/NavbarComponent.jsx';
import FooterComponent from '../components/FooterComponent/FooterComponent.jsx';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="app-route-loading" role="status">
            Cargando página…
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <FooterComponent />
    </>
  );
}
