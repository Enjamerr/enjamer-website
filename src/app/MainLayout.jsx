import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavbarComponent/NavbarComponent.jsx';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
