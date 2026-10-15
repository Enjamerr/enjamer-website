import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_CTA, NAV_LINKS, NAV_PRIMARY_IDS } from './navLinks.js';
import './Navbar.css';

function DesktopNav({ links }) {
  return (
    <nav className="desktop-nav" aria-label="Navegación principal">
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
          >
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
}

function MobileMenu({ links, cta, open, onNavigate }) {
  return (
    <div className="mobile-menu" data-open={open} inert={!open}>
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
              {link.label}
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

function BottomTabs({ links }) {
  const primary = links.filter((link) => NAV_PRIMARY_IDS.includes(link.id));
  return (
    <nav className="bottom-tabs" aria-label="Navegación principal móvil">
      {primary.map((link) => {
        return (
          <NavLink
            key={link.id}
            className={({ isActive }) => {
              if (isActive) {
                return 'bottom-tab active';
              }
              return 'bottom-tab';
            }}
            to={link.to}
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
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
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to={brandTo} aria-label="Enjamer, inicio">
            <span aria-hidden="true">ENJ</span>
            <img
              className="brand__logo"
              src="/brand/isotipo-oscuro.png"
              alt=""
              width="34"
              height="34"
            />
            <span aria-hidden="true">MER</span>
            <span className="brand__sr">Enjamer</span>
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
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <div id="navbar-menu">
        <MobileMenu links={links} cta={cta} open={open} onNavigate={close} />
      </div>
      {open ? (
        <button type="button" className="menu-scrim" aria-label="Cerrar menú" onClick={close} />
      ) : null}

      <BottomTabs links={links} />
    </>
  );
}

export default Navbar;
