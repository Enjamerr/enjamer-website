import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_CTA, NAV_LINKS } from './utils/navLinks.js';
import './Navbar.css';

function trackGlow(event) {
  const link = event.currentTarget;
  const rect = link.getBoundingClientRect();
  link.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  link.style.setProperty('--my', `${event.clientY - rect.top}px`);
}

function GlowLabel({ link }) {
  return <span className="glow-label">{link.label}</span>;
}

function DesktopNav({ links }) {
  return (
    <nav className="desktop-nav" aria-label="Navegación principal">
      {links.map((link) => {
        return (
          <NavLink
            key={link.id}
            className={({ isActive }) => {
              if (isActive) {
                return 'glow-link active';
              }
              return 'glow-link';
            }}
            to={link.to}
            end={link.to === '/'}
            onMouseMove={trackGlow}
          >
            <GlowLabel link={link} />
          </NavLink>
        );
      })}
    </nav>
  );
}

function MobileMenu({ links, cta, open, onNavigate }) {
  return (
    <div className="mobile-menu" data-open={open} inert={!open}>
      <div className="brand drawer-brand">
        <img className="brand__imagotipo" src="/imagotipo.svg" alt="Enjamer" />
      </div>
      <nav aria-label="Navegación móvil">
        {links.map((link) => {
          return (
            <NavLink
              key={link.id}
              className={({ isActive }) => {
                if (isActive) {
                  return 'active';
                }
                return '';
              }}
              to={link.to}
              end={link.to === '/'}
              onClick={onNavigate}
            >
              <TabIcon link={link} />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
        <Link className="btn primary mobile-cta" to={cta.to} onClick={onNavigate}>
          {cta.label}
        </Link>
      </nav>
    </div>
  );
}

function TabIcon({ link }) {
  const Icon = link.icon;
  return <Icon className="drawer-item__icon" aria-hidden="true" />;
}

function Navbar({ links = NAV_LINKS, cta = NAV_CTA, brandTo = '/' }) {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to={brandTo} aria-label="Enjamer, inicio">
            <img className="brand__imagotipo" src="/imagotipo.svg" alt="" />
          </Link>
          <DesktopNav links={links} />
          <Link className="btn primary header-cta" to={cta.to}>
            {cta.label}
          </Link>
          <button
            type="button"
            className="mobile-toggle"
            aria-expanded={open}
            aria-controls="navbar-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => {
              setOpen((value) => !value);
            }}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div id="navbar-menu">
        <MobileMenu links={links} cta={cta} open={open} onNavigate={close} />
      </div>
      {open ? (
        <button type="button" className="menu-scrim" aria-label="Cerrar menú" onClick={close} />
      ) : null}
    </>
  );
}

export default Navbar;
