import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <nav className="bg-blue-600 text-white p-4 flex flex-wrap gap-4 text-sm sm:text-base">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'underline font-bold' : 'hover:underline'}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'underline font-bold' : 'hover:underline'}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline font-bold' : 'hover:underline'}>
          Contact
        </NavLink>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}